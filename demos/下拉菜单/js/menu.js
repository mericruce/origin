window.onload=function(){
	var Lis=document.getElementsByTagName("li");
	for (var i = 0; i < Lis.length-1; i++) {
		Lis[i].onmousemove=function(){
			var u=this.getElementsByTagName("ul")[0];
			u.style.display="block";
			addH(u.id);
		}
		Lis[i].onmouseleave=function(){
			var u=this.getElementsByTagName("ul")[0];
			
			subH(u.id);
		}
	}

}

function addH(id){
	var ulList=document.getElementById(id);
	var h=ulList.offsetHeight;
	h += 1;
	if(h<170){
		ulList.style.height=h+"px";
		setTimeout("addH('"+id+"')",10);
	}
	else{
		display:block;
		return;
	}
}

function subH(id){
	var ulList=document.getElementById(id);
	var h=ulList.offsetHeight;
	h -= 1;
	if(h>0){
		ulList.style.height=h+"px";
		setTimeout("subH('"+id+"')",10);
	}
	else{
		display:none;
		return;
	}
}








window.onload=function(){
	var isIE=!!window.ActiveXObject;
	var isIE6=isIE&&!window.XMLHttpRequest;
	if(isIE6){
		var Lis=document.getElementsByTagName("li");
		for(var i=0;i<Lis.length;i++){
			Lis[i].onmouseover=function(){
				var u=this.getElementsByTagName("ul")[0];
				if(u!=undefined){
					u.style.display="block";
				}
			}
			Lis[i].onmouseout=function(){
				var u=this.getElementsByTagName("ul")[0];
				if(u!=undefined){
					u.style.display="none";
				}
			}
		}
	}
}

/*	$(function(){
		$("li").has("ul").mouseover(function(){
			$(this).children("ul").css("display","block");
		}).mouseout(function(){
			$(this).children("ul").css("display","block");
		})
	})*/