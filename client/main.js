Todos = new Meteor.Collection('todos');

Template.todo.helpers({
  getAllTodos:function(){
    // return Todos.find({});
  },

});

Template.todo.events = {
  'click #insert': function(e, t) {
    e.preventDefault();

    var title = t.find('#title').value;
    // Todos.insert({
    //     title: title;
    // });
    //
    // console.log(Todos.find().count());
    console.log(title);


  },
}

Template.hello.helpers({
    helloWorld: function() {
        return "Hello World";
    },

    myName: function(name) {
        return Session.get("name");
    },
});

Template.hello.events = {
  "click #clickMe": function(e) {
    e.preventDefault();
    console.log("saya di klik");
  },

  "keyup #name": function(e, t) {
    e.preventDefault();
    var name = t.find('#name').value;
    Session.set("name", name);
    // console.log(name);
  },
};

Template.aritmatika.helpers ({
  hasil: function () {
    return Session.get("hasil");
  },
});

Template.aritmatika.events = {
    "click #tombolProses": function() {
      // e.preventDefault();
      var nilai1 = parseInt(document.getElementById('nilai1').value);
      var nilai2 = parseInt(document.getElementById('nilai2').value);

      var hasil = nilai1 + nilai2;
      Session.set("hasil", hasil);
      // console.log('ok');
    },
};
