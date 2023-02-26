import React, {Component} from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './Layout.module.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

class Layout extends Component{

    render(){
        return(
        <div className={classes.Layout}>
            <Header />     
            <Breadcrumbs />     
            {this.props.children}      
            <Footer />
        </div>
        )
    }
}

export default Layout
