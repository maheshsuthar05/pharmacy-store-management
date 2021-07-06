const initialState = {
    medicines: window.localStorage.getItem("medicines") === null ? [] : JSON.parse(window.localStorage.getItem("medicines")),
    executives: window.localStorage.getItem("executives") === null ? [] : JSON.parse(window.localStorage.getItem("executives")),
    orders: window.localStorage.getItem("orders") === null ? [] : JSON.parse(window.localStorage.getItem("orders")),
    exeOrders: window.localStorage.getItem("exeOrders") === null ? [] : JSON.parse(window.localStorage.getItem("exeOrders"))
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'ADD_MEDICINE':
            const finalData = [...state.medicines, payload];
            window.localStorage.setItem("medicines", JSON.stringify(finalData));
            return { ...state, medicines: finalData }

        case 'UPDATE_MEDICINE':
            window.localStorage.setItem("medicines", JSON.stringify(payload));
            return { ...state, medicines: payload }

        case 'ADD_EXECUTIVE':
            const data = [...state.executives, payload];
            window.localStorage.setItem("executives", JSON.stringify(data));
            return { ...state, executives: data }

        case 'UPDATE_EXECUTIVE':
            window.localStorage.setItem("executives", JSON.stringify(payload));
            return { ...state, executives: payload }

        case 'ADD_ORDER':
            const order = [...state.orders, payload];
            window.localStorage.setItem("orders", JSON.stringify(order));
            return { ...state, orders: order }

        case 'UPDATE_ORDER':
            window.localStorage.setItem("orders", JSON.stringify(payload));
            return { ...state, orders: payload }

        case 'ADD_EXE_ORDER':
            const exeOrder = [...state.exeOrders, payload];
            window.localStorage.setItem("exeOrders", JSON.stringify(exeOrder));
            return { ...state, exeOrders: exeOrder }

        case 'UPDATE_EXE_ORDER':
            window.localStorage.setItem("exeOrders", JSON.stringify(payload));
            return { ...state, exeOrders: payload }

        default:
            return state
    }
}
