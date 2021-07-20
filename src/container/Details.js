import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import "./styles.scss";

let Details = ({ foodList }) => (

    foodList ? foodList.map((item) => {
        return (
            <>
                <div className="recipe-card">
                    <span className="recipe-name">{item.recipeName}</span>
                    <button className="details-button"><a href={item.recipeURL} target="_blank">Details</a></button>

                </div>
            </>
        )
    }) : null
);


const mapStateToProps = (state) => (
    {
        foodList: state.foodList
    })

export default connect(mapStateToProps, null)(Details);