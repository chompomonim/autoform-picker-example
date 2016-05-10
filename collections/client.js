import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Clients = new Mongo.Collection('clients');

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
