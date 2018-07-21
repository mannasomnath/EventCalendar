import React from 'react'
import Calendar from './container/Calendar'

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App