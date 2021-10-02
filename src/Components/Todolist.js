import React, {useEffect, useState} from 'react';
import Create from '../popup/Create'
import Task from './Task';

const Todolist = () => {
    const [modal, setModal] = useState(false);
    const [taskarry, setTaskList] = useState([]);

    useEffect(() => {
        let list =localStorage.getItem("taskarry")

        if(list){
            let obj = JSON.parse(list)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempTask = taskarry
        tempTask.splice(index, 1)
        localStorage.setItem("taskarry", JSON.stringify(tempTask))
        setTaskList(tempTask)
        window.location.reload()
    }

    const updateTaskEdit = (obj, index) => {
        let tempTask = taskarry
        tempTask[index] = obj
        localStorage.setItem("taskarry", JSON.stringify(tempTask))
        setTaskList(tempTask)
        window.location.reload()
    }

    const toggle = () => {
        setModal ( !modal );
    }

    const saveTask =(tObj) => {
        let tempTask = taskarry
        tempTask.push(tObj)
        localStorage.setItem("taskarry", JSON.stringify(tempTask))
        setTaskList(tempTask)
        setModal( false )
    }

    return (
       <> <div className = "header text-center ">
            <h3 > Todo List </h3>
            <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}> Create Task</button>
        </div>
        
        <div className = "task">
        {taskarry && taskarry.map((obj , index) => <Task taskObj = {obj} index = {index} deleteTask = {deleteTask} updateTaskEdit= {updateTaskEdit}/> )}

        </div>
        <Create toggle = {toggle} modal = {modal} save = {saveTask} />
        </>
    );
};

export default Todolist;