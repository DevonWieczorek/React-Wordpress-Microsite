This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React-WP CLI
The setup and theming of this project is bootstrapped by [React-WP CLI](https://github.com/FluentCo/React-WP-CLI) which is a proprietary CLI designed specifically for this project structure.

## Actions and Filters
This project uses a PluginStore component that utilizes the [Wordpress Hooks Package](https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/) for event Hooks and content Filters.

### Actions
- `init`
- `before_plugin_registry`
- `after_plugin_registry`

### Filters

#### Data Filters
- `got_tags`
- `got_categories`

#### Post Feed Filters
- `post_feed`
- `post_title`
- `post_featured_image`
- `post_author`
- `post_date`
- `post_excerpt`
- `post_content`

#### Individual Post Filters
- `the_post`
- `the_title`
- `the_featured_image`
- `the_author`
- `the_date`
- `the_excerpt`
- `the_content`

#### Meta Filters
- `meta_title`
- `meta_og_title`
- `meta_description`
- `meta_og_description`
- `meta_keywords`
- `meta_subject`
- `meta_robots`
- `meta_og_image`
- `meta_og_site_name`
- `meta_og_type`
- `meta_og_url`
