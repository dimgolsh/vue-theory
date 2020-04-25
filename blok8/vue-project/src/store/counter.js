export default
{
  state: {
    counter: 50
  },
  mutations: {
    changeCounter (state,payload){
      state.counter += payload
    }
  },
  actions: {
    asyncChCounter (context,payload){
      setTimeout(()=>{
        context.commit('changeCounter',payload.counterValue)
      },payload.time)
    }
  },
  getters: {
    computedCounter (state){
      return state.counter * 2
    }
  }
}
