var itemOneName ;
var itemOneDesc ;
var itemOnePrice ;
var itemTwoName ;
var itemTwoDesc ;
var itemTwoPrice ;
var itemThreeName ;
var itemThreeDesc ;
var itemThreePrice ;
var itemFourName ;
var itemFourDesc ;
var itemFourPrice ;
var itemFiveName ;
var itemFiveDesc ;
var itemFivePrice ;
var itemSixName ;
var itemSixDesc ;
var itemSixPrice ;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menudata = JSON.parse(this.responseText);
    console.log("Updating JSON Values");
    itemOneName = menudata.menuItems[0].salmonBurger.name
    itemOneDesc = menudata.menuItems[0].salmonBurger.description
    itemOnePrice = menudata.menuItems[0].salmonBurger.price
    //end one
    itemTwoName = menudata.menuItems[0].balmonBurger.name
    itemTwoDesc = menudata.menuItems[0].balmonBurger.description
    itemTwoPrice = menudata.menuItems[0].balmonBurger.price
    //end two
    itemThreeName = menudata.menuItems[0].galmonBurger.name
    itemThreeDesc = menudata.menuItems[0].galmonBurger.description
    itemThreePrice = menudata.menuItems[0].galmonBurger.price
    //end three
    itemFourName = menudata.menuItems[0].palmonBurger.name
    itemFourDesc = menudata.menuItems[0].palmonBurger.description
    itemFourPrice = menudata.menuItems[0].palmonBurger.price
    //end four
    itemFiveName = menudata.menuItems[0].zalmonBurger.name
    itemFiveDesc = menudata.menuItems[0].zalmonBurger.description
    itemFivePrice = menudata.menuItems[0].zalmonBurger.price
    //end five
    itemSixName = menudata.menuItems[0].calmonBurger.name
    itemSixDesc = menudata.menuItems[0].calmonBurger.description
    itemSixPrice = menudata.menuItems[0].calmonBurger.price
    //end six
    document.getElementById('itemOneName').innerHTML = itemOneName;
    document.getElementById('itemOneDesc').innerHTML = itemOneDesc;
    document.getElementById('itemOnePrice').innerHTML = itemOnePrice;
    document.getElementById('itemTwoName').innerHTML = itemTwoName;
    document.getElementById('itemTwoDesc').innerHTML = itemTwoDesc;
    document.getElementById('itemTwoPrice').innerHTML = itemTwoPrice;
    document.getElementById('itemThreeName').innerHTML = itemThreeName;
    document.getElementById('itemThreeDesc').innerHTML = itemThreeDesc;
    document.getElementById('itemThreePrice').innerHTML = itemThreePrice;
    document.getElementById('itemFourName').innerHTML = itemFourName;
    document.getElementById('itemFourDesc').innerHTML = itemFourDesc;
    document.getElementById('itemFourPrice').innerHTML = itemFourPrice;
    document.getElementById('itemFiveName').innerHTML = itemFiveName;
    document.getElementById('itemFiveDesc').innerHTML = itemFiveDesc;
    document.getElementById('itemFivePrice').innerHTML = itemFivePrice;
    document.getElementById('itemSixName').innerHTML = itemSixName;
    document.getElementById('itemSixDesc').innerHTML = itemSixDesc;
    document.getElementById('itemSixPrice').innerHTML = itemSixPrice;
    console.log("JSON values updated");
  }
};
xmlhttp.open("GET", "Items.json", true);
xmlhttp.send();

function adderItemOne() {
   var ItemOneSubTotal = document.getElementById('itemOneQty').value * itemOnePrice;
   console.log(ItemOneSubTotal);
   const liLog = document.createElement('li'); //Creating list item here
   const textLog = document.createTextNode(itemOneName + " x " + document.getElementById('itemOneQty').value +" = $"+ ItemOneSubTotal); //pulling occupant from guest log array
   liLog.appendChild(textLog); //appending to new li
   const guestLogText = document.getElementById('List'); //grabbing parent node 
   guestLogText.appendChild(liLog); //appending li to said node
}