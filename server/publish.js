Meteor.publish('recipes', function() {
    // Only the author can see his recipes
    return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(recipeId) {
    check(recipeId, String);

    return Recipes.findOne(recipeId);
});