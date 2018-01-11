const shoppingcart ={
  state:{
    cartList:{},
    count:0
  },
  mutations:{
    buySome(state,item){
      if(state.cartList[item.name+item.color]&&state.cartList[item.name+item.color].count==5){
        return ;
      }
      state.cartList[item.name+item.color]?state.cartList[item.name+item.color].count++:state.cartList[item.name+item.color]={name:item.name,count:1,color:item.color,price:item.price};
      state.count++;
    },
    changeCart(state,props){
      state.cartList = props[0]
      state.count = props[1]
    }
  },
  getters:{
    isNull(state){
      return state.count===0
    }
  }
}

export default shoppingcart