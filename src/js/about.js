//引入css
import "@less/global"
import "@less/about"
// import $ from "jquery"


import common from '@js/list'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import "@js/lib/datetime/css/bootstrap-datetimepicker.min.css"
import "@js/lib/datetime/js/bootstrap-datetimepicker.js"
import "@js/lib/datetime/js/locales/bootstrap-datetimepicker.fr.js"




$('body').append('这是js动态生成的内容：这是about页面！')
/*console.log($)*/




var add = ()=>{
	//common.add();
	$("#btn").click(function(){

		alert(222)

	})
	$("#btn1").click(function(){
		common.add();
	})

	setTimeout(function(){
		console.log($('#inp').val())
		 $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
  $('.form_date').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
    });
	})



 

}
add()


