const movieApp = {
    api_key: '3058422e0d59745070d03d9b781c0d40'
};

movieApp.displayMovie = function(listOfMovies){
    listOfMovies.forEach(function(movie){
            const moviePoster = $('<img>').attr('src',`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
            const title = $('<h2>').text(movie.title)
            const overview = $('<p>').text(movie.overview);
            const movieTitleOverview = $('<div>').addClass('text-styling').append(title, overview)
            const appendToHtml = $('<div>').addClass('movie-details').append(moviePoster, movieTitleOverview)
            $('.result').append(appendToHtml)
            console.log(movie)
    })
}

movieApp.movieData = function (language, genre, startDate,endDate, runtime){ 
    $.ajax('https://api.themoviedb.org/3/discover/movie?',{
        method:"GET",
        dataType:'json',
        data:{
            api_key:movieApp.api_key,
            with_original_language: language,
            with_genres: genre,
            // `primary_release_date.gte`: startDate,
            // `primary_release_date.lte`: endDate
            // with_runtime_lte: runtime,
        }
    }).then(function(result){
        result.results.filter(function(item){
        //code will go here
        }) 
        // console.log(result.results.runtime)
        
        movieApp.displayMovie(result.results.slice(0,10));



        // console(result.results[0]releaseDate)

        //get a array of movies that meets the standards
    })
}
//the thing is I cannot come up with way that allow me find multiple year at a time


movieApp.userInput = function(){
    $('button').on('click', function (event) {
        event.preventDefault();
        const userInput = $('form').serializeArray();
        console.log(userInput.length)
        const language = userInput[0].value
        const genre = userInput[1].value
        const startDate = `${userInput[2].value}-01-01`
        const endDate = `${Number(userInput[2].value) + 10}-12-31`
        const runtime = userInput[3].value
        movieApp.movieData(language, genre, startDate,endDate, runtime)
        console.log(typeof(startDate))
    })
}

movieApp.init = function(){
    movieApp.userInput()
}

//document ready
$(function(){
    movieApp.init();
})








/*
-https://api.openbrewerydb.org/breweries?by_city=Alameda&brewery_type=micro
-this works, this api allows us use multiple filters at the same time
-use ajax to retrieve data. probably use multiple q to get data 
-if array.length > 5
    random get 5
-else 
    return all 

ul.append()


*/