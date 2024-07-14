let index = 0;
let incorrect = "Incorrect Password";
const password = document.getElementById("password");
const hint = document.getElementById("hint");

const tellers = [
    { tell: "Enter Password" },
    { tell: `${incorrect}, Try Again` },
    { tell: `${incorrect}, Try Again Later`, password: "Try Again Later" }

]

document.addEventListener("keyup", (event) => {

    if (event.key === 'Enter') {
        if(password.value === tellers[index].password) {
            document.getElementById("image").src = "./img/you-are-gay.png"
        } else if (index <= 1) {
            console.log("Nope")
            index++;
            Ouput();
        } else {
            index = 0;
            Ouput();
        }
    }
})

function Ouput() {
    document.getElementById("teller").innerHTML = tellers[index].tell;
}

Ouput();

hint.addEventListener("click", () => {
    document.getElementById('clue').innerHTML = "Hint: Just follow what (#ff0000) said.";
})
