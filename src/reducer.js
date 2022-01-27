import { findAllByDisplayValue } from "@testing-library/react";

//this is just an object
// this is an empty datalayer state
export const initialState = {
    user: null, //at initial user doesnot exits
    playlists: [], //bunch of playlist guaranted
    playing: false, // at current any song playing :no
    item: null, // currently any item you listening to? so null
    //remove the token value and st it to null otherwise it wil be always set ..this is just bcoz hume baar baar login na krna padhe
    token: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

            //////////////////
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
            ////////////////////
        default:
            return state;
    }
};

export default reducer;