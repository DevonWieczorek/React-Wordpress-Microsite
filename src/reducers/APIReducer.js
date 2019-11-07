import HookStore from '../Hooks';
import {UPDATE_TAGS, UPDATE_CATEGORIES, FETCH_POSTS, SINGLE_POST} from "../actions/types";

const INITIAL_STATE = {
    tags: [],
    categories: {},
    posts: [],
    activePost: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TAGS:
            return {...state, tags: action.payload};

        case UPDATE_CATEGORIES:
            const nameKeys = (obj) => {
                let cats = {}
                for(let c in obj) cats[obj[c].slug] = obj[c];
                return cats;
            }
            return {...state, categories: nameKeys(action.payload)};

        case FETCH_POSTS:
            return {...state, posts: action.payload};

        case SINGLE_POST:
            return {...state, activePost: action.payload};

        default:
            return state;
    }
}
