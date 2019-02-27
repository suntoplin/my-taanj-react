import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
// eslint-disable-next-line
import styles from '../index.css';
import { Link, NavLink } from "react-router-dom"
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
// import Container from 'muicss/lib/react/container';

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
                <Appbar className={styles.bar}>
                    <div className={styles.headerContainer}>
                        <Row>
                            <Col md="5">
                                {/* <Link to="/" replace >
                                    {
                                        viewPortWidth < 600 ?
                                            (<span>smaller than 600 </span>) :
                                            (<span>larger than 600</span>)
                                    }
                                </Link> */}
                                <span
                                    className={styles.hamburger}
                                    onClick={this.handleHamburgerClick}
                                > ☰
                                </span>
                            </Col>
                            <Col md="4" className={styles.appBarNav}>
                                <NavLink to="/" replace className={styles.navLink} activeclassname={styles.navLinkSelected}>Home</NavLink>
                                <NavLink to="/about" replace className={styles.navLink} activeclassname={styles.navLinkSelected}>About</NavLink>
                                <NavLink to="/link" replace className={styles.navLink} activeclassname={styles.navLinkSelected}>Link</NavLink>
                                <NavLink to="/photo" replace className={styles.navLink} activeclassname={styles.navLinkSelected}>Photo</NavLink>
                            </Col>
                        </Row>
                    </div>
                </Appbar>
                {
                    !this.state.showMenu &&
                    <ul className={styles.dropDownUl} >
                        <li className={styles.headerItemResponsive} onClick={this.handleHamburgerClick}><Link to="/" replace >Home</Link></li>
                        <li className={styles.headerItemResponsive} onClick={this.handleHamburgerClick}><Link to="/about" replace >About</Link></li>
                        <li className={styles.headerItemResponsive} onClick={this.handleHamburgerClick}><Link to="/link" replace >Link</Link></li>
                        <li className={styles.headerItemResponsive} onClick={this.handleHamburgerClick}><Link to="/photo" replace >Photo</Link></li>
                    </ul>
                }
                {children}
                <Appbar>
                    <footer className="mui--text-dark-hint">2019@FPCF ( viewPortWidth: {viewPortWidth} px )</footer>
                </Appbar>
            </div>
        );
    }
}