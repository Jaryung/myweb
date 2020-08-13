import React from 'react';
import {Button, Comment, Form, Header, Image} from 'semantic-ui-react'
import dy from "./dy.jpg"
import human from "./human.jpg"
import Comments from "./comment.js"


function App() {
  return (
    <div>
    <p> Jaryung's web </p>
    <Image src = {dy} size='medium' centered  />
    <Comments/>
    </div>
  );
}

export default App;
