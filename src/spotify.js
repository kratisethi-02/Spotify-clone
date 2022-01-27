//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
/*
1. click LOGIN button
2. redirect to SPOTIFY login page 
3. Redirect to home page once logged in 

*/

const clientId = "9c75cbf749d547158bca54bede5311b8";

//scopes are those permissions which we give to a user
//otherwise user can delete , update his/her songs in our app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&") //this will split the url into two parts till where the & is present
    .reduce((initial, item) => {
      //#accessToken= mysuperseretkey&name=kratz
      var parts = item.split("="); //this will split the url item which was splited before till =
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//login url
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
