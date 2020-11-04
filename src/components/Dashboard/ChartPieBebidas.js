import React from 'react';
import {Pie} from 'react-chartjs-2';

function App(){

  const data={
    labels:['Aguas Saborizadas/Agua','Cervezas','Gaseosas','Bebidas Alcoholicas'],
    datasets:[{
      data: [74.56,10.54,9.42,5.42],
      backgroundColor: ['#E38627','#C13C37','green','#6A2135']
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
