var yemail = document.getElementById("yemail");
var lpbutton = document.getElementById("lpbutton");
function myFunction(event){
    yemail.textContent = ""

    if(yemail === "" && event === 'email'){
        yemail.textContent = "forgetting something?"
    }
}