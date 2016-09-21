window.onload=function(){



	var name=document.getElementById("name");
	var nam=document.getElementById("nam");
	var re_n = /[\u4E00-\u9FA5\uF900-\uFA2D]/g; 

            name.onfocus = function () {
            	if (name.value == "") {
                 nam.innerHTML="昵称只能为汉字！";
             }
            }
            
            name.onkeyup = function () {
                if (!re_n.test(name.value)) {
                    nam.innerHTML = "格式错误！";
                }
                else {
                    nam.innerHTML = "ok！";
                }
            }
            name.onblur = function () {
            	if (name.value == "") {
                    
                    nam.innerHTML="昵称不能为空！";
                }
            }



	var tel=document.getElementById("tel");
	var tell=document.getElementById("tell");
	var re_p = /^1\d{10}$/g;
	tel.onfocus = function () {   
	      if (tel.value == "") {
	      	tell.innerHTML="电话号码为11位手机号码！";
	      }         	
            
            }

	tel.onkeyup=function(){
		if(re_p.test(tel.value)){
			tell.innerHTML = "ok!";
		}else{
			tell.innerHTML="请输入正确的手机号码";
		}
	}
	tel.onblur = function () {
            	if (tel.value == "") {
                    tell.innerHTML="电话号码不能为空！";
                }
            }


    var mail=document.getElementById("email");
    var m = document.getElementById("mail");
    var re_m = /^(\w-*\.*)+@(\w-?)+(\.\w{3,})+$/g;
            mail.onfocus = function () {
            	if (mail.value == "") {
                 m.innerHTML = "输入有效邮箱:mail@126.com";
             }
            }
            
            mail.onkeyup = function () {
                if (!re_m.test(mail.value)) {
                    m.innerHTML="格式错误！"
                }
                else {
                    m.innerHTML="ok！"
                }
            }
            mail.onblur = function () {
            	if (mail.value == "") {    
                    m.innerHTML="不能为空！";
                }
            }


            var password = document.getElementById('pwd');
            var sPassword = document.getElementById('pwdd');
            var re_u = /^[a-zA-z]\w{3,15}$/g;
            password.onfocus = function () {
            	if (password.value == "") {
                  sPassword.innerHTML="数字、字母、下划线组成！";
              }
            }
            
            password.onkeyup = function () {
                 if (password.value.length > 20 || password.value.length < 6) {
                    sPassword.innerHTML="密码字数应为6-20个字符！";
                }
                else if (! re_u.test(password.value)) {
                    sPassword.innerHTML="数字、字母、下划线组成！";
                }
                else {
                    sPassword.innerHTML="ok！";
                }
            }
            password.onblur = function () {
                if (password.value == "") {
                    
                    sPassword.innerHTML="不能为空！";
                }
            }
             
            var _password = document.getElementById('pwd2');
            var _sPassword = document.getElementById('pwdd2');

            _password.onkeyup = function () {
            	if (_password.value != password.value) {
            		_sPassword.innerHTML="两次密码输入不一致!";
            	}
                else {
                   _sPassword.innerHTML="ok！";
                }
            }
            _password.onblur = function () {
                if (password.value == "") {
                    
                    _sPassword.innerHTML="不能为空！";
                }
            }
}