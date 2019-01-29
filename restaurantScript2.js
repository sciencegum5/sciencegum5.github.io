var $ = document
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menudata = JSON.parse(this.responseText);
    console.log("Updating JSON Values");
    
    console.log("JSON values updated");
  }
};
xmlhttp.open("GET", "Items.json", true);
xmlhttp.send();

function checkOut() {
    itemOneQty =  document.getElementById('itemOneQty').value;
    localStorage.setItem("itemOneQty", itemOneQty);
    location.href="Checkout.html";
    //ask price
    //redirect 
    //compile and display
}