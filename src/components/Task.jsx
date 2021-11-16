import {BsCheckLg} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
//this is a component that takes in the task and displays it
const Task = (props) => {

    const task = props.task
    const key = props.key
    const deleteTask = props.delete
    const completeTask = props.complete //props are just parameters that are passed in from the parent component (in this current situaiton the App component)

    return ( 
        <>  {/*this is jsx*/}

            {/*
            
                inline css is done like this with a style attribute taking in an object of styles. The css attributes are camelCaed in react instead of seperated by a dash
                
                for example:

                    Vanilla CSS -> font-size: 20px;
                    React inline css -> fontSize: 20px;
            
            */}
            
            <div style = {{alignItems: 'center', justifyContent: 'space-around'}}className='taskContainer flexbox'> {/*This is the container for the task*/}
                <h3 style = {{marginLeft: '1vw'}}>{task}</h3> {/*This is the task*/}
                <br/>
                <div className = 'flexbox'>
                    <div onClick = {()=>completeTask(key)}style = {{color: 'green' }} className = 'icon flexbox center'><BsCheckLg size = {15}/></div>  {/*This is the complete button*/}
                    <div onClick = {() => deleteTask(key)} style = {{color: 'red' }}className = 'icon flexbox center'><ImCross size = {15}/></div>  {/*This is the delete button*/}
                </div>
            </div>
        </>
     );
}
 
export default Task;