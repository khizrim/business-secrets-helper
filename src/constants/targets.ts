export const TARGET_SITES = [
    {
        label: 'Wordpress',
        options: [
            {content: 'WP Dev', value: 'http://localhost:8888'},
            {content: 'WP Staging', value: 'https://bs-old.gke.tjournal.tech'},
            {content: 'WP Prod', value: 'https://secrets-old.tinkoff.ru'},
        ],
    },
    {
        label: 'Facade',
        options: [
            {content: 'Facade Dev', value: 'http://localhost:3000'},
            {content: 'Facade Staging', value: 'https://bs.gke.tjournal.tech'},
            {content: 'Facade Prod', value: 'https://secrets.tinkoff.ru'},
        ],
    },
];
