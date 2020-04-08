var alertMe = function(){
    var message = document.getElementById("myNameInput").value.toLowerCase();
    console.log('You have called Alert Me Fucntion!')
    alert('hi pittu! Wassup\n Custom Message:'+message);
    if(message === 'naruto'){
        document.getElementById("SearchResults").innerHTML = "<h1>Naruto, Knon for Naruto Shupidden</h1>";
    }else if(message === 'Drangon ball Z' || 'dbz' ){
        document.getElementById("SearchResults").innerHTML = "<h1>Goku, god all Animes. Don't Fuck with him</h1>";
    }
}