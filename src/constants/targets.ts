export const TARGET_SITES = [
  {
    label: "Wordpress",
    options: [
      { content: "WP Dev", value: "http://localhost:3000" },
      { content: "WP Staging", value: "https://wp.bs-stage.tcsbank.ru" },
      { content: "WP Prod", value: "https://secrets-wp.tcsgroup.io" },
    ],
  },
  {
    label: "Persephone",
    options: [
      { content: "Persephone Staging", value: "https://bs-stage.tcsbank.ru/persephone" },
    ]
  },
  {
    label: "Facade",
    options: [
      { content: "Facade Dev", value: "http://localhost:3001" },
      {
        content: "Facade Staging",
        value: "https://bs-stage.tcsbank.ru",
      },
      { content: "Facade Prod", value: "https://secrets.tinkoff.ru" },
    ],
  },
];
