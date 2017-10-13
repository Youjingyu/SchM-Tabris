const {ui, Composite, TextView, CollectionView, ImageView} = require('tabris');
const EditNote = require('../pages/edit-note');
const storage = require('../utils/local-storage');
const {themeColor} = require('../config');
const {appNavigationId, appNoteId} = require('../utils/gobal-variable');

let note = storage.getNote();
const collectionViewConfig = {
    id: appNoteId,
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

class NoteList extends CollectionView{
    constructor(){
        super(collectionViewConfig);
    }
    refreshNoteList(noteList, type, index){
        note = noteList;
        if(type === 'edit'){
            this.refreshItem(noteList);
        } else if(type === 'delete'){
            this.remove(index);
        } else if(type === 'add'){
            this.insert(0);
            this.refreshItem(noteList);
        }
    }
    refreshItem(noteList) {
        noteList.forEach((note, index)=>{
            this.refresh(index);
        });
    }
}

module.exports = class Note extends Composite{
    constructor(properties){
        super(Object.assign({top: 0, bottom: 0, left: 0, right: 0}, properties));
        const collectionView = new NoteList();
        this.append(collectionView);
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
        icon.on('tap', ()=>{
            ui.contentView.find('#' + appNavigationId)[0].append(new EditNote());
        });
        addContainer.append(icon);
        this.append(addContainer);
    }
};

