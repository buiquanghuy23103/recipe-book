Meteor.subscribe('recipes');

Template.Recipes.helpers({
    recipes: () => Recipes.find({}),
    
});