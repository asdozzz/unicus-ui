<template>
    <v-select
            :value="value"
            @input="input"
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
    >
    </v-select>
</template>

<script>
    export default {
        name        : "unicus-select",
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
                return this.$attrs.class ? this.$attrs.class : 'unicus-field';
            },
            attrs()
            {
                const {classA, ...attrs} = this.$attrs;
                return attrs;
            },
        },
        methods     : {
            input(event)
            {
                this.$emit('input', event.target.value);
            },
        },
        mounted()
        {

        },
    }
</script>

<style scoped>

</style>