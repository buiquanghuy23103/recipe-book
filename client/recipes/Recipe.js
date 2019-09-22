Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },

    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },

    'click .fa-pencil': function() {
        let currentMode = Session.get('editMode');
        Session.set('editMode', !currentMode);
    },
});

Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id;
    },
    
});