const api = 'http://api.giphy.com/v1/gifs/search';
document.getElementById('q').addEventListener("change", function(e){
    let value = e.target.value;
    processAPI(value);
});

function processAPI(value){
    axios.get(api, { params: { q: value , api_key: 'dc6zaTOxFJmzC'} })
    .then(function (response) {
        let html = '';
        console.log(response.data.data);
        if(response.data.data){
            response.data.data.forEach(element => {
                html += '<img src="'+element.images.original.url+'">';
            });
            document.getElementById('result').innerHTML = html;
        }
    })
    .catch(function (error) {
        document.getElementById('result').innerHTML = error.message;
    });
}

document.getElementById('remove').addEventListener("click", function(e){
    document.getElementById('result').innerHTML = "";
});

document.getElementById('search').addEventListener("click", function(e){
    e.preventDefault();
    let valueCLick = document.getElementById('q').value;
    processAPI(valueCLick);
});