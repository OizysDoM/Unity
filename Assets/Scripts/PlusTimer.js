#pragma strict
private var tid : float = 40;
private var timer : Timer;
timer = GameObject.Find("Astronaut").GetComponent(Timer);


function OnTriggerEnter (collision : Collider){
	timer.timer = timer.timer + tid;
}