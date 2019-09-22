Template.RecipeSingle.onCreated(function() {
    var self = this;
    self.autorun(() => {
        self.subscribe('recipes');
    });
});

Template.RecipeSingle.helpers({
    recipe: () => {
        let recipeId = FlowRouter.getParam('id');
        return Recipes.findOne(recipeId);
    },
    
});