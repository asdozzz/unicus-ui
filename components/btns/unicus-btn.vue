<template>
    <v-btn
            v-on="inputListeners"
            v-bind="attrs"
            v-bind:value="value"
    >
        <slot></slot>
    </v-btn>
</template>

<script>
    export default {
        name        : "unicus-btn",
        props       : ['value'],
        inheritAttrs: false,
        computed    : {
            inputListeners: function () {
                var vm = this;

                return Object.assign({},
                    this.$listeners,
                    {
                        input: function (value) {
                            vm.$emit('input', value)
                        }
                    }
                )
            },
            classA() {
                return this.$attrs.class?this.$attrs.class+'unicus-btn':'unicus-btn';
            },
            attrs() {
                return Object.assign({},this.$attrs,{class:this.classA});
            },
        },
        methods     : {

        },
        mounted()
        {

        },
    }
</script>

<style scoped>

</style>