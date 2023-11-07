import { useReducer } from "react"
import { carritoReducers, shoppingCart } from "../../reducers/carritoReducers"
import { TYPESACTIONS } from "../../actions/carritoActions"
import { SelectFilter } from "../select-filter/SelectFilter"
import { productsInitial, selectReducers } from "../../reducers/selectReducers"
import { ACTIONSFILTER } from "../../actions/filtroActions"
import './component-reducer.css'
import { GrillaProducts } from "../grilla-products/GrillaProducts"
import { Carrito } from "../carrito/carrito"

export const ComponentReducer = () => {
    const [products, dispatchProducts] = useReducer(selectReducers, productsInitial)
    console.log(products)
    const [carrito, dispatch] = useReducer(carritoReducers, shoppingCart)
    console.log(carrito)

    const addProduct = (id) => {
        dispatch( {type : TYPESACTIONS.ADD, id} )
    }
    const deleteProduct = (id) => {
        /* el dispach es una funcion que me retorna el hookuseReducer, esta funcion despacha un objeto con la accion que sera procesada por la funcion reductora */
        dispatch( {type : TYPESACTIONS.DELETE, id} )
    }

    const select = (e) => {
            let category = e.target.value
            dispatchProducts({type : ACTIONSFILTER.SELECT, category})
    }

  return (
    <div>
        <h1>ComponentReducer</h1>
        <Carrito carrito={carrito} dispatch={dispatch}/>
        <SelectFilter select={select}/>
            <GrillaProducts products={products} 
                deleteProduct={deleteProduct} 
                addProduct={addProduct}
                carrito={carrito}
            />
          
    </div>
  )
}



/* 
    la modularizacion de carpetas cuando se trabaja con el useReducers es la siguiente.
    primero deberiamos tener una carpeta para los componentes,
    segundo deberiamos tener una carpeta actions, para las acciones que debe realizar 
    nuestra funcion reductora,
    una carpeta reducers con las funciones reductoras
*/