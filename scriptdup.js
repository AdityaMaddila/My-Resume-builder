function addNewWEField()
{
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("weField");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");
	let weOb = document.getElementById("we");
	let weAddButtonOb = document.getElementById("weAddButton");
	weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField()
{
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("aqField");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");
	let aqOb = document.getElementById("aq");
	let aqAddButtonOb = document.getElementById("aqAddButton");
	aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewPROField()
{
	let newNode = document.createElement("textarea");
	newNode.classList.add("form-control");
	newNode.classList.add("proField");
	newNode.setAttribute("rows",3);
	newNode.setAttribute("placeholder","Enter Here");
	let proOb = document.getElementById("pro");
	let proAddButtonOb = document.getElementById("proAddButton");
	proOb.insertBefore(newNode, proAddButtonOb);
}
//function to generate cv//
function generateCV4(){
	console.log("fnojafna")
	let nameField=document.getElementById("nameField").value;
	let nameT41=document.getElementById("nameT41");
	nameT41.innerHTML=nameField;
	//direct
	document.getElementById("nameT42").innerHTML=nameField;
	//contact
	document.getElementById("contactT4").innerHTML=document.getElementById("contactField").value;
	//address
	document.getElementById('addressT4').innerHTML=document.getElementById("addressField").value;
	document.getElementById('fbT4').innerHTML=document.getElementById("fbField").value;
	document.getElementById('instaT4').innerHTML=document.getElementById("instaField").value;
	document.getElementById('linkT4').innerHTML=document.getElementById("linkField").value;
	document.getElementById('discT4').innerHTML=document.getElementById("discField").value;
	//objective setting
	document.getElementById("objT4").innerHTML=document.getElementById("objField").value;
	//we field
	let wes=document.getElementsByClassName("weField")
	let str=""
	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`;
	}
	document.getElementById("weT4").innerHTML=str;
	//aa
	let aqs=document.getElementsByClassName("aqField")
	let str1=""
	for(let e of aqs)
	{
		str1+=`<li> ${e.value}</li>`;
	}
	document.getElementById("aqT4").innerHTML=str1;
	//pro
	let pros=document.getElementsByClassName("proField")
	let str2=""
	for(let e of pros)
	{
		str2+=`<li> ${e.value}</li>`;
	}
	document.getElementById("proT4").innerHTML=str2;
	//code for setting pfp
	let file=document.getElementById("imgField").files[0];
	console.log(file);
	let reader=new FileReader()
	reader.readAsDataURL(file);
	console.log(reader.result);
	//sending image into template
	reader.onloadend=function()
	{
		document.getElementById('imgTemplate4').src=reader.result;
	};

	document.getElementById('cv-form').style.display="none"
	document.getElementById('cv-template4').style.display="block"
}
function generateCV3(){
	console.log("fnojafna")
	let nameField=document.getElementById("nameField").value;
	let nameT31=document.getElementById("nameT31");
	nameT31.innerHTML=nameField;
	//direct
	document.getElementById("nameT32").innerHTML=nameField;
	//contact
	document.getElementById("contactT3").innerHTML=document.getElementById("contactField").value;
	//address
	document.getElementById('addressT3').innerHTML=document.getElementById("addressField").value;
	document.getElementById('fbT3').innerHTML=document.getElementById("fbField").value;
	document.getElementById('instaT3').innerHTML=document.getElementById("instaField").value;
	document.getElementById('linkT3').innerHTML=document.getElementById("linkField").value;
	document.getElementById('discT3').innerHTML=document.getElementById("discField").value;
	//objective setting
	document.getElementById("objT3").innerHTML=document.getElementById("objField").value;
	//we field
	let wes=document.getElementsByClassName("weField")
	let str=""
	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`;
	}
	document.getElementById("weT3").innerHTML=str;
	//aa
	let aqs=document.getElementsByClassName("aqField")
	let str1=""
	for(let e of aqs)
	{
		str1+=`<li> ${e.value}</li>`;
	}
	document.getElementById("aqT3").innerHTML=str1;
	//pro
	let pros=document.getElementsByClassName("proField")
	let str2=""
	for(let e of pros)
	{
		str2+=`<li> ${e.value}</li>`;
	}
	document.getElementById("proT3").innerHTML=str2;
	//code for setting pfp
	let file=document.getElementById("imgField").files[0];
	console.log(file);
	let reader=new FileReader()
	reader.readAsDataURL(file);
	console.log(reader.result);
	//sending image into template
	reader.onloadend=function()
	{
		document.getElementById('imgTemplate3').src=reader.result;
	};

	document.getElementById('cv-form').style.display="none"
	document.getElementById('cv-template3').style.display="block"
}
function generateCV2(){
	console.log("fnojafna")
	let nameField=document.getElementById("nameField").value;
	let nameT21=document.getElementById("nameT21");
	nameT21.innerHTML=nameField;
	//direct
	document.getElementById("nameT22").innerHTML=nameField;
	//contact
	document.getElementById("contactT2").innerHTML=document.getElementById("contactField").value;
	//address
	document.getElementById('addressT2').innerHTML=document.getElementById("addressField").value;
	document.getElementById('fbT2').innerHTML=document.getElementById("fbField").value;
	document.getElementById('instaT2').innerHTML=document.getElementById("instaField").value;
	document.getElementById('linkT2').innerHTML=document.getElementById("linkField").value;
	document.getElementById('discT2').innerHTML=document.getElementById("discField").value;
	//objective setting
	document.getElementById("objT2").innerHTML=document.getElementById("objField").value;
	//we field
	let wes=document.getElementsByClassName("weField")
	let str=""
	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`;
	}
	document.getElementById("weT2").innerHTML=str;
	//aa
	let aqs=document.getElementsByClassName("aqField")
	let str1=""
	for(let e of aqs)
	{
		str1+=`<li> ${e.value}</li>`;
	}
	document.getElementById("aqT2").innerHTML=str1;
	//pro
	let pros=document.getElementsByClassName("proField")
	let str2=""
	for(let e of pros)
	{
		str2+=`<li> ${e.value}</li>`;
	}
	document.getElementById("proT2").innerHTML=str2;
	//code for setting pfp
	let file=document.getElementById("imgField").files[0];
	console.log(file);
	let reader=new FileReader()
	reader.readAsDataURL(file);
	console.log(reader.result);
	//sending image into template
	reader.onloadend=function()
	{
		document.getElementById('imgTemplate2').src=reader.result;
	};

	document.getElementById('cv-form').style.display="none"
	document.getElementById('cv-template2').style.display="block"
}
function generateCV1(){
	console.log("fnojafna")
	let nameField=document.getElementById("nameField").value;
	let nameT11=document.getElementById("nameT11");
	nameT11.innerHTML=nameField;
	//direct
	document.getElementById("nameT12").innerHTML=nameField;
	//contact
	document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
	//address
	document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
	document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
	document.getElementById('instaT').innerHTML=document.getElementById("instaField").value;
	document.getElementById('linkT').innerHTML=document.getElementById("linkField").value;
	document.getElementById('discT').innerHTML=document.getElementById("discField").value;
	//objective setting
	document.getElementById("objT").innerHTML=document.getElementById("objField").value;
	//we field
	let wes=document.getElementsByClassName("weField")
	let str=""
	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`;
	}
	document.getElementById("weT").innerHTML=str;
	//aa
	let aqs=document.getElementsByClassName("aqField")
	let str1=""
	for(let e of aqs)
	{
		str1+=`<li> ${e.value}</li>`;
	}
	document.getElementById("aqT").innerHTML=str1;
	//pro
	let pros=document.getElementsByClassName("proField")
	let str2=""
	for(let e of pros)
	{
		str2+=`<li> ${e.value}</li>`;
	}
	document.getElementById("proT").innerHTML=str2;
	//code for setting pfp
	let file=document.getElementById("imgField").files[0];
	console.log(file);
	let reader=new FileReader()
	reader.readAsDataURL(file);
	console.log(reader.result);
	//sending image into template
	reader.onloadend=function()
	{
		document.getElementById('imgTemplate').src=reader.result;
	};

	document.getElementById('cv-form').style.display="none"
	document.getElementById('cv-template1').style.display="block"
}


function printCV()
{
	window.print();

}