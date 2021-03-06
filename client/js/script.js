
	//JQuery:

		// $(document).ready(function(){
		// 	$('.piece').draggable();
		// 	$('.slot').droppable({
		// 		drop: function(ev, ui) {
  //       			$(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
  //   			}

		// 	});
		// });

		//V2:

		$(document).ready(function(){



			var count = 0;
			var grid = [];

        	for (var i = 0; i < 25; i++) {
				grid.push(0);
			}
			console.log(grid);


			//form JQuery:
			// $("form").dialog({
	 	// 		open: function() {
		 // 			var username = $("#username").val();
		 // 			var age = $("#age").val();
	 	// 		},
	 	// 		buttons: ({
		 // 			text: "Submit",
		 // 			click: $.noop,
		 // 			type: "submit"
 		// 		})
 				// console.log("Hello AGAIN");
 			// });


			//Draggable V1______________


			// $('.piece').draggable({
			// 	revert: "invalid",
   //  			snap: ".slot",
   //  			containment: 'document',
   //  			stack: false,
   //  			obstacle: ".piece",
   //  			preventCollision: true,
   //  			scroll: false,
   //  			// z-index: 1,
   //  			drag: function(ev, ui) {
   //  				console.log($(this).attr('value'));
   //  			}

			// });

			// $('.slot, grid1').droppable({
			// 	accept: ".piece",
			// 	tolerance: 'pointer',
			// 	// z-index: 1,

			// 	drop: function(ev, ui) {
   //      			$(ui.draggable).detach().css({top: -3,left: -3}).appendTo(this);
   //      			// console.log($(this).attr('value'));
   //      			var piece = $(this).attr('value');
   //      			// console.log(piece);
   //      			var slot = ui.draggable.attr('value');

   //      			// console.log(slot);
   //      			if ((slot == piece) && (grid[slot -1] == 0)){
   //      				grid[slot -1] = 1;
   //      				count++;
   //      				console.log(count);
   //      				console.log(grid);
   //      				if (count == 25) {
			// 				alert("YOU WIN!! Your time was: " + (document.getElementById('my_timer').innerHTML) + "!");
			// 				changeState();
			// 				console.log(document.getElementById("my_timer").innerHTML);
			// 			}
   //      			}
   //  			}
   //  		});

   //Droppable V2
   			$('.piece').draggable({

				// revert: "invalid",
				revert: "invalid",
				snap: ".slot",
    			containment: 'document',
    			stack: false,
    			obstacle: ".piece",
    			preventCollision: true,
    			scroll: false,
    			drag: function(ev, ui) {
    				console.log($(this).attr('value'));
    			},
    			stop: function(){
    				$(this).draggable('option','revert','invalid');
    			}

			});


   			$('.slot, grid2').droppable({
				accept: ".piece",
				tolerance: 'intersect',
				stack: false,
				revert: "invalid",


				drop: function(ev, ui) {
        			var $this = $(this);
        			if($this.find('.piece').length >= 1){

            			ui.draggable.draggable('option','revert',true);
            		return;
        			};
        			$(ui.draggable).detach().css({top: -3,left: -3}).appendTo(this);






        			var piece = $(this).attr('value');
        			console.log(piece);
        			var slot = ui.draggable.attr('value');

        			// console.log(slot);
        			if ((slot == piece) && (grid[slot -1] == 0)){
        				grid[slot -1] = 1;
        				count++;
        				console.log(count);
        				console.log(grid);
        				if (count == 25) {
							alert("YOU WIN!! Your time was: " + (document.getElementById('my_timer').innerHTML) + "!");
							changeState();
							console.log(document.getElementById("my_timer").innerHTML);
						}
        			}
        			if ((slot != piece) && (grid[slot -1] == 1)){
        				grid[slot -1] = 0;
        				count--;
        				console.log(count);
        				// console.log(grid);
        			}
        			},
    			out: function(ev, ui){
        			$(this).droppable('option', 'accept', '.piece');
    			}
    		});




			$(".piece").hover(function() {
        		$(this).css(
            		"box-shadow", "3px 3px 3px #00cc66"
        	);
    		}, function() {
        		$(this).css(
	        		"box-shadow", "0px 0px 0px #888"
			    );
			});
			changeState();

		});




		//Timer2:

		var active = false;

		function start_timer() {
			if (active) {
				var timer = document.getElementById("my_timer").innerHTML;
				var arr = timer.split(":");
				var hour = arr[0];
				var min = arr[1];
				var sec = arr[2];

				if (sec == 59) {
					if (min == 59) {
						hour++;
						min = 0;
						if (hour < 10) hour = "0" + hour;
					}
					else {
						min++;
					}
					if (min < 10) min = "0" + min;
					sec = 0;
				}
				else {
					sec++;
					if (sec < 10) sec = "0" + sec;
				}

			document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
			setTimeout(start_timer, 1000);
			}
		}

		function changeState() {
			if (active == false) {
				active = true;
				start_timer();
				console.log("Time has been started");
				// document.getElementById("control").innerHTML = "PAUSE";
			}
			else {
				active = false;
				console.log("Timer is on pause");
				// document.getElementById("control").innerHTML = "START";
			}
		}





	// Creating the 1st Grid (V2):
		var randomizer = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

		//Unleash the SHUFFLER1

		var currentIndex = randomizer.length, temp, randomIndex;
		while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				temp = randomizer[currentIndex];
				randomizer[currentIndex] = randomizer[randomIndex];
				randomizer[randomIndex] = temp;
			}
			console.log(randomizer);

			var grid1 = [];
			grid1.push(randomizer.slice(0,5));
			grid1.push(randomizer.slice(5,10));
			grid1.push(randomizer.slice(10,15));
			grid1.push(randomizer.slice(15,20));
			grid1.push(randomizer.slice(20,25));
			// console.log(grid1);






			//V2
		function renderGrid1() {
			var output = '';
			for (var i = 0; i < grid1.length; i++) {
				console.log(row);
				output += "\n<div class='block1'>\n";
				for(var j = 0; j < grid1[i].length; j++) {
					var col = ((grid1[i][j] - 1) % 5);
					var row = (((grid1[i][j] -1 ) - ((grid1[i][j] -1) % 5)) / 5)
					output += "\n<div class='piece' id='image"+grid1[i][j]+"' value='"+grid1[i][j]+"' style='background-position: " + (col * -90) + "px " + (row * -90) + "px;'></div>\n";
					// console.log(output);
					console.log(col);
				}
				output += "\n</div>";
			}
			// console.log(output);
			document.getElementById('grid1').innerHTML = output;
		}
		renderGrid1();




		//Creating the 2nd Grid:


		var blanks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

		var grid2 = [];
			grid2.push(blanks.slice(0,5));
			grid2.push(blanks.slice(5,10));
			grid2.push(blanks.slice(10,15));
			grid2.push(blanks.slice(15,20));
			grid2.push(blanks.slice(20,25));
			// console.log(grid2);

			function renderGrid2() {
			var output = '';
			for (var i = 0; i < grid2.length; i++) {
				// output += "\n<div class='block2'>\n";
				for(var j = 0; j < grid2[i].length; j++) {
					output += "\n<div class='slot' id='slot"+grid2[i][j]+"' value='"+grid2[i][j]+"'></div>\n";
					// console.log(output);
				}
				output += "\n</div>";
			}
			// console.log(output);
			document.getElementById('grid2').innerHTML = output;
		}
		renderGrid2();

















