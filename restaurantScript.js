var $ = document
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var menudata = JSON.parse(this.responseText);
        console.log(menudata.menuItems[1]);
        $.getElementById('itemOneName').innerHTML = menudata.menuItems[0].name
        $.getElementById('itemTwoName').innerHTML = menudata.menuItems[0].name
        $.getElementById('itemThreeName').innerHTML = menudata.menuItems[0].name
        $.getElementById('itemFourName').innerHTML = menudata.menuItems[0].name
        $.getElementById('itemFiveName').innerHTML = menudata.menuItems[0].name
        $.getElementById('itemSixName').innerHTML = menudata.menuItems[0].name
        console.log("json values updated");
      }
    };
    xmlhttp.open("GET","Items.json",true);
    xmlhttp.send();