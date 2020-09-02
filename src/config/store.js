import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isHeaderSidebarVisibel: false
    },
    mutations: {
        showOnlyMain(state, isVisible) {
            if(isVisible === undefined) {
                state.isHeaderSidebarVisibel = !state.isHeaderSidebarVisibel
            } else {
                state.isHeaderSidebarVisibel = isVisible
            }
        }
    }
})