import {combineReducers} from "redux";

const moviesReducer=()=>{
    return [
        {title: 'Spider-Man: HomeComing', releaseDate:'05-07-2017', rating:7.4,},
        {title: 'Aquaman' , releaseDate:'12-07-2018', rating:7,},
        {title: 'Black Panther', releaseDate:'02-12-2018', rating:7.4,},
        {title:'Avengers:Infinity War', releaseDate:'25-04-2018',rating:8.3,},
        {title:'Guardians of the Galaxy', releaseDate:'30-07-2016',rating:7.9,},

    ]
}

const selectedMovieReducer=(state=null,action)=>{

    switch(action.type){
        case'MOVIE_SELECTED':
           return action.payload
        default: 
        
            return state   
    }

}

export default combineReducers({
    movies:moviesReducer,
    selectedMovie: selectedMovieReducer
})