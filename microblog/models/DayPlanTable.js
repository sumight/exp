var mongoose = require('mongoose');
var DayPlanTableSchema = require('../schemas/DayPlanTable')
var DayPlanTableModel = mongoose.model('DayPlanTable',DayPlanTableSchema)

module.exports = DayPlanTableModel