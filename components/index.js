import Vue from 'vue';
import UnicusTextField from './fields/unicus-text-field';
import UnicusTextarea from './fields/unicus-textarea';
import UnicusAutonumericField from './fields/unicus-autonumeric-field';
import UnicusSelect from './fields/unicus-select';
import UnicusCheckbox from './fields/unicus-checkbox';
import UnicusGroupBtns from './fields/unicus-group-btns';

//fields
Vue.component('unicus-text-field',UnicusTextField);
Vue.component('unicus-textarea',UnicusTextarea);
Vue.component('unicus-autonumeric-field',UnicusAutonumericField);
Vue.component('unicus-select',UnicusSelect);
Vue.component('unicus-checkbox',UnicusCheckbox);
Vue.component('unicus-group-btns',UnicusGroupBtns);

//btns
import UnicusBtn from './btns/unicus-btn';

Vue.component('unicus-btn',UnicusBtn);

//layout
import UnicusLogo from './layout/unicus-logo';

Vue.component('unicus-logo',UnicusLogo);

//unknown
import UnicusCard from './unknown/unicus-card';

Vue.component('unicus-card',UnicusCard);
