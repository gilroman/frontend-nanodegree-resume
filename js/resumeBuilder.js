var name = "Gil Roman";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);