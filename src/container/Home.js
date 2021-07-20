import React, { Component, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";

import Details from "./Details";
import { getFoodList } from '../action';

let Home =({foodList})=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
console.log("inside useEffect")
        dispatch(getFoodList());
    },[])


    return (
        <>
            <div className="main-content">
                <div className="main-content-container">
                    <div className="main-content-header display-flex">
                        <h2>List of Recipes</h2>
                    </div>
                    <div className="main-content-body">
                        <div className="main-content-list">
                   <Details />
                   </div>

                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;