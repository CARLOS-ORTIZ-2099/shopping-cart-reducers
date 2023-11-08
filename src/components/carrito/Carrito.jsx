/* eslint-disable react/prop-types */
import { TYPESACTIONS } from "../../actions/carritoActions"

export const Carrito = ({carrito, dispatch}) => {
    
    let {cart} = carrito
    console.log(cart)
    const emptyCart = () => {
        /* el dispach es una funcion que me retorna el hookuseReducer, esta funcion despacha un objeto con la accion que sera procesada por la funcion reductora */
        dispatch( {type : TYPESACTIONS.EMPTY} )
    }

    const deleteProductAll = (id) => {
        dispatch( {type: TYPESACTIONS.DELETEAll, id} )
    }

    const deleteProductOne = (id) => {
        dispatch( {type : TYPESACTIONS.DELETEONE, id} )
    }

  return (
    <div>
        <h2>carrito</h2>
        {
            carrito.cart.length < 1 ? <h2>sin productos</h2> 
            :
            <>
                <h3>{carrito?.cart?.length}</h3>
                <h4>total a pagar : {carrito.cart.reduce((acc, current) => acc + current.total, 0 )} $</h4>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            cart.map((product) => (
                                <div className="" key={product.id}>
                                    <h2 style={{fontSize:'15px'}}>{product.name}</h2>
                                    <img width={'100px'} src={product.image} alt="" /><br/>
                                    <h3>{product.cantidad}</h3>
                                    <button onClick={() => deleteProductAll(product.id)}>eliminar todo</button>
                                    <button onClick={() =>  deleteProductOne(product.id)}>eliminar uno</button>
                                </div>
                            ))
                        }
                    </div>
                <button onClick={emptyCart}>vaciar carrito</button>
            </>
        }
    </div>
  )
}
