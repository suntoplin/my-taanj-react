import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
// eslint-disable-next-line
import styles from '../index.css';

export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    handleHamburgerClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render() {
        const { children } = this.props;
        // const langPath = this.props.lang;
        // const lang = langPath || "en";
        // const relPath = getRelPath(langPath, this.props.location.pathname);
        const viewPortWidth = window.innerWidth;
        return (
            <div>
                <Appbar>
                    <header>This is header</header>
                </Appbar>
                {children}
                <Appbar>
                    <footer className="mui--text-dark-hint">2019@FPCF ( viewPortWidth: {viewPortWidth} px )</footer>
                </Appbar>
            </div>
        );
    }
}