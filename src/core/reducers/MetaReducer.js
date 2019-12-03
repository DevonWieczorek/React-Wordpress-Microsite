import HookStore from '@Core/HookStore';
import { META, RESET_META } from '@Actions/types';
import { mergeObjects } from '@Utils/objects';

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

const applyMetaFilters = (meta) => {
    meta.title = HookStore.applyFilters('meta_title', meta.title);
    meta.ogTitle = HookStore.applyFilters('meta_og_title', meta.ogTitle);
    meta.description = HookStore.applyFilters('meta_description', meta.description);
    meta.ogDescription = HookStore.applyFilters('meta_og_description', meta.ogDescription);
    meta.keywords = HookStore.applyFilters('meta_keywords', meta.keywords);
    meta.subject = HookStore.applyFilters('meta_subject', meta.subject);
    meta.robots = HookStore.applyFilters('meta_robots', meta.robots);
    meta.ogImage = HookStore.applyFilters('meta_og_image', meta.ogImage);
    meta.ogSiteName = HookStore.applyFilters('meta_og_site_name', meta.ogSiteName);
    meta.ogType = HookStore.applyFilters('meta_og_type', meta.ogType);
    meta.ogURL = HookStore.applyFilters('meta_og_url', meta.ogURL);
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case META:
            let metaData = mergeObjects(INITIAL_STATE, action.payload);
            metaData = applyMetaFilters(metaData);
            return { ...state, ...metaData }

        case RESET_META:
            let meta = applyMetaFilters(INITIAL_STATE);
            return { ...state, ...meta }

        default:
            return state;
    }
}
