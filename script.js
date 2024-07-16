let index = 0;
let attempt = 0;
let correctPassword = "Password";
const showHint = document.getElementById("clue");

const tellers = [
    { tell: "Enter Password" },
    { tell: "Incorrect Password" },
    { tell: "Correct Password" }
]

function Delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

document.addEventListener("keyup", (event) => {
    if (event.key === 'Enter') {
        const password = document.getElementById("password").value;
        if (password === correctPassword) {
            index = 2;
            document.getElementById("image").src = "./img/you-are-gay.png";
            Output("That is correct");
            ShowHint();
        } else {
            if (correctPassword.startsWith(password)) {
                Output("Almost there");
                ShowHint();
            } else if (attempt === 10) {
                Output("The password is \"Password\"");
                document.getElementById("password").value = "Passwor"
            } else {
                Output("Start with \"P\" and then lowercase letters");
                ShowHint();
            }
            index = 1;
            attempt++;
        }
    }
});

function Output(text) {
    document.getElementById("teller").innerHTML = tellers[index].tell;
    showHint.innerHTML = text;
}

async function ShowHint() {
    showHint.classList.add("show");
    await Delay(5000);
    showHint.classList.remove("show");
}

Output();


