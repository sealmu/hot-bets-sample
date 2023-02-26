import React from 'react';
import css from './ScoreGridCell.module.css';
import templates from '../../../../templates/ScoreGrid/ScoreGridCell/templates';
import resolver from '../../../../templates/ScoreGrid/ScoreGridCell/templateResolver';


const ScoreGridCell = (props) =>{
    const { data, column } = props;
    const cellData = column ? data.data.scores.find( score => score.column == column.key) : data;
    const templateName = cellData ? (cellData.templateName || data.templateName ) : data.templateName ;
    const isRenderTemplate = cellData && cellData.render;
    const resolveTemplate = isRenderTemplate ? resolver(cellData) : (templateName || resolver(cellData));
    const Template = resolveTemplate && ( typeof resolveTemplate == "function" ? resolveTemplate :  templates.components[templateName || resolver(cellData)] );

    return(
        <div className={css.wrapper}>
             { Template && <Template data={cellData}></Template> }
        </div>
    )
}

export default ScoreGridCell;