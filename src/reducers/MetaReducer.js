import { META, RESET_META } from '../actions/types';
import { mergeObjects } from '../utils/objects';

const n = process.env;

const INITIAL_STATE = {
    'title': n.REACT_APP_DEFAULT_TITLE,
    'description': n.REACT_APP_DEFAULT_DESCRIPTION,
    'keywords': n.REACT_APP_DEFAULT_KEYWORDS,
    'subject': n.REACT_APP_DEFAULT_SUBJECT,
    'robots': n.REACT_APP_DEFAULT_ROBOTS,
    'ogTitle': n.REACT_APP_DEFAULT_TITLE,
    'ogImage': n.REACT_APP_DEFAULT_IMAGE,
    'ogDescription': n.REACT_APP_DEFAULT_DESCRIPTION,
    'ogSiteName': n.REACT_APP_DEFAULT_SITENAME,
    'ogType': n.REACT_APP_DEFAULT_TYPE,
    'ogURL': n.REACT_APP_DEFAULT_URL || window.location.href
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case META:
            let metaData = mergeObjects(INITIAL_STATE, action.payload);
            return { ...state, ...metaData }

        case RESET_META:
            return { ...state, ...INITIAL_STATE }

        default:
            return state;
    }
}
