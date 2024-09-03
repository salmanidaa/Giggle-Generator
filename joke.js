document.getElementById('jokeForm').addEventListener('submit', function(event){
    event.preventDefault();

    const category = document.getElementById('category').value;
    const types = document.querySelector('input[name="type"]:checked').value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    let URL = `https://v2.jokeapi.dev/joke/${category}?type=${types}`;

    if (mode==="yes"){
        URL += `&safe-mode`;
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
            theJoke.textContent = 'Sorry, No Joke Found!';
        }
    })

    .catch(error => {
        console.error('Error fetching joke:', error);
    });
});