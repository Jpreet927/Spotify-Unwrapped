export function convertLowerCaseToPascalCase(text: string): string {
    return text
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
        .join(" ");
}

/*
    author: ChatGPT
*/
export function millisecondsToMinutesAndSeconds(milliseconds: number): string {
    // Calculate the total seconds
    const totalSeconds: number = Math.floor(milliseconds / 1000);

    // Calculate the minutes and seconds
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;

    // Format the result as "mm:ss"
    const formattedMinutes: string =
        minutes < 10 ? `${minutes}` : minutes.toString();
    const formattedSeconds: string =
        seconds < 10 ? `0${seconds}` : seconds.toString();

    return `${formattedMinutes}:${formattedSeconds}`;
}
