import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "font-awesome/css/font-awesome.min.css";

import classes from "./TopEvents.module.css";
import { getTopEvents } from "../../store/actions/events";

class TopEvents extends Component {
  generateLeagueLink = (league) =>
    `${league.sportName.toLowerCase().replace(" ", "-")}/${league.locationName
      .toLowerCase()
      .replace(" ", "-")}/${league.leagueName.toLowerCase().replace(" ", "-")}`;

  componentDidMount() {
    this.props.getTopEvents();
    setInterval(() => {
      this.props.getTopEvents();
    }, 1000);

    //  console.log("in getTopEvents'", new Date().toTimeString())
  }

  render() {
    return (
      <div className={classes.TopEvents}>
        <div className={classes.title}>Top Events</div>
        <ul>
          {this.props.topEventList && this.props.topEventList.length !== 0
            ? this.props.topEventList.map((league) => {
                return (
                  <li key={league.leagueId}>
                    <Link to={this.generateLeagueLink(league)}>
                      <i className="fa fa-futbol-o" />
                      <span>{league.leagueName} </span>
                      <span>{league.games > 0 ? league.games : null}</span>
                    </Link>
                    <span className={classes.hr}></span>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topEventList: state.events.topEventList,
  };
}

function mapDispathToProps(dispatch) {
  return {
    getTopEvents: () => dispatch(getTopEvents()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TopEvents);
