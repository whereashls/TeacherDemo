import api from '../index'
import urls from './urls'
export default {
  userinfo () {
    // return出去了一个promise
    return api.get(urls.userinfo)
  },
  postlogin (params) {
    // return出去了一个promise
    params={user_id:params.username,
      password:params.password}
      return api.post(urls.postlogin,params)
  }
}

