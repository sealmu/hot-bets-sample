import React, { useEffect } from 'react';
import css from './ScoresGrid.module.css';
import ScoreLineBlock from './ScoreLineBlock/ScoreLineBlock';
import {connect} from 'react-redux' 
import { bindActionCreators } from 'redux';
import { fetchScores } from '../../store/actions/scores';
import { withRouter } from "react-router";
import { enums } from '../../consts'; 


const ScoreGrid= (props) =>{
    const { blocks, fetchScores, match: { params: urlParams } } = props;
    const Pages = enums.pages;

    let currentPage = Pages.main;
    currentPage = urlParams[Pages.sport] ? Pages.sport : currentPage;
    currentPage = urlParams[Pages.location] ? Pages.location : currentPage;
    currentPage = urlParams[Pages.league] ? Pages.league : currentPage;
    currentPage = urlParams[Pages.game] ? Pages.game : currentPage;

    useEffect(() => {
        console.log("***", urlParams);
        fetchScores({page: currentPage, params: urlParams});
      }, [urlParams]);

    return(
        <div className={css.wrapper}>
            { blocks.map( (block,i) => (
                <ScoreLineBlock key={i} data={block}></ScoreLineBlock>
            ) ) }
        </div>
    )
}



function mapStateToProps(state){
    return{
        blocks: state.scores.blocks
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators({
        fetchScores
    }, dispatch)
}

export default withRouter(connect( mapStateToProps, mapDispathToProps)(ScoreGrid));