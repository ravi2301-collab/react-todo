
import './App.css';
import ls from 'local-storage'
import Card from './components/card';
import React, { useState, useEffect } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    if(ls.get('list')){
      const data = JSON.parse (ls.get('list'))
      setList(data) 
    }
  },[]);

  useEffect(() => {
    updateStorage(list);
  },[list]);


  const updateStorage = (param) =>{
    ls.set('list', JSON.stringify(param) )
  }

  const handleChange = ({target}) => {
    setInput(target.value);
  }

  const handleDelete = (i) => {
    setList( list.filter((el,index) => index !== i));
    updateStorage(list);
  }

  const handleSubmit = () => {
    if(input !== ""){
      setList(list => [ ...list, input]);
      setInput('');
    }

  }

  return (
    <div className="App">
        <div className="container py-5">

          <div className="text-center">
            <h2 className="display-4"> Todo List using Reactjs</h2>
            <p className="text-muted"> Keep track of what you want to do. Lets be organized!</p>
          </div>

          <div className="d-flex justify-content-center py-4">
            <input className="form-control"  value={input} onChange={ handleChange } placeholder="Enter things to do" />
            <button className= "btn btn-dark" onClick={ handleSubmit }> Submit </button>  
          </div>

          <Card list= {list} handleDelete= { handleDelete } />

        </div>
    </div>
  );
}

export default App;
