window.onload=function(){
	showTime();
	time();
	var timer=setInterval(showTime, 1000);
	var ttimer=setInterval(time,1000);
  	function checkTime(i){
  	
  		if(i<10){
  			i="0"+i;
  		}
  		return i;
  	}

  	function showTime(){
  		var mydate=new Date();
	var month=mydate.getMonth()+1;
	var date=mydate.getDate();
	var year=mydate.getFullYear();
	var hours=mydate.getHours()+1;
	var min=mydate.getMinutes();

		//min=checkTime(min);
		second=checkTime(second);
	var second=mydate.getSeconds();
	var day=mydate.getDay();
	
	var arr=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
  	min=checkTime( min );

  	document.getElementById("box").innerHTML=year+'年'+month+'月'+date+'日'+arr[day]+hours+':'+min+':'+second;
  	
  	}



function time(){
  	var currTime=new Date();
  	var endedTime=new Date("2016,10,30");
  	var endTime=new Date("2016/10/30,12:20:24");
  	var leftTime=Math.ceil((endedTime.getTime()-currTime.getTime())/(24*60*60*1000));
  	document.getElementById("ttime").innerHTML=leftTime;
  	var lefttTime=parseInt((endTime.getTime()-currTime.getTime())/1000);
  	var d=parseInt(lefttTime/(24*60*60));
  	var h=parseInt(lefttTime/(60*60)%24);
  	var m=parseInt(lefttTime/60%60);
  	var s=parseInt(lefttTime%60);
  	document.getElementById("tttime").innerHTML=d+'天'+h+'小时'+m+'分钟'+s+'秒';
  }
}