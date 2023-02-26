import React from 'react'

import classes from './gamePage.module.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
// import {Link}  from 'react-router-dom';
// <Link to={ this.generateLeagueLink(league) } >
import {connect} from 'react-redux' 
import ScoreGrid from '../../components/ScoresGrid/ScoresGrid';
import GameBlock from '../../components/GameBlock/GameBlock2'

const gamedata = {
    game: {
        start: '10.05.2020 10:00',
        sport: 'basketball',
        league: 'Torneo Carlos Ulloa',
        location: 'nicaragua',
        home: 'Masatepe',
        away: 'Leones de Managua' 
    },
    bets:[
        {
            bet:'1',
            bookmaker:'betsafe',
            price:'17.00',
            link:'/go?type=game&b=betsafe&m=12&bet=1&g=123'
        },       
        {
            bet:'2',
            bookmaker:'1xbet',
            price:'1.00',
            link:'/go?type=game&b=1xbet&m=12&bet=2&g=123'
        },
    ]    
}


const GamePage = () =>
{
    console.log('sent',gamedata)
    return(
    <main className={classes.gamePage}>
        <LeftBar />
        <div className={classes.main}>
            <GameBlock  data={gamedata} />
            <ScoreGrid></ScoreGrid>
        </div>
        <RightBar />
    </main>
    )
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

export default connect( mapStateToProps, mapDispathToProps)(GamePage);