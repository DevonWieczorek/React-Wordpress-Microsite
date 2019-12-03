import HookStore from '@Core/HookStore';
import {UPDATE_TAGS, UPDATE_CATEGORIES, FETCH_POSTS, SINGLE_POST} from "./types";

const n = process.env;

export const getTags = () => {
    return dispatch => {
        let _endpoint = `${n.REACT_APP_DEFAULT_ENDPOINT}/tags?include=${n.REACT_APP_DEFAULT_TAG_ID}`;
        _endpoint = HookStore.applyFilters('get_tags', _endpoint);

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
        _endpoint = HookStore.applyFilters('get_categories', _endpoint);

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

        _endpoint = HookStore.applyFilters('get_posts', _endpoint);

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
        _endpoint = HookStore.applyFilters('get_single_post', _endpoint);

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
