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
//ADD MOUSE EVENTS
//
//The event occurs when the user clicks on an element
GAtags[i].setAttribute("onclick","ga_event_track_onClick(this.id)");
//The event occurs when the user double-clicks on an element
GAtags[i].setAttribute("ondblclick","ga_event_track_dblClick(this.id)");
//The event occurs when a user presses a mouse button over an element
GAtags[i].setAttribute("onmousedown","ga_event_track_mouseDown(this.id)");
//The event occurs when a user releases a mouse button over an element
GAtags[i].setAttribute("onmouseup","ga_event_track_mouseUp(this.id)");
//The event occurs when the pointer is moving while it is over an element
GAtags[i].setAttribute("onmousemove","ga_event_track_mouseMove(this.id)");
//The event occurs when the pointer is moved onto an element
GAtags[i].setAttribute("onmouseover","ga_event_track_mouseOver(this.id)");
//The event occurs when a user moves the mouse pointer out of an element
GAtags[i].setAttribute("onmouseout","ga_event_track_mouseOut(this.id)");
//
//ADD KEYBOARD EVENTS
//
//The event occurs when the user is pressing a key
GAtags[i].setAttribute("onkeydown","ga_event_track_keyDown(this.id)"); 
//The event occurs when the user presses a key
GAtags[i].setAttribute("onkeypress","ga_event_track_keyPress(this.id)"); 
//The event occurs when the user releases a key
GAtags[i].setAttribute("onkeyup","ga_event_track_keyUp(this.id)"); 
//
//ADD FRAME/OBJECT EVENTS
//
//The event occurs when an image is stopped from loading before completely loaded (for <object>)
GAtags[i].setAttribute("onabort","ga_event_track_onAbort(this.id)");
//The event occurs when an image does not load properly (for <object>, <body> and <frameset>)    
GAtags[i].setAttribute("onerror","ga_event_track_onError(this.id)");
//The event occurs when a document, frameset, or <object> has been loaded
GAtags[i].setAttribute("onload","ga_event_track_onLoad(this.id)");
//The event occurs when a document view is resized
GAtags[i].setAttribute("onresize","ga_event_track_onResize(this.id)");
//The event occurs when a document view is scrolled
GAtags[i].setAttribute("onscroll","ga_event_track_onScroll(this.id)");
//The event occurs once a page has unloaded (for <body> and <frameset>)
GAtags[i].setAttribute("onunload","ga_event_track_onUnload(this.id)");
//
//ADD FORM EVENTS
//
//The event occurs when a form element loses focus
GAtags[i].setAttribute("onblur","ga_event_track_onBlur(this.id)");
//The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
GAtags[i].setAttribute("onchange","ga_event_track_onChange(this.id)");
//The event occurs when an element gets focus (for <label>, <input>, <select>, textarea>, and <button>)
GAtags[i].setAttribute("onfocus","ga_event_track_onFocus(this.id)");
//The event occurs when a form is reset
GAtags[i].setAttribute("onreset","ga_event_track_onReset(this.id)");
//The event occurs when a user selects some  text (for <input> and <textarea>)
GAtags[i].setAttribute("onselect","ga_event_track_onSelect(this.id)");
//The event occurs when a form is submitted
GAtags[i].setAttribute("onsubmit","ga_event_track_onSubmit(this.id)");
}


//GA onEvent Functions
//MOUSE BUTTON EVENTS
function ga_event_track_onClick(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user clicked mouse button on' + ' '  + x.toString() ]);
}
function ga_event_track_dblClick(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user double clicked mouse button on' + ' '  + x.toString() ]);
}
function ga_event_track_mouseDown(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user is clicking mouse button down on' + ' '  + x.toString() ]);
}
function ga_event_track_mouseUp(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user is releasing mouse on' + ' '  + x.toString() ]);
}
//MOUSE MOVE EVENTS
function ga_event_track_mouseMove(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user is moving mouse over' + ' '  + x.toString() ]);
}
function ga_event_track_mouseOver(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user moved mouse over' + ' '  + x.toString() ]);
}
function ga_event_track_mouseOut(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Mouse', 'user moved mouse out' + ' '  + x.toString() ]);
}
//KEYBOARD EVENTS
function ga_event_track_keyDown(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Keyboard', 'user is holding a key down' + ' ' + x.toString() ]);
}
function ga_event_track_keyPress(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Keyboard', 'user pressed a key' + ' ' + x.toString() ]);
}
function ga_event_track_keyDown(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Keyboard', 'user released a key' + ' ' + x.toString() ]);
}
//FRAME/OBJECT EVENTS
function ga_event_track_onAbort(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Abort', 'user aborted -->' + ' ' + x.toString() ]);
}
function ga_event_track_onError(x){
_gaq.push(['_trackEvent', 'Error', 'Fail',  'failed -->' + ' ' + x.toString() ]);
}
function ga_event_track_onLoad(x){
_gaq.push(['_trackEvent', 'Frame/Object', 'Load', 'document/object has loaded -->' + ' ' + x.toString() ]);
}
function ga_event_track_onResize(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Resize', 'document/object has resized -->' + ' ' + x.toString() ]);
}
function ga_event_track_onScroll(x){
_gaq.push(['_trackEvent', 'User Interaction', 'Scroll', 'document/object view was scrolled -->' + ' ' + x.toString() ]);
}
function ga_event_track_onUnload(x){
_gaq.push(['_trackEvent', 'Frame/Object', 'Unload', 'document/object was unloaded -->' + ' ' + x.toString() ]);
}
//FORM EVENTS
function ga_event_track_onBlur(x){
_gaq.push(['_trackEvent', 'Form Events', 'Blur', 'Form element lost focus -->' + ' ' + x.toString() ]);
}
function ga_event_track_onChange(x){
_gaq.push(['_trackEvent', 'Form Events', 'Change', 'Form content changed -->' + ' ' + x.toString() ]);
}
function ga_event_track_onFocus(x){
_gaq.push(['_trackEvent', 'Form Events', 'Focus', 'Form element got focus -->' + ' ' + x.toString() ]);
}
function ga_event_track_onReset(x){
_gaq.push(['_trackEvent', 'Form Events', 'Reset', 'Form was reset -->' + ' ' + x.toString() ]);
}
function ga_event_track_onSelect(x){
_gaq.push(['_trackEvent', 'Form Events', 'Select', 'User selected text -->' + ' ' + x.toString() ]);
}
function ga_event_track_onSubmit(x){
_gaq.push(['_trackEvent', 'Form Events', 'Submit', 'User submitted form -->' + ' ' + x.toString() ]);
}
