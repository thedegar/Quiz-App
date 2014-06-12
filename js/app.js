//-------------------------------------------
//Tyler Hedegard			6/12/14
//Thinkful.com FEWD Quiz App Project
//-------------------------------------------

//Global variables
var counter = 0;
var answers = [];
for (var i=0;i<5;i++) {
	answers[i] = "new";
}
var questions = [];

//Create logger function
var log = function(log) {
	console.log(log);
};

//reset function will be used to clear all variables and start the quiz again.
var reset = function() {
	$(".diamondDraw").hide();
	$("#five").show();
};

//Create questions and answers
Question = function(question,answer,description,wrong1,wrong2,wrong3) {
	this.question = question;
	this.answer = answer;
	this.description = description;
	this.wrong1 = wrong1;
	this.wrong2 = wrong2;
	this.wrong3 = wrong3;
};

//Create all text for Q&A
var Q1 = new Question("What is a diamond made of?","Carbon","A diamond is carbon in its most concentrated form, the same element that makes up 18% of the weight of the human body.","Hydrogen","Quartz","Boron");
var Q2 = new Question("On the Mohs Hardness scale, diamond holds what value?","10","The diamond sits atop the Mohs Hardness scale with a ranking of 10, meaning it can scratch any mineral and can only be scratched by another diamond.  Its hardness can be attributed to its molecular structure, a lattice in which each carbon atom shares electrons with four other carbon atoms forming a tetrahedral unit.","2","5","9");
var Q3 = new Question("What is true of most diamonds?","They never reach the consumer market because they are too flawed.","This might surprise you, but most diamonds never make it to a local jeweler because they are too flawed.  Those that don’t make the cut are used for industrial purposes, as drill bits and to cut other diamonds.","They are naturally red, but lose their color after polishing.","They are cut using a “cleaving” process.");
var Q4 = new Question('What are “Blood diamonds”?',"Diamonds named for the bloodshed and human rights violations often required to obtain them.","Blood diamonds are named for the blood that is often shed before the diamonds are sold.  Militias force men, women and children in Africa to locate these diamonds.  When the diamonds are sold, the militias use the funds to purchase weapons and prolong their reign of terror.  The UN, the Conflict Free Diamond Council and other groups are working toward better regulation so blood diamonds don’t make it to the market.","Diamonds that are handed down from generation to generation in one family.","A very rare type of red diamond that is one of the most expensive in the world.");
var Q5 = new Question("The largest diamond ever found was called the:","Cullinan","Discovered in 1905 in Transvaal, South Africa.  The Cullinan is the largest diamond ever found weighing a whopping 3106 carats.  The diamond was presented to King Edward VII of England in 1907 and later cut into nine major stones.","Excelsior","The Mogul","Hope");
var questions = [Q1,Q2,Q3,Q4,Q5];

$(document).ready(function() {
	reset();

	//Start/Reset button click handler
	$("#start").on("click", function() {
		log("start clicked");
		log(questions[4].description);
	});

	//Demo button click handler
	$("#demo").on("click", function() {
		log("demo clicked");
	});

});
