var myDate = new Date();
var year = myDate.getFullYear();
for(var i = 2005; i < year+1; i++){   document.write('<option value="'+i+'">'+i+'</option>');
}

