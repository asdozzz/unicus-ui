<template>
    <v-checkbox
            color="primary"
            v-on="inputListeners"
            v-bind="attrs"
            v-bind:value="value"
    >
    </v-checkbox>
</template>

<script>
    export default {
        name        : "unicus-checkbox",
        props       : ['value'],
        inheritAttrs: false,
        computed    : {
            inputListeners: function () {
                var vm = this;

                return Object.assign({},
                    this.$listeners,
                    {
                        change: function (value) {
                            vm.$emit('input', value)
                        }
                    }
                )
            },
            classA() {
                return this.$attrs.class?this.$attrs.class+'unicus-checkbox':'unicus-checkbox';
            },
            attrs() {
                return Object.assign({},this.$attrs,{class:this.classA});
            },
        }
    }
</script>

<style scoped>

</style>