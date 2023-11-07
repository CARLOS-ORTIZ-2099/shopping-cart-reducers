/* eslint-disable react/prop-types */


export const GrillaProducts = ({products, deleteProduct, addProduct, carrito}) => {


  return (
    <>
        {
            products.products.length < 1 ? <h2>no hay productos </h2>
            : 
            <div className="products-container">
                {
                    products.products.map(product => (
                        <div className="product" key={product.id}>
                            <h2>{product.name}</h2>
                            <img width={'250px'} src={product.image} alt="" />
                            {
                            carrito.cart.some((ele => ele.id  == product.id))  ?
                            <button onClick={() => deleteProduct(product.id)}>eliminar</button>
                            : 
                            <button onClick={() => addProduct(product.id)}>comprar</button>
                            } 
                        
                        </div>
                    ))
                }
            </div>
        }
    </>
  )
  
}
