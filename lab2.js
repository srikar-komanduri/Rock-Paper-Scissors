var cs=0;
			var us=0;
			function fun(x){
				
				
				var srclist=["rps-r.JPG","rps-p.JPG","rps-s.JPG"]
				var ind=Math.floor((Math.random() * 3));
				var user=x.getAttribute('value');
				document.getElementById("yourselection").src=x.src;
				document.getElementById("versus").src="https://i.ya-webdesign.com/images/vs-png-5.png";
				document.getElementById("computerselection").src=srclist[ind];
				
				cmp=ind+1;

				
				if(user==cmp)	
					document.getElementById("result").innerHTML="Draw";
				

			
				else if(user==1){
					if(cmp==2){
						cs+=1;
						document.getElementById("result").innerHTML="Computer wins";

					}
					
					else{
						document.getElementById("result").innerHTML="You win";
						us+=1;
					}
					
				}

				else if(user==2){
					if(cmp==1){
						document.getElementById("result").innerHTML="You win";
						us+=1;
					}
					else{
						cs+=1;
						document.getElementById("result").innerHTML="Computer wins";
					}



				}
			
				else{
					if(cmp==1){
						cs+=1;
						document.getElementById("result").innerHTML="Computer wins";
					}

					else{
						document.getElementById("result").innerHTML="You win";
						us+=1;

					}
				}

				document.getElementById("uscore").innerHTML=us;
				document.getElementById("cscore").innerHTML=cs;





			}