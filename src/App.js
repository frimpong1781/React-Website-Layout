import React from 'react';

function App() {
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>My JSX Website Layout</h1>

        <div style={{backgroundColor: 'lightblue', height: '10vh', width: '90vw', margin: 'auto'}}>
          <h3>Navbar</h3>
        </div>

        <div style={{backgroundColor: 'lightblue', height: '20vh', width: '90vw', margin: 'auto'}}>
          <h3>hero</h3>
        </div>


        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35vh', 
        width: '90vw', margin: 'auto'}}>

          <div style={{backgroundColor: 'lightblue', height: '30vh', width: '25vw'}}>
            <h4>Main</h4>
          </div>

          <div style={{backgroundColor: 'lightblue', height: '30vh', width: '25vw'}}>
            <h4>Main</h4>
          </div>

          <div style={{backgroundColor: 'lightblue', height: '30vh', width: '25vw'}}>
            <h4>Main</h4>
          </div>
        </div>

        <div style={{backgroundColor: 'lightblue', height: '15vh', width: '90vw', margin: 'auto'}}>
          <h3>footer</h3>
        </div>

    </div>
  );
}

export default App;
