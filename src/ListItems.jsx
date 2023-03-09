import { useState } from 'react';
import Card from '@mui/material/Card';

export function ListItems({ items, cart, setCart }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Card className='main-container'>
        <div className='row'>
          <img className="img" src={items.image} alt={items.name} />
        </div>
        <div className='header'>
          <h1>{items.productname}</h1>
          <p>{items.productrate}</p>
          <p>{items.rating}</p>
        </div>
        <div>

          {show ? <>
            <button className='btn' onClick={() => {
              setCart(cart + 1);
              setShow(!show);
            }}
            >
              Add to cart
            </button>
          </> : <>
            <button className='btn' onClick={() => {
              setCart(cart - 1);
              setShow(!show);
            }}
            >
              Remove from cart
            </button>
          </>}
        </div>
      </Card>
    </div>
  );
}
