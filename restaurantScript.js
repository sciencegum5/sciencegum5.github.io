var $ = "document"
var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var menudata = JSON.parse(this.responseText);
        console.log("json values updated");
        console.log(menudata.bento[2].ingredients[0]);
        $.getElementById('itemOneName').innerHtml = menudata.bento;
      }
    };
    xmlhttp.open("GET","Items.json",true);
    xmlhttp.send();
