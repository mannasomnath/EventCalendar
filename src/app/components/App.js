import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Calendar from './container/Calendar'
import Selector from './container/Selector'
import WeekView from './stateless/WeekView'

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <main>
          <Selector />
          <Switch>
            <Route exact path='/' component={Calendar} />
            <Route path="/week" component={WeekView} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App