import React from 'react';
import css from './bestOdds.module.css';

const bestOdds = (props) =>{
    const { icon, title } = props.data;

    return(
        <div className={css.wrapper}>
            <span className={css.iconWrapper}>
                <i className={` fa fa-${icon}`} /> 
            </span>
            <span>{title}</span>
        </div>
    )
}

export default bestOdds;