/*eslint-env browser*/
/* global Media: false */
/* global tabris*/
const {Page, Button} = require('tabris');

module.exports = class UserInfo extends Page {
    constructor(properties) {
        super(Object.assign({title: 'User infomation'}, properties));
        this._appendBtn();
        this._media = this._createMedia();
        this.on('disappear', () => {
            this._media.stop();
            this._media.release();
        });
    }
    _createMedia() {
        let path = tabris.app.getResourceLocation('src/audio/Make You Feel My Love.mp3');
        // According to Media plugin documentation the media path must be
        // relative to the "www" folder under iOS
        if (tabris.device.platform === 'iOS') {
            path = path.substr(path.indexOf('/www/') + 5);
        }
        let onSuccess = () => console.log('Audio file loaded successfully');
        let onError = err => console.log('Unable to play audio file: ' + err.code + ' - ' + err.message);
        return new Media(path, onSuccess, onError);
    }
    _appendBtn() {
        const playBtn = new Button({text: '播放'});
        playBtn.on('select', (event) => {
            const btn = event.target;
            if(btn.text === '暂停') {
                btn.text = '播放';
                this._media.stop();
            } else {
                btn.text = '暂停';
                this._media.play();
            }
        });
        this.append(playBtn);
    }
};
