function newComment() {
    var comments =[
        "Goats cheese is overrated",
        "Hallumi is somehow underated",
        "Invisible Women is a great book and should be compulsery reading before anyone is allowed to make an important decision",
        "Coffee is very good"
    ]
    var comment = comments[Math.floor(Math.random() * comments.length)];
    document.getElementById("comment").innerHTML = comment;
}

function loadGify(){
    readFile().then(api_key => {
            fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + api_key + "&limit=1" )
                .then( r => console.log(r))
        }
    )
}

function readFile(){
    return fetch("./conf.txt")
        .then( r => r.text() )
}