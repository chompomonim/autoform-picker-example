import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Trips = new Mongo.Collection('trips');

const TripsSchema = new SimpleSchema({
    destination: {type: String},
    client_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "toic-picker",
            afFieldInput: {
              collection: 'Clients',             // Collection name
              choose: () => ()=> "#{this.name}"  // What you want to see as a label of select. Yes, it's function as a parametr for other function.
            }
        }
    }
});

