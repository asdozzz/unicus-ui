import Vue from 'vue';
import format2 from '../utils/format_numeric';

Vue.filter('pretty_numeric', function (num, prefix, thousand_separator, decimal_separator) {

    if (!prefix)
    {
        prefix = '';
    }

    if (!thousand_separator)
    {
        thousand_separator = ' ';
    }

    return format2(num, prefix, thousand_separator);
});


