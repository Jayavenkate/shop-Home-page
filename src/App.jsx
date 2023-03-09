import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';


export default function App(){
  const[cart,setCart] = useState(0);
  
   return(
    <div className='App'>
       <div className="button">
       <Button  color="inherit"startIcon={<ShoppingCartIcon />}>Cart {cart}</Button>
      </div>
      
       <ShopName cart={cart} setCart={setCart} />
       <ProductItems cart={cart} setCart={setCart} />  
    </div>
    )
}
function ShopName({cart,setCart}){
  return(
    <div className='shop-name'>
      <h1>Shop in style</h1>
      <p>With this shop homepage template</p>
    </div>
  )
}
function ProductItems({cart,setCart}){
  const productitems=[{
        'id':0,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Fancy Product",
         "productrate":"$40.00-$80.00",
         "rating":"",
        //  "cart":"false"
      },
    
      {
        'id':1,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Special Item",
         "productrate":"$20.00 $18.00",
         "rating":"⭐⭐⭐⭐⭐",
        //  "cart":"false"
      },
      {
        'id':2,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Sale Item",
         "productrate":"$50.00 $25.00",
         "rating":"",
        //  "cart":"false"
      },
      {
        'id':3,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Popular Item",
         "productrate":"$40.00",
         "rating":"⭐⭐⭐⭐⭐",
        //  "cart":"false"
      },
      {
        'id':4,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Sale Item",
         "productrate":"$50.00 $25.00",
         "rating":"",
        //  "cart":"false"
      },
      {
        'id':5,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Fancy Product",
         "productrate":"$120.00 - $280.00",
         "rating":"",
        //  "cart":"false"
      },
      {
        'id':6,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Special Item",
         "productrate":"$20.00 $18.00",
         "rating":"⭐⭐⭐⭐⭐",
        //  "cart":"false"
      },
      {
        'id':7,
        "image":"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         "productname":"Popular Item",
         "productrate":"$40.00",
         "rating":"⭐⭐⭐⭐⭐",
        //  "cart":"false"
      },
    ]
  return(
   
       <div className='product-item'>
      {productitems.map((product,index)=> <ListItems key={index} items={product}
       cart={cart} setCart={setCart} />)}
     
    </div>
    
    
  )
}

function ListItems({items,cart,setCart}){
const[show,setShow] = useState(true);

return(
    <div>
        <Card className='main-container'>
          <div className='row'>
          <img className="img"src={items.image} alt={items.name} />
          </div>
          <div className='header'>
             <h1>{items.productname}</h1>
             <p>{items.productrate}</p>
             <p>{items.rating}</p>
          </div>
          <div>
           
{
  show?<>
   <button className='btn' onClick={()=>{setCart(cart+1)
            setShow(!show)}}
            >
             Add to cart
              </button>
 </>:<>
  <button className='btn' onClick={()=>{setCart(cart-1)
            setShow(!show)}}
            >
           Remove from cart
              </button>
  </>
}
            </div>
        </Card>
    </div>
  )
}