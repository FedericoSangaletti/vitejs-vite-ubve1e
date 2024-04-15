<script>
  import { cart } from './cart.js';
  import { navigate } from 'svelte-routing';
  export let title;
  export let genre;
  export let premiere;
  export let runtime;
  export let imdbScore;
  export let language;
  export let posterPath;

  function redirectTo(url) {
    navigate(url);
  }

function addCard(titleFilm){
  let cardFilm = {
    title: titleFilm,
    prezzo: 4,
  }
  cart.update(items => [cardFilm, ...items]);
  console.log("update")
  return cardFilm;
}
</script>

<style>
 
  .movie-cards-container {
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap; 
  }

  
  .movie-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    width: 300px; 
    margin-bottom: 20px;
    transition: box-shadow 0.3s ease; 
  }

  
  .movie-card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); 
  }

  
  .movie-card h2 {
    margin-top: 0;
    margin-bottom: 5px; 
    font-size: 1em; 
  }

  
  .movie-card p {
    margin: 3px 0; 
    font-size: 0.9em; 
  }

  
  .movie-card p strong {
    font-weight: bold;
  }

  .movie-card img {
    width: 100%; 
    height: auto; 
  }

    .movie-card hr {
    border: 0;
    height: 1px;
    background: black; 
    margin: 10px 0; 
  }

  .movie-card button {
    border: 2px solid #000; 
    background-color: #fff; 
    color: #000; 
    padding: 5px 10px; 
    text-decoration: none; 
    font-size: 14px;
    margin: 10px 2px; 
    cursor: pointer; 
  }

  .movie-card button:hover {
    background-color: #000; 
    color: #fff; 
  }
</style>

<div class="movie-cards-container">
<div class="movie-card">
  <div  on:click={() => redirectTo(`./film/${title}`)}>
    <h2>{title}</h2>
    <hr /> 
    <img src="{posterPath}" alt="error">
  </div>
  <button on:click={addCard(title)}>Add to cart for $4</button>
  </div>
</div>
