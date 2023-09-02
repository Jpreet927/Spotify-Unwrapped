import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import fetch from "node-fetch";

const clientId = process.env.SPOTIFY_CLIENT_ID as string;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string;

const scopes = [
    "user-read-email",
    "user-top-read",
    "user-read-recently-played",
    "playlist-modify-public",
    "playlist-modify-private",
].join(",");

const params = {
    scope: scopes,
};

const LOGIN_URL =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams(params).toString();

export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: LOGIN_URL,
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, account }: any) {
            // initial sign in
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.accessTokenExpires = account.expires_at * 1000;
                return token;
            }

            // access token is still valid
            if (Date.now() < token.accessTokenExpires) {
                return token;
            } else {
                await refreshAccessToken(token);
            }
        },
        async session({ session, token, user }: any) {
            // sending access_token to client for requests to Spotify API
            session.accessToken = token.accessToken;
            return session;
        },
    },
};

const refreshAccessToken = async (token: any) => {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", token.refreshToken);

    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                new (Buffer as any).from(
                    clientId + ":" + clientSecret
                ).toString("base64"),
        },
        body: params,
    });

    const data: any = await res.json();
    return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
