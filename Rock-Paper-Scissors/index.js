var note=document.getElementById("notice");
var bod=document.querySelector("body");
var Rock=document.getElementById("rock");
var Paper=document.getElementById("paper");
var Scissor=document.getElementById("scissor");
var score=document.getElementById("sUpdate");
var s=0;
var tries=document.getElementById("tries");
var t=0;
var p_selection;
var click = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3" ) ;
var reset=document.getElementById("reset");
var str =new String("");
var total=document.getElementById("total");
var rsound= new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg");
var pvsc=document.getElementById("anime");

reset.addEventListener("click",function()
{
   s=0;
   t=0;
   str="";
   rsound.play();
   total.textContent="Over all Results: ";
   score.textContent="Score "+s;
   tries.textContent="Total Tries "+t;
   note.textContent="";
})




Rock.addEventListener("click",function()
{  
   t++;
   click.play();
	p_selection=1;
	var c_selection =Math.floor(Math.random() * 3) +1;
	if(p_selection == c_selection)
   {	
	     note.textContent="Oops!!! It's a Tie";
        str=str+"T ";
        Rock.style.color="#ffa200"
        setTimeout(function(){Rock.style.color="white";},1000);
   }
   else if(c_selection==2)
   {
   	 
   	 note.textContent="You lost.PAPER beats ROCK";
       str=str+"L ";
        Rock.style.color="#ff0000"
        setTimeout(function(){Rock.style.color="white";},1000);
   }

   else if(c_selection ==3)
   {
   	note.textContent="You won.ROCK beats SCISSORS";
    s++;
      str=str+"W ";
      Rock.style.color="#00ff04"
      setTimeout(function(){Rock.style.color="white";},1000);
   }

   score.textContent="Score "+s;
   tries.textContent="Total Tries "+t;
   total.textContent= "Over all Results: "+str;
   //total.outerHTML= "<h1>hello</h1>"; // "<i class="fas fa-circle"></i>";
});

Paper.addEventListener("click",function()
{  
   t++;
   click.play();
	p_selection=2;
	var c_selection =Math.floor(Math.random() * 3) +1;
	if(p_selection == c_selection)
   {	
	     note.textContent="Oops!!! It's a Tie";
         Paper.style.color="#ffa200"
        setTimeout(function(){Paper.style.color="white";},1000);
        str=str+"T ";
   }
   else if(c_selection==1)
   {
   	 note.textContent="You won. PAPER beats ROCK";
       Paper.style.color="#00ff04"
      setTimeout(function(){Paper.style.color="white";},1000);
       s++;
       str=str+"W ";
   }

   else if(c_selection ==3)
   {
   	note.textContent="You lost.SCISSORS beat PAPER";
      Paper.style.color="#ff0000"
        setTimeout(function(){Paper.style.color="white";},1000);
    str=str+"L ";
   }
   score.textContent="Score "+s;
   tries.textContent="Total Tries "+t;
   total.textContent= "Over all Results: "+str;
});

Scissor.addEventListener("click",function()
{	
   t++;
   click.play();
	p_selection=3;
	var c_selection =Math.floor(Math.random() * 3) +1;
	if(p_selection == c_selection)
   {	
	note.textContent="Oops!!! It's a Tie";
    Scissor.style.color="#ffa200"
        setTimeout(function(){Scissor.style.color="white";},1000);
  str=str+"T ";
   }
   else if(c_selection==1)
   {
       note.textContent="You lost.ROCK beats SCISSORS";
       Scissor.style.color="#ff0000"
        setTimeout(function(){Scissor.style.color="white";},1000);
     str=str+"L ";
   }

   else if(c_selection ==2)
   {
   	
   	note.textContent="You won. SCISSORS beats PAPER";
      Scissor.style.color="#00ff04"
      setTimeout(function(){Scissor.style.color="white";},1000);
     s++;
      str=str+"W ";
   }
   score.textContent="Score "+s;
   tries.textContent="Total Tries "+t;
   total.textContent="Over all Results: " +str;
});


setInterval(function()
{
var r= Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var bcolor ="rgb(" + r +", " + g +", " + b + ")" ;
bod.style.background=bcolor;
},300000);


