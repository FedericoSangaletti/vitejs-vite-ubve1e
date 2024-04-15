
<script>
    import { onMount } from 'svelte';
    import { movies } from './stores.js'; 

    
    async function fetchCSV() {
        try {
            const response = await fetch('movies.csv'); 
            const csvContent = await response.text();

            const lines = csvContent.trim().split('\n');
            const movieTitles = [];

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                const title = values[6].replace(/^"|"$/g, ''); 

               
                movieTitles.push({ id: i, title });
            }

            
            movies.set(movieTitles);
        } catch (error) {
            console.error('Errore durante il recupero del CSV:', error);
        }
    }

    
    onMount(fetchCSV);
</script>

<h1>Titoli dei film</h1>
<ul>
   
    {#each $movies as movie}
        <li>{movie.title}</li>
    {/each}
</ul>
