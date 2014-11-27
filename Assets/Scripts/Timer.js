#pragma strict
var customSkin : GUISkin;
private var toggleLabel : boolean = true;

var timer : float;

function Update(){
		timer -= Time.deltaTime;
}

function OnGUI(){
	GUI.skin = customSkin;
	GUI.Label(Rect (0, 0, 200, 200), "Your oxygen\nruns out in:\n" + timer.ToString("F0") + "sec");
}