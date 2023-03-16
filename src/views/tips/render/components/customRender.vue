<script>
export default {
    props: {
        //按钮类型
        type: {
            type: String,
            default: 'normal'
        },
        //按钮的text
        text: {
            type: String,
            default: 'normal'
        }
    },
    render(h) {
        console.log('h---', h)
        // h => 原生JS中createElement()
        return h('button', { //button 要创建的标签
            //类型
            class: { //v-bind:class
                btn: true, //全都适用这个属性
                // 判断来渲染 class
                'btn-success': this.type == 'success',
                'btn-danger': this.type == 'error',
                'btn-warning': this.type == 'warning',
                'normal': !this.type,
            },

            //dom属性
            domProps: {
                innerText: this.text || '默认按钮'
            },

            // v-on:click
            on: { //特殊时候情况需要使用 @click.native 的时候把 on 改成 nativeOn 即可
                click: () => {
                    console.log('点击了');
                    this.$emit('refresh','点击了')
                }
            }
        })
    }
}
</script>
<style scoped>
.btn {
    width: 100px;
    height: 40px;
    color: white;
    transition: all .5s;
}

.btn:hover {
    background: chartreuse;
    cursor: pointer;
}

.btn-success {
    background: green;
}

.btn-danger {
    background: red;
}

.btn-warning {
    background: orange;
}

.normal {
    background: blue;
}
</style>