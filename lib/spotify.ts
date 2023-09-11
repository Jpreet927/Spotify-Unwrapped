// Fetches top items based on type (artists, tracks) and timeframe
export const getTopItems = async (
    type: string,
    timeframe: string,
    token: string
) => {
    const URL = `https://api.spotify.com/v1/me/top/${type}?`;
    const res = await fetch(
        URL +
            new URLSearchParams({
                time_range: timeframe,
            }),
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await res.json();

    console.log(res);
    return data;
};

export const getUserProfile = async (token: string) => {};
