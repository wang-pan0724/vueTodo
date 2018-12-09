<template>
    <div class="box">
        <h1>vuex TODO</h1>
        <div class="iputItem">
            <input type="text" v-model.trim="iptModel">
            <button :disabled="iptModel.length == 0" @click="add">提交</button>
        </div>
        <div class="listBox">
            <ul v-if="todoList.length > 0">
                <li v-for="(item, index) in todoList" :key="index">
                    <span>{{item}}</span>
                    <b style="padding: 10px" @click="deleteFun(index)">x</b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                iptModel: '',
                todoList: []
            }
        },
        computed: {
            todoData() {
                return this.$store.state.todoData
            }
        },
        watch: {
            todoData() {
                this.todoList = this.todoData;
            }
        },
        mounted() {
            this.todoList = this.todoData;
        },
        methods: {
            add() {
                this.$store.dispatch('setTodoData', this.iptModel);
                this.iptModel = ''
            },
            deleteFun(index) {
                this.$store.dispatch('deleteTodoData', index);
            }
        }
    }
</script>

<style scoped>

</style>
