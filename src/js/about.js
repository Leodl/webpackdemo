//引入css
import "@less/global"
import "@less/about"
import $ from "jquery"
import common from '@js/list'


$('body').append('这是js动态生成的内容：这是about页面！')





var add = ()=>{
	common.add();
	$("#btn").click(function(){

		alert(222)

	})
	$("#btn1").click(function(){
		common.add();
	})
}
add()





// var about = function(){
//     var obj = {};

//     obj.add = function(){
//     	alert(1)
//     }

// 	return obj;
// }()