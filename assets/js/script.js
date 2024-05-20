function modoClaro() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
}

function modoEscuro() {
    document.body.style.backgroundColor = "#333333";
    document.body.style.color = "#ffffff";
}
function alternar(){
    document.getElementByClass("btn btn-dark").addEventListener("click", function() {
        if (document.body.classList.contains("dark-mode")) {
            modoClaro();
        } else {
            modoEscuro();
        }
    });


}


// module.exports = {alternar};