// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {    
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);

        case types.CREATE_POST:        
            return state.unshift(fromJS(action.payload));

        case types.CLEAR_POSTS:        
            return state.clear();      
            
        case types.REMOVE_POST:                
            /*for(var i = 0; i < state.length; i++) {
                if(state[i].id === action.payload) {
                    state.splice(state.indexOf(value), 1);                    
                    break;
                }
            }*/
          
            /*let filtered = [];
            for (let i = 0; i < state.length; i++) {
              if (action.payload !== state.List[i].id)
                filtered.push(state.List[i]);                
            }
            return filtered;*/

            return state;

        default:
            return state;
    }
};
