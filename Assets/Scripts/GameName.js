var customSkin : GUISkin;

function OnGUI(){
	GUI.skin = customSkin;
	GUI.Label (Rect(0,5,Screen.width ,Screen.height), "Oizys: Distress on Mars");
}
