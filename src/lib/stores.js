import { writable } from 'svelte/store';
import parser from 'papaparse';

async function loadData() {
  const response = await fetch('./movies.csv');
  const csvText = await response.text();
  let parsedData;

  parser.parse(csvText, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      parsedData = results.data;
    },
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  const apiKey = '9ea61d5c063b2f825933f876b4a93d30';

  for (let movie of parsedData) {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURI(
        movie.Title
      )}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results[0]) {
          movie.posterPath = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
        } else {
          movie.posterPath = 'No poster found';
        }
      })
      .catch((err) => console.error(err));
  }

  return parsedData;
}

const cart = writable(loadData());
export default cart;
