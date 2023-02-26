import React,{Component, Fragment} from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'

import classes from './Breadcrumbs2.module.css'

const cls = classes.Breadcrumbs +" " + classes.flat

class Breadcrumbs2 extends Component {

    
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
        <div className={cls}>
            {
                splited.map( (item, index) => {
                    current = current + item + '/'
                    var first = 'HOTBET - ODDS COMPARISON AND LIVE SCORES PORTAL'
                    if(splited.length > 1){
                        first = 'HOME'
                    }
                        
                    return (
                        <Link to={current} key={index} className={ elements == index? classes.active : null}>                            
                            {item ? item.toUpperCase() : first}
                        </Link>

                    )
                } )
            }
            <a href='#'></a>
           
        </div>
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

export default connect(mapStateToProps,null)(Breadcrumbs2)

  