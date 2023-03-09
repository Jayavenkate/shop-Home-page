import { ListItems } from "./ListItems";

export function ProductItems({ cart, setCart }) {
  const productitems = [{
    'id': 0,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Fancy Product",
    "productrate": "$40.00-$80.00",
    "rating": "",
  },

  {
    'id': 1,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Special Item",
    "productrate": "$20.00 $18.00",
    "rating": "⭐⭐⭐⭐⭐",
  },
  {
    'id': 2,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Sale Item",
    "productrate": "$50.00 $25.00",
    "rating": "",
  },
  {
    'id': 3,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Popular Item",
    "productrate": "$40.00",
    "rating": "⭐⭐⭐⭐⭐",
  },
  {
    'id': 4,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Sale Item",
    "productrate": "$50.00 $25.00",
    "rating": "",
  },
  {
    'id': 5,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Fancy Product",
    "productrate": "$120.00 - $280.00",
    "rating": "",
  },
  {
    'id': 6,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Special Item",
    "productrate": "$20.00 $18.00",
    "rating": "⭐⭐⭐⭐⭐",
  },
  {
    'id': 7,
    "image": "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    "productname": "Popular Item",
    "productrate": "$40.00",
    "rating": "⭐⭐⭐⭐⭐",
  },
  ];
  return (

    <div className='product-item'>
      {productitems.map((product, index) => <ListItems key={index} items={product}
        cart={cart} setCart={setCart} />)}

    </div>


  );
}
