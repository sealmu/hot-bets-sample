import React from 'react';
import css from './custom.module.css';

const custom = (props) =>{
    const { timing } = props.data;

    return(
        <div className={css.wrapper}>
            { timing.rows.map( (row,i) => (
                <div style={{color: row.color || "#000"}} key={i}>{row.text}</div>
             ) ) }
        </div>
    )
}

export default custom;