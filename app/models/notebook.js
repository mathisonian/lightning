/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Schema = mongoose.Schema;

var VisualizationSchema = require('./visualization');

/**
 * User schema
 */

var NotebookSchema = new Schema({
    visualizations: [VisualizationSchema]
});

/**
 * User plugin
 */

// SessionSchema.plugin(userPlugin, {});
NotebookSchema.plugin(findOrCreate);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

NotebookSchema.method({

});

/**
 * Statics
 */

NotebookSchema.static({

});

/**
 * Register
 */

mongoose.model('Notebook', NotebookSchema);


module.exports = NotebookSchema;