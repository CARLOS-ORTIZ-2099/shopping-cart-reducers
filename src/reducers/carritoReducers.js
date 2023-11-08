import { data } from "../helpers/data"
import { TYPESACTIONS } from "../actions/carritoActions"

// funcion para modificar el estado inicial

// estado incial
export const shoppingCart = { cart : [] , extra1:1, extra2:2}

// funcion reductora
export function carritoReducers(stateCurrent, actions) {

       switch(actions.type){
            case(TYPESACTIONS.ADD): {
         
               let resp = stateCurrent.cart.some((element) => element.id == actions.id)
               if(resp){
                console.log('entro a if')
                let response = stateCurrent.cart.map((product) => product.id == actions.id? {...product, cantidad: product.cantidad+1 , total : (product.price)*(product.cantidad+1)}: product)
          
                return {...stateCurrent, cart: [...response]}

               }else{
                let findProduct = data.find((product => product.id == actions.id ))
                console.log('entro a else')
                return  { ...stateCurrent, cart : [...stateCurrent.cart, {...findProduct, cantidad:1, total: findProduct.price*1}]}
               }
               
            }
            case(TYPESACTIONS.DELETEAll): {
               let resultFilter = stateCurrent.cart.filter((product => product.id != actions.id ))
               return { ...stateCurrent, cart : resultFilter}
            }
            case(TYPESACTIONS.DELETEONE): {
                let response = stateCurrent.cart.map((product) => product.id == actions.id && product.cantidad > 1 ? {...product, cantidad: product.cantidad-1 , total : (product.price)*(product.cantidad-1)}: product)
              
                return {...stateCurrent, cart: [...response]}
            }
            case(TYPESACTIONS.EMPTY): {
                return {...stateCurrent, cart : []}
            }
       }
}

