const text = document.getElementById("inpt");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number  = "1234567890";
const symbol = "!@#$%^&*~({[)]-=_}";

const create_button = document.getElementById("gen_button");
const all = upper+lower+number+symbol;

create_button.addEventListener('click',()=>{
    createPassword();
})

let length = 12;
createPassword = ()=>{
    let pass = " ";
    while(length>=pass.length){
        pass+=all[Math.floor(Math.random()*all.length)];
    }
    text.value = pass;
}

const cpy = document.getElementById("copy");

cpy.addEventListener('click',()=>{
    text.select();
    document.execCommand("copy");
    text.value="";
})

const strength = document.querySelectorAll(".btn");


let prev=null;
strength.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(prev){
            prev.style.opacity = "1";
        }
        num.style.opacity="0.25";
        prev=num;
    })
})
