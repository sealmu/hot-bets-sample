import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "font-awesome/css/font-awesome.min.css";

import classes from "./SportEvents.module.css";
import {
  getSportEvents,
  changeSportEventsType,
} from "../../store/actions/events";

class SportEvents extends Component {
  generateSportLink = (item) =>
    `${item.sportName.toLowerCase().replace(" ", "-")}`;

  componentDidMount() {
    this.props.changeSportEventsType("All");
    this.props.getSportEvents();
    setInterval(() => {
      this.props.getSportEvents();
    }, 1000);
  }

  clickMenuHandler = (buttonType) => {
    this.props.changeSportEventsType(buttonType);
    this.props.getSportEvents();
  };

  liveSelected = () => (
    <svg height="23" width="15" style={{ backgroundColor: "#017aaf" }}>
      <polygon points="0,0 15,0 0,23" style={{ fill: "#016299" }}></polygon>
    </svg>
  );
  allSelected = () => (
    <svg height="23" width="15" style={{ backgroundColor: "#016299" }}>
      <polygon points="0,0 15,0 0,23" style={{ fill: "#017aaf" }}></polygon>
    </svg>
  );
  todaySelected = () => (
    <svg height="23" width="15" style={{ backgroundColor: "#016299" }}>
      <polygon points="0,0 15,0 0,23" style={{ fill: "#016299" }}></polygon>
    </svg>
  );

  renderHeaderMenu2 = () => {
    return (
      <li className={classes.menu}>
        <span
          onClick={() => this.clickMenuHandler("All")}
          className={this.props.sportEventType === "All" ? classes.on : null}
        >
          All
        </span>
        {this.props.sportEventType === "All"
          ? this.allSelected()
          : this.props.sportEventType === "Live"
          ? this.liveSelected()
          : this.todaySelected()}
        <span
          onClick={() => this.clickMenuHandler("Live")}
          className={this.props.sportEventType === "Live" ? classes.on : null}
        >
          Live
        </span>
        {this.props.sportEventType === "Today"
          ? this.liveSelected()
          : this.props.sportEventType === "Live"
          ? this.allSelected()
          : this.todaySelected()}
        <span
          onClick={() => this.clickMenuHandler("Today")}
          className={this.props.sportEventType === "Today" ? classes.on : null}
        >
          Today
        </span>
      </li>
    );
  };

  renderHeaderMenu = () => {
    return (
      <ul className={classes.menuHeader}>
        <li className={this.props.sportEventType === "All" ? classes.on : null}>
          <div>
            <span onClick={() => this.clickMenuHandler("All")}>All</span>
          </div>
        </li>
        <li
          className={this.props.sportEventType === "Live" ? classes.on : null}
        >
          <div>
            <span onClick={() => this.clickMenuHandler("Live")}>Live</span>
          </div>
        </li>
        <li
          className={this.props.sportEventType === "Today" ? classes.on : null}
        >
          <div>
            <span onClick={() => this.clickMenuHandler("Today")}>Today</span>
          </div>
        </li>
      </ul>
    );
  };

  render() {
    let sportEventList = [];
    if (this.props.sportEventList) {
      if (this.props.sportEventType === "All") {
        sportEventList = this.props.sportEventList;
      } else {
        this.props.sportEventList.forEach((element) => {
          if (this.props.sportEventType === "Live" && element.inplay) {
            sportEventList.push(element);
          }
          if (this.props.sportEventType === "Today" && element.today) {
            sportEventList.push(element);
          }
        });
      }
    }
    return (
      <div className={classes.SportEvents}>
        <div className={classes.title}>Sports</div>
        {this.renderHeaderMenu()}
        <ul className={classes.menu}>
          {this.props.sportEventList && this.props.sportEventList.length
            ? sportEventList.map((item) => {
                let games = item.games;
                if (this.props.sportEventType === "Live") {
                  games = item.inplay;
                }
                if (this.props.sportEventType === "Today") {
                  games = item.today;
                }
                return (
                  <li key={item.sportId}>
                    <Link to={this.generateSportLink(item)}>
                      <i className="fa fa-futbol-o" />
                      <span>{item.sportName} </span>
                      <span>{games > 0 ? games : null}</span>
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
    sportEventList: state.events.sportEventList,
    sportEventType: state.events.sportEventType,
  };
}

function mapDispathToProps(dispatch) {
  return {
    getSportEvents: () => dispatch(getSportEvents()),
    changeSportEventsType: (sportEventType) =>
      dispatch(changeSportEventsType(sportEventType)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(SportEvents);
