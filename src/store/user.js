

const user = {
    state:{
        user:null
    },
    getters:{
        getUser(state) {
            return state.user
        }
    },
    mutations:{
        setUser(state, user) {
            state.user = user
        },
    },
    actions:{

    }
}

export default user