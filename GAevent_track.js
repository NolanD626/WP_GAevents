//Add Event Attributes to Tags
var GAevents=document.querySelectorAll("BODY")[0];
var i;
var GAtags = new Array();
//Get the first 50 tags and put them into an array (or add more)
//You can replace the '*' with any HTML or XML Tag you like
//example: 'DIV' 'P' 'H1' 'H2' 'IMG' 'INPUT' 'BUTTON'
//creating options pages for these settings should be possible in the near future
GAtags[0] = GAevents.getElementsByTagName('*')[0];
GAtags[1] = GAevents.getElementsByTagName('*')[1];
GAtags[2] = GAevents.getElementsByTagName('*')[2];
GAtags[3] = GAevents.getElementsByTagName('*')[3];
GAtags[4] = GAevents.getElementsByTagName('*')[4];
GAtags[5] = GAevents.getElementsByTagName('*')[5];
GAtags[6] = GAevents.getElementsByTagName('*')[6];
GAtags[7] = GAevents.getElementsByTagName('*')[7];
GAtags[8] = GAevents.getElementsByTagName('*')[8];
GAtags[9] = GAevents.getElementsByTagName('*')[9];
GAtags[10] = GAevents.getElementsByTagName('*')[10];
GAtags[11] = GAevents.getElementsByTagName('*')[11];
GAtags[12] = GAevents.getElementsByTagName('*')[12];
GAtags[13] = GAevents.getElementsByTagName('*')[13];
GAtags[14] = GAevents.getElementsByTagName('*')[14];
GAtags[15] = GAevents.getElementsByTagName('*')[15];
GAtags[16] = GAevents.getElementsByTagName('*')[16];
GAtags[17] = GAevents.getElementsByTagName('*')[17];
GAtags[18] = GAevents.getElementsByTagName('*')[18];
GAtags[19] = GAevents.getElementsByTagName('*')[19];
GAtags[20] = GAevents.getElementsByTagName('*')[20];
GAtags[21] = GAevents.getElementsByTagName('*')[21];
GAtags[22] = GAevents.getElementsByTagName('*')[22];
GAtags[23] = GAevents.getElementsByTagName('*')[23];
GAtags[24] = GAevents.getElementsByTagName('*')[24];
GAtags[25] = GAevents.getElementsByTagName('*')[25];
GAtags[26] = GAevents.getElementsByTagName('*')[26];
GAtags[27] = GAevents.getElementsByTagName('*')[27];
GAtags[28] = GAevents.getElementsByTagName('*')[28];
GAtags[29] = GAevents.getElementsByTagName('*')[29];
GAtags[30] = GAevents.getElementsByTagName('*')[30];
GAtags[31] = GAevents.getElementsByTagName('*')[31];
GAtags[32] = GAevents.getElementsByTagName('*')[32];
GAtags[33] = GAevents.getElementsByTagName('*')[33];
GAtags[34] = GAevents.getElementsByTagName('*')[34];
GAtags[35] = GAevents.getElementsByTagName('*')[35];
GAtags[36] = GAevents.getElementsByTagName('*')[36];
GAtags[37] = GAevents.getElementsByTagName('*')[37];
GAtags[38] = GAevents.getElementsByTagName('*')[38];
GAtags[39] = GAevents.getElementsByTagName('*')[39];
GAtags[40] = GAevents.getElementsByTagName('*')[40];
GAtags[41] = GAevents.getElementsByTagName('*')[41];
GAtags[42] = GAevents.getElementsByTagName('*')[42];
GAtags[43] = GAevents.getElementsByTagName('*')[43];
GAtags[44] = GAevents.getElementsByTagName('*')[44];
GAtags[45] = GAevents.getElementsByTagName('*')[45];
GAtags[46] = GAevents.getElementsByTagName('*')[46];
GAtags[47] = GAevents.getElementsByTagName('*')[47];
GAtags[48] = GAevents.getElementsByTagName('*')[48];
GAtags[49] = GAevents.getElementsByTagName('*')[49];
//for each HTML tag in the array, 
for (i=0;i<GAtags.length;i++)
{
//You can choose which functions to run on events you choose (ex: onMouseMove). 
//Add & Remove by commenting out
//
//MOUSE EVENTS
//
//The event occurs when the user clicks on an element
GAtags[i].setAttribute("onclick","ga_event_track_clickedOn(this.id)");
//The event occurs when the user double-clicks on an element
GAtags[i].setAttribute("ondblclick","ga_event_track_clickedOn(this.id)");
//The event occurs when a user presses a mouse button over an element
GAtags[i].setAttribute("onmousedown","ga_event_track_clickedOn(this.id)");
//The event occurs when a user releases a mouse button over an element
GAtags[i].setAttribute("onmouseup","ga_event_track_clickedOn(this.id)");
//The event occurs when the pointer is moving while it is over an element
GAtags[i].setAttribute("onmousemove","ga_event_track_movedOver(this.id)");
//The event occurs when the pointer is moved onto an element
GAtags[i].setAttribute("onmouseover","ga_event_track_movedOver(this.id)");
//The event occurs when a user moves the mouse pointer out of an element
GAtags[i].setAttribute("onmouseout","ga_event_track_movedOver(this.id)");
//
//KEYBOARD EVENTS
//
//The event occurs when the user is pressing a key
GAtags[i].setAttribute("onkeydown","ga_event_track_wroteIn(this.id)"); 
//The event occurs when the user presses a key
GAtags[i].setAttribute("onkeypress","ga_event_track_wroteIn(this.id)"); 
//The event occurs when the user releases a key
GAtags[i].setAttribute("onkeyup","ga_event_track_wroteIn(this.id)"); 
//
//FRAME/OBJECT EVENTS
//
//The event occurs when an image is stopped from loading before completely loaded (for <object>)
//onabort
//The event occurs when an image does not load properly (for <object>, <body> and <frameset>) 	 
//onerror
//The event occurs when a document, frameset, or <object> has been loaded
//onload
//The event occurs when a document view is resized
//onresize
//The event occurs when a document view is scrolled
//onscroll
//The event occurs once a page has unloaded (for <body> and <frameset>)
//onunload
//
//FORM EVENTS
//
//The event occurs when a form element loses focus
//onblur
//The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
//onchange
//The event occurs when an element gets focus (for <label>, <input>, <select>, textarea>, and <button>)
//onfocus
//The event occurs when a form is reset
//onreset
//The event occurs when a user selects some  text (for <input> and <textarea>)
//onselect
//The event occurs when a form is submitted
//onsubmit
}


//GA onEvent Functions
function ga_event_track_movedOver(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse Movement', 'user moved mouse over' + ' '  + x.toString() ]);
}
function ga_event_track_clickedOn(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse Click', 'user clicked mouse on' + ' '  + x.toString() ]);
}
function ga_event_track_wroteIn(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Key Press', 'user typed in' + ' ' + x.toString() ]);

}
