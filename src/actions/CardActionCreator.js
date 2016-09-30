/**
 * Created by luyuann on 9/30/2016.
 */
import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import KanbanAPI from '../api/KanbanApi';

let CardActionCreators = {
    fetchCards(){
        AppDispatcher.dispatchAsync(KanbanAPI.fetchCards(),{
            request:constants.FETCH_CARDS,
            success:constants.FETCH_CARD_SUCCESS,
            error: constants.FETCH_CARD_ERROR
        });
    },
    addCard(card){
        AppDispatcher.dispatchAsync(KanbanAPI.addCard(card),{
            request:constants.CREATE_CARD,
            success:constants.CREATE_CARD_SUCCESS,
            error:constants.CREATE_CARD_ERROR
        },{card});
    },
    updateCard(card){
        AppDispatcher.dispatchAsync(KanbanAPI.updateCard(card),{
            request:constants.UPDATE_CARD,
            success:constants.UPDATE_CARD_SUCCESS,
            error:constants.UPDATE_CARD_ERROR
        },{card})
    }
};



export default CardActionCreators;