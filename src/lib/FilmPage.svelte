<script>
import { onMount } from 'svelte';
import Store from './stores.js';
import Navbar from './Navbar.svelte';

export let title;
let movie = null;

$Store.then(data => { movie = data.find(item => item && item.Title === title); });

$: if(movie) console.log(movie);
</script>

<Navbar />

{#if movie}
    <div class="film">
        <div class="film-title">{movie.Title}</div>

            <div class="film-genre">{movie.Genre}</div>
            <div class="film-premiere">{movie.Premiere}</div>
            <div class="film-runtime">Length: {movie.Runtime}</div>
            <div class="film-imdb">Score: {movie["IMDB Score"]}</div>
            <img src="{movie.posterPath}" alt="error"/>
        </div>


{:else}
    <div>Loading...</div>
{/if}

<style>
.film {
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.film-title {
    font-size: 2em;
    margin-bottom: 10px;
}

.film-genre, .film-premiere, .film-runtime, .film-imdb {
    font-size: 1.2em;
    margin: 5px 0;
}
</style>