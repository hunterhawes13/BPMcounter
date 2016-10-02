var beat = []
var count = [5,4,3,2,1]
var lastBeat = new Date().getTime()
document.addEventListener('keydown',bpm)
function bpm(){
  var newBeat = new Date().getTime()
  var diff = parseInt(newBeat) - parseInt(lastBeat)
  lastBeat = newBeat
  if (5 < beat.length){
    beat.shift()
  }
  beat.push(diff)
  var sum = 0
  for (i=0;i<beat.length;i++){
    sum += parseInt(beat[i])
  }
  if (1 < beat.length) {
    var second = sum/beat.length/1000,
        minute = second*10/10,
        average = ~~(60/minute)

        var node = document.getElementById("bpm");
        node.innerHTML = average + " Beats Per Minute";
        function resetCount (){
          node.innerHTML = "";
        }
// console.log(average + " average");
// console.log(minute + " minute");
// console.log(second + "s econd");
// console.log(beat + " beat");
//console.log(newBeat + " newBeat");

  }
}
// var counter = 0;
// var count = ['5', '4', '3', '2', '1'];
// var instruction = document.getElementById('instruction');
                                     
// function next_word()
// {
//     instruction.innerHTML = count[counter % count.length];
//     counter += 1;
// }

// document.addEventListener('keydown',next_word);


