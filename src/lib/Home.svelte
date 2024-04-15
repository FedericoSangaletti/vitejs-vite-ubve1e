<script>
    import Store from './stores.js';
    import CardFilm from './CardFilm.svelte';
    import Navbar from './Navbar.svelte';
    import { createEventDispatcher, onMount } from 'svelte';

    let movies = [];
    $Store.then(data => movies = data);

    function handleAddToCart(movie) {
        addToCart(movie);
    }

    let orderBy = { field: 'imdb', direction: 'asc' }; 

    let sortedMovies = []; 

    let selectedOrder = 'imdb:asc'; 

    const dispatch = createEventDispatcher();

    function sortMovies(event) {
        const [field, direction] = event.target.value.split(':');
        orderBy = { field, direction };
        dispatch('sort', orderBy); 
    }

   
    onMount(() => {
        sortMovies({ target: { value: `${orderBy.field}:${orderBy.direction}` } });
    });

    
    $: {
        if (orderBy.field === 'imdb') {
            sortedMovies = [...movies].sort((a, b) => {
                if (orderBy.direction === 'asc') {
                    return a['IMDB Score'] - b['IMDB Score'];
                } else {
                    return b['IMDB Score'] - a['IMDB Score'];
                }
            });
        } else if (orderBy.field === 'runtime') {
            sortedMovies = [...movies].sort((a, b) => {
                if (orderBy.direction === 'asc') {
                    return a.Runtime - b.Runtime;
                } else {
                    return b.Runtime - a.Runtime;
                }
            });
        }
    }
</script>

<Navbar />

<h1>Multisala Lord</h1>


<div class="dropdown">
    <select bind:value={selectedOrder} on:change={sortMovies}>
        <option value="imdb:asc">Ordina per IMDB Score crescente</option>
        <option value="imdb:desc">Ordina per IMDB Score decrescente</option>
        <option value="runtime:asc">Ordina per Durata crescente</option>
        <option value="runtime:desc">Ordina per Durata decrescente</option>
    </select>
</div>

<div class="movie-cards">
    {#each sortedMovies as item}
        <CardFilm
          title={item.Title}
          genre={item.Genre}
          premiere={item.Premiere}
          runtime={item.Runtime}
          imdbScore={item['IMDB Score']}
          language={item.Language}
          posterPath={item.posterPath}
        />
    {/each}
</div>

<style>
   
    .container {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center; 
        height: 100vh; 
    }

    
    .dropdown {
        margin-bottom: 20px;
    }

    
    .movie-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center; 
    }
</style>
