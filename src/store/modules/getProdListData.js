import Vue from 'vue'
import * as getProdListData from '../types/getProdListData-types'
//api 地址
import { ApiUrl } from '../../tools/url'



export default {
    state: {
        prodListData: [],
    },
    mutations: {
        [getProdListData.ADD_PRODLISTDATA]: function (state, data) {
            state.prodListData = state.prodListData.concat(data);
        }
    },
    actions: {
        [getProdListData.ADD_PRODLISTDATA_ACTION]: function (context, id) {
            return new Promise((resolveA, reject) => {
                let url = ApiUrl + 'ProdIndex/?' + id;
                
                Vue.http.get(url).then(
                    function (resolve) {
                        
                        let data = resolve.data;
                        
                        console.log(resolve);
                        
                        context.commit(getProdListData.ADD_PRODLISTDATA, data);   

                        resolveA();
                    }
                ).catch(
                    function (err) {
                        console.log(err)
                    }
                )
            });    
        }
    }
}
