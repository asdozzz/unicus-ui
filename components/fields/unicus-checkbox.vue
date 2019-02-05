<template>
    <v-checkbox
            color="primary"
            :value="value"
            @input="input"
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
    >
    </v-checkbox>
</template>

<script>
    export default {
        name        : "unicus-checkbox",
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
                return this.$attrs.class ? this.$attrs.class+' unicus-checkbox' : 'unicus-checkbox';
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
        }
    }
</script>

<style scoped>

</style>