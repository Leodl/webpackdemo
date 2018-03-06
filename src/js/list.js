//引入css
import "@less/global"
import "@less/list"
import $ from "jquery"

$('body').append('这是js动态生成的内容，这是list页面！')

var common = function(){
	var obj = {};
	obj.add = function(){
		alert("Leo")
	}
	obj.count = function(){
		alert(3333)
	}

	return obj;
}()
export default common