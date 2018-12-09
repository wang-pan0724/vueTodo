export default {
  setTodoData(state, data) {
    let arr = JSON.parse(JSON.stringify(state.todoData));
    arr.unshift(data);
    state.todoData = arr;
  },
  deleteTodoData(state, data) {

	  let arr = JSON.parse(JSON.stringify(state.todoData));
	  arr.splice(data, 1);
	  state.todoData = arr;
  }
};