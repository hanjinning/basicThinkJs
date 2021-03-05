const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  hanAction(){
    let userlist =  this.model().table("user").select()//所有内容
    console.log(userlist);
    console.log('Action前为接口');
    return this.success("成功！")
    
  }
};
