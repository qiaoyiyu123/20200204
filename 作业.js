<!DOCTYPE html>
<html>
	<head>
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>折叠侧栏导航</title>
		<style type="text/css">
		body {
		  margin: 0;
		  padding: 0;
		  font-size: 12px;
		  font-family: "Microsoft Yahei", Verdana, Arial, Helvetica, sans-serif
		}
		.leftMenu {
		  min-width:220px;
		    width:268px;
		  margin:40px auto 0 auto;
		}
		.menu {
		  border: #bdd7f2 1px solid;
		  border-top: #0080c4 4px solid;
		  border-bottom: #0080c4 4px solid;
		  background: #f4f9ff url(images/leftdhbg.jpg) repeat-y right;
		  margin-left: 10px;
		}
		.menu .ListTitle {
		  border-bottom: 1px #98c9ee solid;
		  display: block;
		  text-align: center;
		  /*position: relative;*/
		  height: 38px;
		  line-height: 38px;
		  cursor: pointer;
		  /*+min-width:220px;*/
		
		  +width:100%;
		}
		.ListTitlePanel {
		  position: relative;
		}
		.leftbgbt {
		  position: absolute;
		  background: url(images/leftbgbt.jpg) no-repeat;
		  width: 11px;
		  height: 52px;
		  left: -11px;
		  top: -4px;
		}
		/*.leftbgbt {
		  float:left;
		  background: url(images/leftbgbt.jpg) no-repeat;
		  width: 11px;
		  height: 52px;
		  left: 0px;
		  top: 0px;
		  zoom:1;
		  z-index:200px;
		}
		*/.leftbgbt2 {
		  position: absolute;
		  background: url(images/leftbgbt2.jpg) no-repeat;
		  width: 11px;
		  height: 48px;
		  left: -11px;
		  top: -1px;
		}
		.menuList {
		  display: block;
		  height: auto;
		}
		.menuList div {
		  height: 28px;
		  line-height: 24px;
		  border-bottom: 1px #98c9ee dotted;
		}
		.menuList div a {
		  display: block;
		  background: #fff;
		  line-height: 28px;
		  height: 28px;
		  text-align: center;
		  color: #185697;
		  text-decoration: none;
		}
		.menuList div a:hover {
		  color: #f30;
		  background: #0080c4;
		  color: #fff;
		}
		</style>
		
		<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
		  var menuParent = $('.menu > .ListTitlePanel > div');//获取menu下的父层的DIV
		  var menuList = $('.menuList');
		  $('.menu > .menuParent > .ListTitlePanel > .ListTitle').each(function(i) {//获取列表的大标题并遍历
		    $(this).click(function(){
		      if($(menuList[i]).css('display') == 'none'){
		        $(menuList[i]).slideDown(300);
		      }
		      else{
		        $(menuList[i]).slideUp(300);
		      }
		    });
		  });
		});
		</script>
		
		</head>
		
		
		
		
	
	<body>
	
	
	<div class="leftMenu">
	  <div class="menu">
	    <div class="menuParent">
	      <div class="ListTitlePanel">
	        <div class="ListTitle">
	          <strong>个人中心</strong>
	          <div class="leftbgbt"> </div>
	        </div>
	      </div>
	      <div class="menuList">
	        <div> <a href="#">我的信息</a></div>
	        <div> <a href="#">系统通知 </a> </div>
	        <div> <a href="#">短信息</a></div>
	      </div>
	    </div>
	    <div class="menuParent">
	      <div class="ListTitlePanel">
	        <div class="ListTitle">
	          <strong>课程中心</strong>
	          <div class="leftbgbt2"> </div>
	        </div>
	      </div>
	      <div class="menuList">
	        <div> <a href="#">我的课程</a></div>
	        <div> <a href="#">课程资源</a></div>
	        <div> <a href="#">班级统计</a></div>
	        <div> <a href="#">课程题库</a></div>
	      </div>
	    </div>
	    <div class="menuParent">
	      <div class="ListTitlePanel">
	        <div class="ListTitle">
	          <strong>校内讨论</strong>
	          <div class="leftbgbt2"> </div>
	        </div>
	      </div>
	      <div class="menuList">
	        <div> <a href="#">我的帖子</a></div>
	        <div> <a href="#">新回复</a></div>
	        <div> <a href="#">课程板块</a></div>
	        <div> <a href="#">问答中心</a></div>
	      </div>
	    </div>
	    <div class="menuParent">
	      <div class="ListTitlePanel">
	        <div class="ListTitle">
	          <strong>资源中心</strong>
	          <div class="leftbgbt2"> </div>
	        </div>
	      </div>
	      <div class="menuList">
	        <div> <a href="#">教学资源</a></div>
	        <div> <a href="#">教学经历</a></div>
	      </div>
	    </div>
	  </div>
	</div>

		
	</body>
</html>
