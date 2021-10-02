import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Create = ({ modal, toggle, save }) => {
const [taskName, setTaskName] = useState('');
const [des, setDes] = useState('');

const handleChange = (e) => {
   
    const {name, value} =e.target

    if(name === "taskName"){
        setTaskName(value)
    }
    else{
        setDes(value)
    }
}

const handleSave = (e) => {
    e.preventDefault()
let tasks = {}
tasks["Name"] = taskName
tasks["Des"] = des
save(tasks)

}

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                         <div className = "form-group">
                             <label>Task Name</label>
                             <input type = "text" className="form-control" name = "taskName" value = { taskName} onChange= { handleChange} />
                         </div>
                         <div className = "form-group">
                           <label>Description</label>
                           <textarea rows = "4" className="form-control" name = "des" value = { des } onChange= { handleChange} ></textarea>
                         </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Create;