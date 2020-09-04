import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 4000
})

Vue.toasted.register(
  'defaultError',
  payload => !payload.message ? 'Ooops... Erro inesperado' : payload.message,
  {
    type: 'error', 
    icon: 'eye'        
  }
)