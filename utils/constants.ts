export enum AllowedRedirects {
  Homepage = 'homepage',
  Artist = 'artist',
  Player = 'player'
}

export default {
  CLIENT: {
    ID: process.env.ID_CLIENT || 'http://localhost:8080',
    PLAYER: process.env.PLAYER_SERVICE || 'http://localhost:6060',
    ARTIST: process.env.ARTIST_SERVICE || 'http://localhost:5050',
    HELP: process.env.HELP_SERVICE || 'https://help.xbeat.com'
  }
};
