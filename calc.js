function keysNumber(a){
    document.getElementById("inp_calc").value+=a;
}
var numberEntered;
var count=0;
var newSign;
function action(a,tiv){
    switch(a) {
          case '+':
          numberEntered+=tiv;
          document.getElementById("inp_calc").value='0';
          return numberEntered;
          break;
          case '-':
          numberEntered-=tiv;
          document.getElementById("inp_calc").value='';
          return numberEntered;
          break;
          case '*':
          numberEntered*=tiv;
          document.getElementById("inp_calc").value='';
          return numberEntered;
          break;
          case '/':
                if(tiv!=0){
          return numberEntered/=tiv;
                }
                else {alert('0 բաժանել չի կարելի')};
          break;      
      //     case 'x2':  
      //     numberEntered*=numberEntered;
      //     document.getElementById("inp_calc").value='';
      //     return numberEntered;
      //     break; 
      //     case 'x3':  
      //     numberEntered=numberEntered*numberEntered*numberEntered;
      //     document.getElementById("inp_calc").value='';
      //     return numberEntered;
      //     break; 
      //     case '%':  
      //     numberEntered=(numberEntered*tiv)/100;
      //     document.getElementById("inp_calc").value='';
      //     return numberEntered;
      //     break;       
          default:
          alert("Մուտքագրեք ճիշտ նշան")
          }
}
function tempResult(sign){
    var tiv = inp_calc.valueAsNumber;
    if(count==0){
          numberEntered=tiv;
          count=1;
          document.getElementById("inp_calc").value='';
          
          newSign=sign;
    }
    else{
          if(sign=='='){
                document.getElementById("result").innerHTML=action(newSign,tiv)
                
          }
          else {
                document.getElementById("result").innerHTML=action(newSign,tiv)
                newSign=sign;
          }
    }
}
function reset(){
    document.getElementById("inp_calc").value='';
    document.getElementById("result").innerHTML='';
}
function delLast(){
    var strng=document.getElementById("inp_calc").value;
    document.getElementById("inp_calc").value=strng.substring(0,strng.length-1)
    }
