import React from 'react';
import '../../src/App.css';
import {OkrTableProvider} from '../context/OkrTableContext'
import OkrTable from '../components/okr-table'
import AddObjective from '../components/add-objective/Component'

function App() {
  return (

    <OkrTableProvider>
       <div className="App">
      <h1>Hello World!</h1>
      <OkrTable/>
      <AddObjective/>
       </div>
       
    </OkrTableProvider>
    
  );
}

export default App;
