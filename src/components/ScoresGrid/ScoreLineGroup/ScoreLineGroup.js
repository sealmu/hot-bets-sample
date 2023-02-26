import React from 'react';
import css from './ScoreLineGroup.module.css';
import ScoreLine from '../ScoreLine/ScoreLine'
import ScoreGridCell from '../ScoreLine/ScoreGridCell/ScoreGridCell';


const transformPathIconNameToGlyph = (name) => {
    switch (name) {
        case 'footbal':
            return <i style={{ paddingRight: '6px', fontSize: '17px'}} className='fa fa-futbol-o' /> 
        case 'world':
            return <i style={{ paddingRight: '6px', fontSize: '19px', color: '#006299'}} className='fa fa-globe' /> 
        default:
            return "";
    }
} 

const ScoreLineGroup= (props) =>{
    const { list, breadcrumbs, config: { score: { columns: scoreColumns, subColumns }} } = props.data;

    return(
        <div className={css.wrapper}>

            <div className={css.teamsGrid}>
                <div className={css.breadcrumbs}>
                    {
                        breadcrumbs.list.map( (path, i, arr) => (
                            <React.Fragment key={i}>
                                { path.icon && <span>
                                    { transformPathIconNameToGlyph(path.icon) }
                                </span> }
                                <span>
                                    { path.text }
                                </span>
                                { arr.length - 1 > i && <span>
                                    <i style={{padding: '0 7px'}} className='fa fa-caret-right' /> 
                                </span> }
                            </React.Fragment>
                        ))
                    }
                </div>

                { subColumns && (
                    subColumns.templates.map( (template, i) => (
                        <div key={i} style={ {...(template.template.style || {})} }>
                            <ScoreLine data={template.template} ></ScoreLine> 
                        </div>
                    ) )
                )}

                <div>
                {
                    list.map( (row, i) => (
                        <div key={i} className={`${css.teamsGridRow} ${row.isUpdated && css.updated}`}>
                            <ScoreLine key={i} data={row} ></ScoreLine> 
                        </div>
                    ))
                }
                </div>
            </div>

            <div className={css.scoresGrid}>
                <div className={css.scoresGridBody}>
                {
                    scoreColumns.map( column => (
                        <div key={column.key} className={css.scoresGridColumn}>
                            <div className={css.scoresGridColumnHeader} style={ {...(column.style || {})} } >
                                <span>{column.header}</span>
                                { column.sorted && <span className='fa fa-caret-down' style={{fontSize: '12px', marginLeft: '3px', paddingTop: '2px'}}></span> }
                            </div>

                            { subColumns && (
                                subColumns.lists.map( (list, i) => (
                                    <div style={ {...( (list.list.columns.find(s => s.key === column.key) || {}).style || {})} }>
                                        <ScoreGridCell data={list.list.columns.find(s => s.key === column.key)} ></ScoreGridCell>    
                                    </div>
                                ))
                            )}

                            <div>
                            {
                                list.map( (row, i) => (
                                    // <ScoreLineScore></ScoreLineScore>
                                    <div key={i} className={css.scoresGridColumnCell} style={ {...( (row.data.scores && row.data.scores.find(s => s.column === column.key) || {}).style || {})} }>
                                        <ScoreGridCell data={row} column={column}></ScoreGridCell>    
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    ) )
                }
                </div>
                {/* <ScoreLineScore></ScoreLineScore> */}
            </div>
        </div>
    )
}

export default ScoreLineGroup;