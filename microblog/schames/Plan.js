var mongoose = require('mongoose')
var PlanSchema = new mongoose.Schema({
	content:String,
	isCycle:Boolean
})