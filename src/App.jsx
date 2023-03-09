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
import { ShopName } from './ShopName';
import { ProductItems } from './ProductItems';


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
