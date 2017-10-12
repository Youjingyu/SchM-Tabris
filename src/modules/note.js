const {Composite, TextView, CollectionView} = require('tabris');
const storage = require('../utils/local-storage');

const note = storage.getNote();
const collectionViewConfig = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background:'#fff',
    itemCount: note.length,
    cellHeight: 50,
    createCell: () => {
        const textView = new TextView({

        });
    },
    updateCell: (cell, index) => {
        let diary = this.items[index];
        if(diary && !diary.loading && !diary.nothing){
            createCell(cell, diary);
        }
    }
}

module.exports = class Note extends CollectionView{
    constructor(properties){
        super(Object.assign(collectionViewConfig, properties));
    }
};

