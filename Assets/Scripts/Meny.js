private var meny : boolean = false;
private var volumeMenu : boolean = false;
private var mainMeny : boolean = true;
var customSkin : GUISkin;
private var teller : int = 5;
private var graphicMenu : boolean = false;

private var timer : Timer;
timer = GameObject.Find("Astronaut").GetComponent(Timer);

private var hSliderValue : float;

private var fpController : CharacterMotor;
fpController = GameObject.Find("First Person Controller").GetComponent(CharacterMotor);

function Start(){
	hSliderValue = AudioListener.volume*100;
}

function OnGUI(){
	if(meny == true){
		GUI.Box (new Rect(0,0,Screen.width, Screen.height), "");
	};
	GUI.skin = customSkin;
	GUI.BeginGroup(Rect(Screen.width/3, Screen.height/5, Screen.width/3, Screen.height/1.5));
	if (meny == true){
		InGameMenu();
	}
	if (graphicMenu == true){
		GraphicMenu();
	};
	if (volumeMenu == true){
		Volume();
	};
	GUI.EndGroup();
}

function Update(){
	if(Input.GetKeyUp(KeyCode.Escape)){
		Pause();
		if (meny == false){
			meny = true;
		} else{
			meny = false;
			mainMeny=true;
			graphicMenu = false;
			volumeMenu = false;
		};
	};
}

function InGameMenu(){
	if(mainMeny == true){

		GUI.Box (new Rect(0, 0, Screen.width/3, Screen.height/1.5), "Menu");
		if (GUI.Button(Rect(0, 100, Screen.width/3, 75), "Restart")) {
			Application.LoadLevel (Application.loadedLevel);
		};
		if (GUI.Button(Rect(0, 175, Screen.width/3, 75), "Graphic")) {
			mainMeny = false;
			graphicMenu = true;
		};
		if (GUI.Button(Rect(0, 250, Screen.width/3, 75), "Volume")) {
			volumeMenu = true;
			mainMeny = false;
		};
		if (GUI.Button(Rect(0, 325, Screen.width/3, 75), "Back to Game")) {
			Pause();
			meny = false;
		};
		if (GUI.Button(Rect(0, 400, Screen.width/3, 75), "Quit")) {
			Application.LoadLevel("Meny");
		};
	};

}

function Volume(){
if(volumeMenu == true){
	GUI.Box (new Rect(0, 0, Screen.width/3, Screen.height/1.5), "Menu");
	hSliderValue = GUI.HorizontalSlider (Rect(0,150,Screen.width/3,20), hSliderValue, 0.0, 100.0);
	GUI.Label(Rect (5, 170, Screen.width/3, 100), "Volume level: " + hSliderValue.ToString("F0"));
	AudioListener.volume = (hSliderValue/100);
	
	if (GUI.Button(Rect(0, 375, Screen.width/3, 75), "Back")) {
		mainMeny = true;
		volumeMenu = false;
	};
};
} 

function GraphicMenu(){
if(graphicMenu== true){
GUI.Box (new Rect(0, 0, Screen.width/3, Screen.height/1.5), "Menu");
	GUI.Label(Rect (0, 150, Screen.width/3, 100), "Graphic level:  " + teller);
	if (GUI.Button(Rect(0, 200, Screen.width/3, 100), "Decrease")) {
		QualitySettings.DecreaseLevel();
		teller --;
	};
	if (GUI.Button(Rect(0, 275, Screen.width/3, 100), "Increase")) {
		QualitySettings.IncreaseLevel();
		teller ++;
	};
	if (teller > 6){
		teller = 6;
	};
	if (teller < 1){
		teller = 1;
	};
		
	if (GUI.Button(Rect(0, 375, Screen.width/3, 75), "Back")) {
		mainMeny = true;
		graphicMenu = false;
	};
};
}

function Pause(){
	if(fpController.enabled == true){
		fpController.enabled = false;
		timer.enabled = false;
	} else {
		fpController.enabled = true;
		timer.enabled = true;
	}
}