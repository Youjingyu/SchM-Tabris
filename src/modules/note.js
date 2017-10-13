const {Composite, TextView, CollectionView, ImageView} = require('tabris');
const storage = require('../utils/local-storage');
const {themeColor} = require('../config');

const note = storage.getNote();
const collectionViewConfig = {
    left: 10,
    top: 0,
    right: 10,
    bottom: 0,
    background: themeColor.backgroundColor,
    itemCount: note.length,
    createCell: () => {
        const textView = new TextView({
            left: 10,
            right: 10,
            top: 10,
            maxLines: 2,
            font: '20px'
        });
        const textViewDate = new TextView({
            left: 10,
            right: 10,
            top: 'prev() 5',
            maxLines: 1,
            font: '12px'
        });
        const hr = new Composite({
            left: 0,
            right: 0,
            top: 'prev() 10',
            height: 10,
            background: themeColor.backgroundColor
        });
        return new Composite({
            left: 0,
            right: 0,
            background: '#fff'
        }).append(textView).append(textViewDate).append(hr);
    },
    updateCell: (cell, index) => {
        const textView = cell.find('TextView');
        textView[0].text = note[index].content;
        textView[1].text = note[index].date;
    }
};

module.exports = class Note extends Composite{
    constructor(properties){
        super(Object.assign({top: 0, bottom: 0, left: 0, right: 0}, properties));
        this.append(new CollectionView(collectionViewConfig));
        const addContainer = new Composite({
            centerX: 0,
            bottom: 5
        });
        const icon = new ImageView({
            image: {
                src: 'src/img/add.png',
                width: 50,
                height: 50
            }
        });
        icon.on('tap', ()=>{});
        addContainer.append(icon);
        this.append(addContainer);
    }
};

