import {getLocalStorage, removeLocalStorage } from '@/utils/localStorage'


const user  = {
  namespaced: true,
  state : {
    name:'',
    token: '',
    roles: '',
    userId:'',
    browserHeaderTitle: getLocalStorage('browserHeaderTitle') || 'GAMER MIS'
  },
  getters : {
    token: state => state.token,
    roles: state => state.roles,
    name: state => state.name,
    userId: state => state.userId,
    browserHeaderTitle: state => state.browserHeaderTitle,
  },
  mutations: {
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_BROWSERHEADERTITLE: (state, action) => {
        state.browserHeaderTitle = action.browserHeaderTitle
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions:{
      //登出
      LogOut() {
        return new Promise((resolve, reject) => {
          removeLocalStorage('Token')
          resolve()
        })
      },

      
  }
}

export default user;

/**
 * 1、用户退出,需要调取后台接口吗？后台具体的业务逻辑是什么？
 * 
 * 
 */