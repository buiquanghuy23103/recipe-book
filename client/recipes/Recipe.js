Template.Recipe.onCreated(function () {
   this.editMode = new ReactiveVar(false);
});

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },

    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },

    'click .fa-pencil': function(event, template) {
        let currentMode = template.editMode.get();
        template.editMode.set(!currentMode);
    },
});

Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id;
    },
    
    editMode: function () {
        return Template.instance().editMode.get();
    }
});