
function clearRadioForm(id) {
    var form = document.getElementById(id);
    form.reset();
}

function orderPizza(idRadio, idCheckbox) {
    var size = document.getElementById(idRadio)
    size.reset();

    var toppings = document.getElementById(idCheckbox)
    for (var i = 0; i < toppings.length; i++){
        if (toppings[i].checked){
            console.log(toppings[i]);
            toppings[i].checked = false;
        }
    }
}

function clearForm(idForm){

}