const initSt: InitStType = {
    initialValue: 0,
    resetValue: 0,
    startValue: 0,
    maxValue: 1,
}
export type InitStType = {
    initialValue: number
    resetValue: number
    startValue: number
    maxValue: number

}
type ActionsType = incrementValueACType | setValueACType | resetValueACType | startValueACType | maxValueACType

export const CounterReducer = (state = initSt, action: ActionsType): InitStType => {
    switch (action.type) {
        case 'SET_VALUE': {

            return {...state, initialValue: state.startValue}
        }
        case 'INC_VALUE': {
          return {...state,initialValue:state.initialValue+1}

        }
        case 'RESET_VALUE': {
            return {...state, initialValue:state.resetValue}
        }
        case 'START_VALUE': {
            return {...state, startValue: action.value}
        }
        case 'MAX_VALUE': {
            return {...state, maxValue: action.value}
        }
        default:
            return state
    }
}

type incrementValueACType = ReturnType<typeof incrementValueAC>
type setValueACType = ReturnType<typeof setValueAC>
type resetValueACType = ReturnType<typeof resetValueAC>
type startValueACType = ReturnType<typeof startValueAC>
type maxValueACType = ReturnType<typeof maxValueAC>
export const incrementValueAC = () => {
    return {
        type: 'INC_VALUE'
    } as const
}
export const resetValueAC = () => {
    return {
        type: 'RESET_VALUE'
    } as const
}
export const setValueAC = (startValue: number) => {
    return {
        type: 'SET_VALUE',
        startValue
    } as const
}

export const startValueAC = (value: number) => {
    return {
        type: 'START_VALUE',
        value
    } as const
}

export const maxValueAC = (value: number) => {
    return {
        type: 'MAX_VALUE',
        value
    } as const
}