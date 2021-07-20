import React, { Component } from 'react';

import {getFoodList} from "../action";

export default class Header extends Component {
   
    render() {
        return (
            <>
                <div className="header-container">
                    <h1>FOOD BLOG</h1>
                </div>

            </>
        );
    }
}
