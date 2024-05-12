<template>
    <div class="copywriting">
        <article class="big-panel">
            <div class="div-img">
                <img src="" alt="">
            </div>

            <div class="info">
                <h1>Dessert</h1>
                <p>
                    Dessert (/dɪˈzɜːrt/) is a course that concludes a meal. The course usually consists of sweet foods,
                    such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur,
                    however
                    in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a
                    separate
                    course elsewhere. In some parts of the world, such as much of central and western Africa, and most
                    parts
                    of China, there is no tradition of a dessert course to conclude a meal.
                </p>
                <p>
                    The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards,
                    gelatins,
                    ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in
                    dessert
                    courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more
                    commonly
                    savory to create desserts.
                </p>
                <div class="close" @click="close">&#10006;</div>
            </div>
        </article>
        <div class="grid" @click="handleClick">
            <div class="item">
                <img src="https://images.pexels.com/photos/2482188/pexels-photo-2482188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2267871/pexels-photo-2267871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">

                <img src="https://images.pexels.com/photos/2267869/pexels-photo-2267869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/998238/pexels-photo-998238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2291070/pexels-photo-2291070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
            <div class="item">
                <img src="https://images.pexels.com/photos/2491288/pexels-photo-2491288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>

            <div class="item">
                <img src="https://images.pexels.com/photos/2147864/pexels-photo-2147864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handleClick(event) {
            if (event.target.src) {
                document.querySelector(".big-panel img").src = event.target.src
                document.querySelector(".big-panel").classList.add("show")
            }
        },
        close() {
            document.querySelector(".big-panel").classList.remove("show")
        }

    }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Cedarville+Cursive&display=swap'); */

.copywriting {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('https://images.pexels.com/photos/2267873/pexels-photo-2267873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'), #402a2bd8;
    background-size: cover;
    height: calc(100vh - 100px);
}

/* .copywriting::before {
    content: "";
    background: url('https://images.pexels.com/photos/2267873/pexels-photo-2267873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'), #402a2bd8;
    background-size: cover;
    filter: blur(40px);
    height: calc(100vh - 100px);
    width: 115vw;
    position: fixed;
    top: -10%;
    display: block;
    z-index: -1;
} */

.grid {
    display: flex;
    flex-flow: row wrap;
    height: 450px;
    align-items: center;
    justify-content: center;
}

.item:nth-child(3n+1) {
    order: 1;
}

.item:nth-child(3n+2) {
    order: 2;
}

.item:nth-child(3n) {
    order: 3;
}

.grid::before,
.grid::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
}

.item {
    height: 32%;
    margin: 0 0.5em 0.5em 0;
}

.item img {
    width: auto;
    height: 97%;
    border: 5px solid #FFF;
    transition: all 0.3s;
    cursor: pointer;
}

.item:hover {
    position: relative;
}

.item:hover::after {
    content: "Сlick to get more info...";
    font-family: 'Cedarville Cursive', cursive;
    font-size: 0.9em;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px;
    overflow: hidden;
    width: 0;
    background-color: #FFFFFFAF;
    color: #333;
    padding-left: 15px;
    line-height: 30px;
    box-sizing: border-box;
    animation: show-up 0.5s linear forwards;
}

@keyframes show-up {
    to {
        width: 100%;
    }
}


.big-panel {
    font-family: 'Cedarville Cursive', cursive;
    position: absolute;
    width: 0;
    top: 0;
    left: 0;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    transition: 0.3s all linear;
    background: #FFFFFFDD;
    overflow: hidden;
    z-index: 1000;
}

.big-panel.show {
    width: 80vw;
    left: calc(200px + (20vw - 200px) / 2);
    top: calc(100px + (20vh - 100px) / 2);
}

.big-panel.show .div-img {
    width: 55%;
    text-align: center;
    height: 60vh;
}

.div-img img {
    border: 8px solid #FFF;
    max-height: 100%;
    max-width: 90%;
}

.big-panel.show .info {
    width: 40%;
    padding-right: 5%;
    font-size: 1.2em;
    line-height: 1.35em;
    text-align: justify;
    overflow: auto;
    max-height: 100%;
}

.big-panel.show .close {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    transition: 0.3s transform;
}

.close:hover {
    transform: rotate(270deg) scale(1.2)
}

.close:active {
    color: #fff;
}
</style>