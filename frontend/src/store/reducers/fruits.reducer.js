import * as Actions from '../actions';

const initialState = {
    fruits: []
};

const fruitsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_FRUITS:
            {
                return {
                    ...state,
                    ...action.payload
                };
            }
        default:
            {
                return state;
            }
    }
};

export default fruitsReducer;