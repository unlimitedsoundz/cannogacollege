// Extended DB cleanup: HYY, SwissCare, HSL, DVV, migri, Kela, Finnish-specific
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function cleanup() {
    console.log('🔍 Fetching all page_content rows...');
    const { data: rows, error } = await supabase
        .from('page_content')
        .select('id, page_slug, section_key, content');

    if (error) { console.error('Fetch error:', error); process.exit(1); }

    const replacements = [
        // City
        [/\bHelsinki\b/g, 'Ottawa'],
        [/\bin Finland\b/gi, 'in Canada'],
        [/\bFinland\b(?!\s*\.)/g, 'Canada'],
        // Student union
        [/HYY Student Union/gi, 'Cannoga Student Association (CSA)'],
        [/Student Union \(HYY\)/gi, 'Cannoga Student Association (CSA)'],
        [/\bHYY\b/g, 'CSA'],
        // Insurance
        [/Finnish residence permit/gi, 'Canadian study permit'],
        [/SwissCare.*?→/gs, 'Apply for OHIP at ServiceOntario →'],
        // Health services
        [/Finnish Student Health Service/gi, 'campus health services'],
        [/\bFSHS\b/g, 'campus health services'],
        [/\bKela\b/g, 'OSAP/ServiceOntario'],
        // Transport
        [/\bHSL\b/g, 'OC Transpo'],
        [/\bVR\b(?!\s*[a-z])/g, 'VIA Rail'],
        // Registration
        [/\bDVV\b/g, 'ServiceOntario'],
        [/\bMigri\.fi\b/g, 'IRCC'],
        [/migri\.fi\/en\/home/g, 'canada.ca/en/immigration-refugees-citizenship'],
        // Credits
        [/\bECTS\b/g, 'credits'],
        // Documents
        [/Non-English\/Finnish\/Swedish/gi, 'Non-English'],
        [/Finnish\/Swedish documents/gi, 'Non-English documents'],
        // Finnish language refs
        [/Survival Finnish/gi, 'Welcome Orientation'],
        [/Finnish language courses/gi, 'language courses'],
        [/Finnish mission/gi, 'Canadian visa office'],
        // Transport card
        [/HSL transport card/gi, 'OC Transpo U-Pass'],
        // Housing
        [/\bHOAS\b/g, 'Campus Living Centres'],
        [/hoas\.fi\/en\//g, 'campuslivingcentres.com'],
        [/\bLumo\b/g, 'Minto Apartments'],
        [/lumo\.fi\/en\//g, 'mintoapartments.com/ottawa'],
        [/Vuokraovi\.com/gi, 'Zumper'],
        [/vuokraovi\.com.*?(?=["'])/g, 'zumper.com/apartments-for-rent/ottawa-on'],
        [/Oikotie\.fi/gi, 'Rentals.ca'],
        [/asunnot\.oikotie\.fi\/vuokra-asunnot/g, 'rentals.ca/ottawa'],
    ];

    let updated = 0;
    let skipped = 0;

    for (const row of rows) {
        if (!row.content) { skipped++; continue; }
        let newContent = row.content;
        for (const [pattern, replacement] of replacements) {
            newContent = newContent.replace(pattern, replacement);
        }
        if (newContent === row.content) { skipped++; continue; }

        const { error: updateError } = await supabase
            .from('page_content')
            .update({ content: newContent, updated_at: new Date().toISOString() })
            .eq('id', row.id);

        if (updateError) {
            console.error(`  ❌ ${row.page_slug}/${row.section_key}:`, updateError.message);
        } else {
            console.log(`  ✅ Updated: ${row.page_slug} / ${row.section_key}`);
            updated++;
        }
    }

    console.log(`\n✅ Done: ${updated} updated, ${skipped} unchanged.`);
}

cleanup().catch(console.error);
