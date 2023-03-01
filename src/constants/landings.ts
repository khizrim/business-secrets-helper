const COURSES = [
    '/courses/kak-otkryt-kafe/',
    '/courses/kak-otkryt-svoj-biznes/',
    '/courses/kak-pisat-prodayushchie-teksty/',
    '/courses/kak-prodavat-na-wildberries/',
    '/courses/kak-prodavat-na-ya-markete/',
    '/courses/kak-stat-ip/',
    '/courses/kak-vybrat-i-kupit-franshizu/',
    '/courses/kak-provesti-prazdnichnuyu-rasprodazhu/',
    '/courses/finansirovanie-biznesa/',
    '/courses/poisk-klientov/',
    '/courses/upravlenie-dengami-kompanii/',
    '/kak-nachat-prodavat-na-ozon-s-nulya/case-15/',
    '/kak-otkryt-kafe/case-18/',
    '/kak-pisat-prodayushchie-teksty/case-1',
    '/kak-prodavat-na-wildberries/case-12/',
    '/kak-stat-ip/case-6/',
    '/obuchenie-goszakupkam/',
];

const GUIDES = [
    '/wildberries/',
    '/ip-npd-usn/',
    '/aliexpress-sales/',
    '/tax-calendar/',
    '/xyz-analiz/',
    '/internet-magazin/',
    '/roznichnyj-magazin/',
    '/cvetochnyj-magazin/',
    '/punkt-vydachi-ozon/',
    '/ip-npd-usn/',
    '/new-currency-rules/',
    '/tax-inquest/',
    '/crisis-support/',
    '/blocking-business-fz-115/',
    '/taxation-ip/',
    '/abc-xyz-analiz/',
    '/p-l-report/',
];

const DOCS = [
    '/rent-docs',
    '/registration-ooo-docs',
    '/registration-ip-docs',
    '/accounting-docs',
    '/employees-docs',
    '/partners-docs',
];

export const LANDINGS = [
    {content: 'Guides', value: GUIDES.join('\n')},
    {
        content: 'Courses',
        value: COURSES.join('\n'),
    },
    {content: 'Documents', value: DOCS.join('\n')},
];
