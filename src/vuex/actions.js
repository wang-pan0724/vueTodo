export default {
  setTodoData(context, params) {
    // 假装是ajax
    setTimeout(() => {
      // context.dispatch('getUserYear',{name: })
      context.commit("setTodoData", params);
    });
  },
    deleteTodoData(context, params) {
      context.commit("deleteTodoData", params);
  }
};