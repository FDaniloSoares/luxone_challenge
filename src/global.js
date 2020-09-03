import Vue from 'vue'

export function showError(e) {
    console.log(e)
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ message: e.response.data.message + 'Usuario não Encontrado no GitHub'})
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ message: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { showError }