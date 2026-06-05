import { DegreeLevel } from '@/types/database';

export type TuitionField = 'BUSINESS' | 'ARTS' | 'TECHNOLOGY' | 'SCIENCE';

export const DOMESTIC_TUITION = {
    CERTIFICATE_DIPLOMA: 3500,
    BACHELOR: 6200,
    MASTER: 8500
};

export const INTERNATIONAL_TUITION = {
    CERTIFICATE_DIPLOMA: 9500,
    BACHELOR: 12500,
    MASTER: 18000
};

export const DOMESTIC_DEPOSIT = {
    CERTIFICATE_DIPLOMA: 750,
    BACHELOR: 1250,
    MASTER: 2000
};

export const INTERNATIONAL_DEPOSIT = {
    CERTIFICATE_DIPLOMA: 2500,
    BACHELOR: 3500,
    MASTER: 5000
};

export const EARLY_PAYMENT_DISCOUNT_PERCENT = 0;
export const EARLY_PAYMENT_WINDOW_DAYS = 7;

/**
 * Checks if the current date is within the early payment window (7 days)
 * from the offer creation date.
 */
export function isWithinEarlyPaymentWindow(offerCreatedAt: string): boolean {
    const offerDate = new Date(offerCreatedAt);
    const deadline = new Date(offerDate);
    deadline.setDate(deadline.getDate() + EARLY_PAYMENT_WINDOW_DAYS);
    return new Date() <= deadline;
}

/**
 * Validates and gets the tuition fee based on degree level and residency (isDomestic).
 */
export function getTuitionFee(level: string, field?: string, isDomestic: boolean = false): number {
    const lvl = (level || '').toUpperCase();
    if (lvl.includes('CERTIFICATE') || lvl.includes('DIPLOMA')) {
        return isDomestic ? DOMESTIC_TUITION.CERTIFICATE_DIPLOMA : INTERNATIONAL_TUITION.CERTIFICATE_DIPLOMA;
    }
    if (lvl.includes('BACHELOR') || lvl.includes('BSC')) {
        return isDomestic ? DOMESTIC_TUITION.BACHELOR : INTERNATIONAL_TUITION.BACHELOR;
    }
    if (lvl.includes('MASTER') || lvl.includes('MSC')) {
        return isDomestic ? DOMESTIC_TUITION.MASTER : INTERNATIONAL_TUITION.MASTER;
    }
    // Default fallback
    return isDomestic ? DOMESTIC_TUITION.BACHELOR : INTERNATIONAL_TUITION.BACHELOR;
}

/**
 * Calculates the fee after early payment discount (always returns totalFee since percent is 0).
 */
export function calculateDiscountedFee(totalFee: number): number {
    return totalFee;
}

/**
 * Calculates the total program fee with early bird discount applied to the first year only.
 * Since discount is 0, this is simply annualFee * years.
 */
export function calculateFullProgramDiscountedFee(annualFee: number, years: number): number {
    return annualFee * years;
}

/**
 * Gets total program years based on duration string and degree level.
 */
export function getProgramYears(duration: string, level?: string): number {
    const lvl = (level || '').toUpperCase();
    if (lvl.includes('BACHELOR') || lvl.includes('BSC')) return 4;
    if (lvl.includes('MASTER') || lvl.includes('MSC')) return 2;

    const dur = duration.toLowerCase();
    if (dur.includes('6 months') || dur.includes('1 year') || dur.includes('1st year') || dur.includes('1-year')) return 1;
    if (dur.includes('2 year') || dur.includes('2-year')) return 2;
    if (dur.includes('3 year') || dur.includes('3-year')) return 3;
    if (dur.includes('4 year') || dur.includes('4-year')) return 4;

    return 1; // Default fallback for certificates
}

/**
 * Calculates the annual original fee from the total discounted fee and discount amount.
 */
export function getAnnualFeeFromTotal(totalFee: number, discountAmount: number, years: number): number {
    return Math.round(totalFee / years);
}

/**
 * Calculates the tuition deposit required to secure a place.
 */
export function calculateTuitionDeposit(annualFee: number, field?: string, isEarlyBird?: boolean, level?: string, isDomestic?: boolean): number {
    let isDom = isDomestic;
    let lvl = (level || '').toUpperCase();

    if (isDom === undefined || !lvl) {
        // Guess based on fee amount:
        // Domestic fees: 3500, 6200, 8500
        // International fees: 9500, 12500, 18000
        if (annualFee === DOMESTIC_TUITION.CERTIFICATE_DIPLOMA) { isDom = true; lvl = 'CERTIFICATE'; }
        else if (annualFee === DOMESTIC_TUITION.BACHELOR) { isDom = true; lvl = 'BACHELOR'; }
        else if (annualFee === DOMESTIC_TUITION.MASTER) { isDom = true; lvl = 'MASTER'; }
        else if (annualFee === INTERNATIONAL_TUITION.CERTIFICATE_DIPLOMA) { isDom = false; lvl = 'CERTIFICATE'; }
        else if (annualFee === INTERNATIONAL_TUITION.BACHELOR) { isDom = false; lvl = 'BACHELOR'; }
        else if (annualFee === INTERNATIONAL_TUITION.MASTER) { isDom = false; lvl = 'MASTER'; }
        else {
            // Heuristic fallbacks
            isDom = annualFee < 9000;
            if (annualFee <= 4000) lvl = 'CERTIFICATE';
            else if (annualFee <= 9000) lvl = isDom ? 'MASTER' : 'CERTIFICATE';
            else if (annualFee <= 13000) lvl = 'BACHELOR';
            else lvl = 'MASTER';
        }
    }

    if (lvl.includes('CERTIFICATE') || lvl.includes('DIPLOMA')) {
        return isDom ? DOMESTIC_DEPOSIT.CERTIFICATE_DIPLOMA : INTERNATIONAL_DEPOSIT.CERTIFICATE_DIPLOMA;
    }
    if (lvl.includes('BACHELOR') || lvl.includes('BSC')) {
        return isDom ? DOMESTIC_DEPOSIT.BACHELOR : INTERNATIONAL_DEPOSIT.BACHELOR;
    }
    if (lvl.includes('MASTER') || lvl.includes('MSC')) {
        return isDom ? DOMESTIC_DEPOSIT.MASTER : INTERNATIONAL_DEPOSIT.MASTER;
    }

    return isDom ? DOMESTIC_DEPOSIT.BACHELOR : INTERNATIONAL_DEPOSIT.BACHELOR;
}

/**
 * Maps a School ID/Slug to a TuitionField.
 */
export function mapSchoolToTuitionField(schoolSlug: string): TuitionField {
    const slug = schoolSlug.toLowerCase();
    if (slug.includes('business')) return 'BUSINESS';
    if (slug.includes('arts') || slug.includes('design') || slug.includes('architecture')) return 'ARTS';
    if (slug.includes('technology') || slug.includes('engineering')) return 'TECHNOLOGY';
    if (slug.includes('science')) return 'SCIENCE';
    return 'TECHNOLOGY';
}

