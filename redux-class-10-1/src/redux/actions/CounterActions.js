import { INCREASE_COUNTER, DECREASE_COUNTER, RESET } from '../types/CounterTypes';

export const increase = () => {
    return {
        type:INCREASE_COUNTER
    }
}
export const decrease = () => {
    return {
        type:DECREASE_COUNTER
    }
}
export const reset = () => {
    return {
        type:RESET
    }
}