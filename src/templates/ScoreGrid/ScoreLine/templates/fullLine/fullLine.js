import React from 'react';
import css from './fullLine.module.css';
import BookmakersBar from '../../../../../components/BookmakersBar/BookmakersBar';

const components = {
    BookmakersBar: BookmakersBar
}

const fullLine = (props) =>{
    const { height, component } = props.data;
    const Component = components[component];

    return(
        <div className={css.wrapper} style={{height}}>
            <Component data={props.data}></Component>
        </div>
    )
}

export default fullLine;