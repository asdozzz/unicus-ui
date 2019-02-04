import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

export default function(options){

    return _.assignIn({
        namespaced: true,
        state: {
            account:{
                loading:false,
                token:''
            },
            exparation:0,
            init:false,
            token_error:'',
            user:{
                data:{},
                loading:false,
            }
        },
        mutations: {
            setProp:function(state, obj)
            {
                state[obj.key] = obj.value;
            },
            Init:function(state)
            {
                state.init = true;

                var accountString = window.localStorage.getItem('accountObj');
                var tokenExpires = window.localStorage.getItem('tokenExpires');

                if (accountString != undefined && tokenExpires != undefined)
                {
                    if (parseInt(Date.now()) > parseInt(tokenExpires))
                    {
                        window.localStorage.removeItem('accountObj');
                        window.localStorage.removeItem('tokenExpires');
                    }
                    else
                    {
                        state.account.token = accountString;
                        state.exparation = parseInt(tokenExpires);
                    }
                }
            },
            SET_TOKEN: function (state, data){
                let expires = 0;

                if (data.expires)
                {
                    expires = parseInt(moment(data.expires).format('x'));
                }

                window.localStorage.setItem('accountObj', data.token);
                window.localStorage.setItem('tokenExpires', expires);
                state.account.token = data.token;
                state.exparation = expires;

                console.log('SET_TOKEN',data);
            },
            SET_USER:function(state, user)
            {
                state.user = user;
            },
            LOGOUT:function(state)
            {
                console.log('LOGOUT');
                window.localStorage.removeItem('accountObj');
                window.localStorage.removeItem('tokenExpires');
                state.account.token = '';
                state.exparation = 0;
            }
        },
        actions:
            {
                getToken:function(context, form)
                {
                    var Axios = axios.create({
                        baseURL: process.env.VUE_APP_API_HOST,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    });

                    if (context.state.account.token)
                    {
                        return context.dispatch('refreshToken');
                    }
                    else
                    {
                        let postData  = {
                            'username': form && form.login?form.login:process.env.VUE_APP_API_LOGIN,
                            'password': form && form.password?form.password:process.env.VUE_APP_API_PASSWORD,
                        };

                        return Axios.post('login_check', postData).then((response) => {
                            context.commit('SET_TOKEN',response.data);
                        });
                    }
                },
                refreshToken:function(context, form)
                {
                    var Axios = axios.create({
                        baseURL: process.env.VUE_APP_API_HOST,
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    });

                    let postData  = {
                        'username': form && form.login?form.login:process.env.VUE_APP_API_LOGIN,
                        'password': form && form.password?form.password:process.env.VUE_APP_API_PASSWORD,
                    };

                    return Axios.post('login_check', postData).then((response) => {
                        context.commit('SET_TOKEN',response.data);
                    });
                },
                Logout:function(context)
                {
                    context.commit('LOGOUT');
                }
            },
        getters: {
            GetToken:function(state)
            {
                if (!state.exparation || Date.now() > state.exparation)
                {
                    return '';
                }

                return state.account.token;
            }
        }
    }, options);
}