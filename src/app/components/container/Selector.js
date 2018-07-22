import React from 'react'
import { Link } from 'react-router-dom'

class Selector extends React.Component {
    state = {
        selectedMonth: true,
        selectedWeek: false
    }

    selectMonth = () => {
        this.setState({
            selectedMonth: true,
            selectedWeek: false 
        })
    }

    selectWeek = () => {
        this.setState({
            selectedMonth: false,
            selectedWeek: true 
        })
    }

    render() {
        let monthClass = "selector";
        let weekClass = "selector";
        if(this.state.selectedMonth) {
            monthClass += " selected";
        }
        if(this.state.selectedWeek) {
            weekClass += " selected";
        }
        return (
            <div className="selector-container">
                <span className={monthClass} onClick={this.selectMonth}><Link to="/">Month</Link></span>
                <span className={weekClass} onClick={this.selectWeek}><Link to="/week">Week</Link></span>
            </div>
        )
    }
}

export default Selector
