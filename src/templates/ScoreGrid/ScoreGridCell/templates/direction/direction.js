import React from 'react';
import css from './direction.module.css';

const direction = (props) =>{
    const { score, direction, bold } = props.data;

    return(
        <div className={css.wrapper} style={ bold ? { background: '#fcedc4' } : {} }>
             { direction < 0 && <span style={{color: 'red', marginRight: '5px'}} className="fa fa-caret-down"></span> }
             { direction >= 0 && <span style={{color: 'green', marginRight: '5px'}}  className="fa fa-caret-up"></span> }
            <span style={{fontSize: '14px'}}>{score}</span>
        </div>
    )
}

export default direction;