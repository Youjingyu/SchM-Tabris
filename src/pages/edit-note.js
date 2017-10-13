/*eslint-env browser*/
const {Page, TextInput, ui} = require('tabris');
const {themeColor} = require('../config');
const storage = require('../utils/local-storage');
const {appNoteId} = require('../utils/gobal-variable');

const note = storage.getNote();
module.exports = class EditNote extends Page {
    constructor(properties) {
        super({title: 'Add note', background: themeColor.backgroundColor});
        const noteIndex = properties && properties.noteIndex;
        this._createEditUI(noteIndex);
        this.on('dispose', this._saveNote.bind(this, noteIndex));
    }
    _createEditUI(noteIndex) {
        this.input = new TextInput({
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
            borderColor: themeColor.mainColor
        });
        if(noteIndex) {
            this.input.text = note[noteIndex].content;
        }
        this.append(this.input);
    }
    _saveNote(noteIndex) {
        const text = this.input.text;
        const date = new Date();
        const month = date.getMonth() + 1;
        const result = {
            content: text,
            date: date.getFullYear() + '-' + (month > 9 ? month : '0' + month) +  '-' + date.getDate()
        };
        const noteWidgets = ui.contentView.find('#' + appNoteId)[0];
        if(noteIndex){
            if(text !== note[noteIndex].content){
                if(text !== ''){
                    note[noteIndex] = result;
                    noteWidgets.refreshNoteList(note, 'edit');
                } else {
                    note.splice(noteIndex, 1);
                    noteWidgets.refreshNoteList(note, 'delete');
                }
                storage.saveNote(note);
            }
        } else {
            if(text !== ''){
                note.unshift(result);
                noteWidgets.refreshNoteList(note, 'add', noteIndex);
                storage.saveNote(note);
            }
        }
    }
};
