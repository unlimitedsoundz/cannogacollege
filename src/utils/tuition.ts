import { DegreeLevel } from '@/types/database';

export type TuitionField = 'BUSINESS' | 'ARTS' | 'TECHNOLOGY' | 'SCIENCE';

export const TUITION_FEES: Record<DegreeLevel, Record<TuitionField, number>> = {
    BACHELOR: {
        BUSINESS: 6000,
        ARTS: 6000,
        TECHNOLOGY: 6000,
        SCIENCE: 9500,
    },
    MASTER: {
        BUSINESS: 6000,
        ARTS: 6000,
        TECHNOLOGY: 6000,
        SCIENCE: 9500,
    }
};

export const EARLY_PAYMENT_DISCOUNT_PERCENT = 25;
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
 * Validates and gets the tuition fee based on degree level and field.
 */
export function getTuitionFee(level: DegreeLevel, field: TuitionField): number {
    return TUITION_FEES[level][field];
}

/**
 * Calculates the fee after early payment discount.
 */
export function calculateDiscountedFee(totalFee: number): number {
    return Math.round(totalFee * (1 - EARLY_PAYMENT_DISCOUNT_PERCENT / 100));
}

/**
 * Calculates the total program fee with early bird discount applied to the first year only.
 */
export function calculateFullProgramDiscountedFee(annualFee: number, years: number): number {
    const firstYearDiscounted = calculateDiscountedFee(annualFee);
    const remainingYears = (years - 1) * annualFee;
    return firstYearDiscounted + remainingYears;
}

/**
 * Gets total program years based on duration string and degree level.
 */
export function getProgramYears(duration: string, level?: DegreeLevel): number {
    // Explicit overrides based on user request: Bachelors x 3, Masters x 2
    const lvl = (level || '').toUpperCase();
    if (lvl.includes('BACHELOR')) return 3;
    if (lvl.includes('MASTER')) return 2;

    if (duration.toLowerCase().includes('2 years')) return 2;
    if (duration.toLowerCase().includes('3 years')) return 3;
    if (duration.toLowerCase().includes('4 years')) return 4;
    return lvl.includes('MASTER') ? 2 : 3; // Default
}

/**
 * Calculates the annual original fee from the total discounted fee and discount amount.
 * Based on the rule: Total = (Annual * 0.75) + (Annual * (Years - 1)) if discounted.
 * Or: Total = Annual * Years if not discounted.
 */
export function getAnnualFeeFromTotal(totalFee: number, discountAmount: number, years: number): number {
    if (discountAmount > 0) {
        // discountAmount = annualFee * 0.25
        return Math.round(discountAmount / (EARLY_PAYMENT_DISCOUNT_PERCENT / 100));
    }
    return Math.round(totalFee / years);
}

/**
 * Calculates the tuition deposit required to secure a place.
 * Rules:
 * - Business/Arts/Tech: 50% of original annual fee (6000 -> 3000)
 * - Science Standard: 50% of original annual fee (9500 -> 4750)
 * - Science Early Bird: €4,500 (Specific requirement)
 */
export function calculateTuitionDeposit(annualFee: number, field: TuitionField, isEarlyBird: boolean): number {
    if (field === 'SCIENCE' && isEarlyBird) {
        return 4500;
    }
    // Default to 50% of annual fee
    return Math.round(annualFee * 0.5);
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
    return 'TECHNOLOGY'; // Default fallback
}
