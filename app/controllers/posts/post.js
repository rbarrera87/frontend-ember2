import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost(post){
      var intPost = this.store.peekRecord('post', post.id);
      var controller = this;
      intPost.set('title', post.title);
      intPost.set('body', post.body);
      intPost.save()
        .then(function(post){
          controller.transitionToRoute('posts');
        });
    }
  }
});
