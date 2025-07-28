const submit = document.querySelector("form");
let i = localStorage.getItem("userId")?parseInt(localStorage.getItem("userId")):0;
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user = {
        "id" : i++,
        "Name" : document.getElementById("name").value,
        "Email": document.getElementById("email").value,
        "Phone Number" : document.getElementById("comments").value,
        "Group": document.getElementById("dropdown").value,
        "DOB": document.getElementById("dob").value
    }
    localStorage.setItem("userId",i);
    fetch("http://localhost:3000/User",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(user)
    })
    .then((res)=>{
        if(res){
            alert("Form Submitted successfully");
            submit.reset();
        }
        else{
            alert("Submission failed");
        }
    })
    .catch((err)=>{
        alert("Something went wrong");
    })

})