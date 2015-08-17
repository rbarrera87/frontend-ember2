import Ember from 'ember';

export default Ember.Component.extend({
  //layoutName: 'layouts/posts'
  actions: {
    submit(){
      var data = {};
      if(this.get('id')){
        data = {
          id: this.get('id'),
          title: this.get('title'),
          body: this.get('body')
        };
        this.sendAction("submit", data);
      }else{
        data = {
          title: this.get('title'),
          body: this.get('body')
        };
        this.sendAction("submit", data);
        this.set('title', '');
        this.set('body', '');
      }
    }
  }
});
