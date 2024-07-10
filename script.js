
const inp = document.getElementById('input')
const btn= document.getElementById('btn')
const out = document.querySelector('h3')

let randvalue = Math.floor(Math.random()*100)

btn.addEventListener('click',myfn)

let count =0;
function myfn(){
    let content ;
    let value = Number(inp.value)
    if(value == randvalue){
        content = `You are Guessed Correct Value ,You Tried ${count} Times`
    }
    else if (value < randvalue){
        content = 'This is Low'
        count++
    }
    else if(value > randvalue){
        content = 'This is High'
        count++
    }
    out.textContent = content
}