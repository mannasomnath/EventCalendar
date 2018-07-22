import React from 'react'
import dateFns from 'date-fns'

const renderEvents = (events) => {
    return events.map((e) => {
        return (
            <span className="event" key={e.id} title={e.name}>
                {e.name}
            </span>
        )
    })
}

const openModal = (e) => {
    e.preventDefault();
    let nodeModal = e.target.parentNode.nextElementSibling; 
    nodeModal.style.display = 'block';
}

const Cells = (props) => {
    const { currentMonth, selectedDate, eventArray } = props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formattedDay = "";
    let events = [...eventArray];

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        formattedDay = dateFns.format(day, "ddd");
        const cloneDay = day;
        const event = events.filter((event) => dateFns.isSameDay(day, new Date(event.createdAt.split('T')[0])) )
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => props.onDateClick(dateFns.parse(cloneDay))}
          >
            { event.length > 0 && 
                event.length > 2 ?  
                [
                renderEvents(event.slice(0, 2)), 
                <span key="more" className="more">
                    <a href="#" onClick={(e) => openModal(e)}>+ {event.length - 2} events</a>
                </span>,
                <div className="more-events" key="modal" style={{'display': 'none'}}>
                    <span className="date-info">{formattedDay + ' ' + formattedDate}</span>                  
                    <span className="close" onClick={(e) => e.target.parentNode.style.display = 'none' }>×</span>
                    {renderEvents(event)}
                </div>
                ]            
                :
                renderEvents(event)
            }
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
}

export default Cells