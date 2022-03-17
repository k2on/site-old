const fs = require("fs");

require("dotenv").config();
const SpotifyWebAPI = require("spotify-web-api-node");

const api = new SpotifyWebAPI({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});

const PLAYLIST_ID = "5LPiXbNeB2Cm6DrmX1DgLZ";

const getToken = async () =>
    (await api.clientCredentialsGrant()).body.access_token;

const getPlaylist = async (ID: string) =>
    (await api.getPlaylistTracks(ID)).body;

const getArtists = async (IDs: string[]) =>
    (await api.getArtists(IDs)).body.artists;

const main = async () => {
    const token = await getToken();

    api.setAccessToken(token);

    const playlist = await getPlaylist(PLAYLIST_ID);

    const artistIDs = [
        ...new Set<string>(
            playlist.items.map((item: any) => item.track.artists[0].id),
        ),
    ] as string[];

    artistIDs.length = 50;

    const artists = await getArtists(artistIDs);

    const artistsWithImages = artists
        .filter((artist: any) => artist.images.length > 0)
        .map((artist: any) => ({
            title: artist.name,
            imageURL: artist.images[0].url,
        }));

    fs.writeFileSync(
        "./src/container/grid/phonk/artists.json",
        JSON.stringify({ artists: artistsWithImages }),
    );
};

main();
