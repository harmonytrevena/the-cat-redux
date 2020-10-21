import { ACTION_ACTIVITY, ACTION_CAT_NAME } from './actionTypes';

export const setActivity = activity => ({
    type: ACTION_ACTIVITY,
    payload: {
        activity
    }
});

export const setName = name => ({
    type: ACTION_CAT_NAME,
    payload: {
        name
    }
});