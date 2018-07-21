import React from 'react'
import dateFns from 'date-fns'

const Header = (props) => {
    const dateFormat = "MMMM YYYY";
    return (
        <div className="header row flex-middle">
            <div className="col col-start" onClick={props.prevMonth}>
                <div className="icon">
                    &lt;
                </div>
            </div>
            <div className="col col-center">
                <span>{dateFns.format(props.currentMonth, dateFormat)}</span>
            </div>
            <div className="col col-end" onClick={props.nextMonth}>
                <div className="icon">&gt;</div>
            </div>
        </div>
    )
}

export default Header