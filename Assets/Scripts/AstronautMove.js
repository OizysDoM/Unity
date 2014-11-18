#pragma strict

private var move : Animator;
move = GameObject.Find("Astronaut").GetComponent(Animator);

private var player : CharacterMotor;
player = GameObject.Find("First Person Controller").GetComponent(CharacterMotor);


function Update () {
	if (!player.grounded){
		move.SetFloat("Jump", 1);
		
	}else{
		move.SetFloat("Jump", 0);
	}
	if (Input.GetKeyDown("d")){
		move.SetFloat("hSpeed",1);
		move.SetFloat("Jump", 0);
	}
	if (Input.GetKeyUp("d")){
		move.SetFloat("hSpeed",0);
	}
	if (Input.GetKeyDown("a")){
		move.SetFloat("vSpeed",1);
		move.SetFloat("Jump", 0);
	}
	if (Input.GetKeyUp("a")){
		move.SetFloat("vSpeed",0);
	}

}