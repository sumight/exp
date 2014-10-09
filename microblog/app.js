var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/',function(err,req,res,next){
    console.log("zhongjianjian");
    //err.message = 'ab';
    next();
});
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
// 获取mongoDb模块
var mongodb = require('mongodb');
// 创建与数据库服务器的连接实例
var server = new mongodb.Server('localhost',27017,{});
// 创建与数据库的连接实例
var  db = new mongodb.Db('test', server, {safe:true});
app.all('/',function(req,res,next){
    console.log('hah');
    // 开启数据库连接
    db.open(function(err,db){
        if(!err){
            console.log('connect db');
            // 在数据库中创建一个集合
            db.createCollection('mycoll',{safe:true},function(err,collection){
                if(err){
                    console.log('error');
                }else{
                    var temp1 = {title:'hello'}
                    var temp2 = {title:'hehe'}
                    // 在集合中插入两个文档
                    collection.insert([temp1,temp2],{safe:true},function(err,result){
                        console.log(result);
                    });
                }
            })
        }
    })
    next();
    //res.end("haha");
})
app.get('/',function(req,res){
    console.log('hah');
    // next();
    res.end("haha222");
})
app.get('/users',function(req,res){
    console.log('hah');
    res.end("hahas");
})
app.get('/abc',function(req,res){
    console.log('hah');
    res.end("haha");
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.locals.inspect=function(obj){
        return util.inspect(obj,true);
    }

module.exports = app;
