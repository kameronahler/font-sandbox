document.addEventListener('DOMContentLoaded', function() {
	var	formHeadingFont = document.querySelector('#option-picker-headings'),
		formHeadingWeight = document.querySelector('#weight-headings'),
		formLabelFont = document.querySelector('#option-picker-labels'),
		formLabelWeight = document.querySelector('#weight-labels'),
		formBodyFont = document.querySelector('#option-picker-body'),
		formBodySize = document.querySelector('#size-body'),
		// formBodyScale = document.querySelector('#scale-body'),
		formBodyWeight = document.querySelector('#weight-body');
	var currentHeadingFont,
		currentHeadingWeight,
		currentLabelFont,
		currentLabelWeight,
		currentBodyFont,
		currentBodyWeight,
		// currentBodyScale,
		currentBodySize;

   	// body size
   	formBodySize.addEventListener('change', function(e){
		window.setTimeout(function(){
			currentBodySize = formBodySize.value;
			document.documentElement.style.setProperty('--font-size-body', currentBodySize);
		}, 100
		)
	});

   	// body weight
   	formBodyWeight.addEventListener('change', function(e){
		window.setTimeout(function(){
			currentBodyWeight = formBodyWeight.value;
			document.documentElement.style.setProperty('--font-weight-body', currentBodyWeight);
		}, 100
		)
	});

   	// body font family
   	formBodyFont.addEventListener('click', function(e){
		window.setTimeout(function(){
			currentBodyFont = document.querySelector('input[name="font-body"]:checked').value;
			document.documentElement.style.setProperty('--font-family-body', currentBodyFont);
		}, 100
		)
	});


   	// headings weight
   	formHeadingWeight.addEventListener('change', function(e){
		window.setTimeout(function(){
			currentHeadingWeight = formHeadingWeight.value;
			document.documentElement.style.setProperty('--font-weight-headings', currentHeadingWeight);
		}, 100
		)
	});

   	// headings font family
   	formHeadingFont.addEventListener('click', function(e){
		window.setTimeout(function(){
			currentHeadingFont = document.querySelector('input[name="font-headings"]:checked').value;
			document.documentElement.style.setProperty('--font-family-headings', currentHeadingFont);
		}, 100
		)
	});


   	// labels weight
   	formLabelWeight.addEventListener('change', function(e){
		window.setTimeout(function(){
			currentLabelWeight = formLabelWeight.value;
			document.documentElement.style.setProperty('--font-weight-labels', currentLabelWeight);
		}, 100
		)
	});

   	// labels font family
   	formLabelFont.addEventListener('click', function(e){
		window.setTimeout(function(){
			currentLabelFont = document.querySelector('input[name="font-labels"]:checked').value;
			document.documentElement.style.setProperty('--font-family-labels', currentLabelFont);
		}, 100
		)
	});

});