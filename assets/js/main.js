const ingressos = []




function addBorder(id) {
    var element = document.querySelector(`#${id}`);
    element.style.border = "1px solid black";

}

function highlightCard(cardId) {
    var card = document.querySelector(cardId);
    card.classList.toggle("card-highlight");
}
function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Key pressd ${name} \r\n with code: ${code}`);
    }, false);
}
function addKeyboardEventListeners() {

    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        switch (code) {
            case 'Digit1':
                ingresso1.classList.toggle("card-highlight");
                ingresso2.classList.remove("card-highlight");
                ingresso3.classList.remove("card-highlight");
                ingresso4.classList.remove("card-highlight");
                break;
            case 'Digit2':
                ingresso1.classList.remove("card-highlight");
                ingresso2.classList.toggle("card-highlight");
                ingresso3.classList.remove("card-highlight");
                ingresso4.classList.remove("card-highlight");
                break;
            case 'Digit3':

                ingresso1.classList.remove("card-highlight");
                ingresso2.classList.remove("card-highlight");
                ingresso3.classList.toggle("card-highlight");
                ingresso4.classList.remove("card-highlight");
                break;
            case 'Digit4':
                ingresso1.classList.remove("card-highlight");
                ingresso2.classList.remove("card-highlight");
                ingresso3.classList.remove("card-highlight");
                ingresso4.classList.toggle("card-highlight");
                break;

            default:
                break;
        }
    }, false);
}



addKeyboardEventListeners()

selectCard = (selector) => 
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");

    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);


}
function showSelectedCards() {
    if (ingressos.length > 0) alert("Ingressos Selecionados: " + ingressos);
}
