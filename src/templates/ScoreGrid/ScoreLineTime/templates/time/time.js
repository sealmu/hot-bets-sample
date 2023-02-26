import React from 'react';
import css from './time.module.css';

const time = (props) =>{
    const { time } = props.data;

    return(
        <div className={css.wrapper}>
            {time}
        </div>
    )
}

export default time;