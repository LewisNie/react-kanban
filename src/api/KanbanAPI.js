/**
 * Created by luyuann on 9/30/2016.
 */
import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type':'application/json',
    Authorization:'any-string-you-like'

}
let KanbanAPI = {
    fetchCards(){
        let data= fetch(API_URL+'/cards',{headers:API_HEADERS})
            .then((response)=>response.json());
        console.log(data);
        return data;
    },
    addCard(card){
        let data = fetch(`${API_URL}/cards`,{
            method:'post',
            headers:API_HEADERS,
            body:JSON.stringify(card)
        }).then((response)=>response.json());
        return data;
    },
    updateCard(card){
        console.log("my card is");
        console.log(card);
        let data = fetch(`${API_URL}/cards/${card.id}`,{
            method:'put',
            headers:API_HEADERS,
            body:JSON.stringify(card)
        }).then((response)=>response.json());
        return data;
    }

};

export default KanbanAPI;