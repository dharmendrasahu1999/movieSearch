//API information
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=449eb0b0925b39f4be862d484c59ae19'
const IMGPATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?api_key=449eb0b0925b39f4be862d484c59ae19&query=";
//Selecting our Elements
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//api ko fetch ke liye call kiya
showMovies(apiUrl);
function showMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            // console.log(data.results);
            data.results.forEach(element => {
                // creating tags for main tag
                const el = document.createElement('div');
                const image = document.createElement('img');
                const text = document.createElement('h2');

                text.innerHTML=`${element.title}`;
                image.src= IMGPATH + element.poster_path;
                el.appendChild(image);
                el.appendChild(text);
                main.appendChild(el);

            });

        });
}

//preventing the form submitting if the search bar is empty
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML='';

    const searchTerm = search.value;
    if(searchTerm)
    {
        showMovies(SEARCHAPI+searchTerm);
        search.value="";
    }

});

