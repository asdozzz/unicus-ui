<template>
    <v-card
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
    >
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        name        : "unicus-card",
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
                return this.$attrs.class ? this.$attrs.class : 'unicus-card';
            },
            attrs()
            {
                const {classA, ...attrs} = this.$attrs;
                return attrs;
            },
        },
    }
</script>

<style scoped>

</style>