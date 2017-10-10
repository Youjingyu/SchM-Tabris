const {Action, NavigationView, ui} = require('tabris');
const index = require('./pages/index')();
const userInfo = require('./pages/user-info');

let navigationView = new NavigationView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

index.appendTo(navigationView);

let userIcon = new Action({
    placementPriority: 'high',
    image: {src: 'src/img/girl.png'}
}).appendTo(navigationView);
userIcon.on('select', () => {
    userInfo().appendTo(navigationView);
});

index.on('appear', () => {
    userIcon.visible = true;
});
index.on('disappear', () => {
    userIcon.visible = false;
});