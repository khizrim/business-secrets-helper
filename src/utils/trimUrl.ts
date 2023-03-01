export const trimUrl = (url: string) => {
    const regex =
        /(http(s)?:\/\/)(www\.)?((localhost)|(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}))(?::\d+)?/gi;
    return url.replace(regex, '');
};
