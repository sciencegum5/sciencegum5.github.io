var spicyBurger = {
      meat: 'Angus Beef',
      sauce: 'siracha & mayo',
      name: "The Spicy Burger",
      price: 12.95,
      veg: ['lettuce', 'Tomato', 'Onion']
      };
      function buySpicy(){
        document.getElementById('spicyHere').innerHTML = "You owe " + (spicyBurger.price * 1.04712).toFixed(2);
      }
var mildBurger = {
      meat: 'Turkey',
      sauce: 'mustard & mayo',
      name: "The Mild Burger",
      price: 10.95,
      veg: ['lettuce', 'Tomato', 'Onion']
      };
      function buyMild(){
        document.getElementById('mildHere').innerHTML = "You owe " + (mildBurger.price * 1.04712).toFixed(2);
      }
loadMenu();
function loadMenu(){
  document.getElementById('spicyName').innerHTML = spicyBurger.name;
  document.getElementById('spicyMeat').innerHTML = spicyBurger.meat;
  document.getElementById('spicyVeg').innerHTML = spicyBurger.veg;
  document.getElementById('spicySauce').innerHTML = spicyBurger.sauce;
  document.getElementById('spicyPrice').innerHTML = spicyBurger.price;
  document.getElementById('mildName').innerHTML = mildBurger.name;
  document.getElementById('mildMeat').innerHTML = mildBurger.meat;
  document.getElementById('mildVeg').innerHTML = mildBurger.veg;
  document.getElementById('mildSauce').innerHTML = mildBurger.sauce;
  document.getElementById('mildPrice').innerHTML = mildBurger.price;
}