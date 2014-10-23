#pragma strict
var customSkin : GUISkin;
private var toggleLabel : boolean = true;

var teller : int;
teller = 0;

function OnGUI(){
	GUI.skin = customSkin;
	GUI.Label(Rect (0, 0, Screen.width, Screen.height), teller +"/4");
	
		if(teller == 4){
			showLabel();
		};

}

function showLabel(){
	if (toggleLabel){
		GUI.Label(Rect (0, 100, Screen.width, Screen.height/2), "Du har samlet alle delene du trenger!");
		yield WaitForSeconds(5.0);
		toggleLabel = false;

	}
}