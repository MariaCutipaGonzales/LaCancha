window.addEventListener("load", function(){
	var content = document.createElement("div");
	var childcontent = document.createElement("div");
	var arco1 = document.createElement("div");
	var arco2 = document.createElement("div");
	var centro = document.createElement("div");
	var pelota1 = document.createElement("div");
	var pelota2 = document.createElement("div");
	var pelota3 = document.createElement("div");

	content.setAttribute("id","content");
	childcontent.setAttribute("id","childcontent");
	arco1.setAttribute("id","arco1");
	arco2.setAttribute("id","arco2");
	centro.setAttribute("id","centro");
	pelota1.setAttribute("id","pelota1");
	pelota2.setAttribute("id","pelota2");
	pelota3.setAttribute("id","pelota3");

	content.appendChild(childcontent);
	childcontent.appendChild(arco1);
	childcontent.appendChild(arco2);
	childcontent.appendChild(centro);
	childcontent.appendChild(pelota1);
	childcontent.appendChild(pelota2);
	childcontent.appendChild(pelota3);

	document.getElementsByTagName("body")[0].appendChild(content);
});