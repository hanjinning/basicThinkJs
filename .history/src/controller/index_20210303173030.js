const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  hanAction(){
    console.log('Action前为接口');
  }
};
