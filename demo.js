function handleinput(){


    var val=document.getElementById('mobileNumber').value;


    function getLength(val) {
        if (typeof val === "string" || Array.isArray(val)) {
          return val.length;
        } else if (typeof val === "object" && val !== null) {
          return Object.keys(val).length;
        } else if (typeof val === "number") {
          return val.toString().length;
        } else {
          return 0; // For other types like null, undefined, etc.
        }
      }

      var vallenght= getLength(val);
  console.log( getLength(val));
    var msg1=document.getElementById('message1');
    var msg2=document.getElementById('message2');
    var msg3=document.getElementById('message3');





    if((Number.isNaN(Number(val)))){
        msg3.innerHTML=`<h1> ${val}  invalid  mobile number number its NaN <h>`;
        msg3.classList.remove('green');
        msg3.classList.add('red');
    }
    else{
        msg3.innerHTML=`<h1> ${val}valid  mobile number <h>`;
msg3.classList.remove('red');
msg3.classList.add('green');
    }

    if(   !(val[0]>= 6 &&val[0]<=9)){
        msg1.innerHTML=`<h1> ${val}  invalid  mobile number  number should stat with 6-9<h>`;
               msg1.classList.remove('green');
               msg1.classList.add('red');
    }
    else{

        msg1.innerHTML=`<h1> ${val} valid  mobile number<h>`;
        msg1.classList.remove('red');
        msg1.classList.add('green');
       
    }
 
    if(   !(val[0]>= 6 &&val[0]<=9 && vallenght==10)){
       
        msg2.innerHTML=`<h1> ${val}  invalid  mobile number the lenght is require ==10<h>`;
           msg2.classList.remove('green');
           msg2.classList.add('red');
    }
    else{

        msg2.innerHTML=`<h1> ${val}valid  mobile number<h>`;
        msg2.classList.remove('red');
        msg2.classList.add('green');
       
    }
 



   
// var regex= /^[6-9]\d{9}$/;
// let x = regex.test(val);
//     if( !x){


        
//        msg.innerHTML=`<h1> ${val}invalid  mobile number<h>`;
//        msg.classList.remove('green');
//        msg.classList.add('red');
//     }
//     else{

//        msg.innerHTML=`<h1> ${val}valid  mobile number<h>`;
//        msg.classList.remove('red');
//        msg.classList.add('green');
//     }
}