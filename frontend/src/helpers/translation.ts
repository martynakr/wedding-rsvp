export const translation = (
    language: "PL" | "EN" = "EN",
    property: string,
    data: any,
) => {
    return data[property][language];
};
