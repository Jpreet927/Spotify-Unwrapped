export function convertLowerCaseToPascalCase(text: string): string {
    return text
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
        .join(" ");
}
