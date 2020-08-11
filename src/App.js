import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Progress} from 'semantic-ui-react'
function App() {
  return (
    <div>
    <p> Jaryung </p>
    <Button Primary> hi! </Button>
    <Progress percent = {45} indicating/>
    </div>

  );
}

export default App;
