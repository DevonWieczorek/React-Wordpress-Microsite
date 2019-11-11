## React-WP CLI
The setup and theming of this project is bootstrapped by [React-WP CLI](https://github.com/FluentCo/React-WP-CLI) which is a proprietary CLI designed specifically for this project structure.



## Actions and Filters
This project uses an event-driven model that utilizes the [Wordpress Hooks Package](https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/) for event Hooks and content Filters.

### Actions
- `init`
- `before_plugin_registry`
- `after_plugin_registry`

### Filters

#### Request Filters
- `get_tags`
- `get_categories`
- `get_posts`
- `get_single_post`

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



## `PluginStore`
This project uses an opinionated `PluginStore` component that allows us to to keep the core codebase isolated, extend functionality, and modify content using plugin components.

The PluginStore is built under the assumption that your project follows a similar file structure:
```
/src
index.js
app.js
Hooks.js
-- components/
---- PluginStore.js
-- actions/
---- index.js
---- action1.js
---- action2.js
-- plugins/
---- index.js
---- plugin1.js
---- plugin2.js
```

#### Usage:
Plugins will be required to export 1 high order component from their root (`index.js`).
Their directory will be added to the plugins directory.
The plugin must be exported from `plugins/index.js` in order to be connected.

To use this component, you would nest it inside your provider (if you have one),
then wrap your app inside of the PluginStore component.
```
<Provider store={store}>
   <PluginStore>
       <App>
   </PluginStore>
 </Provider>
```

#### Naming:
As a naming convention, it is suggested that the plugin component is prefixed with an underscore: `_MyPlugin`.

#### Hooks and Filters:
Just like Wordpress, the real power of a plugin architecture comes from the hooks and filters.
Because this project uses the [Wordpress Hooks Package](https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/), plugins can import our global `HookStore` component from `../../Hooks`. Plugins should use their own namespace when registering filters and actions.
*Please note that although we suggest prefixing your main plugin component with an underscore, the Wordpress Hooks Package does not accept the leading underscore in your namespace. Simply use your main plugin component name without the leading underscore.*

#### State and Props
Each plugin that is connected to the `PluginStore` will automatically receive all of your app's state and props. App props are drilled into each plugin component, the global state is mapped to their props, and all of the dispatch actions are mapped to their props as well. It is highly suggested that you take a look at the `PluginStore` source code to get a better idea for how it works.



## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
