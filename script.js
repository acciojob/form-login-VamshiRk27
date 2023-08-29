const form=document.getElementById("form1");
function getFormvalue() {
    let fullName=form[0].value+" "+form[1].value;
	alert(fullName);
}
