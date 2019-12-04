const state = {
    collapse: false
}

const getters = {
    getCollapse(state){
        return state.collapse
    }
}

const actions = {
    setCollapse({ commit },collapse){
        commit('setCollapse',collapse)
        console.log(collapse)
    }
}

const mutations = {
    setCollapse(state,collapse){
        state.collapse = collapse
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}
