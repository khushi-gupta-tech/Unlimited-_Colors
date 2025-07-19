// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0;i<6;i++){
       color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

console.log(randomColor())

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')

const startChange = function(){
    if(!intervalId){
       intervalId =setInterval(()=>{
       document.body.style.backgroundColor = randomColor()
   },1000)
    }
   
}

const stopChange =  function(){
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click', startChange);
stop.addEventListener('click', stopChange);

