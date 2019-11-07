import {UPDATE_TAGS, UPDATE_CATEGORIES, FETCH_POSTS, SINGLE_POST} from "./types";

const n = process.env;

export const getTags = () => {
    return dispatch => {
        let _endpoint = `${n.REACT_APP_DEFAULT_ENDPOINT}/tags?include=${n.REACT_APP_DEFAULT_TAG_ID}`;
        console.log(`Calling ${_endpoint} for TAGS...`);

        fetch(_endpoint, {dataType: 'jsonp'})
            .then(res => res.json())
            .then(res => {
                dispatch({type: UPDATE_TAGS, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

export const getCategories = () => {
    return dispatch => {
        let _endpoint = `${n.REACT_APP_DEFAULT_ENDPOINT}/categories?include=${n.REACT_APP_DEFAULT_CATEGORY_IDS}`;
        console.log(`Calling ${_endpoint} for CATEGORIES...`);

        fetch(_endpoint, {dataType: 'jsonp'})
            .then(res => res.json())
            .then(res => {
                dispatch({type: UPDATE_CATEGORIES, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

export const getPosts = (category, paramString) => {
    return dispatch => {
        category = category || n.REACT_APP_DEFAULT_CATEGORY_IDS;
        let _endpoint = `${n.REACT_APP_DEFAULT_POST_ENDPOINT}&categories=${category}`;
        if(paramString) _endpoint += paramString;
        console.log(`Calling ${_endpoint} for POSTS...`);

        fetch(_endpoint, {dataType: 'jsonp'})
            .then(res => res.json())
            .then(res => {
                dispatch({type: FETCH_POSTS, payload: res});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    };
};

export const getPostBySlug = (slug) => {
    return dispatch => {
        let _endpoint = `${n.REACT_APP_DEFAULT_POST_ENDPOINT}&slug=${slug}`;
        console.log(`Calling ${_endpoint} for SINGLE POST...`);

        fetch(_endpoint, {dataType: 'jsonp'})
            .then(res => res.json())
            .then(res => {
                dispatch({type: SINGLE_POST, payload: res[0]});
            })
            .catch(err => {
                console.log(`There was an error getting data from ${_endpoint}:`, err);
            });
    }
}
