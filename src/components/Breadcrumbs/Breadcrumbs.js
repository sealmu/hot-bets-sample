import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'

import classes from './Breadcrumbs.module.css'



class Breadcrumbs extends Component {

    
generatePath = (path) =>{
    const splited = path.split("/")
    let current = '/'
    return (
        <Fragment>
            {
                splited.map( (item, index) => {
                    current = current + item + '/'
                    return (
                        <Link to={current} key={index}>
                            <i className='fa fa-angle-double-right' />
                            {item}
                        </Link>

                    )
                } )
            }
           
        </Fragment>
    )
}

removeLastChar = (str) =>{   
    return str.replace(/\/$/, "")
}

generateLinks = (path) =>{
    while(path.length !== (this.removeLastChar(path)).length){
        path = this.removeLastChar(path)
    }
    const splited = path.split("/")
    const elements = splited.length -1
    let current =''
    return (
        <ul className={classes.Breadcrumbs}>
            {
                splited.map( (item, index) => {
                    current = current + item + '/'
                    var first = 'HOTBET - ODDS COMPARISON AND LIVE SCORES PORTAL'
                    if(splited.length > 1){
                        first = 'HOME'
                    }
                        
                    return (
                        <li>
                            <Link to={current} key={index} className={ elements == index? classes.active : null}>                            
                                {item ? item.toUpperCase() : first}
                            </Link>
                            {
                                index+ 1 < splited.length 
                                ?  <i className="fa fa-caret-right"></i>/*<span className={classes.del}>/</span>*/
                                : null
                            }
                           
                        </li>

                    )
                } )
            }
          
           
        </ul>
    )
}

render(){
    //console.log("path:",this.props.path)
    return(
        
            this.generateLinks(this.props.path)
        
    )
}
}

function mapStateToProps(state) {
    return{
        path: state.router.location.pathname
    }
}

export default connect(mapStateToProps,null)(Breadcrumbs)

  