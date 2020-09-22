import React, { Component } from 'react';
import Header from "./Header"
import Page from  "./Page"
class Items extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Page/>
            </div>
        );
    }
}

export default Items;