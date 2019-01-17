var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var mydata = JSON.parse(this.responseText);
        console.log("json values updated");
      }
    };
    xmlhttp.open("GET","Items.json",true);
    xmlhttp.send();