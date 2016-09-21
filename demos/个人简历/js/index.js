window.onload=function(){



function circle(id,fr,sr,er,num){
	var c=document.getElementById(id);
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(60,60,50,0,fr*Math.PI);
	ctx.lineWidth=8;
	ctx.strokeStyle="#9ACD32";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(60,60,50,sr*Math.PI,er*Math.PI);
	ctx.lineWidth=8;
	ctx.strokeStyle="#ddd";
	ctx.stroke();
	ctx.font="30px Arial";
	ctx.fillText(num,30,75);

}

circle('myCanvas1',1.8,1.8,2,'80%');
circle('myCanvas2',1.85,1.85,2,'85%');
circle('myCanvas3',1.9,1.9,2,'90%');
circle('myCanvas4',1.6,1.6,2,'60%');



change();






function change() {

var img=document.getElementsByClassName("img-thumbnail");
var cover=document.getElementsByClassName("cover");
for(var i=0,l=img.length;i<l;i++){

cover[i].style.height = img[i].height + 'px';
cover[i].style.width = img[i].width + 'px';


   }

}


window.onresize = function(){
	change();
}



}
