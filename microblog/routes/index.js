var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {//主页
	console.log("abc");
  res.render('index',{});
});
router.get('/hello/:username', function(req, res) {
  res.send("hello "+req.params.username);
});
router.get('/u/:user',function(){//用户主页

})
router.post('/post',function(){//

})
router.get('/reg',function(){//用户注册页面

})
router.post('reg',function(){//用户注册

})
router.get('/login',function(){//用户登录页面

})
router.post('/login',function(){//用户登录

})
router.get('/logout',function(){//用户登出页面

})
router.post('/logout',function(){//用户登出

})
module.exports = router;
