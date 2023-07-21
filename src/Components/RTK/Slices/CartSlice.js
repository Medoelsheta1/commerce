import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: {
        items: [],
        isLogin: false,
        Token: '',
        userData: [],
        isAdmin: false,
    },
    name: 'cart',
    reducers: {
        Add: (state , action) => {
            //
            const itemIndex =  state.items.findIndex((item) => item.id === action.payload.id)
            const existItem = state.items[itemIndex]
                if (existItem){
                    existItem.amount += +action.payload.quantaty
                }else {
                    state.items =  [...state.items , action.payload]
                }
        },
        Remove: (state , action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
            const existItem = state.items[itemIndex]
            
            if (existItem.amount > 1) {
                existItem.amount--
            }else {
                state.items = state.items.filter((item)=> item.id !== action.payload.id)
            }
        },
        Delete: (state , action) => {
            state.items = state.items.filter((item)=> item.id !== action.payload.id)
        },
        Reset: (state) => {
            state.items = []
        },
        LogIn: (state , action) => {
            state.isLogin = true
            state.Token = action.payload
        },
        LogOut: (state) => {
            state.isLogin = false;
            state.Token = ''
        },
        AdduserData: (state , action) => {
            state.userData = action.payload
            state.isAdmin = action.payload.isAdmin
        }
    }
})

export const {Add , Remove , Reset , Delete , LogIn , LogOut , AdduserData  } = cartSlice.actions

export default cartSlice.reducer

