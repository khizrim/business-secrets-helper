export const openAllUrls = (urls: string[]): void => {
  urls.forEach((url) => window.open(url, "_blank"));
};
