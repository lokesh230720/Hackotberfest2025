const clock = document.getElementById('clock');
const date1 = document.getElementById('date');
const stop = document.getElementById('stop');
const Start = document.getElementById('start');
// let st;
const Timmer = (function(){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    date1.innerHTML = date.toLocaleDateString();
})
let st = setInterval(Timmer ,1000);

document.querySelector('#stop').addEventListener('click',function () {
    clearTimeout(st,1000);
    console.log("Clock Stoped");
    stop.innerHTML = `Press Start `
    start.innerHTML = `Start `

})
document.querySelector('#start').addEventListener('click',()=>{
    setInterval(Timmer ,1000);
    console.log("Clock Started");
    start.innerHTML = `Press Stop `
    stop.innerHTML = `Stop`
})
