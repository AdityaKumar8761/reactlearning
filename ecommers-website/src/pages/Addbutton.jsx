import axios from "axios"

export function Addbutton(){

    return(
        <>
        <button
            onClick={()=>{
                axios.post('/api/cart-items', {
  //                  productId: product.id,
  //                 quantity: 1
                })
            }}>
                Click
        </button>
        </>
    )
}