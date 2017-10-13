/*eslint-env browser*/
const {Page, TextView} = require('tabris');

module.exports = class EditNote extends Page {
    constructor(properties) {
        super({title: 'Add note'});
        if(properties.type === 'add'){
            this.append(new TextView({
                text: 'add'
            }));
        } else {
            this.append(new TextView({
                text: 'edit'
            }));
        }
    }
};
