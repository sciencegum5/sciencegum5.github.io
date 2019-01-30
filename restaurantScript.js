var $ = document
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menudata = JSON.parse(this.responseText);
    console.log("Updating JSON Values");
    $.getElementById('itemOneName').innerHTML = menudata.menuItems[0].salmonBurger[0].name
    $.getElementById('itemOneDesc').innerHTML = menudata.menuItems[0].salmonBurger[0].description
    $.getElementById('itemOnePrice').innerHTML = menudata.menuItems[0].salmonBurger[0].price
    //end one
    $.getElementById('itemTwoName').innerHTML = menudata.menuItems[0].balmonBurger[0].name
    $.getElementById('itemTwoDesc').innerHTML = menudata.menuItems[0].balmonBurger[0].description
    $.getElementById('itemTwoPrice').innerHTML = menudata.menuItems[0].balmonBurger[0].price
    //end two
    $.getElementById('itemThreeName').innerHTML = menudata.menuItems[0].galmonBurger[0].name
    $.getElementById('itemThreeDesc').innerHTML = menudata.menuItems[0].galmonBurger[0].description
    $.getElementById('itemThreePrice').innerHTML = menudata.menuItems[0].galmonBurger[0].price
    //end three
    $.getElementById('itemFourName').innerHTML = menudata.menuItems[0].palmonBurger[0].name
    $.getElementById('itemFourDesc').innerHTML = menudata.menuItems[0].palmonBurger[0].description
    $.getElementById('itemFourPrice').innerHTML = menudata.menuItems[0].palmonBurger[0].price
    //end four
    $.getElementById('itemFiveName').innerHTML = menudata.menuItems[0].zalmonBurger[0].name
    $.getElementById('itemFiveDesc').innerHTML = menudata.menuItems[0].zalmonBurger[0].description
    $.getElementById('itemFivePrice').innerHTML = menudata.menuItems[0].zalmonBurger[0].price
    //end five
    $.getElementById('itemSixName').innerHTML = menudata.menuItems[0].calmonBurger[0].name
    $.getElementById('itemSixDesc').innerHTML = menudata.menuItems[0].calmonBurger[0].description
    $.getElementById('itemSixPrice').innerHTML = menudata.menuItems[0].calmonBurger[0].price
    //end six
    console.log("JSON values updated");
  }
};
xmlhttp.open("GET", "Items.json", true);
xmlhttp.send();

function adderItemOne() {
   var ItemOneSubTotal = $.getElementById('itemOneQty') * $.getElementById('itemOnePrice');
   console.log(ItemOneSubTotal);
   const liLog = document.createElement('li'); //Creating list item here
   const textLog = document.createTextNode($.getElementById('itemOneName').value + " x " + $.getElementById('itemOneQty').value +" = $"+ ItemOneSubTotal); //pulling occupant from guest log array
   liLog.appendChild(textLog); //appending to new li
   const guestLogText = document.getElementById('List'); //grabbing parent node 
   guestLogText.appendChild(liLog); //appending li to said node
}