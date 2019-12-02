import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import HookStore from './Hooks';
import ErrorBoundary from './components/ErrorBoundary';

class DependencyStore extends Component {
    state = {
        scripts: {},
        styles: {},
        _scripts: [],
        _styles: []
    }

    // Tag Building Functions
    _buildScriptTag = (src, ver) => {
        if(ver) src += `?ver=${ver}`;
        return(<script type="text/javascript" src={src}></script>);
    }

    _buildStyleLink = (src, ver) => {
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
            tag: (type === 'scripts') ? this._buildScriptTag(src, ver) : this._buildStyleLink(src, ver),
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
        let keys = Object.keys(this.state[type]).filter(i => (this.state[type][i].rendered === false));

        for(let i in keys){
            let el, key = keys[i];
            let obj = this.state[type][key];

            if(obj.in_footer){
                el = React.createElement(ErrorBoundary, {key: i}, obj.tag);
            }
            else{
                el = React.createElement(ErrorBoundary, {key: i}, <Helmet>{obj.tag}</Helmet>);
            }

            let _state = {...this.state};
            _state[`_${type}`].push(el);
            _state[type][key].rendered = true;

            this.setState({...this.state, ..._state});
        }

        HookStore.doAction( `${type}_enqueued` );
    }

    _buildScriptTags = () => this._build('scripts', 'script-holder');

    _buildStyleLinks = () => this._build('styles', 'style-holder');

    componentDidUpdate(prevProps, prevState){
        if(this.state !== prevState){
            this._buildScriptTags();
            this._buildStyleLinks();
        }
    }

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
                    <div id="script-holder">{this.state._scripts}</div>
                    <div id="style-holder">{this.state._styles}</div>
                </div>
            </ErrorBoundary>
        );
    }
}

export default DependencyStore;
