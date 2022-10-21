/*Name this external file gallery.js*/

function upDate(previewPic){
 var src = previewPic.getAttribute( "src" );
 //change the url for the background image
 document.getElementById('image').style.backgroundImage = "url('"+ src+"')";
   
   //document.getElementById('image').innerHTML = alt;
  
  //Change the text,to the alt text.
  document.getElementById('image').innerHTML = previewPic.alt;

  
	}

	function unDo(x){
   //Update the url for the background image
   X = document.getElementById('image').style.backgroundImage = "url('')";
   
    //Change the text  of the div
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
     
   
		
	}