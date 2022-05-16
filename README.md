# CSYM019_ASSIGNMENT
Create a JSON file (recipe.json) with a structure capable of holding recipe data for recipes
from the BBC Good Food website. The file should be capable of holding the recipe data
which include the different ingredients, the preparation and cooking time, as well as all other
relevant data.
Note that the preparation time and cooking time should be in minutes. Use the upper
estimates as the actual cooking time and prep time if the recipe states both an upper and a
lower estimate (e.g. 1-2 hours would be 120 minutes).
When you have completed your JSON structure, add at least 20 recipes of test data (i.e. 20
recipes from the BBC site). This should include some recipes that take more than an hour to
cook (e.g. Roast Beef), and some recipes that take thirty minutes to one hour to cook
(Haddock & leek au gratin), and some recipes that take less than thirty minutes to cook (e.g.
Cheese Omelette).

B) JSON Schema:
Create a JSON schema (recipeschema.json) against which recipe data from the file
(recipe.json) can be validated. The schema should enforce realistic data types and
restrictions for each data element.
Add dummy new recipe data for several recipes to the file (recipe.json). The data you add
should validate against the schema provided in the file (recipeschema.json).
C) Javascript and HTML:
 CSYM019 Internet Programming
Assignment Brief - 2022
Create a script (recipe.js) that will extract data from the file (recipe.json), and insert it in a
HTML page (recipe.html) in table format. The data should automatically update at a realistic
pre-set interval. This should be achieved using a setTimeout method. There should be NO
DELAY in loading the data when the page is first opened. The produced HTML should be
formatted, including page layout, to professional standard using CSS.
Also, include a recipe icon for each reported recipe. You can use a suitable icon from those
provided for you (see the Recipe Icons folder). Alternatively, you can use your own icon –
note any icon used must be in png format (the icon file must have a .png extension).
