export const ProductList = () => {
    const products = [{
        id: 1,
        name: "Laptop",
        price: 100,
    },{
         id: 2,
        name: "Phone",
        price: 200,
    },{
         id: 3,
        name: "Laptop",
        price: 300,
    }]

    const productElements = products.filter((product)=>{
        return product.price > 150}).map((product)=>{
                    return(
                  <div>
                    <p>{product.name}</p>
                    <p>{product.id}</p>
                    <p>Price &{product.price}</p>
                  </div>
                    )
                })

    return (
        <div>
            <h3>PRODUCT LIST</h3>
            {productElements}
        </div>
    )
}

