import React, { Component } from "react";
import { Link } from "react-router-dom";

import { spaceTo } from "../../common";
import classes from "./GameBlock2.module.css";

const images = {
    basketball:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/basketball_fvfphy.jpg",
    tennis:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/tennis_tirfyb.jpg",
    football:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613656/slider/football_ntjfqc.jpg",
    default:
       // "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/hockey_xzil4n.jpg",
       "/images/bg/sport/soccer.png"
};

class GameBlock2 extends Component {
    generateGameLink = (game) => {
        return `/${spaceTo(game.sport)}/${spaceTo(game.location)}/${spaceTo(
            game.league
        )}/${spaceTo(game.home)}-vs-${spaceTo(game.away)}`;
    };
    renderHeader = (game) => {
        const temp = game.start.split(" ")[0].split('.')
        const date = new Date(temp[2],temp[1],temp[0])
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit', weekday:'long' })
        const [{ value: month },,{ value: day },,{ value: weekday }] = dateTimeFormat.formatToParts(date ) 

        return (
            <div className={classes.header}>
                <div className={classes.league}>
                    <Link
                        to={`${spaceTo(game.sport)}/${spaceTo(
                            game.location
                        )}/${spaceTo(game.league)}/${spaceTo(game.home)}`}
                    >
                        {`${game.league}`}
                    </Link>    
                    <div className={classes.empty}></div>
                    <Link
                        to={`${spaceTo(game.sport)}/${spaceTo(
                            game.location
                        )}/${spaceTo(game.league)}/${spaceTo(game.home)}`}
                    >
                          <span className={classes.date}>{`${weekday}, ${day} ${month }`}</span>
                        </Link>                   
                  
                </div>
               
                {this.renderTeams(game)}
               
            </div>
           );
    };

    renderCompareButton = () => {

        return(
            <div className={classes.compareblock}>
                <span className={classes.text}>
                    grab the highest odd
                </span>
                <Link to='/' className={classes.btn}>
                 
                        Compare All Odds <i class="fa fa-angle-right"></i>
                   
                </Link>
              
            </div>
        )
    }
    renderBody = (game) => {
        const style = {
            //backgroundImage: `url(/images/bg/sport/${this.props.data ? this.props.data.game.sport : ""}.jpg)`,
            backgroundImage0: `url(${
                images[this.props.data ? this.props.data.game.sport : "default"]
            }`,
            backgroundImage: `url(${
                images["default"]
            }`,
        };

        return(
            <div className={classes.body} style={style}>
               <div className={classes.empty}></div>
               { this.renderCompareButton()   }
                {this.renderBets(this.props.data.bets)}
            </div>
        )
    }

    renderTeams = (game) => {
        return (
            <Link to={this.generateGameLink(game)} className={classes.teams}>
                <span className={classes.teamName}>{game.home}</span>
                <span className={classes.homeTeam}></span>
                <span className={classes.time}>
                    <span className={classes.circle}>
                        <div className={classes.date}>
                            <span>starts</span>
                            <span>{game.start.split(" ")[1]}</span>
                        </div>                   
                    </span>
                   
                </span>
                <span className={classes.awayTeam}></span>
                <span className={classes.teamName} style={{textAlign:"left"}}>{game.away}</span>
            </Link>
        );
    };

    renderBets = (bets) => {
        var betsCopy = {...bets}
        
        return (
            <div className={classes.bets}>
              
                {bets.map((item, index) => {
                        const style = {
                            backgroundImage: `url(/images/bookie/1xbet.png)`        
                 
                        };

                    return (
                        <Link
                            to={item.link}
                            className={classes.betBlock}
                            key={item.bet}
                            title={item.bookmaker}
                        >
                            <span className={classes.bet}>{item.bet}</span>
                            <span className={classes.betbtn}>
                                <span className={classes.icon} style={style}></span>
                                <span className={classes.price}>{item.price}</span>                                  
                            </span>
                        </Link>
                    );
                })}
            </div>
        );
    };

    render() {
        //console.log("props", this.props);

        return (
            <div className={classes.GameBlock}>
                {this.props.data
                    ? this.renderHeader(this.props.data.game)
                    : null}
                {this.props.data
                    ? this.renderBody(this.props.data.game)
                    : null}
            
            </div>
        );
    }
}

export default GameBlock2;
