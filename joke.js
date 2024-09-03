document.getElementById('jokeForm').addEventListener('submit', function(event){
    event.preventDefault();

    const category = document.getElementById('category').value;

    let type = document.querySelectorAll('input[name="type"]:checked');

    let URL = `https://v2.jokeapi.dev/joke/${category}`;
    
    if (type){
        URL += `?type=${type.value}`;
    }

    fetch (URL)
    .then(response=>response.json())
    .then(data =>{
        let theJoke = document.getElementById('theJoke');
        if (data.type==='single'){
            theJoke.textContent=data.joke;
        } else if(data.type==='twopart'){
            theJoke.innerHTML= `Q: ${data.setup} <br> A: ${data.delivery}`;
        } else {
            theJoke.textContent = 'No Joke Found!';
        }
    })

    .catch(error => {
        console.error('Error fetching joke:', error);
    });
});