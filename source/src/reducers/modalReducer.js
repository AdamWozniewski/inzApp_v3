import ACTIONS from '../static/ACTIONS';

const defaultState = {
    dupa: "chuj"
};
export function modalReducer (state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}

export default modalReducer;