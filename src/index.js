import React from 'react';
import ReactDOM from 'react-dom';

import About from './components/About';
import Frame from './components/Frame';
import Home from './components/Home';
import Links from './components/Link';
// import Landing from './components/Landing';
import Photos from './components/Photo';

import { HashRouter, Route, Link } from "react-router-dom"

import * as serviceWorker from './serviceWorker';

// const components = Object.freeze({
//     frame: Frame,
//     landing: Landing,
//     topPages: [
//         { path: "home", component: Home },
//         { path: "about", component: About },
//         { path: "link", component: Links },
//         { path: "photo", component: Photos }
//     ]
// });

// const About = lazy(() => import('./components/About'));
// const Home = lazy(() => import('./components/Home'));
// const Links = lazy(() => import('./components/Link'));
// const Photos = lazy(() => import('./components/Photo'));
// const Frame = lazy(() => import('./components/Frame'));


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Frame>
                    <Route exact path="/" component={Home} />
                    <Route path="/about"  component={About} />
                    <Route path="/link"   component={Links} />
                    <Route path="/photo"  component={Photos} />
                </Frame>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// enable hot module reload
if (module.hot) {
    module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
