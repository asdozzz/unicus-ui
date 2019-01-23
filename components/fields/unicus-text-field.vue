<template>
    <v-text-field
            :value="value"
            @input="input"
            :class="classA"
            v-on="listeners"
            v-bind="attrs"
    >
    </v-text-field>
</template>

<script>
    export default {
        name: "unicus-text-field",
        props: ['value'],
        inheritAttrs: false,
        computed: {
            listeners() {
                const { input, ...listeners } = this.$listeners;
                return listeners;
            },
            classA() {
                return this.$attrs.class?this.$attrs.class:'unicus-field';
            },
            attrs() {
                const { classA, ...attrs } = this.$attrs;
                return attrs;
            },
        },
        methods: {
            input(value) {
                this.$emit('input', value);
            },
        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>