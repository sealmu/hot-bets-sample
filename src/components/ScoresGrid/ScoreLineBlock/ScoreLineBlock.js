import React from 'react';
import css from './ScoreLineBlock.module.css';
import ScoreLineGroup from '../ScoreLineGroup/ScoreLineGroup'

const ScoreLineBlock= (props) =>{
    const { groups, header } = props.data;

    return(
        <div className={css.wrapper}>
            <div className={css.header}>
                <div className={css.headerTitleBlock}>
                    { header.icon && (
                        <i className={` ${css.headerIcon} fa fa-${header.icon}`} /> 
                    ) }
                    <span className={css.headerName}>{header.name}</span>
                </div>
                <svg height="35" width="15">
                    <polygon points="0,0 15,0 0,35" style={{fill: '#016299', strokeWdth: 1 }} />
                </svg>
            </div>
            <div>
            { groups.map( (group,i) => (
                <ScoreLineGroup key={i} data={group}></ScoreLineGroup>
            ) ) }
            </div>
        </div>
    )
}

export default ScoreLineBlock;