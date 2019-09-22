Template.NewRecipe.events({
    'click .fa-close': function(){
        Session.set('openRecipeForm', false);
    }
});