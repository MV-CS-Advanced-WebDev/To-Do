
import Task from './components/Task.jsx' //importing the task component

import {useState} from 'react'//react 'hook' to help us manage state on the webpage

import GithubCorner from "react-github-corner";


const App = ()=> { //javascrpt function to handle the app of the whole page


  //State is a plain JavaScript object used by React to represent an information about the component's current situation

  const [currentTask, setCurrentTask] = useState('')//setting state of current task thats in the input feild
  const [taskArray, seTaskArray] = useState([])//setting state of taskArray to an empty array
  const [completedTasks, setCompletedTasks] = useState(0)//setting state of completedTasks to an empty array

  const handleAdd = () => {//javascrpt function to handle the add tasks
    if(currentTask !== ''){
      seTaskArray([...taskArray, currentTask]) //sets the state of the task array to have all the previous array items and the new task 
      setCurrentTask('')//restes test input field to be blank
    }
  }

  const handleDelete = (index) => {//javascrpt function to handle the delete tasks
    const newTaskArray = [...taskArray]//removes the item from the array by copying the array and removing the item at index you want to delet
    newTaskArray.splice(index, 1)
    seTaskArray(newTaskArray)//sets the current array to the spliced one
  }

  const handleComplete = (index) => { //javascrpt function to handle the complete tasks
    setCompletedTasks(completedTasks + 1);//adds one to the completed tasks counter
    handleDelete(index);//also deletes the task bc its completed
  }

  return (
   
    //this is jsx; inside the html javascirpt can be used if covered by a {} task


    /* For example if I want to use show static javascript expression inside an h1 I would:

      const ExampleJXS = () => {

        const title = 'Hello World'

        return (
          <h1>{title}</h1>
        )
      }

      this is much better than setting an id to the h1 and using innerHTML = 'Hello World'

    */
    <>
      <GithubCorner direction = 'left' onClick = {()=>window.open('https://github.com/MV-CS-Advanced-WebDev/To-Do', '_blank')} />

    <div className= 'container flexbox column center'> {/* This is the overall grey container*/}
      <div className = 'todoListBody flexbox column'> {/* This is the overall white container*/}
          <h1>To Do List</h1>{/*Title*/}
          <div className = 'flexbox column center'>
            <div className = 'flexbox column center'> {/* This is the overall adding form input*/}
                <div>
                  <input value = {currentTask} type='text' onChange = {(e)=>setCurrentTask(e.target.value)}placeholder='Add a task' />{/*Form to take in inputs. onChange function runs every tim teh input feild is changed*/}
                  <button onClick = {handleAdd}>Create</button>{/*Button to add the task*/}
                </div>
            </div>
            <br />
            {
              taskArray.map((task, index)=>{ /*This is the map function that takes in the taskArray and maps it to the task*/
                return <Task task = {task} key = {index} delete = {handleDelete} complete = {handleComplete}/>//custom component that takes in the task and displays it; passes in all functions as well as values
              })
            }
            <footer className = 'flexbox column center'><h3>Completed Tasks: <span style = {{color: 'green'}}>{completedTasks}</span></h3><button className = "buttonSlides" onClick = {()=>window.open('https://docs.google.com/presentation/d/1IOKMgyK5e9dWAdgxa0mcnN57eh7Li-Kdm5D-mzUBM9A/view', '_blank')}>Link to slides</button></footer>{/*Footer that has state of completed tasks which updates in task.java*/}
          </div>
      </div>
    </div>
    </>
  )
}

export default App; //exports app to be used in index.js

//app is really just a master component usually called a container component and composes other components
