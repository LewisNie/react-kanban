import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import KanbanBoardContainer from './KanBanContainer';
import KanbanBoard from './KanbanBoard';
import {Router,Route,browserHistory} from 'react-router';
import EditCard from './EditCard';

import NewCard from './NewCard';

let mockCard = [{
    id:2,
    title:"Write some code",
    description:"code along with the samples in the book",
    status:"todo",
    tasks:[
        {
            id:1,
            name:'ContactList Example',
            done:true
        },{
            id:2,
            name:'Kanban Example',
            done:false
        },{
            id:3,
            name:'My own experimentss',
            done:false
        }
    ]
}]
ReactDom.render((
    <Router history={browserHistory}>
        <Route component={KanbanBoardContainer}>
            <Route path="/" component={KanbanBoard}>
                <Route path="new" component={NewCard}/>
                <Route path="edit/:card_id" component={EditCard}/>
            </Route>
        </Route>
    </Router>
),document.getElementById('root'));
//ReactDom.render(<List cards={mockCard} />, document.getElementById('root'));
//ReactDom.render(<Card title={cardsList[1].title} description={cardsList[1].description} cardId={cardsList[1].id} tasks = {cardsList[1].tasks} />, document.getElementById('root'));