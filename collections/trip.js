import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClientBase } from './client';

const Trips = new Mongo.Collection('trips');

const TripsSchema = new SimpleSchema({
    destination: {type: String},
    client_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "toic-picker",
            afFieldInput: {
              collection: 'clients',
              class: ()=> ClientBase,
              choose: ()=> function () { return this.name } // What you want to see as a label of select. Yes, it's function as a parametr for other function.
            }
        }
    }
});

Trips.attachSchema(TripsSchema);

export default Trips;
