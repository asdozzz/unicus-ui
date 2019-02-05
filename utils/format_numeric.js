export default function format2(number, prefix, thousand_separator, decimal_separator) {
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
}