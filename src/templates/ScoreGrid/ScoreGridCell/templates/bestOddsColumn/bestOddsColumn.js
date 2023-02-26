import React from 'react';
import css from './bestOddsColumn.module.css';
import classnames from 'classnames';

const bestOddsColumn = (props) =>{
    const { source, score } = props.data;

    return(
        <div className={css.wrapper}>
            <div className={css.image}>
                <div className={ classnames( css.sourcemage, css[source] ) } ></div>
            </div>
            <div className={css.score} style={{textAlign: 'center', fontSize: '14px'}}>
                { score }
            </div>
        </div>
    )
}

export default bestOddsColumn;