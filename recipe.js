
$(document).ready(
    function updateRecipe(){
        setTimeout(
            function(){
                $.ajax({
                    url:"recipeg.json",
                    type:"GET",
                    dataType:"json",

             success:function(response){
                        
                      let recipeinfo = "";
                      var methods ="";
                      $("#method").html("")
                      $("#recipe").html(""); 
                                         
                $.each(response.recipe,function(index,item){ 

                    var ingredientList = item.Ingredients; 
                    var methodList = item.Method; 
                    var ingredientOrder ="";
                    
                    var nutritionVal =item.Nutrition;                  
                    var arrayaOfNutrition ="";
                    var NutritionName = "";
                  
                    var arrayOfIngredient=[];
                    var arrayOfMethod=[];
                    
                    var methodOrder ="";
                    var nutritionList = "";
           
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
                                                        
            arrayaOfNutrition += 
                              "<tr > <td>" +nutritionVal.kcal+"g"+
                              "\t\t\t\t" + nutritionVal.fat+   "g"+
                              "\t\t\t\t" + nutritionVal.saturate+   "g"+
                              "\t\t\t\t" + nutritionVal.carbs+   "g"+
                              
                              "\t\t\t\t" + nutritionVal.sugars+   "g"+
                              "\t\t\t\t" + nutritionVal.fibre+   "g"+

                              "\t\t\t\t" + nutritionVal.protein+   "g"+
                              "\t\t\t\t" + nutritionVal.salt+   " g</td></tr>"

             NutritionName += 
                              "<tr > <td>kcal"+
                              "\t\t\t\tfat"+
                              "\t\t\t\tsaturate"+

                              "\t\t\t\tcarbs"+
                              "\t\t\t\tsugars"+
                              "\t\t\t\tfibre"+

                              "\t\t\t\t protein"+
                              "\t\t\t\tsalt   </td></tr>"
                          
            nutritionList += arrayaOfNutrition;

           recipeinfo +="<tr class ='recipes'><td><h2>" +
                        response.recipe[index].title + "</h2></td><td>"+                        
                         "<img src='" + response.recipe[index].Image + "'/></td></tr>" +
                          "<tr><td>"+
    
                         "Prep: "+ response.recipe[index].prep + " mins" +   
                         "\t\tCook: "+response.recipe[index].Cook + " mins" + 
                         "\t\tServes: "+response.recipe[index].Serves + 

                         "\t\tEasy: "+ response.recipe[index].Easy  +
                         "</td></tr>" +
                         "<tr><td><h3>Ingredient </h3></td></tr>" +
                         arrayOfIngredient + 

                         "<tr><td><h3>Nutrition: Per Serving </h3></td></tr>"+
                          NutritionName +nutritionList +
                          "<hr>"
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
    
    function chartFunction() {
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'chart_container', //under chart_container chart will display
        defaultSeriesType: 'bar', //bar grapgh
        backgroundColor: '#CCCCBB',
        type: 'column' ,//to display in columns wise
  
        
        bar: {
          colorByPoint: true,
          dataLabels: {
            enabled: false
          }
        }
      },
      title: {
        text: 'Nutrition_per_serve in '  + itemTittle
      },
      xAxis: {
        categories: $js_am_label_arr, //for value in labels
      },
      series: [{
        name: 'Nutrients in grams',
        data: $js_dom_array //array value to plot data
      }]
  
    });
  }
  
  
                 
