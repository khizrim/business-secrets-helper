const COURSES = [
    '/courses/finansirovanie-biznesa/',
    '/courses/kak-nachat-prodavat-na-ozon-s-nulya/',
    '/courses/kak-otkryt-kafe/',
    '/courses/kak-otkryt-svoj-biznes/',
    '/courses/kak-pisat-prodayushchie-teksty/',
    '/courses/kak-prodavat-na-wildberries/',
    '/courses/kak-prodavat-na-ya-markete/',
    '/courses/kak-provesti-prazdnichnuyu-rasprodazhu/',
    '/courses/kak-stat-ip/',
    '/courses/kak-vybrat-i-kupit-franshizu/',
    '/courses/obuchenie-goszakupkam/',
    '/courses/poisk-klientov/',
    '/courses/upravlenie-dengami-kompanii/',
    '/kak-nachat-prodavat-na-ozon-s-nulya/case-15/',
    '/kak-otkryt-kafe/case-18/',
    '/kak-pisat-prodayushchie-teksty/case-1',
    '/kak-prodavat-na-wildberries/case-12/',
    '/kak-stat-ip/case-6/',
];

const GUIDES = [
    '/abc-xyz-analiz/',
    '/aliexpress-sales/',
    '/blocking-business-fz-115/',
    '/crisis-support/',
    '/cvetochnyj-magazin/',
    '/internet-magazin/',
    '/ip-npd-usn/',
    '/ip-npd-usn/',
    '/new-currency-rules/',
    '/p-l-report/',
    '/punkt-vydachi-ozon/',
    '/roznichnyj-magazin/',
    '/tax-calendar/',
    '/tax-inquest/',
    '/taxation-ip/',
    '/wildberries/',
    '/xyz-analiz/',
];

const DOCS = [
    '/accounting-docs',
    '/employees-docs',
    '/partners-docs',
    '/registration-ip-docs',
    '/registration-ooo-docs',
    '/rent-docs',
];

export const LANDINGS = [
    {content: 'Guides', value: GUIDES.join('\n')},
    {
        content: 'Courses',
        value: COURSES.join('\n'),
    },
    {content: 'Documents', value: DOCS.join('\n')},
];
