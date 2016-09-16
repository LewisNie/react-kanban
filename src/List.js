/**
 * Created by luyuann on 9/14/2016.
 */
import React, {Component} from 'react';
import Card from './Card';

class List extends Component{
    render(){
        console.log(this.props.cards);
        var cards = this.props.cards.map((card)=>{
            return <Card key={card.id}
                         id = {card.id}
                         title={card.title}
                         description={card.description}
                         color = {card.color}
                         tasks = {card.tasks}
                    />
        })
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>)
    }
}

export default List;