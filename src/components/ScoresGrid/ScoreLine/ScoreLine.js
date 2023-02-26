import React from 'react';
import css from './ScoreLine.module.css';
import ScoreLineHeader from './ScoreLineHeader/ScoreLineHeader';
import ScoreLineBody from './ScoreLineBody/ScoreLineBody';
import { withRouter } from "react-router";
import templates from '../../../templates/ScoreGrid/ScoreLine/templates';
import resolver from '../../../templates/ScoreGrid/ScoreLine/templateResolver';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import { enums } from '../../../consts'; 

const ScoreLine = (props) => {
    const { data, match: { params: urlParams } } = props;

    const Pages = enums.pages;
    let currentPage = Pages.main;
    currentPage = urlParams[Pages.sport] ? Pages.sport : currentPage;
    currentPage = urlParams[Pages.location] ? Pages.location : currentPage;
    currentPage = urlParams[Pages.league] ? Pages.league : currentPage;
    currentPage = urlParams[Pages.game] ? Pages.game : currentPage;

    
    const gameParam = data.data && data.data.teams ? `${data.data.teams[0].name.replace(/\s+/g, '_')}-${data.data.teams[1].name.replace(/\s+/, '_')}`: '';


    const Template = data.templateName ? templates.components[data.templateName] : null;

    return Template ? (<Template data={data} />) : (<div className={css.wrapper}>
            <div className={css.dataBlock}>
                <ScoreLineHeader data={data} ></ScoreLineHeader>
                <Link to={`/${Pages.sport}/${Pages.location}/${Pages.league}/${gameParam}`}>
                    <ScoreLineBody data={data} ></ScoreLineBody>
                </Link>
            </div>
            {/* <div className={css.scoreBlock}>
                <ScoreLineScore></ScoreLineScore>
            </div> */}
        </div>);
}

function mapStateToProps(state){
    return{
        //topEventList: state.events.topEventList
    }
}

function mapDispathToProps(dispatch){
    return {
        //getTopEvents:  () => dispatch( getTopEvents())
    }
}

export default withRouter(connect( mapStateToProps, mapDispathToProps)(ScoreLine));