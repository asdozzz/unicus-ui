import _ from "lodash";

const def = {
    namespaced: true,
        state     : {
        errors:[],
            showError:false
    },
    mutations:{
        addError:function (state,rawError)
        {
            state.errors.push(rawError);
            state.showError = true;
        },
        clearAll:function (state)
        {
            state.errors = [];
            state.showError = false;
        }
    },
    actions:{
        addError:function (context,error)
        {
            var text = context.getters.toString(error);

            context.commit('addError',text);

            return new Promise((resolve,reject) => {return resolve(text)});
        },
        show404:function (context, error){
            let text = 'Страница не найдена';
            context.commit('addError',text);

            return new Promise((resolve,reject) => {return resolve(text)});
        },
        showErrorToken:function (context, error){
            let text = 'Ошибка получения токена, необходимо обновить страницу';
            context.commit('addError',text);

            return new Promise((resolve,reject) => {return resolve(text)});
        }
    },
    getters:{
        toString:function (state)
        {
            return function (error)
            {
                var text = 'Произошла непредвиденная ошибка, пожалуйста обратитесь в службу техподдержки';

                if (typeof error == 'object' && error.response)
                {
                    if (error.response.hasOwnProperty('data'))
                    {
                        if (typeof error.response.data == 'object' && error.response.data.hasOwnProperty('message'))
                        {
                            text = error.response.data.message;
                        }
                        else if (typeof error.response.data == 'object' && error.response.data.hasOwnProperty('detail'))
                        {
                            text = error.response.data.detail;
                        }
                        else
                        {
                            text = error.response.data;
                        }
                    }

                    if (error.response.hasOwnProperty('message'))
                    {
                        text = error.response.message;
                    }

                    if (error.response.hasOwnProperty('detail'))
                    {
                        text = error.response.detail;
                    }
                }
                else if (typeof error == 'string')
                {
                    text = error;
                }

                return text;
            }
        }
    }
};

export default function(options){

    return _.assignIn(def,options);
}