import { data } from "../helpers/data"
import { TYPESACTIONS } from "../actions/carritoActions"


// funcion para modificar el estado inicial

// estado incial
export const shoppingCart = { cart : [] , extra1:1, extra2:2}

// funcion reductora
export function carritoReducers(stateCurrent, actions) {
console.log(actions)
       switch(actions.type){
            case(TYPESACTIONS.ADD): {
                let findProduct = data.find((product => product.id == actions.id ))
                return  { ...stateCurrent, cart : [...stateCurrent.cart, findProduct]}
            }
            case(TYPESACTIONS.DELETE): {
               let resultFilter = stateCurrent.cart.filter((product => product.id != actions.id ))
               return { ...stateCurrent, cart : resultFilter}
            }
            case(TYPESACTIONS.EMPTY): {
                return {...stateCurrent, cart : []}
            }
       }

}

