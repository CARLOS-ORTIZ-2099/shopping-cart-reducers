import { ACTIONSFILTER } from "../actions/filtroActions";
import { data } from "../helpers/data"


export const  productsInitial = {products: data}


export const selectReducers = (stateCurrent, actions) => {
    console.log(stateCurrent)
    console.log(actions)
        switch(actions.type){
            case(ACTIONSFILTER.SELECT):{
                   
                if(actions.category == 'ALL') {
                    return {products : data}
                }
                let copy = [...data]
                let productsFilter = copy.filter((product) => product.category == actions.category)
                return {products: productsFilter}
            }
                
            
        }

}
