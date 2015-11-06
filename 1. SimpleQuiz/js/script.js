//Set Correct answers
var answers = ['b', 'b', 'd', 'd'];

function submitAnswers()
{
	var score =0;
	var total = 4;

	// Get User Input
	var q1 = document.forms['quizForm']['q1'].value;
	var q2 = document.forms['quizForm']['q2'].value;
	var q3 = document.forms['quizForm']['q3'].value;
	var q4 = document.forms['quizForm']['q4'].value;

	// Validations
	for (i=1; i<=total; i++)
	{
		if(eval('q'+i) == '' || eval('q'+i) == null)
		{
			alert('You missed question '+ i);
			return false;
		}
	}

	//Check Answers
	for (i=1; i<=total; i++){
		if(eval('q' + i) == answers[i-1])
		{
			score++;
		}
	}
	
	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3> You scored <span> ' + score + "</span> out of <span>" + total + "</span></h3>" ;
	results.style.padding = "1px";
	alert("You scored " + score + " out of "+ total);

	// Display 'See Answers' buttons
	var AnsButton = document.getElementsByClassName('AnswersButton');
	var count = AnsButton.length;
	for(i=0; i<count; i++)
	{
		var id = 'q' + (i+1) + 'button';
		var some = AnsButton[i];
		some.innerHTML = '<input id="' +  id + '" type="button" name="button" value="Check Answer" onclick ="checkButton(id)"/>';
	}

	// Showing correct answers
	// var buttons = document.getElementsByName('button');
	// countButton = buttons.length;
	// for(i=0; i< countButton; i++)
	// {
	// 	var correctAns = answers[i];
	// 	buttons[i].onclick = function()
	// 	{
	// 		alert(answers[i]);
	// 	}
	// }

	return false;
}

function checkButton(id)
{
	for(i=0;i<4;i++)
	{
		if (id === 'q' + (i+1) + 'button')
		{
			document.getElementById(id).value = answers[i];
		}
	}

	// if (id === 'q1button')
	// {
	// 	document.getElementById('q1button').value = 'b';
	// }

	// if (id === 'q2button')
	// {
	// 	document.getElementById('q2button').value = 'b';
	// }

	// if (id === 'q3button')
	// {
	// 	document.getElementById('q3button').value = 'd';
	// }

	// if (id === 'q4button')
	// {
	// 	document.getElementById('q4button').value = 'd';
	// }

	
}



