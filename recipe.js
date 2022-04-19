window.onload = makeAjaxRequest;

function makeAjaxRequest() {
      if (window.XMLHttpRequest){

        xhr = new XMLHttpRequest();
      }
    else {

        if(window.ActiveXObject){
            xhr = newActiveXObject("Microsoft.XMLHTTP");
        }
    }

    if(xhr){
       xhr.open("GET","recipe.json", true);
       xhr.send();
      // console.log("hkjwflwew");
       xhr.onreadystatechange = showContents;
    }
    else{
      document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";

    }
}

function showContents() {
  if(xhr.readyState == 4){
    if(xhr.status == 200){
        let data = JSON.parse(xhr.responseText);
        let txt = "";
        for(let i in data.recipe){
            txt += "<tr><td>"+ data.recipe[i].title+"</td></tr>";
          //  txt += "<tr><td>"+ data.counties[i].countyID+"</td></tr>";
        }
        document.getElementById("recipeList").innerHTML = txt;
       // document.getElementById("countylist1").innerHTML = txt;
    }
    else{
        document.getElementById("updatemessage").innerHTML ="An error occurred: " + xhr.status;
       }

    }
}

