import React from 'react'
import css from './BookmakersBar.module.css'

const BookmakersBar = (props) => {
    const { counter } = props.data;

    return(
        <div className={css.wrapper}>
            <div className={css.counter}>
                <span className={css.counterNumber}>{counter}</span>
                <span className={css.counterText}>Bookmakers</span>
            </div>
        </div>
    )
}

export default BookmakersBar;