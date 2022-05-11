import React from 'react';
import ReactDOM from 'react-dom/client'; //'react-dom/client'
import App from './App';

import { createServer, Model} from 'miragejs'

createServer({
  models:{
    products: Model
  },

  seeds(server){
    server.db.loadData({
      products: [
        {
          id: 1,
          name: "Iphone 13 Pro",
          price: 21.99,
          availableCount: 8
        },
        {
          id: 2,
          name: "Macbook Pro",
          price: 429,
          availableCount: 2
        },
        {
          id: 3,
          name: "Monitor",
          price: 349.99,
          availableCount: 9
        },
        {
          id: 4,
          name: "Galaxy S",
          price: 799.99,
          availableCount: 1
        },
        {
          id: 5,
          name: "Mouse",
          price: 129.99,
          availableCount: 2
        },
        {
          id: 6,
          name: "Teclado",
          price: 369.99,
          availableCount: 7
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/products', () =>{
      return this.schema.all('products')
    })
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);