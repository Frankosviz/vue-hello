const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue! I\m Francesco and i worked until 1:00!. I\m still learning Vue!, even if i\'m tired... If the background color will be red i will show an image under this message...',
            textMessage: 'Here\s your image! Good Night!',
            btnMessage: 'Try me',
            myClass: 'blue',
            myClassRed: 'red',
            image: '../img/img-vue.jpg',
        }
    },
    methods: {
        changeColor() {
            if(this.myClass === 'blue'){
                this.myClass = 'red';
            } else {
                this.myclass = 'blue';
            }
        }
    }
}).mount('#app');