Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(() => {
        self.subscribe('recipes');
    });
});

Template.Recipes.events({
    'click .new-recipe': function () {
        Session.set('openRecipeForm', true);
    }
});

Template.Recipes.helpers({
    recipes: () => Recipes.find({}),
    
});