import React from 'react';
import css from './bestOddsLine.module.css';
import classnames from 'classnames';

const BestOddsLine = (props) => {
    const { source, title, data } = props.data;

    return(
        <div className={css.wrapper}>
            <div>
                <div className={ classnames( css.sourcemage, css[source] ) } ></div>
            </div>
            <div style={{textAlign: 'center', fontSize: '14px'}}>
                { title }
            </div>

            <div style={{marginLeft: 'auto', marginRight: '15px', fontSize: '18px'}}>
                <span className="fa fa-line-chart"></span>
            </div>
        </div>
    )
}

export default BestOddsLine;