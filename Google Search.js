/**
 * @author Suyi
 * This function will perform a Google search in a new tab.
 * The input value of the "searchbox" will be get and searched in Google.
 */
function searchit(){
	document.getElementById("googlesearch").href=
	(("https://www.google.com/search?q=")+
	(document.getElementById("searchbox").value));
}
