//引入css
import "@less/global"
import "@less/about"
import $ from "jquery"

$('body').append('这是js动态生成的内容：这是about页面！')



$("#btn").click(function(){
	alert(222)
})

function add(){
  alert(1)
}

// var about = function(){
//     var obj = {};

//     obj.add = function(){
//     	alert(1)
//     }

// 	return obj;
// }()