console.log("Hello World")
let result = {
    "email": "support@emailvalidation.io",
    "user": "support",
    "tag": "",
    "domain": "emailvalidation.io",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": true,
    "disposable": false,
    "score": 0.64,
    "state": "deliverable",
    "reason": "valid_mailbox",
    "free": false,
    "format_valid": true,
    "catch_all": null
}

let input = document.querySelector(".input");
let button = document.querySelector(".btn");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".input").value === "") {
        button.disabled = true; //button remains disabled
    } else {
        button.disabled = false; //button is enabled
    }
}


// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitBtn").click();
  }
});

submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("Clicked!!")
    resultCon.innerHTML = `<img width="50" src="assets/loading.svg" alt="loading" style="background-color="inherit"">` //loading svg
    key = "ema_live_qs8PZnzqv7d2fgsvhvCHuyBxpsgXwSiv0AcbrJSj"

    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result= await res.json()

    let str = ''
    for (key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " "){
            str = str +  `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCon.innerHTML = str 
})

clearBtn.addEventListener("click", ()=>{
    resultCon.innerHTML = 'Your results will show here'
    button.disabled = true;
})