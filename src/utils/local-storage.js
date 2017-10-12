/*eslint-env browser*/

module.exports = {
    saveNote: (note)=>{
        localStorage.setItem('note', note);
    },
    getNote: ()=>{
        localStorage.getItem('note');
    }
};
