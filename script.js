console.log("Generating a random a joke")
arr = [`How do you get a squirrel to like you? <br>
Act like a nut.`,

  `What do you call two birds in love? <br>
Tweethearts`,

  `How does a scientist freshen her breath? <br>
With experi-mints.`,

  `How are false teeth like stars? <br>
They come out at night.`,

  `What building in your town has the most stories <br>
The public library.`,

  `What’s worse than finding a worm in your apple? <br>
Finding half a worm.`,

  `What is a computer's favorite snack? <br>
Computer chips.`,

  `What did one volcano say to the other? <br>
I lava you.`,

  `How do we know that the ocean is friendly? <br>
It waves.`,

  `What is a tornado’s favorite game to play? <br>
Twister.`,

  `How does the moon cut his hair? <br>
Eclipse it.`]

var y;
var x = 0;
var array=[]
let generateRandom = () => {


  y = x;
  x = Math.floor(Math.random() * (arr.length))


  document.getElementsByClassName("jokehere")[0].innerHTML = arr[x]

}

let goback = () => {
  (document.getElementsByClassName("jokehere"))[0].innerHTML = arr[y]
}
