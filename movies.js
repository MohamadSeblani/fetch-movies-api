
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a782cb065db909eb0294914dcdef846f')
   .then(response => response.json())
   .then(data => {
      let container = document.getElementById('container')

      data.results.forEach(movie => {

         let card = document.createElement('div')
         card.classList.add('card');

         let youtube = 'https://www.youtube.com/results?search_query=';
         let search = youtube.concat(movie.original_title.replaceAll(' ', '+')).replaceAll("'", '');

         let info = document.createElement('div')
         info.innerHTML = `<div class = "titlediv"><h1>${movie.original_title}</h1></div>
         <div><button onclick="window.location.href='${search}'" class="button">Watch Trailer</button></div>
         <br><br><br>
         <p> Release Date: ${movie.release_date} <br> Original Language: ${movie.original_language} <br><br> Popularity: ${movie.popularity} <br> Vote Average: ${movie.vote_average}
         <br> Vote Count: ${movie.vote_count}</p>`;

         card.appendChild(info);
         info.classList.add('info');
         info.style.display = 'none';

         let cardhover = document.querySelector('.card');
         card.addEventListener('mouseover', () => {
            info.style.display = 'flex';
         });
         card.addEventListener('mouseleave', () => {
            info.style.display = 'none';
         });


         let imgpath = "https://image.tmdb.org/t/p/original/";

         let img = document.createElement('img');
         img.src = imgpath + movie.poster_path;

         card.appendChild(img);
         container.appendChild(card);
      });
   });