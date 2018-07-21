import React from 'react'
import dateFns from 'date-fns'

import Header from '../stateless/Header'
import Days from '../stateless/Days'
import Cells from '../stateless/Cells'

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        <Header 
          currentMonth={this.state.currentMonth}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
          />
        <Days currentMonth={this.state.currentMonth} />
        <Cells 
          currentMonth={this.state.currentMonth}
          selectedDate={this.state.selectedDate}
          onDateClick={this.onDateClick}
          />
      </div>
    );
  }
}

export default Calendar