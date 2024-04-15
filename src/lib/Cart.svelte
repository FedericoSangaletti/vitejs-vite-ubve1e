<style>
 
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  
  .total {
    margin-top: 20px;
    font-weight: bold;
  }


</style>

<script>
    import { cart } from './cart.js';
    import Navbar from './Navbar.svelte';

    let cartItems = $cart;
    console.log(cartItems);

    
    function calculateTotal(items) {
      let total = 0;
      items.forEach(item => {
        total += item.prezzo;
      });
      return total;
    }
</script>

<Navbar />

<h1>Carrello</h1>

<ul>
  {#each cartItems as item}
    <li>{item.title} - {item.prezzo}$</li>
  {/each}
</ul>

<div class="total">Totale: {calculateTotal(cartItems)}$</div>
