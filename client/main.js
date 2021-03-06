import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Clients from '../collections/client';
import Trips from '../collections/trip';
import './main.html';

Template.registerHelper("Clients", Clients);
Template.registerHelper("Trips", Trips);

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  clients() {
    return Clients.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    Clients.insert({
      first_name: "Jaro",
      last_name: `${instance.counter.get()}`
    })
  },
});
