// console.log("hello world")
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputfield = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputfield.value;
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn)

    inputfield.value = ''

}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Moive Watched"
    } else{
        message.textContent = "Movie added back"
    }
    
}

document.querySelector('form').addEventListener('submit', addMovie)