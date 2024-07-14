let index = 0;
const password = document.getElementById("password");
const hint = document.getElementById("hint");

const tellers = [
    { tell: "Enter <i>Password</i>" },
    { tell: "Incorrect <i>Password</i>", password: "Password" },
    { tell: "Correct <i>Password</i>" }
]

document.addEventListener("keyup", (event) => {

    if (event.key === 'Enter') {
        if(password.value === tellers[1].password) {
            index = 2;
            document.getElementById("image").src = "./img/you-are-gay.png";
            Output();
        } else {
            index = 1
            Output();
        }
    }
})

function Output() {
    document.getElementById("teller").innerHTML = tellers[index].tell;
}

Output();

hint.addEventListener("click", () => {
    document.getElementById('clue').innerHTML = "Hint: The password is (Password)";
})
