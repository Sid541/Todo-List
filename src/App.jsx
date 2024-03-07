import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './style.css'
import AppName from './Components/Appname'
import Todo from './Components/Todo'
import TodoItem1 from './Components/TodoItem1'
import TodoItem2 from './Components/TodoItem2'

function App() {
  
return (
<div id='first'>
  <div class='container'>
    
  <center class="todo-container">
   <AppName></AppName>
   <Todo></Todo>
   <TodoItem1></TodoItem1>
   <TodoItem2></TodoItem2>
   
   
    
    </center>
    </div>
  
</div>
)
  
}

export default App
