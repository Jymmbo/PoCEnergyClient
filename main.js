function loadOperation(){
    myselect = document.getElementById("operationsSelect");
    operation = myselect.options[myselect.selectedIndex].value;
    if (operation=="addUser"){
        divUsers = document.getElementById("users");
        divUsers.style.display = "inline";
        divProduced = document.getElementById("producedEner");
        divProduced.style.display = "none";
        divPurchased = document.getElementById("purchasedEner");
        divPurchased.style.display = "none";
        divConsumed = document.getElementById("consumedEner");
        divConsumed.style.display = "none";
        divPrize = document.getElementById("setPrize");
        divPrize.style.display = "none";
    }else if(operation=="produceEnergy"){
        divProduced = document.getElementById("producedEner");
        divProduced.style.display = "inline";
        divUsers = document.getElementById("users");
        divUsers.style.display = "none";
        divPurchased = document.getElementById("purchasedEner");
        divPurchased.style.display = "none";
        divConsumed = document.getElementById("consumedEner");
        divConsumed.style.display = "none";
        divPrize = document.getElementById("setPrize");
        divPrize.style.display = "none";
    }else if(operation=="purchaseEnergy"){
        divPurchased = document.getElementById("purchasedEner");
        divPurchased.style.display = "inline";
        divProduced = document.getElementById("producedEner");
        divProduced.style.display = "none";
        divUsers = document.getElementById("users");
        divUsers.style.display = "none";
        divConsumed = document.getElementById("consumedEner");
        divConsumed.style.display = "none";
        divPrize = document.getElementById("setPrize");
        divPrize.style.display = "none";
    }else if(operation=="consumeEnergy"){
        divConsumed = document.getElementById("consumedEner");
        divConsumed.style.display = "inline";
        divProduced = document.getElementById("producedEner");
        divProduced.style.display = "none";
        divPurchased = document.getElementById("purchasedEner");
        divPurchased.style.display = "none";
        divUsers = document.getElementById("users");
        divUsers.style.display = "none";
        divPrize = document.getElementById("setPrize");
        divPrize.style.display = "none";
    }else if(operation=="setPrize"){
        divPrize = document.getElementById("setPrize");
        divPrize.style.display = "inline";
        divProduced = document.getElementById("producedEner");
        divProduced.style.display = "none";
        divPurchased = document.getElementById("purchasedEner");
        divPurchased.style.display = "none";
        divUsers = document.getElementById("users");
        divUsers.style.display = "none";
        divConsumed = document.getElementById("consumedEner");
        divConsumed.style.display = "none";
    }

}