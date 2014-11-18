#pragma strict
private var teller : int;
private var charTeller : CharTeller;
charTeller = GameObject.Find("Astronaut").GetComponent(CharTeller);
private var object = GameObject;


function OnTriggerEnter (collision : Collider){
	Destroy(gameObject);
	teller = charTeller.teller;
	teller ++;
	charTeller.teller = teller;
	

}