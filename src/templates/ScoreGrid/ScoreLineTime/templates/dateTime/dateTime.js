import React from 'react';
import css from './dateTime.module.css';

const dateTime = (props) =>{
    const { date, time } = props.data;

    return(
        <div className={css.wrapper}>
            <div>{date}</div>
            <div>{time}</div>
        </div>
    )
}

export default dateTime