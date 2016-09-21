window.onload=function(){
	var divtitle=document.getElementById("tab-title");
	var title=divtitle.getElementsByTagName("li");
	var bigcontent=document.getElementById("tab-content");
	var content=bigcontent.getElementsByTagName("div");

	if(title.length != content.length){
		return;
	}
	for (var i = 0; i < title.length; i++) {
		title[i].id=i;
		title[i].onmouseover=function(){
			for (var j = 0; j < title.length; j++) {

				title[j].className="";
				content[j].style.display="none";
			}
			this.className="select";
			content[this.id].style.display="block";
		}
	}
}