const app = new Vue ({

    el: '#app',
    data: {

        newtask: '',
        tasks: [],

        todo: {
            todoTask: 'newtask',
            done: false,
        }

    },
    methods: {

        addTask() {
            this.tasks.push(this.newtask);
            this.newtask = '';
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        }

    }
})