import { ACTION_ACTIVITY, ACTION_CAT_NAME } from '../actionTypes';

const initialState = {
    name: "Sunshine",
    activity: "napping",
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ACTIVITY: {
            const { activity } = action.payload;
            return {
                ...state,
                activity
            }
        }
        case ACTION_CAT_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }
        default:
            return state;
    }
};

export default activityReducer;