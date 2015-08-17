import Ember from 'ember';

export default Ember.Component.extend({
  willUpdate(){
    this.rerender();
  },
  willInsertElement(){
  },
  actions: {
    deletePost(post){
      this.sendAction('click', {
        id: post.id
      });
    }
  }
});
