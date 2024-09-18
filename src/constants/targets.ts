export const TARGET_SITES = [
  {
    label: "Wordpress",
    options: [
      { content: "WP Dev", value: "http://localhost:3000" },
      { content: "WP Staging", value: "https://secrets-wp.dev-tcsgroup.io" },
      { content: "WP Prod", value: "https://secrets-wp.tcsgroup.io" },
    ],
  },
  {
    label: "Facade",
    options: [
      { content: "Facade Dev", value: "http://localhost:3001" },
      {
        content: "Facade Staging",
        value: "https://secrets.tj-bs.internal.ya-ruc1-dev1.dev.k8s.tcsbank.ru",
      },
      { content: "Facade Prod", value: "https://secrets.tinkoff.ru" },
    ],
  },
];
