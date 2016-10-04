import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';

class CardStore extends ReduceStore{
    getInitialState(){
        return [];
    }

    getCardIndex(id){
        return this._state.findIndex((card) => card.id == id);
    }

    reduce(state,action){
        let cardIndex,taskIndex;

        switch (action.type){
            case constants.FETCH_CARD_SUCCESS:
                console.log(action.payload.response);
                return action.payload.response;
            case constants.CREATE_CARD:
                return update(this.getState(),{$push:[action.payload.card]});
            case constants.CREATE_CARD_SUCCESS:
                cardIndex = this.getCardIndex(action.payload.card.id);
                return update(this.getState(),{
                    [cardIndex] : {
                        id: {$set : action.payload.response.id}
                    }
                });
            case constants.UPDATE_CARD_SUCCESS:
                cardIndex = this.getCardIndex(action.payload.card.id);
                return update(this.getState(), {
                    [cardIndex]:{
                        $set:action.payload.card
                    }
                });
            case constants.UPDATE_CARD_STATUS:
                cardIndex = this.getCardIndex(action.payload.cardId);
                let card = this.getState();
                if(card[cardIndex].status != action.payload.listId){
                    return update(this.getState(), {
                        [cardIndex]:{
                            status: {$set:action.payload.listId}
                        }
                    })
                }
            case constants.UPDATE_CARD_POSITION:


            default:
                return state;
        }
    }
}

export default new CardStore(AppDispatcher);