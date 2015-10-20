

//store our image paths in an array
 	var carouselPaths = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"]

//store our likes/dislikes
 	var votes = [];
 
 	var votesIndex = 0;
 // varaible for our currentIndex = 0

 	var currentIndex = 1;

 //what are the events that drive the intersactions?

	//when user clicks on #next button
	$('#next').on('click', function() {
		//update the curretIndex(add 1) or curretIndex++
		currentIndex++;

		//Use jQuery's attr mehod to change the src of #image-to-vote-on to the img at the current position 
		$('#image-to-vote-on').attr('src', 'images/image_' + currentIndex +'.jpg');
		
		//when our currentIndex is at the last item
		if($('#image-to-vote-on').attr('src') === carouselPaths[carouselPaths.length-1]) {
			$('#next').attr('disabled', true);
		}
		
		//disable the next button
		$('#prev').removeAttr('disabled');
	});

	//For previous button
	
	//When user clicks on #prev button
	$('#prev').on('click', function() {

		$('#next').removeAttr('disabled');
		//Update the cureentIndex(sub1)or currentIndex--
		  currentIndex--;
		
		//Use jQuery's attr mehod to change the src of #image-to-vote-on to the img at the current position   
		  $('#image-to-vote-on').attr('src', 'images/image_' + currentIndex +'.jpg');

		  if($('#image-to-vote-on').attr('src') === carouselPaths[0]){
			
				$('#prev').attr('disabled', true);
			}

			//console.log('carouselPathsfirstindex: ', carouselPaths[0]);
			//console.log('image-to-vote-on: ', $('#image-to-vote-on').attr('src'));
	});

// when the user clicks on the thumbs up button
$('#upvote').on('click', function() {

	//console.log('upvote:');
	// add a like at the current position
	$('#votes').html('Likes:' + votesIndex++);


	var likeVotes= votes.push(votesIndex);
	//console.log('varaible x:', x);
	//console.log('votes array:' , votes);
});

	

// when the user clicks on the thumbs down button
$('#downvote').on('click', function() {

	// subtract a like at the current position
	$('#votes').html('Likes:' + votesIndex--);

	var dislikeVotes = votes.pop(votesIndex);

	//console.log(votes);
});
	

 







