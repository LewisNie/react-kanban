import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import KanbanBoard from './KanbanBoard';
//import CheckList from './CheckList';
//import Card from './Card';
import List from './List';
let cardsList = [
    {
        id:1,
        title:'Read the Book',
        description:'I should read the while book',
        color:'#BD8D31',
        status:'in-progress',
        tasks:[]
    },{
        id:2,
        title:"Write some code",
        description:"code along with the samples in the book",
        color:'#3A7E28',
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
    }
];
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
ReactDom.render(<KanbanBoard cards={cardsList} />,document.getElementById('root'));
//ReactDom.render(<List cards={mockCard} />, document.getElementById('root'));
//ReactDom.render(<Card title={cardsList[1].title} description={cardsList[1].description} cardId={cardsList[1].id} tasks = {cardsList[1].tasks} />, document.getElementById('root'));