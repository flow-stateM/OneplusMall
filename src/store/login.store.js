const login = {
  state:{
    isLogin:false,
    name:''
  },
  mutations:{
    login(state,name){
      state.isLogin = true;
      state.name=name
    },
    logout(state){
      state.isLogin = false;
      state.name=''
    }
  }
}

export default login