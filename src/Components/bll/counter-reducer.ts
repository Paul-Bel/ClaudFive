

type InitialStateType = typeof initialState

const initialState = {min: 0, max: 10, num: 0}

export const counterReducer = (state: InitialStateType = initialState, action: any):InitialStateType => {
    return state
}