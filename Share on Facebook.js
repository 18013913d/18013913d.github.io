/**
 * @author Suyi
 * This function is supported by Facebook. This function allows
 * the user to share my webpage on Facebook. The total number of 
 * sharing will be displayed on the "share button".
 */
(function(d,s,id){
	var js, fjs = document.getElementByTagName(s)[0];
	if (document.getElementById(id)) return;
	js = document.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
	fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));