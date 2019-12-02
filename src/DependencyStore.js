import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import HookStore from './Hooks';
import ErrorBoundary from './components/ErrorBoundary';

class DependencyStore extends Component {
    state = {
        scripts: {},
        styles: {}
    }

    // Tag Building Functions
    _buildScriptTag = (src, ver=false) => {
        if(ver) src += `?ver=${ver}`;
        return(<script type="text/javascript" src={src}></script>);
    }

    _buildStyleLink = (src, ver=false) => {
        if(ver) src += `?ver=${ver}`;
        return(<link rel="stylesheet" type="text/css" href={src} />);
    }

    // Asset Enqueue Functions
    _enqueue = (type, handle, src, ver, in_footer) => {
        if(this.state[type][handle]){
            throw new Error(`${handle} already exists with source ${src}`);
        }

        let _state = {...this.state};
        _state[type][handle] = {
            src,
            ver,
            in_footer,
            tag: (type === 'script') ? this._buildScriptTag(src, ver) : this._buildStyleLink(src, ver),
            rendered: false
        };

        this.setState({...this.state, ..._state});
    }

    _enqueueScript = (handle, src='', ver=false, in_footer=false) => {
        this._enqueue('scripts', handle, src, ver, in_footer);
    }

    _enqueueStyle = (handle, src='', ver=false, in_footer=false) => {
        this._enqueue('styles', handle, src, ver, in_footer);
    }

    // Render Functions
    _build = (type, id) => {
        let keys = Object.keys(this.state[type]);

        for(let i in keys){
            let key = keys[i];
            let obj = this.state[type][key];

            if(!obj.rendered){
                if(obj.in_footer){
                    ReactDOM.render(obj.tag, document.getElementById(id));
                }
                else{
                    ReactDOM.render(<Helmet>{obj.tag}</Helmet>, document.getElementById(id));
                }

                this.setState({...this.state, [type]: {
                    ...this.state[type],
                    [key]: {
                        ...this.state[type][key],
                        rendered: true
                    }
                }});
            }
        }

        HookStore.doAction( `${type}_enqueued` );
    }

    _buildScriptTags = () => this._build('scripts', 'script-holder');

    _buildStyleLinks = () =>this._build('styles', 'style-holder');

    componentDidMount(){
        HookStore.addAction('enqueue_scripts', 'DependencyStore', this._enqueueScript, 1);
        HookStore.addAction('enqueue_styles', 'DependencyStore', this._enqueueStyle, 1);
    }

    render(){
        return(
            <ErrorBoundary errorContent={() => {
                throw new Error('There was an error enqueuing scripts and styles from component.')
            }}>
                <div id="dependency-store">
                    <div id="script-holder">{this._buildScriptTags()}</div>
                    <div id="style-holder">{this._buildStyleLinks()}</div>
                </div>
            </ErrorBoundary>
        );
    }
}

export default DependencyStore;
