import Ember from 'ember';

export default Ember.Component.extend({
  //layoutName: 'layouts/posts'
  actions: {
    click(){
      this.sendAction('click');
    }
  }
});
