import React from 'react';

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
                <header>This is header</header>
                <hr />
                <section>
                    {children}
                    
                </section>
                <hr />
                <footer>
                2019@FPC                    
                <br/> 
                ( viewPortWidth: {viewPortWidth} px )                
                </footer>
            </div>
        );
    }
}