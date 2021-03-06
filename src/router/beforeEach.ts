import { Location, Route } from 'vue-router'
import { IS_CONNECTING } from '@/store/session/getters.type'
import store from '@/store'
import RouteName from '@/router/route.name'

export default (to: Route, from: Route, next: (to?: Location) => void) => {
  if (to.name !== RouteName.Main && !store.getters[IS_CONNECTING]) {
    next({ name: RouteName.Main })
  } else {
    next()
  }
}
