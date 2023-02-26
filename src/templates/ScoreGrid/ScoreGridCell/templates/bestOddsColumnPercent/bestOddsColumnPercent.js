import React from 'react';
import css from './bestOddsColumnPercent.module.css';

const bestOddsColumnPercent = (props) =>{
    const { percent } = props.data;

    return(
        <div className={css.wrapper}>
            <span>{percent}%</span>
        </div>
    )
}

export default bestOddsColumnPercent;