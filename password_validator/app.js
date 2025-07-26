/* All the initialiser*/
const text = document.getElementById("inpt");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number  = "1234567890";
const symbol = "!@#$%^&*~({[)]-=_}";

const create_button = document.getElementById("gen_button");

const strength = document.querySelectorAll(".btn");
create_button.disabled =true;


let length = 12;
let pass1 = null;
let pass2 = null;
let pass3 = null;
let visible = null;


let prev=null;
let name_attribute = null;


/* Event Handler on the Generate button*/

create_button.addEventListener('click',()=>{
    createPassword(name_attribute);
    showPassword(visible);
})




/* Display the password*/
const showPassword = (visible)=>{
    if(visible===1){
        text.value = pass1;
    }
    else if(visible===2){
        text.value = pass2;
    }
    else{
        text.value = pass3;
    }
}

/* Logic */

const createPassword = (name_attribute) => {
    visible = null;
    if(name_attribute === "Strong"){
        const all = upper + lower + number + symbol;
        pass1 = "";
        while(pass1.length < length){
            pass1 += all[Math.floor(Math.random() * all.length)];
        }
        visible = 1;

    } else if(name_attribute === "Moderate"){
        const mod = upper + lower + number;
        pass2 = "";
        while(pass2.length < length){
            pass2 += mod[Math.floor(Math.random() * mod.length)];
        }
        visible = 2;

    } else if(name_attribute === "Weak"){
        const wek = upper + lower;
        pass3 = "";
        while(pass3.length < length){
            pass3 += wek[Math.floor(Math.random() * wek.length)];
        }
        visible = 3;
    }
}

/* Copy Handler */
const cpy = document.getElementById("copy");
cpy.addEventListener('click',()=>{
    if(text.value.trim()!== ""){
    text.select();
    document.execCommand("copy");
    text.value="";
}
})

/* Listens the strengths*/
let flag=false;
strength.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(prev){
            prev.style.opacity = "1";
        }
        num.style.opacity="0.25";
        name_attribute = num.getAttribute("id");
        prev=num;
        create_button.disabled=false;
        if(!flag){
            create_button.addEventListener("mouseenter", () => {
                create_button.style.backgroundColor = "black"; // or any style you want
                create_button.style.color = "white";
            });

            create_button.addEventListener("mouseleave", () => {
                create_button.style.backgroundColor = "white"; // resets to original
                create_button.style.color = "black";
            });
        }
    })
})
