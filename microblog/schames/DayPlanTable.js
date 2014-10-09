var mongoose = require('mongoose')
var DayPlanTableSchema = new mongoose.Schema({
	date:new Date(),
	morningPlanTable:{
		year:Number,
		month:Number,
		day:Number,
		plans:[]
	},
	afternoonPlanTable:{
		year:Number,
		month:Number,
		day:Number,
		plans:[]
	},
	eveningPlanTable:{
		year:Number,
		month:Number,
		day:Number,
		plans:[]		
	}
})

DayPlanTableSchema.statics = {
	fetch:function(cb){
		return this
			.find({})
			.sort('date')
			.exec(cb);
	}
	,findById:function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
	,addMorningPlan:function(id,plan,cb){
		return this
			.update({_id:id})
			.
	}
	,deleteMorningPlan:function(plan,cb){

	}
	,
}

module.exports = DayPlanTableSchema