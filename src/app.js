const {Action, NavigationView, ui} = require('tabris');
const Index = require('./pages/index');
const UserInfo = require('./pages/user-info');

const indexPage = new Index();

let navigationView = new NavigationView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

indexPage.appendTo(navigationView);

let userIcon = new Action({
    placementPriority: 'high',
    image: {src: 'src/img/girl.png'}
}).appendTo(navigationView);
userIcon.on('select', () => {
    const userInfoPage = new UserInfo();
    userInfoPage.appendTo(navigationView);
});

indexPage.on('appear', () => {
    userIcon.visible = true;
});
indexPage.on('disappear', () => {
    userIcon.visible = false;
});
