import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },
  actions: {
    createPost(post){
      var newPost = this.store.createRecord('post', {
        title: post.title,
        body: post.body
      });
      var controller = this;
      newPost.save()
        .then(function(post){});
    },
    deletePost(post){
      this.store.findRecord('post', post.id)
        .then(function(post){
          post.deleteRecord();
          post.get('isDeleted'); // => true
          post.save(); // => DELETE to /posts/1
        });
    }
  }
});
