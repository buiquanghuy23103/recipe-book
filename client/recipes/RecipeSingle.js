Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(() => {
        let recipeId = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', recipeId);
    });
});

Template.RecipeSingle.helpers({
    recipe: () => {
        let recipeId = FlowRouter.getParam('id');
        return Recipes.findOne(recipeId);
    },
    
});