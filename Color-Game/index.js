var colors= [];

for (var i=0;i<6;i++)
{
   colors[i]=generateRandomColors();
}


function pickColor()
{
	 var random= Math.floor(Math.random() * 6);
	 return colors[random];
}


var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var tryAgain = document.getElementById("tryAgain");
var h1 = document.querySelector("h1");



colorDisplay.textContent = pickedColor;
for (var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function()
    {
    	var clickedColor = this.style.background;
    	if (clickedColor === pickedColor)
    	{
    		for (var i=0;i<squares.length;i++)
    		{
    			squares[i].style.background = pickedColor;
    			tryAgain.textContent="You guessed it correct";
    			h1.style.background = pickedColor;
			}
		}
    	else
    	{
    		this.style.background ="white";
    		tryAgain.textContent="Try again";

    	}

    })
	
} 


function generateRandomColors()
{
	var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var randomColor = "rgb(" + r +", " + g +", " + b + ")" ;
return randomColor;
}
