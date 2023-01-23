import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    giftCount: {},
    genderCount: {
        3: {
            'Мальчик': null,
            'Девочка': null
        },
        4: {
            'Мальчик': null,
            'Девочка': null
        },
        5: {
            'Мальчик': null,
            'Девочка': null
        },
        6: {
            'Мальчик': null,
            'Девочка': null
        },
        7: {
            'Мальчик': null,
            'Девочка': null
        },
        8: {
            'Мальчик': null,
            'Девочка': null
        },
        9: {
            'Мальчик': null,
            'Девочка': null
        },
        10: {
            'Мальчик': null,
            'Девочка': null
        },
        11: {
            'Мальчик': null,
            'Девочка': null
        },
        12: {
            'Мальчик': null,
            'Девочка': null
        }
    },
}

export const chartsSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {

        giftCountHandler: (state, action) => {
            state.giftCount = {}
            for (const item of action.payload) {
                state.giftCount[item.giftType] = state.giftCount[item.giftType] ? state.giftCount[item.giftType] + 1 : 1
            }
        },
        genderCountHandler: (state, action) => {
            state.genderCount = {
                3: {
                    'Мальчик': null,
                    'Девочка': null
                },
                4: {
                    'Мальчик': null,
                    'Девочка': null
                },
                5: {
                    'Мальчик': null,
                    'Девочка': null
                },
                6: {
                    'Мальчик': null,
                    'Девочка': null
                },
                7: {
                    'Мальчик': null,
                    'Девочка': null
                },
                8: {
                    'Мальчик': null,
                    'Девочка': null
                },
                9: {
                    'Мальчик': null,
                    'Девочка': null
                },
                10: {
                    'Мальчик': null,
                    'Девочка': null
                },
                11: {
                    'Мальчик': null,
                    'Девочка': null
                },
                12: {
                    'Мальчик': null,
                    'Девочка': null
                }
            }
            for (const item of action.payload) {
                state.genderCount[item.age][item.gender] = state.genderCount[item.age][item.gender] ? state.genderCount[item.age][item.gender] + 1 :  1
            }
        },
    },

})

export const { giftCountHandler, genderCountHandler, countHandler } = chartsSlice.actions

export default chartsSlice.reducer




