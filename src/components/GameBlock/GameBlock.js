import React, { Component } from "react";
import { Link } from "react-router-dom";

import { spaceTo } from "../../common";
import classes from "./GameBlock.module.css";

const images = {
    basketball:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/basketball_fvfphy.jpg",
    tennis:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/tennis_tirfyb.jpg",
    football:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613656/slider/football_ntjfqc.jpg",
    default:
        "https://res.cloudinary.com/hot-bets/image/upload/v1588613655/slider/hockey_xzil4n.jpg",
};

class GameBlock extends Component {
    generateGameLink = (game) => {
        return `/${spaceTo(game.sport)}/${spaceTo(game.location)}/${spaceTo(
            game.league
        )}/${spaceTo(game.home)}-vs-${spaceTo(game.away)}`;
    };
    renderHeader = (game) => {
        return (
            <div className={classes.league}>
                <Link
                    to={`${spaceTo(game.sport)}/${spaceTo(
                        game.location
                    )}/${spaceTo(game.league)}/${spaceTo(game.home)}`}
                >
                    {`${game.league} | ${game.location}`}
                </Link>
                <span className={classes.date}>{game.start.split(" ")[0]}</span>
            </div>
        );
    };
    renderTeams = (game) => {
        return (
            <Link to={this.generateGameLink(game)} className={classes.teams}>
                <span className={classes.teamName}>{game.home}</span>
                <span className={classes.homeTeame}></span>
                <span className={classes.time}>
                    {" "}
                    <span>starts</span>
                    <span>{game.start.split(" ")[1]}</span>
                </span>
                <span className={classes.awayTeam}></span>
                <span className={classes.teamName}>{game.away}</span>
            </Link>
        );
    };

    renderBets = (bets) => {
        return (
            <div className={classes.bets}>
                {bets.map((item, index) => {
                    return (
                        <Link
                            to={item.link}
                            className={classes.betBlock}
                            key={item.bet}
                            title={item.bookmaker}
                        >
                            <span className={classes.bet}>{item.bet}</span>
                            <span className={classes.price}>{item.price}</span>
                        </Link>
                    );
                })}
            </div>
        );
    };

    render() {
        console.log("props", this.props);
        const style = {
            //backgroundImage: `url(/images/bg/sport/${this.props.data ? this.props.data.game.sport : ""}.jpg)`,
            backgroundImage: `url(${
                images[this.props.data ? this.props.data.game.sport : "default"]
            }`,
        };

        return (
            <div className={classes.GameBlock} style={style}>
                {this.props.data
                    ? this.renderHeader(this.props.data.game)
                    : null}
                {this.props.data
                    ? this.renderTeams(this.props.data.game)
                    : null}
                {this.props.data ? this.renderBets(this.props.data.bets) : null}
            </div>
        );
    }
}

export default GameBlock;
