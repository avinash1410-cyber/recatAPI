import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["productName", "brand"]);






      {/* <h1>All Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.searchImage} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.productName}</p>
            <p>{product.item}</p>
            <p>mrp RS ...{product.mrp}</p>
            <p>price --{product.price}</p>
          </div>
        ))}
      </div>      
    </div> */
    
}




  useEffect(() => {
  fetchProducts();
}, []);


const fetchProducts = () => {
  axios
    .get('https://demo7303877.mockable.io/')
    .then((res) => {
      console.log(res);
      setProducts(res.data.products);
      setIsLoaded(true);
    })
    .catch((err) => {
      console.log(err);
      setIsLoaded(true);
      setError(true);
    });
};



const Search=()=>{
    return products.filter((product) => {
        return searchParam.some((newItem) => {
            return (
                product[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    });
}; 







    return (



    <div className="wrapper">
        <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Enter Name or Brand..."
                    value={q}
                    /*
                    // set the value of our useState q
                    //  anytime the user types in the search box
                    */
                    onChange={(e) => setQ(e.target.value)}
            />
            <div>
            <span className="sr-only">_______________________________</span>
            </div>
                
            </label>
        </div>

<div>
{Search(products).map((product) => ( 
    
<div className='item-container'>
    <div className='card' key={product.id}>
        <img src={product.searchImage} alt='' />
        <h3>{product.brand}</h3>
        <p>{product.productName}</p>
        <p>{product.item}</p>
        <p>mrp RS ...{product.mrp}</p>
        <p>price --{product.price}</p>

    </div>
</div>


))}‌;
</div>
</div>

  );
}

export default FeaturedProducts;