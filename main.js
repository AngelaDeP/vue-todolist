const app = new Vue ({

    el: '#app',
    data: {

        tasks: [],
        
        todo: {
            newtask: '',
            done: false,
        },
           
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
            this.done = !this.done;

            if (this.done = true) {
                todo.tasks.classList.add("txt-line");
            } else {
                this.done = false;
            }
            
        }

    }
})