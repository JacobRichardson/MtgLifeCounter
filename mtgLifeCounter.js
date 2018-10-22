var yourLife = 20;
var yourPosion = 0;
var enemyLife = 20;
var enemyPosion = 0;

main();
function main(){
	addListeners();
	$("#YourRollLocation").fadeOut(0);
	$("#EnemyRollLocation").fadeOut(0);
	$("#YourPosionLocation").fadeOut(0);
	$("#EnemyPosionLocation").fadeOut(0);
}

function addListeners(){
	$("#YourLifeAdd").on("click", yourLifeAdd);
	$("#YourLifeMinus").on("click", yourLifeMinus);	
	$("#EnemyLifeAdd").on("click", enemyLifeAdd);
	$("#EnemyLifeMinus").on("click", enemyLifeMinus);
	$("#YourPosionAdd").on("click", yourPosionAdd);
	$("#YourPosionMinus").on("click", yourPosionMinus);	
	$("#EnemyPosionAdd").on("click", enemyPosionAdd);
	$("#EnemyPosionMinus").on("click", enemyPosionMinus);
	$("#reset").on("click", reset);
	$("#rollDice").on("click", rollDice);
	$("#hideDice").on("click", hideDice);
	$("#showPosion").on("click", showPosion);
	$("#hidePosion").on("click", hidePosion);
}

function yourLifeAdd(){
	yourLife++;
	$("#YourLifeCount")[0].textContent = yourLife;
}
function yourLifeMinus(){
	yourLife--;
	$("#YourLifeCount")[0].textContent = yourLife;
}
function enemyLifeAdd(){
	enemyLife++;
	$("#EnemyLifeCount")[0].textContent = enemyLife;
}

function enemyLifeMinus(){
	enemyLife--;
	$("#EnemyLifeCount")[0].textContent = enemyLife;
}

function yourPosionAdd(){
	yourPosion++;
	$("#YourPosionCount")[0].textContent = yourPosion;
}
function yourPosionMinus(){
	yourPosion--;
	$("#YourPosionCount")[0].textContent = yourPosion;
}
function enemyPosionAdd(){
	enemyPosion++;
	$("#EnemyPosionCount")[0].textContent = enemyPosion;
}

function enemyPosionMinus(){
	enemyPosion--;
	$("#EnemyPosionCount")[0].textContent = enemyPosion;
}


function hidePosion(){
	$("#YourPosionLocation").fadeOut(300);
	$("#EnemyPosionLocation").fadeOut(300);
}

function showPosion(){
	$("#YourPosionLocation").fadeIn(200);
	$("#EnemyPosionLocation").fadeIn(200);
}
function hideDice(){
	$("#YourRollLocation").fadeOut(300);
	$("#EnemyRollLocation").fadeOut(300);
}

function rollDice(){
	$("#YourRollLocation").fadeIn(200);
	$("#EnemyRollLocation").fadeIn(200);
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	$("#YourRoll")[0].textContent = d1;
	$("#EnemyRoll")[0].textContent =d2;

}
function reset(){
	yourLife = 20;
	yourPosion = 0;
	enemyLife = 20;
	enemyPosion = 0;
	hideDice();
	hidePosion();
	$("#YourLifeCount")[0].textContent = yourLife;
	$("#EnemyLifeCount")[0].textContent = enemyLife;
	$("#YourPosionCount")[0].textContent = yourPosion;
	$("#EnemyPosionCount")[0].textContent = enemyPosion;
}