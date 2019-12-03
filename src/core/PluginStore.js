// https://github.com/FluentCo/React-Wordpress-Microsite#pluginstore

import React, {Component} from 'react';
import {connect} from 'react-redux';
import HookStore from '@Core/HookStore';
import ErrorBoundary from '@Core/ErrorBoundary';

// We'll want to hook our plugins up to all of our actions
import * as actions from '@Actions';

// Let's assume plugins are added to/imported from plugins folder just like actions
import * as plugins from "@Plugins";

class PluginStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            children: [this.props.children]
        }
    }

    connectPluginsToComponent = () => {
        // Push imported plugins to array so we can iterate over them
        let _plugins = [];
        for(let plugin in plugins){
            // Need to convert the component function to a React element
            _plugins.push(React.createElement(plugins[plugin], null, null));
        }

        // Map PluginStore props to each plugin
        const connectedPlugins = React.Children.map([..._plugins], child => {
            return(
                // Protect our app from broken plugins
                <ErrorBoundary errorContent={() => {
                    console.log(`Error loading plugin: ${child.type.name}`)
                }}>
                    {React.cloneElement(child, {...this.props})}
                </ErrorBoundary>
            );
        });

        this.setState({
            ...this.state, children: [this.props.children, ...connectedPlugins]}, () => {
            // Fire off an event after our plugins are added to state and rendered
            HookStore.doAction( 'after_plugin_registry' );
        });
    }

    componentDidMount(){
        // Fire off an event before any plugins get loaded
        HookStore.doAction( 'before_plugin_registry' );

        this.connectPluginsToComponent();
    }

    render() {
        return (this.state.children);
    }
}

// Hook our plugins up to our global state
const mapStateToProps = (state) => {
    return{ ...state};
}

// Export component with all state and all dispatch actions
export default connect(mapStateToProps, {...actions})(PluginStore);
