/*eslint-env browser*/
module.exports = function () {
    return init();
};

function init() {
    const {Page, Tab, TabFolder, TextView} = require('tabris');
    let page = new Page({
        title: 'Love',
        autoDispose: false
    });

    let tabFolder = new TabFolder({
        left: 0, top: 0, right: 0, bottom: 0,
        paging: true,
        tabBarLocation: 'bottom'
    }).appendTo(page);

    createTab('Cart', 'src/img/girl.png', 'src/img/girl.png');
    createTab('Pay', 'src/img/girl.png', 'src/img/girl.png');
    createTab('Statistic', 'src/img/girl.png', 'src/img/girl.png');

    tabFolder.on('selectionChanged', ({value: tab}) => console.log(tab.title));

    function createTab(title, image, seletedImage) {
        let tab = new Tab({
            title: title, // converted to upper-case on Android
            image: {src: image, scale: 2},
            selectedImage: {src: seletedImage, scale: 2}
        }).appendTo(tabFolder);
        new TextView({
            centerX: 0, centerY: 0,
            text: 'Content of Tab ' + title
        }).appendTo(tab);
    }

    return page;
}
