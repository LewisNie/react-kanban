/**
 * Created by luyuann on 9/14/2016.
 */
import React , {Component,PropTypes} from 'react';

class CheckList extends Component{
    checkInputKeyPress(evt){
        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId,evt.target.value);
            evt.target.value = '';
        }
    }
    render(){
        console.log(this.props.tasks);
        let tasks = this.props.tasks.map((task)=>(
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} onChange={this.props.taskCallbacks.toggle.bind(null,this.props.cardId,task.id,taskIndex)}/>
                {task.name}
                <a href="#" className="checklist__task--remove"  onClick={this.props.taskCallbacks.delete.bind(null,this.props.cardId,task.id,taskIndex)}/>
            </li>
        ));
        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" onKeyPress={this.checkInputKeyPress.bind(this)}/>
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId:PropTypes.number,
    tasks:PropTypes.arrayOf(PropTypes.object),
    taskCallbacks:PropTypes.object
}
export default CheckList;
