import React, {useState} from "react";

function ToDoList(){
    
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take Bath", "Take Shawor"])
    const [newTask, setNewTask] = useState()

    function addTask(event){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleAddTask(event) {
        setNewTask(event.target.value);
    }

    function removeTask(index){
        setTasks(tasks.filter((_, i) => i != index));
    }

    function moveUp(index){
        const undatedTasks = [...tasks]
        if(index > 0){
            [undatedTasks[index], undatedTasks[index - 1]] = 
            [undatedTasks[index-1], undatedTasks[index]];
            setTasks(undatedTasks)
        }
    }

    function moveDown(index){
        const updatedTasks = [...tasks]
        if(tasks.length - 1 > index){
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            <input type="text" value={newTask} onChange={handleAddTask} placeholder="write to add task..." />
            <button onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    {task} -- - 
                    <button onClick={() => moveUp(index)}>Up</button>
                    <button onClick={() => moveDown(index)}>Down</button>
                    <button onClick={() => removeTask(index)}>Delete</button>

                </li>
                )}
            </ol>

        </div>
    );

}


export default ToDoList