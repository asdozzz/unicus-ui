<template>
    <span>
        <span class="logo">
            <span class="logo-text">
                UW
            </span>
        </span>
        <span class="pl-3">
            <span class="unicus-title-black">Unicus</span>
            <span class="unicus-title">Web</span>
            <span class="title-small-font-size museo-100"> 2.0</span>
            {{mode_suffix}}
        </span>
    </span>
</template>

<script>
    export default {
        name: "unicus-logo",
        computed: {
            debug: function()
            {
                return process.env.VUE_APP_DEBUG && process.env.NODE_ENV != 'production';
            },
            mode_suffix: function() {

                if (process.env.NODE_ENV == 'production')
                {
                    return '';
                }

                return process.env.VUE_APP_MODE_SUFFIX?'('+process.env.VUE_APP_MODE_SUFFIX+')':'';
            }
        },
        created: function() {
            console.log(process.env);
        }
    }
</script>

<style scoped>

</style>