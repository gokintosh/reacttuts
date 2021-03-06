import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import React,{useState} from "react";
import {nanoid} from "nanoid";










function App(props) {
  const [tasks,setTasks]=useState(props.tasks);
  function addTask(name){
  const newTask={id:"todo"+nanoid(),name:name,completed:false};
  setTasks([...tasks,newTask]);
}
  const taskList=tasks.map(task=>(
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>
  ))
  const taskNoun=taskList.length !==1?'tasks':'task';
  const headingText=`${taskList.length} ${taskNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>ToDoDo</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
