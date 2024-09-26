const disp=document.getElementById("display");
function Display(input){
disp.value+=input;
}
function allclear()
{
    disp.value=""
}
function equ(){
    try{
         disp.value=eval(disp.value);
    }
    catch(error){
     disp.value="ERROR";
    }
    
}
function del()
{
    current=disp.value;
    current=current.slice(0,-1);
    disp.value=current;
}