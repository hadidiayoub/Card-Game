
function start(){
    window.location.href = "game.html";
}
var old = "";
var n = 0;




var t = [1,3,5,7,9,11,13,15,2,6,10,14,18,22,26,30];
function removeItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
function show(clicked_id){
    
    
    if(clicked_id%2==1){
        document.getElementById(clicked_id).src = "image/pic"+clicked_id+".png";
    }
    else{document.getElementById(clicked_id).src = "image/pic"+clicked_id/2 +".png";}


    n+=1
    
        if(old == ""){
            old = document.getElementById(clicked_id);
            
        
        }else{
            
            var neww = old;
            old=document.getElementById(clicked_id);
        
            if(n==2){
                if(neww.src == old.src){
                 
                    
                    if(clicked_id%2==1)
                        {
                            t=removeItem(t,clicked_id*2/2)
                            t=removeItem(t,clicked_id*2)}
                    else{
                        t=removeItem(t,clicked_id*2/2)
                        t=removeItem(t,clicked_id/2)}
                    old="";
                    
                    n=0;
                }else{

                    for(var i of t){
                        document.getElementById(i).src = "image/common.png";n=0;
                    }}}}
}



function check(){
    for(i=0;i<16;i++){
        if(document.getElementById()){

        }
    }
    
}