let score =0;
var flag=0;
     function check(){
      if(flag==0){
        let botAns=Math.floor(Math.random()*7);
        let userAns=document.getElementById("me").value;
        let bot=document.getElementById("bot");
        
        if(botAns!==parseInt(userAns)){
           bot.value=botAns;
           score+=parseInt(userAns);
           document.getElementById("disp").innerHTML=` ${score}`;
        }
         else{
             flag=1;
             document.getElementById("disp").innerHTML=` ${score}`;
             var element = document.createElement('h1');
             bot.value=botAns;
             element.textContent = "Game Over..!";
             document.body.appendChild(element);
             var btn=document.createElement('button');
             btn.innerHTML = "Replay";
             btn.style.backgroundColor="red";
             btn.onclick = function() {
                       location.reload();
            };
            document.getElementById("G1over").appendChild(btn);
                   }
 }

}
