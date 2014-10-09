var mongoose = require('mongoose');   						//引用mongoose模块
// var db = mongoose.createConnection('localhost','TankGame'); 	//创建一个数据库连接
// db.on('error',console.error.bind(console,'连接错误:'));
// db.once('open',function(){
//     var TankSchema = mongoose.Schema({name:String,size:String});
//     var Tank = db.model('Tank',TankSchema);
//     var tank = new Tank({name:'first Tank',size:'231'});
//     // tank.save(function(err){
//     //   if(err) return handleError(err)
//     // });
//     Tank.create({name:'secondTank'},function(err){
//       if(err) return handleError(err)
//     })
// });
var Schema = mongoose.Schema;
    var TankSchema = mongoose.Schema({name:String,size:String});
    // TankSchema.pre("save",function(next){
    //   console.log('1sarie middleware was fire before save1');
    //   next();
    // })
    // TankSchema.pre("save",function(next){
    //   console.log('2sarie middleware was fire before save');
    //   next();
    // })
    // TankSchema.pre("save",function(next){
    //   console.log('3sarie middleware was fire before save');
    //   next();
    // })
    // TankSchema.post('save', function (doc) {
    //   console.log('%s has been saved', doc._id);
    // })
    // TankSchema.pre("save",true,function(next,done){
    //   console.log('p1');
    //   next();
    //    doAsync(done);
    // })
    // TankSchema.pre("save",function(next,done){
    //   console.log('p2');
    //   next();
    //   //doAsync(done);
    // })
    // TankSchema.pre("save",function(next,done){
    //   console.log('p3');
    //   next();
    //   //doAsync(done);
    // })
var ChildSchema = mongoose.Schema({
  name:String
})
var ParentSchema = mongoose.Schema({
    children:[ChildSchema]
})

var Parent = mongoose.model('Parent',ParentSchema)
var Child = mongoose.model('Child',ChildSchema)

var parent = new Parent({children:[{name:"Matt"},{name:"Sarah"}]});
parent.children.push(new Child({name:'xjc'}));

// console.log(parent)




var personSchema = mongoose.Schema({
  name:String,
  age:Number,
  stories:[{type:Schema.Types.ObjectId, ref:'Story'}]
})

var StorySchema = mongoose.Schema({
  _creator:{type:Schema.Types.ObjectId,ref:'Person'},
  title:String,
  fans:[{type:Schema.Types.ObjectId,ref:'Person'}]
})

var Story = mongoose.model("Story",StorySchema)
var Person = mongoose.model('Person',personSchema)

var Tank = mongoose.model('Tank',TankSchema);
var persons = [new Person({name:'xjc'})];
persons.push(new Person({name:'wxe'}));
persons.push(new Person({name:'abd'}));
persons.push(new Person({name:'qy'}));
persons.push(new Person({name:'hexj'}));
    // var tank = new Tank({name:'first Tank',size:'231'});
    // // tank.save(function(err){
    // //   if(err) return handleError(err)
    // // });
    // Tank.create({name:'ThirdTank1',size:"aadaa"},function(err){
    //   //if(err)  throw err
    //   console.log("saveing");
    // })
    // Tank.find({name:'first Tank'}).exec(function(err,docs){
    //   console.log(docs)
    //   mongoose.disconnect();
    // });
    mongoose.connect('localhost','TankGame',function(err){/////////////
      // var tank = new Tank({name:'abc',size:'abc'});
      // tank.save(function(err){
      //   if(err) return handleError(err);
      //   console.log(tank._id+"  name:"+tank.name)
      // })
      // //mongoose.disconnect();
      //-----------------------------------------------------
      // var xjc = new Person({name:"3Xjc333",age:22})
      // // var story = new Story({title:" "})
      // // xjc.stories.push(story)

      //   var story = new Story({
      //     title:"3shi jianlu33",
      //   })
      //   story._creator = xjc;
      //   xjc.stories.push(story);
      // xjc.save(function(err){
      //   if(err) return handleError(err);


      //   story.save(function(err){
      //     if(err) return handleError(err);
      //     mongoose.disconnect()
      //   })
      // })
      //------------------------------------------------------
      // Story
      //   .findOne({title:"shi jianlu"})
      //   .populate('_creator')
      //   .exec(function(err,story){
      //     if(err) return handleError(err);
      //     console.log('the story '+ story.title+' auther is '+story._creator.name)
      //     mongoose.disconnect()
      //   })
      // Person
      //   .findOne({name:'3Xjc333'})
      //   .populate('stories')
      //   .exec(function(err,person){
      //     console.log(person.stories)
      //     mongoose.disconnect();
      //   })
      
      // Person
      //   .findByIdAndUpdate('543499989153a3fa02d687b1',{$set:{name:"summer2"}},function(err,doc,state){
      //     if(err) return handleError(err);
      //     console.log(doc);
      //     console.log(state)
      //     mongoose.disconnect();
      //   })
      // Person.create(persons,function(err,docs){
      //   if(err) return handleError(err);
      //   mongoose.disconnect();
      //   var id = persons[2]._id
      //   console.log(id);
      // })

      // parent.save(function(err,doc){
      //   console.log(doc)
      //   mongoose.disconnect();
      // })
      Parent
        .findById("5434dc6240f659db0c1952db",function(err,parent){
          if(err) return handleError(err);
          var child = parent.children.id('5434dc6240f659db0c1952dd');
          parent.children.push({name:"wangxiaoer"});
          console.log(parent);
          parent.save(function(err){
            console.log(parent);
            mongoose.disconnect();
          });
        })

    });
   


