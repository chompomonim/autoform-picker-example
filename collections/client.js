import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export class ClientBase {
    get name() {
        return `${this.first_name} ${this.last_name}`
    }
}

export const Clients = new Mongo.Collection('clients', {
    transform: function(doc) {
        return _.extend(new ClientBase, doc)
    }
});


const ClientSchema = new SimpleSchema({
    first_name: { type: String },
    last_name: { type: String },
    emails: {
        type: [String],
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    }
});

Clients.attachSchema(ClientSchema);

export default Clients;
