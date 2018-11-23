document.addEventListener('DOMContentLoaded', function() {
	var	formHeadingFont = document.querySelector('#font-picker-headings'),
		formHeadingWeight = document.querySelector('#weight-picker-headings'),
		formLabelFont = document.querySelector('#font-picker-labels'),
		formLabelWeight = document.querySelector('#weight-picker-labels'),
		formBodyFont = document.querySelector('#font-picker-body'),
		formBodyWeight = document.querySelector('#weight-picker-body');
	var currentHeadingFont,
		currentHeadingWeight,
		currentLabelFont,
		currentLabelWeight,
		currentBodyFont,
		currentBodyWeight;

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
			currentHeadingFont = document.querySelector('input[name="font-picker-headings"]:checked').value;
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
			currentLabelFont = document.querySelector('input[name="font-picker-labels"]:checked').value;
			document.documentElement.style.setProperty('--font-family-labels', currentLabelFont);
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
			currentBodyFont = document.querySelector('input[name="font-picker-body"]:checked').value;
			document.documentElement.style.setProperty('--font-family-body', currentBodyFont);
		}, 100
		)
	});
});