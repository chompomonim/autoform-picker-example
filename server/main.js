import { Meteor } from 'meteor/meteor';
import searchIn from 'meteor/nous:search-in';
import Clients from '../collections/client'

Meteor.startup(() => {
    searchIn.register(Clients, function () {
        return {
            name: `${this.first_name} ${this.last_name}`,
            email: ((this.emails != null) ? this.emails : []).join(' ')
        }
    });
});
