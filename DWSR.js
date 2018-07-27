/* COOKIE FUNCTIONS. */
function savecookie(idnumber) {
  document.cookie = "id = " + i +";";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '1';
}

function getid(idnumber) {
  var i =  document.getElementById(idnumber);
  savecookie(i);
}

/* Make a function to scroll down.
    move i.scrollIntoView() into this function.

    PARAMETERS: what is saved in the cookie
    RETURNS: nothing, it just autoscrolls

    put this function into the button
*/
function bookmark() {
  var i = getCookie("id");
  i.scrollIntoView();
}

