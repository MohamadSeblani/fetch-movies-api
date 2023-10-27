
fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=a782cb065db909eb0294914dcdef846f')
   .then(response => response.json())
   .then(data => {
      let container = document.getElementById('container')

      data.results.forEach(movie => {

         let card = document.createElement('div')
         card.classList.add('card');

         let info = document.createElement('div')
         info.innerHTML = `<p>${movie.original_title} <br> ${movie.release_date}</p>`;
         card.appendChild(info)
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
   // i added fetch a new api