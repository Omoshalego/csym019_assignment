// window.onload = makeAjaxRequest;

// function makeAjaxRequest() {
//       if (window.XMLHttpRequest){

//         xhr = new XMLHttpRequest();
//       }
//     else {

//         if(window.ActiveXObject){
//             xhr = newActiveXObject("Microsoft.XMLHTTP");
//         }
//     }

//     if(xhr){
//        xhr.open("GET","recipe.json", true);
//        xhr.send();
//       // console.log("hkjwflwew");
//        xhr.onreadystatechange = showContents;
//     }
//     else{
//       document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";

//     }
// }

// function showContents() {
//   if(xhr.readyState == 4){
//     if(xhr.status == 200){
//         let data = JSON.parse(xhr.responseText);
//         let txt = "";
//         for(let i in data.recipe){
//             txt += "<tr><td>"+ data.recipe[i].title+"</td></tr>";
//           //  txt += "<tr><td>"+ data.counties[i].countyID+"</td></tr>";
//         }
//         document.getElementById("recipeList").innerHTML = txt;
//        // document.getElementById("countylist1").innerHTML = txt;
//     }
//     else{
//         document.getElementById("updatemessage").innerHTML ="An error occurred: " + xhr.status;
//        }

//     }
// }
$(document).ready(function(){
function updateRecipe(){
    setTimeout(
        function(){
            $.ajax({
                url:"recipe.json",
                type:"GET",
                dataType:"json",
                success:function(response){
                    let recipeinfo = "";
                    $("#recipe").html("");
                    $.each(response.recipe,function(index){
                        recipeinfo +=
                        response.recipe[index].title + 
                        response.recipe[index].prep +
                        response.recipe[index].Cook +
                        
                        response.recipe[index].Serves +
                        response.recipe[index].Easy +
                       
                        response.recipe[index].Ingredients[index]+
                        
                        response.recipe[index].Method[index]
                    });
                    $("#recipe").append( recipeinfo);
                    updateRecipe();
                },
                error:function(){
                    $("#info").html("<p>An error has occured</p>");
                }
            });
        }, 250);
    }}) ();

    var barColor =7;
    function myNutrition(){
   const ctx = document.getElementById('myChart').getContext('2d');
   const myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ['KCAL', 'FAT', 'SATURATE', 'CARBS', 'SUGARS', 'FIBRE','PROTEIN','SALT'],
           datasets: [{
               label: 'NUTRITION: per serving in g',
               data: [12, 19, 3, 5, 2, 3],
               backgroundColor: [
                   'rgba(255, 99, 132, barColor)',
                   'rgba(54, 162, 235, barColor)',
                   'rgba(255, 206, 86, barColor)',
                   'rgba(75, 192, 192, barColor)',
                   'rgba(153, 102, 255, barColor)',
                   'rgba(255, 159, 64, barColor)'
               ],
               borderColor: [
                   'rgba(255, 99, 132, 1)',
                   'rgba(54, 162, 235, 1)',
                   'rgba(255, 206, 86, 1)',
                   'rgba(75, 192, 192, 1)',
                   'rgba(153, 102, 255, 1)',
                   'rgba(255, 159, 64, 1)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           scales: {
               y: {
                   beginAtZero: true
               }
           }
       }
   });
    }
   
    document.addEventListener('DOMContentLoaded', myNutrition);