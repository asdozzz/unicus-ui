<template>
    <v-btn
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
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
            listeners()
            {
                const {input, ...listeners} = this.$listeners;
                return listeners;
            },
            classA()
            {
                return this.$attrs.class ? this.$attrs.class : 'unicus-btn';
            },
            attrs()
            {
                const {classA, ...attrs} = this.$attrs;
                return attrs;
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