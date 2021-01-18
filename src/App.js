import './App.css';
import { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './APIs/client'
import { Sample } from './components/sample-data'


function App() {
  const [index, setIndex] = useState(0)
  const change = (e) => {
    if (e.target.value === '') {
      return
    }
    setIndex(e.target.value)
  }
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Sample index={index} />
        <h3>Enter the message number to get?</h3>
        <input onChange={(e) => { change(e) }}></input>
      </div>
    </ApolloProvider>
  );
}

export default App;
