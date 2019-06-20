import React from 'react';
import '../../src/App.css';
import {OkrTableProvider} from '../context/OkrTableContext'
import OkrTable from '../components/okr-table'

function App() {
  return (

    <OkrTableProvider>
       <div className="App">
      <h1>Hello World!</h1>
      <OkrTable/>
       </div>
    </OkrTableProvider>
    
  );
}

export default App;
