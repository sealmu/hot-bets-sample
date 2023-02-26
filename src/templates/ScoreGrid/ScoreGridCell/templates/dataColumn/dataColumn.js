import React from 'react';
import css from './dataColumn.module.css';

const getColorByLevel = (level) => {
    switch (level) {
        case 1: 
            return 'red';
        case 3:
            return '#888';
        default:
            return '#000'
    }
}

const dataColumn = (props) =>{
    const { data } = props.data;

    return(
        <div className={css.wrapper}>
            {
                data.map( (row,i) => (
                    <div style={{color: getColorByLevel(row.level)}} key={i}>{row.score}</div>
                ) )
            }
        </div>
    )
}

export default dataColumn;