const {Composite, TextView, CollectionView} = require('tabris');
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

module.exports = class Note extends CollectionView{
    constructor(properties){
        super(Object.assign(collectionViewConfig, properties));
    }
};

