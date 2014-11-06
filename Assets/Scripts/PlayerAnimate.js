#pragma strict
function Start () {

}

function Update () {
	var player = GameObject.Find("First Person Controller").GetComponent(CharacterMotor);
	var AT = gameObject.GetComponent(AnimateTexture);
	if (Input.GetKey("a")){
		AT.rowNumber = 2;
	} else if(Input.GetKey("d")){
		AT.rowNumber = 2;
	} else if(Input.GetKey("w")){
		
	}else{
		AT.rowNumber = 1;
	}
	if (!player.grounded){
		Debug.Log("tst");
		AT.rowNumber = 0;
	}

}