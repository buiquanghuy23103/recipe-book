if (Meteor.isClient) {
    // Redirect to Recipe Book page right after user login.
    Accounts.onLogin(() => {
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(() => {
        FlowRouter.go('home');
    });
}

// Anonymous users can only get access to Home page
FlowRouter.triggers.enter([(context, redirect) => {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'RecipeSingle' });
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Menu' });
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'ShoppingList' });
    }
});