var orderTotal = 0;
var prices = []
var orderProducts = []

function clearRadioForm(id) {
    var form = document.getElementById(id);
    form.reset();
}

function orderPizza(radioName, checkboxName) {
    var sizes = document.getElementsByName(radioName)
    var toppings = document.getElementsByName(checkboxName)

    var selectedSize;
    var selectedToppings = [];
    var string = ''
    var numToppings;

    for (var i = 0; i < sizes.length; i++){
        if (sizes[i].checked){
            selectedSize = sizes[i].value;
            sizes[i].checked = false;
            break;
        }    
    }

    if (!selectedSize){
        console.log("No Size Selected")
        alert("Please select a size for the pizza.")
        return;
    }

    for (var i = 0; i < toppings.length; i++){
        if (toppings[i].checked){
            selectedToppings.push(toppings[i].value);
            toppings[i].checked = false;
        }
    }

    if (selectedSize === 'Slice'){
        string = selectedSize + " of Pizza";
        if (toppings.length !== 0){
            numToppings = selectedToppings.length;
            string = string + " Toppings: " + selectedToppings[0];
        
            for (var i = 1; i < selectedToppings.length - 1; i++){
                string = string + ", " + selectedToppings[i];
            }
            string = string + selectedToppings[selectedToppings.length-1]
        }
    }
    else{
        string = selectedSize + " Pizza";
        if (toppings.length !== 0){
            numToppings = selectedToppings.length;
            string = string + " Toppings: " + selectedToppings[0];
        
            for (var i = 1; i < selectedToppings.length - 1; i++){
                string = string + ", " + selectedToppings[i];
            }
            string = string + selectedToppings[selectedToppings.length-1]
        }
    }

    switch (selectedSize){
        case 'Slice':
            addToTotal(string, (2.25 + numToppings * 0.5))
            return;
        case 'Medium':
            addToTotal(string, (11.99 + numToppings * 1.75));
            return;

        case 'Large':
            addToTotal(string, (13.99 + numToppings * 1.75));
            return;

        case 'Sicilian':
            addToTotal(string, (15.99 + numToppings * 1.75));
            return;

        case 'Sheet':
            addToTotal(string, (22.99 + numToppings * 2));
            return;

        default:
            console.log("ERROR")
            console.log(string);
            console.log(selectedSize);
            console.log(selectedToppings);
            return;
    }
}

function updateOrder(id){
    var string = ""
    for (var i = 0; i < orderProducts.length; i++){
        if (i > 0){
            string = string + ", ";
        }
        string = string + orderProducts[i];
    }
    id.innerHTML = string;
}

function updatePrice(id){
    var totalPrice = 0;
    for (var i = 0; i < prices.length; i++){
        totalPrice = totalPrice + prices[i];
    }
    id.innerHTML= ("$"+totalPrice.toFixed(2).toString());
}

function getSelectedRadioElement(id){
    var elements = document.getElementsByName('flavor')
    for (var i = 0; i < elements.length; i++){
        if (elements[i].checked){
            return elements[i].value;
        }
    }
}

function addWingsToOrder(number, formName, price){
    var selectedFlavor = getSelectedRadioElement(formName)
    if (selectedFlavor){
        addToTotal(number + " " + selectedFlavor  + ' Wings', price)
        updateOrder(orderDisplay);
        updatePrice(priceDisplay);
        clearRadioForm('formName')
    }
}


function addToTotal(productName, priceOfProduct){
    orderProducts.push(productName);
    prices.push(priceOfProduct);
    orderTotal = orderTotal + priceOfProduct;
    return orderTotal;
}