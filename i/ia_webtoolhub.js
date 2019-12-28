/*
Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
Over 400+ free JavaScripts here!
Keep this notice intact please
*/

function random_imglink(){
var ir=new Array()
//specify random images below. You can have as many as you wish
ir[1]="ia.gif"
ir[2]="ib.gif"
ir[3]="ic.gif"
ir[4]="id.gif"
ir[5]="ie.gif"
ir[6]="if.gif"

var ry=Math.floor(Math.random()*ir.length)
if (ry==0)
ry=1
document.write('<img src="'+i/webtoolhub[ry]+'" border=0>')
}
random_imglink()
