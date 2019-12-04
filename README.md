## React-WP CLI
The setup and theming of this project is bootstrapped by [React-WP CLI](https://github.com/FluentCo/React-WP-CLI) which is a proprietary CLI designed specifically for this project structure.



## Actions and Filters
This project uses an event-driven model that utilizes the [Wordpress Hooks Package](https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/) for event Hooks and content Filters.

### Actions
- `init`
- `before_plugin_registry`
- `after_plugin_registry`
- `enqueue_scripts`
- `enqueue_styles`
- `scripts_enqueued`
- `styles_enqueued`
- `window_loaded`

### Filters

#### Request Filters
- `get_tags`
- `get_categories`
- `get_posts`
- `get_single_post`
- `get_single_page`

#### Data Filters
- `got_tags`
- `got_categories`

#### Post Feed Filters
- `post_feed`
- `post_slug`
- `post_title`
- `post_featured_image`
- `post_author`
- `post_date`
- `post_excerpt`
- `post_content`

#### Individual Post Filters
- `the_post`
- `the_slug`
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
-- core/
---- HookStore.js
---- ErrorBoundary.js
---- DependencyStore.js
---- PluginStore.js
---- actions/
------ index.js
------ action1.js
------ action2.js
---- components/
---- modules/
------ ...
---- pages/
------ ...
---- reducers/
------ ...
---- routes/
------ ...
---- styles/
------ ...
---- utils/
------ ...
-- plugins/
---- index.js
---- _plugin1/
------ index.js
---- _plugin2/
------ index.js
```

#### Usage:
Plugins will be required to export 1 main plugin component from their root (`index.js`).
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
Because this project uses the [Wordpress Hooks Package](https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/), plugins can import our global `HookStore` component from `@Core/HookStore`. Plugins should use their own namespace when registering filters and actions.

*Please note that although we suggest prefixing your main plugin component with an underscore, the Wordpress Hooks Package does not accept the leading underscore in your namespace. Simply use your main plugin component name without the leading underscore.*

#### State and Props
Each plugin that is connected to the `PluginStore` will automatically receive all of your app's state and props. App props are drilled into each plugin component, the global state is mapped to their props, and all of the dispatch actions are mapped to their props as well. It is highly suggested that you take a look at the `PluginStore` source code to get a better idea for how it works.

#### `.gitignore`
For the sake of keeping this "core" project pure, all files are ignored from the `plugins/` directory except for the `index.js`. If you need to commit any custom plugin code that you wrote, you'll have to update the `.gitignore` in the root of your project.



## `DependencyStore`
To allow plugins to add scripts and stylesheets without adding them directly to the `index.html`, this project includes a `DependencyStore` component which handles the `enqueue_scripts` and `enqueue_styles` actions (similar to how you'd include additional scripts and styles in Wordpress).

#### Order:
Assets are enqueued with scripts first and then styles. Scripts will be added in the order in which they are enqueued, then the same for stylesheets.

*Please note that we currently don't support passing in custom properties to your `<script>` or `<link>` tags. If you need to use the `async` property for your scripts, please manually add them to the `index.html`. For custom scripts, place them inside of the `public > scripts` directory and then manually add them to the `index.html` (See [Manually Adding Assets](https://github.com/FluentCo/React-Wordpress-Microsite#manually-adding-assets)).*

#### Placement:
By default, scripts and stylesheets will be added to the DOM inside of the `<head>` tag using [React Helmet](https://www.npmjs.com/package/react-helmet). You can set `is_footer` to add your scripts or stylesheets to the bottom of the page by passing `true` as your last argument when you are enqueueing your assets.

*TODO: Debug footer scripts & test footer styles!!*

#### Loading:
If you need to reference functions that exist in an enqueued script from within a component, use the `window_loaded` action to make sure your script has been loaded.



## Absolute Imports
In order to keep importing core files simple, this project uses [CRA Alias](https://www.npmjs.com/package/cra-alias) to create aliases for important paths.

#### `@Root`
This refers to the `src/` directory, which is the root of our project during development.

#### `@Public`
This alias jumps one directory outside of the root and then references the `public/` directory. This can be used for easily importing custom scripts or stylesheets.

*TODO: Deprecate*

#### `@Core`
This directory contains all of our core code.

It includes the following top-level components:
- `DependencyStore`
- `ErrorBoundary`
- `HookStore`
- `PluginStore`

In addition to the top-level components, `@Core` contains our other main directories.

#### `@Actions`
Because we export all of our actions from `actions/index.js` we can directly import our actions from `@Actions`.

#### `@Components`
Our core components.

#### `@Modules`
Our core modules, made up of components.

#### `@Pages`
Our app's pages (views), made up of components and modules.

#### `@Reducers`
Because we export all of our reducers from `reducers/index.js` we can directly import our reducers from `@Reducers`.

#### `@Routes`
Our project uses [React Router DOM](https://www.npmjs.com/package/react-router-dom) for routing. We can import our main router from `@Routes/MainRouter`;

#### `@Styles`
[Material UI](https://material-ui.com/styles/basics/) pushes you to use CSS-in-JS for styling. The main styles for our component can be imported with `@Styles` as their root.

#### `@Utils`
This project utilizes a handful of utility scripts for miscellaneous re-used functions. Any of our utility scripts can be imported with `@Utils` as their root.

#### `@Plugins`
The `plugins/` directory sits inside of our root as a sibling of `core/`. This directory is where any extensibility should be written. Changes to the app can be made via plugins, which allows us to avoid touching the core code *(See [PluginStore](https://github.com/FluentCo/React-Wordpress-Microsite#pluginstore) for more information)*.

The `@Plugins` alias allows plugins to easily import files from one another, or for the main app to import plugin code (although neither of these cases should be common).

The main use for the `@Plugins` alias is for the `PluginStore` to loop through and activate each plugin.



## Deployment
To deploy your project to AWS, simply run `npm run-script publish` in the command line from anywhere in your project. Under the hood, this command is just copying all the files from your `build/` directory and dumping them into an S3 bucket.



## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
