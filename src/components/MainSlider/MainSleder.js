import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';

import classes from './MainSlider.module.css'
import GameBlock from '../../components/GameBlock/GameBlock2'
import "react-responsive-carousel/lib/styles/carousel.min.css";
//https://www.npmjs.com/package/react-responsive-carousel
//http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base

const sliderData = [
{
    game: {
        start: '03.05.2020 20:00',
        sport: 'football',
        league: 'Premier League',
        country: 'belarus',
        home: 'shakhtyor',
        away: 'Isloch' 
    },
    bets:[
        {
            bet:'1',
            bookmaker:'bwin',
            price:'1.68',
            link:'/go?type=game&b=betsafe&m=12&bet=1&g=1236'
        },
        {
            bet:'x',
            bookmaker:'1xbet',
            price:'3.92',
            link:'/go?type=game&b=1xbet&m=12&bet=1&g=1236'
        },
        {
            bet:'2',
            bookmaker:'1xbet',
            price:'6.15',
            link:'/go?type=game&b=1xbet&m=12&bet=1&g=1236'
        },
    ]    
},
{
    game: {
        start: '10.05.2020 10:00',
        sport: 'basketball',
        league: 'Torneo Carlos Ulloa',
        country: 'nicaragua',
        home: 'Masatepe',
        away: 'Leones de Managua' 
    },
    bets:[
        {
            bet:'1',
            bookmaker:'betsafe',
            price:'17.00',
            link:'/go?type=game&b=betsafe&m=12&bet=1&g=1235'
        },       
        {
            bet:'2',
            bookmaker:'1xbet',
            price:'1.00',
            link:'/go?type=game&b=1xbet&m=12&bet=2&g=1235'
        },
    ]    
},
{
    game: {
        start: '13.05.2020 19:00',
        sport: 'tennis',
        league: 'International Tennis Series',
        country: 'world',
        home: 'Strong Kirchheimer',
        away: 'James Cerretani' 
    },
    bets:[
        {
            bet:'1',
            bookmaker:'betsafe',
            price:'1.06',
            link:'/go?type=game&b=betsafe&m=12&bet=1&g=1234'
        },       
        {
            bet:'2',
            bookmaker:'1xbet',
            price:'10.50',
            link:'/go?type=game&b=1xbet&m=12&bet=2&g=1234'
        },
    ]    
},

]

class MainSlider extends Component{

    render(){
        return(
            <div className={classes.MainSlider}>
                <Carousel showArrows={true} autoPlay={true} showStatus={false} infiniteLoop={true}>
                    {sliderData.map((game,index) =>{
                        return(
                        <div key={game.game.home}>
                            <GameBlock data={game} />                            
                        </div>)
                    }) }
                </Carousel>
            </div>
        )
    }
} 

export default MainSlider