import React, {Component} from 'react'
import {connect} from 'react-redux' 

import classes from './LeftBar.module.css'
import TopEvents from '../TopEvents/TopEvents'
import SportEvents from '../SportEvents/SportEvents'
import SportLocationEvents from '../SportLocationEvents/SportLocationEvents'


class  LeftBar extends Component{

    removeLastChar = (str) =>{   
        return str.replace(/\/$/, "")
    }

    render(){    
        const level =  ((this.removeLastChar(this.props.path)).match(/\//g)  || []).length
        return(
            <aside className={classes.LeftBar}>
                { level == 0 ?  <TopEvents /> : null }
                { level == 0 ?  <SportEvents /> : null}
                { level >= 1 ?  <SportLocationEvents /> : null}
            </aside>
        )
    }
}

function mapStateToProps(state) {
    return{
        path: state.router.location.pathname
    }
}

export default connect(mapStateToProps,null)(LeftBar)
