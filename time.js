/**
 * @author Suyi
 */
var today = new Date();
var year = '/'+today.getFullYear();
var month = '/'+('0'+(today.getMonth()+1)).slice(-2);
var date = ('0'+today.getDate()).slice(-2);
var hour = ('0'+today.getHours()).slice(-2)+':'
var min = ('0'+today.getMinutes()).slice(-2);
var datetime = hour+min+" "+date+month+year;
document.getElementById('timendate').innerHTML = datetime;