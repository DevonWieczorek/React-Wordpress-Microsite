import HookStore from '@Core/HookStore';
import {UPDATE_TAGS, UPDATE_CATEGORIES, FETCH_POSTS, SINGLE_POST, SINGLE_PAGE} from "../actions/types";

const INITIAL_STATE = {
    tags: [],
    categories: {},
    posts: [],
    activePost: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TAGS:
            let tags = HookStore.applyFilters('got_tags', action.payload);
            return {...state, tags: tags};

        case UPDATE_CATEGORIES:
            const nameKeys = (obj) => {
                let cats = {}
                for(let c in obj) cats[obj[c].slug] = obj[c];
                return cats;
            }
            let categories = nameKeys(action.payload);
            categories = HookStore.applyFilters('got_categories', categories);
            return {...state, categories: categories};

        case FETCH_POSTS:
            let posts = HookStore.applyFilters('post_feed', action.payload);
            for(let p in posts){
                let post = posts[p];
                post.slug = HookStore.applyFilters('post_slug', post.slug);
                post.title.rendered = HookStore.applyFilters('post_title', post.title.rendered);
                post.featured_image = HookStore.applyFilters('post_featured_image', post.featured_image);
                post.author_name = HookStore.applyFilters('post_author', post.metadata.display_aname[0]);
                post.date = HookStore.applyFilters('post_date', post.date);
                post.excerpt.rendered = HookStore.applyFilters('post_excerpt', post.excerpt.rendered);
                post.content.rendered = HookStore.applyFilters('post_content', post.content.rendered);
                posts[p] = post;
            }
            return {...state, posts: posts};

        case SINGLE_POST:
            let post = HookStore.applyFilters('the_post', action.payload);
            post.slug = HookStore.applyFilters('the_slug', post.slug);
            post.title.rendered = HookStore.applyFilters('the_title', post.title.rendered);
            post.featured_image = HookStore.applyFilters('the_featured_image', post.featured_image);
            post.author_name = HookStore.applyFilters('the_author', post.metadata.display_aname[0]);
            post.date = HookStore.applyFilters('the_date', post.date);
            post.excerpt.rendered = HookStore.applyFilters('the_excerpt', post.excerpt.rendered);
            post.content.rendered = HookStore.applyFilters('the_content', post.content.rendered);

            // Expose postID for tracking
            window['postID'] = post.id;

            return {...state, activePost: post};

        case SINGLE_PAGE:
            let page = HookStore.applyFilters('the_post', action.payload);
            page.slug = HookStore.applyFilters('the_slug', page.slug);
            page.title.rendered = HookStore.applyFilters('the_title', page.title.rendered);
            page.featured_image = HookStore.applyFilters('the_featured_image', page.featured_image);
            if(page.metadata && page.metadata.display_aname){
                page.author_name = HookStore.applyFilters('the_author', page.metadata.display_aname[0]);
            }
            else{
                page.author_name = HookStore.applyFilters('the_author', '');
            }
            page.date = HookStore.applyFilters('the_date', page.date);
            page.excerpt.rendered = HookStore.applyFilters('the_excerpt', page.excerpt.rendered);
            page.content.rendered = HookStore.applyFilters('the_content', page.content.rendered);

            // Expose pageID for tracking
            window['postID'] = page.id;

            return {...state, activePost: page};

        default:
            return state;
    }
}
