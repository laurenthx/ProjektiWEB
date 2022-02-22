

var divElements=document.getElementsByClassName('produkti');
		var sliderIndex=0;
		
		document.getElementById('Nbutton').addEventListener('click',function(event){
		
			divElements[sliderIndex].classList.remove('active');
			divElements[sliderIndex].classList.add('not-active');
			
			sliderIndex++;
			if(sliderIndex == divElements.length) sliderIndex=0;
			
			divElements[sliderIndex].classList.add('active');
			divElements[sliderIndex].classList.remove('not-active');
            console.log(sliderIndex);
		})

        document.getElementById('Pbutton').addEventListener('click',function(event){
		
			divElements[sliderIndex].classList.remove('active');
			divElements[sliderIndex].classList.add('not-active');
			
			
            sliderIndex--;
			if(sliderIndex == -1) sliderIndex=2;
			
			divElements[sliderIndex].classList.add('active');
			divElements[sliderIndex].classList.remove('not-active');
            console.log(sliderIndex)
		})