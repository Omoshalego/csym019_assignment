

    //  START SERVER COMMAND   $ docker run -p 80:80 -v //C/CSYM019_ASSIGNMENT:/var/www/html -d muawya/csym019:websvr1.0            

   $(document).ready(
  function updateRecipe(){
    setTimeout(
      function(){
        $.ajax({
          url:"recipes.json",
          type:"GET",
          dataType:"json", //This tell the server that the file is json file
          success:function(response){  //this function is excuted if the connection to the server is succesful                     
            let recipeinfo = "";      //Variable to hold recipe data.

            var methods ="";         //Variable to hold method data.
            $("#method").html("")   //Setting the html table with method ID blank before appending the method data to the table.
            $("#nutrition").html("") //Setting the html table with nutrition ID blank before appending the method data to the table.
            $("#recipe").html("");   //Setting the html table with recipe ID blank before appending the method data to the table

            $.each(response.recipe,function(index,item){ //This function loop through all the recipe content in json file.
              var ingredientList = item.Ingredients; //Variable to hold ingredient array.
              var methodList = item.Method;          //Variable to hold method array.
              var ingredientOrder ="";               // Variable to hold each ingredient list.

              var nutritionOrder ="";                // Variable to hold each nutritiont list.
              var nutritionVal =item.Nutrition;      //Variable to hold nutrtion object array.           
              var arrayOfIngredient=[];              //Declearing array variable to hold ingredient array. 
              var arrayOfMethod=[]; 
              var arrayOfNutrition=[];                   //Declearing array variable to hold method array.

              var methodOrder ="";                    // Variable to hold each method list.        
               $.each(ingredientList, function(i, eachIngredient) { //This function loop through all the ingredient values content in recipe json file.
                 ingredientOrder =eachIngredient;  //Reading each ingredient from ingredient array and adding it to the ingredientorder variable.
                 arrayOfIngredient += "<tr><td>" + [i+1] +")  "+ //Printing the ingredients list in a table format.
                 ingredientOrder+"</td></tr>";
                    });

               $.each(methodList, function(i, eachMethod) {   //Looping through the list of method to print individual method
                 methodOrder =eachMethod;                           
                 arrayOfMethod +=  "<tr><td><strong>Step: " +[i +1]  +   //Assigning  the method step in a recipe
                "<strong></td></tr><tr><td>"+
                 methodOrder+"</td></tr><br>";           //Printing the method array
                   });         
                 methods += "<tr><td><h3>Method </h3></td></tr>"+ arrayOfMethod;  
  
                 $.each(nutritionVal, function(i) { 
                   
                 nutritionOrder +=                  //Printing the various nutrition values
                  // "<tr><td><h3>Nutritoin Per Serving </h3></td></tr>" +                             
                    "<tr>"+                   
                    "<td> <em>kcal: " +nutritionVal[i].kcal+"g "+                                
                    "\t\t\t\tfat: " + nutritionVal[i].fat+   "g"+
                    "\t\t\t\t saturate: " + nutritionVal[i].saturate+   "g"+
                    "\t\t\t\tCarbs: " + nutritionVal[i].carbs+   "g"+                  
                    "\t\t\t\tsugars: " + nutritionVal[i].sugars+   "g"+
                    "\t\t\t\tFibre: " + nutritionVal[i].fibre+   "g"+                  
                    "\t\t\t\tProtein: " + nutritionVal[i].protein+   "g"+
                    "\t\t\t\tSalt: " + nutritionVal[i].salt+   " g</em></td></tr>";
               arrayOfNutrition += "<tr><td><h3>Nutritoin Per Serving </h3></td></tr>" + nutritionOrder;
                    
                  });


                 recipeinfo +=
                    "<tr class ='recipes'><td><h2>" +
                     response.recipe[index].title + 
                       "<img src='" + response.recipe[index].Image + "'/></td></tr>" +
                       "<tr><td>"+  
                       "Prep: "+ response.recipe[index].prep + " mins" +   
                       "\t\tCook: "+response.recipe[index].Cook + " mins" + 
                        "\t\tServes: "+response.recipe[index].Serves + 
                        "\t\tEasy: "+ response.recipe[index].Easy  +
                        "</td></tr>" +
                         "<tr><td><h3>Ingredient </h3></td></tr>" +
                         arrayOfIngredient + arrayOfNutrition
                        // nutritionOrder                          
                        });
                                             
               $("#method").append(methods);
               $("#recipe").append( recipeinfo);
               updateRecipe();
                    },
         error:function(){
            $("#info").html("<p>An error has occured</p>");
                    }
                });
            }, 250);
        }) ();


