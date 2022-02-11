const app = new Vue ({

    el: '#app',
    data: {

        newtask: '',
        tasks: [],
        
    },
    methods: {

        addTask() {
            this.tasks.push(this.newtask);
            this.newtask = '';
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        },

        finishedTask() {
            
        }

    }
})