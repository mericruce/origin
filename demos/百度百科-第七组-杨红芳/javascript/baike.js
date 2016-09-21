window.onload = function() {

    var dia = document.getElementById("dialogue");

    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var zql = document.getElementById("zql");
    var num = 1;
    var scHeight = 0;
    
    window.onscroll = function() {
    	
    	scHeight = document.body.scrollTop || document.documentElement.scrollTop; //把这句放在里面就行了

        if (scHeight < 700) {
            dia.style.display = "none";
        } else if (scHeight >= 700 && scHeight < 13460) {
            dia.style.display = "block";

        } else {
            dia.style.display = "none";
        }

        returnButton();
        changeposition();
        dialogue();
    }

    left.onclick = function() {
        leftEvent();
    }

    function leftEvent() {
        num++;
        if (num > 5) {
            num = 1;
        }
        zql.src = "../images/bkpic" + num + ".jpg";
    }

    right.onclick = function() {
        num--;
        if (num < 1) {
            num = 5;
        }
        zql.src = "../images/bkpic" + num + ".jpg";
    }

    setInterval(leftEvent, 2000);





    var topbtn=document.getElementById("topbtn");
    var timer=null;
    var pagelook=document.documentElement.clientHeight;

    var returnButton = function() {
    	var backheight = document.body.scrollTop || document.documentElement.scrollTop;

    	if(backheight >= pagelook){
    		topbtn.style.display="block";
    	}else{
    		topbtn.style.display="none";
    	}
    }

    var changeposition=function(){
        var backheight = document.body.scrollTop || document.documentElement.scrollTop;

        if(backheight>13470){
            topbtn.style.bottom="250px";
        }else{
            topbtn.style.bottom="50px";
        }

    }


    topbtn.onclick=function(){
    	timer=setInterval(function(){
    		var backheight=document.body.scrollTop;
    		speed=backheight/5;
    		document.body.scrollTop=backheight-speed;
    		if(backheight==0){
    			clearInterval(timer);
    		}

    	},30);

    }



    var picture=document.getElementById("pics");
    var left=document.getElementById("left");
    var right=document.getElementById("right");
    picture.onmousemove=function(){
        left.style.display="block";
        right.style.display="block";
    }
    picture.onmouseout=function(){
        left.style.display="none";
        right.style.display="none";
    }

    dia.onscroll = function() {
        console.log(dia.scrollTop);
    }






    var cover=document.getElementById("cover");
    var login=document.getElementById("login");
    var denglu=document.getElementById("login");
    var xdenglu=document.getElementById("xdenglu");
    xdenglu.onclick=function(){
        cover.style.display="block";
        login.style.display="block";
    }
    denglu.onclick=function(){
        cover.style.display="none";
        login.style.display="none";
    }




    

    function dialogue(){

        var menu=dia.getElementsByTagName("a");
        var con=document.getElementsByTagName("h2");
        var currentId="";
        for (var i = 0; i < con.length; i++) {
            var conn=con[i];
            var connTop=conn.offsetTop;
            if(scHeight>connTop){
                currentId=conn.id;
            }else{
                break;
            }
        }
        if(currentId){
            for (var j = 0; j< menu.length; j++) {
                var menuu=menu[j];
                var hreff=menuu.href.split("#");

                if(hreff[hreff.length-1]!=currentId){
                    menuu.setAttribute('class'," ");
                 //  removeClass(menuu,"current");
                }else{
                    menuu.setAttribute('class','current')
                // addClass(menuu,"current");
                }
            }
        }
    }

  
   

   

}