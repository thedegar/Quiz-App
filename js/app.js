//-------------------------------------------
//  Tyler Hedegard
//  6/12/14
//  Thinkful.com FEWD Quiz App Project
//-------------------------------------------

//Global variables
var counter = 0;  //to keep track of correct answers
var qCounter = 0; //to keep track of which question you are on
var started = false; //to keep track of when the user has started the game
var questions = []; //empty to fill with questions
var next = false; //to keep track of when the next question button is out

//Create logger function
var log = function(log) {
	console.log(log);
};

//reset function will be used to clear all variables and start the quiz again.
var reset = function() {
	if (started == false) {
		$(".diamondDraw").hide();
		$("#I5").show();
	}
	else {
		$(".diamondDraw").hide();
		$("#I0").show();
		counter=0;
		qCounter=0;
		$(".next").text("Next Question");
		next=false;
	}
};

var start = function() {
	reset();
	started = true;
	//Hide Demo button
	$("#demo").hide();
	//Change button text from Start to Reset
	$("#start").text("Reset");
	//Clear the drawing
	diamond();
	//Set the correct answer counter to zero
	$("#counter").text(counter + " of " + qCounter + " correct answers");
	//Set all History circles
	$("#qNumbers div").removeClass("questionWrong").removeClass("smallDiamond");
	//Start question #1
	qCounter++;
	defineQandA(questions[qCounter-1]); 
};

//Function to set the question and answer text
var defineQandA = function(nextQuestion) {
	$("#QandA .title").text("Question #" + qCounter);
	$("#interface .question").text(nextQuestion.question); //Change the question's text
	$("#interface #A1").text(nextQuestion.wrong1); //set answer 1 to wrong answer text
	$("#interface #A2").text(nextQuestion.wrong2); //set answer 2 to wrong answer text
	$("#interface #A3").text(nextQuestion.answer); //set answer 3 to answer text
	$("#interface #A4").text(nextQuestion.wrong3); //set answer 4 to wrong answer text
	$("#interface .description").remove(); //hide the description
	$("#interface .answer").removeClass("right").removeClass("other").removeClass("wrong"); //clear right from all answers
	$(".next").hide();
};

//Function to take the user guess and compare with answer
var takeAnswer = function(answer,guess) {
	var string = "#Q" + qCounter;
	var value;
	if (guess == answer) {
		$(string).toggleClass("smallDiamond");
		counter++;
		value = "right";
	}
	else {
		$(string).toggleClass("questionWrong");
		value = "wrong";
	}
	$("#counter").text(counter + " of " + qCounter + " correct answers");
	diamond();
	return value;
};

//Function to show the correct diamond based on correct answer count
var diamond = function() {
	var string = "#I" + counter;
	$(".diamondDraw").hide();
	$(string).show();
}

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
var Q3 = new Question("What is true of most diamonds?","They never reach the consumer market because they are too flawed.","This might surprise you, but most diamonds never make it to a local jeweler because they are too flawed.  Those that don’t make the cut are used for industrial purposes, as drill bits and to cut other diamonds.","They are naturally red, but lose their color after polishing.","They are cut using a “cleaving” process.","They were made by Superman crushing coal in his hand.");
var Q4 = new Question('What are “Blood diamonds”?',"Diamonds named for the bloodshed and human rights violations often required to obtain them.","Blood diamonds are named for the blood that is often shed before the diamonds are sold.  Militias force men, women and children in Africa to locate these diamonds.  When the diamonds are sold, the militias use the funds to purchase weapons and prolong their reign of terror.  The UN, the Conflict Free Diamond Council and other groups are working toward better regulation so blood diamonds don’t make it to the market.","Diamonds that are handed down from generation to generation in one family.","A very rare type of red diamond that is one of the most expensive in the world.","Diamonds found at the scene of a crime.");
var Q5 = new Question("The largest diamond ever found was called the:","Cullinan","Discovered in 1905 in Transvaal, South Africa.  The Cullinan is the largest diamond ever found weighing a whopping 3106 carats.  The diamond was presented to King Edward VII of England in 1907 and later cut into nine major stones.","Excelsior","The Mogul","Hope");
var questions = [Q1,Q2,Q3,Q4,Q5];

//---------------------------------
//   JS Activity starts here
//---------------------------------
$(document).ready(function() {
	reset();
});

//Start/Reset button click handler
$(document).on("click","#start",start);

//Answer selection button click handler
$(document).on("click",".answer",function() {
	if (started == true && next == false) {
		var userChoice = $(this).text();
		var rightChoice = questions[qCounter-1].answer;
		value = takeAnswer(rightChoice,userChoice);
		//Change color of correct choice and add description
		if (value == "right") {
			$(this).addClass("right").after('<h2 class="description right"></h2>');
			$(".description").text(questions[qCounter-1].description).show();
		}
		//Change color of wrong choice and add description
		else {
			$(this).addClass("wrong").after('<h2 class="description wrong"></h2>');
			$(".description").text("That is incorrect.").show();
		}
	}

	//Handle the last question differently
	if (qCounter >= 5) {
		$(".next").show().text("All Done");
	}
	else {
		$(".next").show();
	}
	next = true;
});

//Answer selection button click handler
$(document).on("click",".next",function() {
	if (started == true && $(this).text() != "All Done") {
		qCounter++;
		defineQandA(questions[qCounter-1]);
	}
	next = false;
});
