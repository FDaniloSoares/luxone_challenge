import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isHeaderSidebarVisibel: false,
        user: {},
        userRepository: {},
        totalStars: 0
    },
    mutations: {
        showOnlyMain(state, isVisible) {
            if(isVisible === undefined) {
                state.isHeaderSidebarVisibel = !state.isHeaderSidebarVisibel
            } else {
                state.isHeaderSidebarVisibel = isVisible
            }
        },
        setUser(state, user) {
            state.user = user
        },
        setUserRepository(state, userRepo) {
            state.userRepository = userRepo
            let stars = 0
            for (let i = 0; i < userRepo.length; i++) {
                stars = stars + userRepo[i].stargazers_count;
            }
            state.totalStars = stars
        } 
    }
})