import React, {useState} from 'react';
import UpdateTask from '../popup/UpdateTask';
const Task = ({taskObj, index, deleteTask, updateTaskEdit}) => {
    const [modal, setModal ] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
       {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateTaskEdit(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className = "row">
        <div className = "card-wrapper ">
            
            <div className  = "card-top " style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className  = "card-header" style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Des}</p>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <button className = "far " style={{"color" : colors[index%5].primaryColor, "borderColor": colors[index%5].primaryColor}} onClick = {() => setModal(true)}>Edit</button>
                    <button className ="bi " style = {{"color" : colors[index%5].primaryColor, "borderColor": colors[index%5].primaryColor}} onClick = {handleDelete}>Delete</button>
                </div>
        </div>
        </div>
        <UpdateTask modal = {modal} toggle = {toggle} updateTask= {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Task;