import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => { 
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Melas</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}><img src={mealsImage} alt="A table full of delicious food!"></img></div>
        </Fragment>
    );
}

export default Header;
