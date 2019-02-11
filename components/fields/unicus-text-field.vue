<template>
    <v-text-field
            v-on="inputListeners"
            v-bind="attrs"
            v-bind:value="value"
    >
    </v-text-field>
</template>

<script>
    export default {
        name: "unicus-text-field",
        props: ['value'],
        inheritAttrs: false,
        computed: {
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
        mounted() {

        },
    }
</script>

<style scoped>

</style>