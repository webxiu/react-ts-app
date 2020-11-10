import React from 'react';
import './App.css';
import Hello from './components/Hello'

const myClick = (data: any) => {
  console.log('aa:' ,data)
}
function App() {
  return (
    <div className="App">
      react-ts
      <Hello title="标题==" age={18} myClick={myClick} />
    </div>
  );
}

export default App;
