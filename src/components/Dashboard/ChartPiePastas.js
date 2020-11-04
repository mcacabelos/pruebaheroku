import React from 'react';
import {Pie} from 'react-chartjs-2';

function App(){

  const data={
    labels:['Pasta Seca','Artesanal','Artesanal Rellena'],
    datasets:[{
      data: [74.56,10.54,14.90],
      backgroundColor: ['#E38627','#C13C37','green']
    }]
  };


const opciones={
  responsive: true
}
return (
  <div className="App">
  <Pie data={data} options={opciones}/>
  </div>

);
}
export default App;
