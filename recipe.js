
$(document).ready(
function updateRecipe(){
    setTimeout(
        function(){
            $.ajax({
                url:"recipe.json",
                type:"GET",
                dataType:"json",
                success:function(response){
                    
                    let recipeinfo = "";
                    let methods ="";
                    $("#recipe").html("");                  
                    $.each(response.recipe,function(index,item){ 
                        var ingredientList = item.Ingredients; 
                        var ingredientOrder ="";

                        var arrayOfIngredient=[];

                        var methodList = item.Method; 
                        var methodOrder ="";

                        var arrayOfMethod=[];

                        $.each(ingredientList, function(i, eachIngredient) {
                            ingredientOrder =eachIngredient;                           
                            arrayOfIngredient += "<tr><td>" + [i+1] +")  "+ ingredientOrder+"</tr></td>";
                             });

                             $.each(methodList, function(i, eachMethod) {
                                methodOrder =eachMethod;                           
                                arrayOfMethod +=  "<tr><td><strong>Step: " +[i +1]  +
                                  "<strong></td></tr><tr><td>"+ methodOrder+"</td></tr><br>";
                                 });
                        
                      methods += "<tr><td><h3>Method </h3></td></tr>"+ arrayOfMethod;
                      recipeinfo +="<tr class ='recipes'><td><h2>" +

                      response.recipe[index].title + "</h2></td><td>"+
                      
                    //   response.recipe[index].Image + "</td></tr>" +
                     

                      "<tr><td>"+

                   "Prep: "+ response.recipe[index].prep + " mins" +
                   
                     "\t\tCook: "+response.recipe[index].Cook + " mins" + 
                     
                     "\t\tServes: "+response.recipe[index].Serves + 
                     "\t\tEasy: "+ response.recipe[index].Easy  +
                     "</td></tr>" +

                     "<tr><td><h3>Ingredient </h3></td></tr>" + arrayOfIngredient 

                    //  "<tr><td align='center' colspan='3'><h3>Method<h3></td></tr>"
                    //  + arrayOfMethod                
                    });
                    $("#method").append( methods);
                    $("#recipe").append( recipeinfo);
                    updateRecipe();
                },
                error:function(){
                    $("#info").html("<p>An error has occured</p>");
                }
            });
        }, 250);
    }) ();


//LOADING THE PAGE USING WINDOWS
/*$( window ).on( "load",
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
                        recipeinfo +="<tr class = 'score'><td>" +
                        response.recipe[index].title + 
                        response.recipe[index].prep + "<td><td>" +
                        response.recipe[index].Cook + "<td><td>" +
                        "</td></tr><tr><td>" +
                        response.recipe[index].Serves +
                        "</td></tr><tr><td>" +
                        response.recipe[index].Easy +
                        "</td></tr><tr><td>" +
                        response.recipe[index].Ingredients[index]+
                        "</td></tr><tr><td>" +
                        response.recipe[index].Method[index]
                        "</td><td></td><td></td></tr>";
                    });
                    $("#recipe").append( recipeinfo);
                    updateRecipe();
                },
                error:function(){
                    $("#info").html("<p>An error has occured</p>");
                }
            });
        }, 250);
    }) ();*/


    
//     var barColor =8;
//     function myNutrition(){
//    const ctx = document.getElementById('myChart').getContext('2d');
//    const myChart = new Chart(ctx, {
//        type: 'bar',
//        data: {
//            labels: ['KCAL', 'FAT', 'SATURATE', 'CARBS', 'SUGARS', 'FIBRE','PROTEIN','SALT'],
//            datasets: [{
//                label: 'NUTRITION: per serving in g',
//                data: [12, 19, 3, 5, 2, 3],
//                backgroundColor: [
//                    'rgba(255, 99, 132, barColor)',
//                    'rgba(54, 162, 235, barColor)',
//                    'rgba(255, 206, 86, barColor)',
//                    'rgba(255, 206, 86, barColor)',
//                    'rgba(75, 192, 192, barColor)',
//                    'rgba(153, 102, 255, barColor)',
//                    'rgba(255, 159, 64, barColor)'
//                ],
//                borderColor: [
//                    'rgba(255, 99, 132, 1)',
//                    'rgba(54, 162, 235, 1)',
//                    'rgba(255, 206, 86, 1)',
//                    'rgba(75, 192, 192, 1)',
//                    'rgba(153, 102, 255, 1)',
//                    'rgba(255, 159, 64, 1)'
//                ],
//                borderWidth: 1
//            }]
//        },
//        options: {
//            scales: {
//                y: {
//                    beginAtZero: true
//                }
//            }
//        }
//    });
//     }
   