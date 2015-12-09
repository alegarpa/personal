	var interval = 5000;
	var switching = setInterval("toggleSlide(true)", interval);
	window.paused = false;


	/** HERE WE GO TIME TO MAKE OUT PROGRESS BAR NUKKAS :DDDDDDDDDDDDDDd**/





	/**For the current carosuel **/
	function toggleInterval() {
		var button = document.getElementById("pauseButton");
		if(!window.paused)  {
			clearInterval(switching);
			button.value = "Resume";
		}
		else {
			switching = setInterval("toggleSlide(true)", interval);
			button.value = "Pause";
		}
		window.paused = !(window.paused);
	}

	function toggleSlide(direction) {
		var elements = document.getElementsByClassName("hideable"); //grab all hideble elements
		var visibleID = getVisible(elements); //grab the current id number of the visible item
		elements[visibleID].style.display = "none"; //set it to none
		if(!direction) {
			var makeVisible = prev(visibleID, elements.length);
		}
		else{
			var makeVisible = next(visibleID, elements.length);
		}
		elements[makeVisible].style.display = "block"; //now we picked the next visible object
		var sn = document.getElementById("slideNumber");
		sn.innerHTML = (makeVisible + 1);

	}
	//grab the current visible list item
	function getVisible(elements) {
		var visibleID = -1;
		for(var i = 0; i<elements.length; i++) {
			if(elements[i].style.display == "block") {
				visibleID = i;
			}
		}
		return visibleID;
	}

	function prev(num, arrayLength)  {
		if(num == 0){
			return arrayLength - 1;
		}
		else {
			return num - 1;
		}
	}

	function next(num, arrayLength) {
		if(num == arrayLength - 1) {
			return 0;
		}
		else{
			return num+1;
		}
	}

	function goToEdge(where) {
		var elements = document.getElementsByClassName("hideable");
		var visibleID = getVisible(elements);
		var startButton = document.getElementById("firstButton");
		var lastButton = document.getElementById("lastButton");
		elements[visibleID].style.display = "none";
		if(!where) {
			elements[0].style.display = "block";
			var sn = document.getElementById("slideNumber");
			sn.innerHTML = 1;
		}
		else{
			elements[elements.length-1].style.display = "block";
			var sn = document.getElementById("slideNumber");
			sn.innerHTML = elements.length;
		}
	}


$(document).ready(function() {





	var isMobile = false;
	var moveLeft = 0;
	var moveDown =0;

	$("#mobile_test").hide();
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {isMobile = true; }
	if(isMobile) {
		$("#mobile_test").show();
		$("#mod_butt").removeAttr("data-toggle");
		$("#mod_butt").click(function() {
			$("#hey_there_everyone").show();
		});
	}
	/**this should add an active class**/
	$('ul#progess-list').click(function() {
		$('ul#progess-list li').removeClass("progress-square");
		$('ul#progess-list li').css('background-color', 'none');
		$(this).css('background-color', "#FF9900")
		$(this).addClass('currBlock');
	});

	/**$('li.progress-square currBlock').css("color", "#FFCC00");
	$('li.progress-square currBlock').hover(function(event) {
		$(this).css("color", "#FF9900")
	});

	$('li.progress-square currBlock')**/
	/** HERE WE GO TIME TO MAKE OUT PROGRESS BAR NUKKAS :DDDDDDDDDDDDDDd**/
	$('a.popper').hover(function(e) {
		var target = '#' + ($(this).attr('data-popbox'));
		$(target).show();
		moveLeft = $(this).outerWidth();
		moveDown = ($(target).outerHeight() / 2);
	}, function() {
		var target = '#' + ($(this).attr('data-popbox'));
		if (!($("a.popper").hasClass("show"))) {
        	$(target).hide();
    	}
	});

	/** Currently hovering opens up the same div for all **/
	$('a.popper').mousemove(function (e) {
	 var target = '#' + ($(this).attr('data-popbox'));
	 leftD = e.pageX + parseInt(moveLeft);
   	 maxRight = leftD + $(target).outerWidth();
   	 windowLeft = $(window).width() - 40;
   	 windowRight = 0;
 	 maxLeft = e.pageX - (parseInt(moveLeft) + $(target).outerWidth() + 20);
 	 if (maxRight > windowLeft && maxLeft > windowRight) {
 	 	leftD = maxLeft;
 	 }
   	topD = e.pageY - parseInt(moveDown);
   	maxBottom = parseInt(e.pageY + parseInt(moveDown) + 20);
   	windowBottom = parseInt(parseInt($(document).scrollTop()) + parseInt($(window).height()));
   	maxTop = topD;    	
   	windowTop = parseInt($(document).scrollTop());
    if (maxBottom > windowBottom) {
        topD = windowBottom - $(target).outerHeight() - 20;
    } 
    else if (maxTop < windowTop) {
        	topD = windowTop + 20;
    }

    $(target).css('top', topD).css('left', leftD);
	});


});

