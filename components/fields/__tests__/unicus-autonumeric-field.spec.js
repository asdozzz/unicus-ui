import { shallowMount, mount } from '@vue/test-utils';
import VeeValidate, { Validator } from 'vee-validate';
import Vue from 'vue';
import Vuetify from 'vuetify';
import '@/unicus-ui/components/index';
import UnicusAutonumericField from '../unicus-autonumeric-field';

Vue.use(Vuetify);
Vue.use(VeeValidate,{inject:false});

describe('UnicusAutonumericField.vue', () => {
    let wrapper;

    beforeEach(() => {
        const v = new VeeValidate.Validator();

        wrapper = mount(UnicusAutonumericField, {
            provide: () => ({
                $validator: v
            }),
            propsData:{name:'testname',value:'1234'},
            sync:false
        });
    });

    it('Проверка отрисовки инпута', () => {

        expect(wrapper.contains('input[name="testname"]')).toBe(true);
    });

    it('Проверка значения инпута', () => {
        expect(wrapper.find('input[name="testname"]').element.value).toBe('1 234');
    });

    it('Проверка запрета на ввод символов отличных от цифр', () => {
        wrapper.find('input[name="testname"]').setValue('1123a');

        Vue.nextTick(function (){
            expect(wrapper.find('input[name="testname"]').element.value).toBe('1 123');
        });

    });

    it('Проверка форматированного вывода числа', () => {
        wrapper.find('input[name="testname"]').setValue('1500000');

        Vue.nextTick(function (){
            expect(wrapper.find('input[name="testname"]').element.value).toBe('1 500 000');
        });

    });

});