
const app = new Vue({
    el: '#app',
    data: {
        clock: 0,
        isPlay: true,
        indexActive: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },
    methods: {
        nextSlide: function () {
            this.indexActive++
            if (this.indexActive == this.slides.length) {
                this.indexActive = 0;
            }

            if (!this.isPlay) {
                clearInterval(this.clock);
                this.isPlay = true;
            }
            
        },

        prevSlide: function () {
            this.indexActive--;
            if (this.indexActive == - 1) {
                this.indexActive = this.slides.length - 1;
            }

            if (!this.isPlay) {
                clearInterval(this.clock);
                this.isPlay = true;
            }
            
        },

        playClock: function () {
            if (this.isPlay) {
                this.clock = setInterval(() => {
                    this.indexActive++
                    if (this.indexActive == this.slides.length) {
                        this.indexActive = 0;
                    }
                }, 3000);

                this.isPlay = false;
            }

        },

        timerOff: function () {
            if (!this.isPlay) {
                clearInterval(this.clock);
                this.isPlay = true;
            }
        },

        changePicture: function(indexChange) {
            this.indexActive == indexChange;
        },


    },

    created(){
        this.playClock();
    }
})