<template>
    <v-textarea
            :value="value"
            @input="input"
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
    >
    </v-textarea>
</template>

<script>
    export default {
        name        : "unicus-textarea",
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