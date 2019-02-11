<template>
    <v-switch
            color="primary"
            v-on="inputListeners"
            v-bind="attrs"
            v-bind:value="value"
    >
    </v-switch>
</template>

<script>
    export default {
        name        : "unicus-switch",
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
                return this.$attrs.class?this.$attrs.class+' unicus-switch':'unicus-switch';
            },
            attrs() {
                return Object.assign({},this.$attrs,{class:this.classA});
            },
        }
    }
</script>

<style scoped>

</style>