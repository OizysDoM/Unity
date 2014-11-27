var customSkin : GUISkin;
var customSkin2 : GUISkin;
private var main : boolean = true;
private var graphic : boolean = false;
private var volume : boolean = false;
private var credits : boolean = false;
private var displayLabel = false;
private var teller : int = 5;
var async : AsyncOperation;


private var hSliderValue : float;

function OnGUI(){
	GUI.skin = customSkin;
	if (main == true){
		MainMenu();
	};
	if(graphic == true){
		GraphicMenu();
	};
	if(volume == true){
		VolumeMenu();
	}
	if(credits == true){
		CreditsMenu();
	}
}
function GraphicMenu(){
	GUI.Label(Rect(0,0,275,225), "Graphic level: " + teller);
	if (GUI.Button(Rect(0, 100, 275, 50), "Decrease")) {
		QualitySettings.DecreaseLevel();
		teller --;
	};
	if (GUI.Button(Rect(0, 150, 275, 50), "Increase")) {
		QualitySettings.IncreaseLevel();
		teller ++;
	};
	if (teller > 6){
		teller = 6;
	};
	if (teller < 1){
		teller = 1;
	};
		
	if (GUI.Button(Rect(0, Screen.height-75, 150, 75), "Back")) {
		main = true;
		graphic = false;
	};
}

function MainMenu(){
	if(GUI.Button(Rect(0, 75, 350, 75), "Play Game")){
		main = false;
		Application.LoadLevel("Game");
	};
	if(GUI.Button(Rect(0, 150, 250, 75), "Graphic")){
		main = false;
		graphic = true;
	};
	if(GUI.Button(Rect(0, 225, 250, 75), "Volume")){
		main = false;
		volume = true;
	};
	if(GUI.Button(Rect(0, 300, 250, 75), "Credits")){
		main = false;
		credits = true;
	};

	if(GUI.Button(Rect(0, 375, 200, 75), "Quit")){
		Application.Quit();
	};
}

function CreditsMenu(){
	GUI.Box (new Rect(0, 0, Screen.width, Screen.height), "");
	GUI.skin = customSkin2;
	GUI.Label (Rect(0,100,Screen.width ,Screen.height), " Made by\n bla \n blabla \n blablabla \n ©2014");
	
	if (GUI.Button(Rect(0, Screen.height-75, 150, 75), "Back")) {
		main = true;
		credits = false;
		GUI.skin = customSkin;
	};
}

function VolumeMenu(){
	hSliderValue = GUI.HorizontalSlider (Rect(5,150,275,20), hSliderValue, 0.0, 100.0);
	GUI.Label(Rect(0,0,275,135), "Volume level: " + hSliderValue.ToString("F0"));
	AudioListener.volume = (hSliderValue/100);
	
	if (GUI.Button(Rect(0, Screen.height-75, 150, 75), "Back")) {
		main = true;
		volume = false;
	};
} 

function Start () {
	hSliderValue = AudioListener.volume*100;
};

function LoadLevel(){
	async.allowSceneActivation = true;
}
