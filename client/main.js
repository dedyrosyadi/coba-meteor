import { Tasks } from '../imports/api/tasks.js';

// Template.todo.helpers({
//   getAllTodos:function(){
//     return Todos.find({}, { sort: { createdAt: -1 } });
//   }
// });
//
// Template.todo.events = {
//   'submit form': function(e, t) {
//     e.preventDefault();
//     var title = e.target.title.value;
//     Todos.insert({ title: title, createdAt: new Date() });
//     // alert("Data = "+title+ " berhasil ditambah!");
//     e.target.title.value ="";
//   },
// }


Template.tasks.helpers({
    tasks: function(){
      // return tasks.find({}, {sort: {createdAt:} -1}});
      return Tasks.find({}, { sort: { createdAt: -1 } });
    }
});

Template.tasks.events({
    'submit form': function(e, t){
        e.preventDefault();
        var title = e.target.title.value;

        // console.log(title);

        Tasks.insert({
          title: title,
          createdAt: new Date()
        });

        e.target.title.value ='';
        t.$('#title').focus();

        // return false;
    },

    'click .delete-title': function(e, t){
      e.preventDefault();
      if(confirm('Lanjutkan untuk menghapus ?')){
        // Tasks.remove(this._id);
        console.log(this);
        alert(this);
      }
    }
});

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
