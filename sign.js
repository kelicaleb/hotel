const sign = document.querySelector("#signin");

function SignIn(){
    sign.addEventListener("submit", e => {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.pass.value
        fetch("http://localhost:3000/details",{
            method:"POST",
            body:JSON.stringify({
                username:username,
                password:password
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        alert("Your details have been submitted")
        
    })
}
SignIn()