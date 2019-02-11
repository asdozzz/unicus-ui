<template>
    <unicus-text-field
            v-bind="$attrs"
            v-model="numericmodel"
            v-on:keypress="keypressMethod()"
            v-on:input="changeNumeric"
            browser-autocomplete="off"
            hide-details
    ></unicus-text-field>
</template>

<script>
    export default {
        name: 'unicus-autonumeric-field',
        inheritAttrs: false,
        props: [
            'value',
        ],
        data() {
            const formatNumeric = this.formatNumeric(this.value);
            return {
                numericmodel: formatNumeric
            };
        },
        watch: {
            value: function(newVal) {
                this.numericmodel = this.formatNumeric(newVal);
            },
        },
        computed:{
            inputListeners: function() {
                const vm = this;

                return Object.assign({},
                    this.$listeners,
                    {
                        input: function (value) {
                            vm.changeNumeric(event.target.value);
                        }
                    }
                )
            }
        },
        methods: {
            format2: function (number, prefix, thousand_separator, decimal_separator) {
                thousand_separator = thousand_separator || ',';
                decimal_separator = decimal_separator || '.';
                let regex		= new RegExp('[^' + decimal_separator + '\\d]', 'g'),
                       number_string = String(number).replace(regex, '').toString(),
                       split	  = number_string.split(decimal_separator),
                       rest 	  = split[0].length % 3,
                       result 	  = split[0].substr(0, rest),
                       thousands = split[0].substr(rest).match(/\d{3}/g);

                if (thousands) {
                    let separator = rest ? thousand_separator : '';
                    result += separator + thousands.join(thousand_separator);
                }
                result = split[1] !== undefined ? result + decimal_separator + split[1] : result;

                return prefix === undefined ? result : (result ? prefix + result : '');
            },
            formatNumeric: function(num) {

                num = parseFloat(num);

                if (isNaN(num))
                {
                    return '';
                }

                return this.format2(num,'', ' ');
            },
            formatValue: function(val){

                return String(val).replace(/([^0-9,.]+)/g,'');
            },
            changeNumeric: function() {
                let val = this.formatValue(this.numericmodel);
                let newVal = this.formatNumeric(val);
                this.numericmodel = newVal;
                let ii  = !isNaN(parseFloat(val))?parseFloat(val):null;
                this.$emit('input', ii);
            },
            keypressMethod: function (evt){
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            }
        },
    };
</script>

<style scoped>

</style>