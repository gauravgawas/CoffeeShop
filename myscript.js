
function selected(s){
	var x=document.getElementById(s);
	if(x.style.border=="5px solid whitesmoke")
	document.getElementById(s).style.border="5px solid green";
	else
	document.getElementById(s).style.border="5px solid whitesmoke";
}

function list(){
	var p=0;
	 window.item=[];
	if(document.getElementById("bc").style.borderColor=="green"){
		item.push("Black Coffee");
		p+=50;
	}
	if(document.getElementById("mc").style.borderColor=="green"){
		item.push("Milk Coffee");
		p+=60;
	}
	if(document.getElementById("cc").style.borderColor=="green"){
		item.push("Cold Coffee");
		p+=70;
	}
	if(document.getElementById("ic").style.borderColor=="green"){
		item.push("Ice Coffee");
		p+=65;
	}
	if(document.getElementById("lc").style.borderColor=="green"){
		item.push("Latte Coffee");
		p+=80;
	}
	if(document.getElementById("capc").style.borderColor=="green"){
		item.push("Cappuccino Coffee");
		p+=75;
	}
	if(document.getElementById("mochc").style.borderColor=="green"){
		item.push("Mocha Coffee");
		p+=80;
	}
	if(document.getElementById("irc").style.borderColor=="green"){
		item.push("Irish Coffee");
		p+=100;
	}
	if(item.length==0)
		alert("You Have Not Selected Any Item");

	document.getElementById("list").innerHTML=item;
	document.getElementById("price").innerHTML=p;

}

function validate(){
	var name=document.getElementById("name").value;
	var phone=document.getElementById("phno").value;
	var email=document.getElementById("email").value;
	var add=document.getElementById("add").value;

	var r1=document.getElementById("radio1").checked;
	var r2=document.getElementById("radio2").checked;
	var r3=document.getElementById("radio3").checked;

	var reg1= new RegExp("^[a-z A-Z]+$");
	var reg2= new RegExp("^[7-9]\\d{9}$");
	var reg3= new RegExp("^([a-z A-Z 0-9 + . _ -]+)@([a-z A-Z 0-9 . -]+)$");
	var reg4= new RegExp("^[a-z A-Z 0-9\s,.'-]{3,}$");

	if(reg1.test(name)&&reg2.test(phone)&&reg3.test(email)&&reg4.test(add)&&(r1==true||r2==true||r3==true))
		{
			if(item.length!=0)
				alert("Order Placed");
			else
				alert("You Have Not Selected Any Item");
		}
		else
		{
			alert("Invalid Input");
		}
}