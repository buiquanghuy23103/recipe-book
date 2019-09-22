Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: (userId, doc) => {
        return !!userId;
    }, // allow inserting after loggin in

    update: (userId, doc) => {
        return !!userId;
    },

});

Ingredient = new SimpleSchema({
    name: {
        type: String,
    },

    amount:{
        type: String,
    },
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name',

    },

    desc: {
        type: String,
        label: 'Description'
    },

    author: {
        type: String,
        label: 'Author',
        autoValue: (function () {
            return this.userId;
        }),
        autoform: {
            type: 'hidden'
        },
    },

    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        },
    },

    ingredients: {
        type: [Ingredient],
    },

    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: 'hidden',
        }
    },

});

Meteor.methods({
    toggleMenuItem: (recipeId, currentState) => {
        Recipes.update(recipeId, {
            $set: {
                inMenu: !currentState,
            }
        });
    },

    deleteRecipe: (recipeId) => {
        check(recipeId, String);
        Recipes.remove(recipeId);
    }
});

Recipes.attachSchema(RecipeSchema);