<template>
    <v-textarea
            v-on="inputListeners"
            v-bind="attrs"
            v-bind:value="value"
    >
    </v-textarea>
</template>

<script>
    export default {
        name        : "unicus-textarea",
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
                return this.$attrs.class?this.$attrs.class+'unicus-field':'unicus-field';
            },
            attrs() {
                return Object.assign({},this.$attrs,{class:this.classA});
            },
        },
        methods     : {
            input(value) {
                this.$emit('input', value);
            },
        },
        mounted()
        {

        },
    }
</script>

<style scoped>

</style>