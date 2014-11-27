#pragma strict
var romskip1 : Material;
var romskip2 : Material;
var romskip3 : Material;

private var teller : int;
private var charTeller : CharTeller;
charTeller = GameObject.Find("Astronaut").GetComponent(CharTeller);

function Update () {

teller = charTeller.teller;
	if(teller < 2){	
		renderer.material = romskip1;
	}else if (teller > 2 && teller < 4){
		transform.localEulerAngles.x = 90;
		transform.position.y = 34;
		renderer.material = romskip2;
	}else if (teller > 4){
		renderer.material = romskip3;
	}
}