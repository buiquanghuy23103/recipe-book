Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: (userId, doc) => {
        return !!userId;
    } // allow inserting after loggin in
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

});

Recipes.attachSchema(RecipeSchema);