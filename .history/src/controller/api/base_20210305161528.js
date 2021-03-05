module.exports = class extends think,Controller {
    _before(){
        this.header("Access-Control-Allow-Origin", "*");
    }
}