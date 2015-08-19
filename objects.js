$(document).ready(function(){
	data.students.forEach(function callBack(element, index) {
		var user = (element.github_username);
		var first = (element.first_name);
		var last = (element.last_name);
		var page = '<a href="https://github.com/'+ user + '">' + first + " " + last + '</a>';
		$("body").append("<div>"+page+"</div");
	});

});