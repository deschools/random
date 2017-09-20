var names = [];

function getQueryVariable(variable) {
	var query = decodeURIComponent(window.location.search.substring(1));
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return(false);
}

function initialize(){
	document.getElementById("nameslist").innerHTML = "";
	var stoploop = false;
	var loopcount = 0;
	while (stoploop == false){
		var name = getQueryVariable("n"+loopcount);
		if (name) {
			names.push(name);
			document.getElementById("nameslist").innerHTML += '<span class="namelistbuttons">'+name+'</span>';
			loopcount = loopcount + 1;
		}
		else {
			stoploop = true;
		}
	}
	adjustsize();
}

function adjustsize() {
	var width = (window.innerWidth) - 30;
	var height = (window.innerHeight) - 30;
	document.getElementById("container").style.width = width + "px";
	document.getElementById("container").style.height = height + "px";
}

function openclosesettings() {
	var settingsdisplay = document.getElementById("settingscontainer").style.display;
	if (settingsdisplay == "none" || settingsdisplay == "") {
		document.getElementById("settingscontainer").style.display = "block";
		document.getElementById("namescontainer").style.display = "none";
	}
	else {
		document.getElementById("settingscontainer").style.display = "none";
		document.getElementById("namescontainer").style.display = "block";
	}
}

function geturl() {
	var lines = document.getElementById("typenamestextarea").value.split(/\n/);
	document.getElementById("url").value = window.location.hostname;
	for (var i=0; i < lines.length; i++) {
		if (i == 0) {
			document.getElementById("url").value += "?n"+i+"="+lines[i];
		}
		else {
			document.getElementById("url").value += "&n"+i+"="+lines[i];
		}
	}
}

function randomname() {
	console.log(names);
	document.getElementById("namescontainer").style.display = "none";
	document.getElementById("randomstudentcontainer").style.display = "block";
	document.getElementById("randomstudentcontainer").innerHTML = '<span class="randomnamebutton">'+names[Math.floor(Math.random() * names.length)]+'</span>';
	setTimeout(function(){ document.getElementById("randomstudentcontainer").innerHTML = '<span class="randomnamebutton">'+names[Math.floor(Math.random() * names.length)]+'</span>'; }, 1000);
	setTimeout(function(){ document.getElementById("randomstudentcontainer").innerHTML = '<span class="randomnamebutton">'+names[Math.floor(Math.random() * names.length)]+'</span>'; }, 2000);
	setTimeout(function(){ document.getElementById("randomstudentcontainer").innerHTML = '<span class="randomnamebutton">'+names[Math.floor(Math.random() * names.length)]+'</span>'; }, 3000);
	setTimeout(function(){ document.getElementById("namescontainer").style.display = "block"; document.getElementById("randomstudentcontainer").style.display = "none"; }, 7000);
}

function randomgroups() {
	var numberofgroups = document.getElementById("numberofgroups").value;
	if (numberofgroups > 0 && numberofgroups != "") {
		document.getElementById("nameslist").style.display = "none";
		document.getElementById("groupscontainer").style.display = "block";
		document.getElementById("groupscontainer").innerHTML = '';
		for (var i=0; i < numberofgroups; i++) {
			document.getElementById("groupscontainer").innerHTML += '<div class="groupwrapper" id="group'+i+'"></div>';
		}
		var names2 = names.slice(0);
		var howmanynames = names2.length;
		var loopcount = 0;
		for (var i=0; i < howmanynames; i++) {
			var randomarraynumber = Math.floor(Math.random() * names2.length);
			var chosenname = names2[randomarraynumber];
			names2.splice(randomarraynumber, 1);
			document.getElementById("group"+loopcount).innerHTML += '<span class="namelistbuttons">'+chosenname+'</span>';
			if (loopcount == (numberofgroups - 1)) {
				loopcount = 0;
			}
			else {
				loopcount = loopcount + 1;
			}
		}
	}
}


