/*eslint-env browser*/

module.exports = {
    saveNote: (note)=>{
        localStorage.setItem('note', JSON.stringify(note));
    },
    getNote: ()=>{
        const note = localStorage.getItem('note');
        return  note ? JSON.parse(note) : [];
    }
};
