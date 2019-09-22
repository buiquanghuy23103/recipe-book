Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(() => {
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: () => Recipes.find({}),
    
});