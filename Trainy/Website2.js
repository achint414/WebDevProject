//arrow sign of contact page
function cut(){
            document.getElementById("fourth").style.color="white";
                    $(document).ready(function(){
                              $("#fourth").mouseover(function(){
                                $(this).css("color","rgb(150, 149, 149)");
                              });
                              $("#fourth").mouseout(function(){
                                $(this).css("color","white");
                            });
                      });
            var a=document.getElementById("left");
                a.style.width="0%";
                a.style.overflow="hidden";
                a.style.transition="width 0.4s";
                var b=document.getElementsByClassName("small")[0];
                b.style.display="none";
                var c=document.getElementsByClassName("small")[1];
                c.style.display="none";
                var e=document.getElementsByClassName("small")[2];
                e.style.display="none";
                var d=document.getElementsByClassName("small")[3];
                d.style.display="none";
}
//arrow sign scripting ends here
//
//
//
/*this scripting goes for account page*/
var underline=document.getElementById("under");
var logform=document.getElementById("log");
var regform=document.getElementById("reg");
function login(){
    underline.style.transform="translateX(-95px)";
    underline.style.transition="transform 0.6s";
    regform.style.transform="translateX(450px)";
    logform.style.transform="translateX(450px)";
    regform.style.transition="transform 0.7s";
    logform.style.transition="transform 0.7s";
}
function register(){
    underline.style.transform="translateX(0.2px)";
    underline.style.transition="transform 0.6s";
    regform.style.transform="translateX(0px)";
    logform.style.transform="translateX(0px)";
    logform.style.transition="transform 0.7s";
    regform.style.transition="transform 0.7s";
}
/**Validations starts from here for account page */
//
//
//
/**validation for login segment */
function fillinput(id,id2,spanid){
        if(document.getElementById(id).value==""){
            document.getElementById(spanid).innerHTML="*";
            document.getElementById("lbutton").disabled=true;
        }
        else if(document.getElementById(id).value==""||document.getElementById(id2).value==""){
          document.getElementById("lbutton").disabled=true;
        }
        else{
          document.getElementById("lbutton").disabled=false;
          document.getElementById(spanid).innerHTML="";
        }
}
function filledinput(id,id2,spanid){
        if(document.getElementById(id).value!=""&&document.getElementById(id2).value!=""){
            document.getElementById("lbutton").disabled=false;
          }
        document.getElementById(spanid).innerHTML="";
        d
}
//validation for login segment ends here */
//
//
//
// validtaing registration form
function Rfillinput(id,id2,id3,spanid){
        if(document.getElementById(id).value==""){
            document.getElementById(spanid).innerHTML="*";
            document.getElementById("rbutton").disabled=true;
        }
        else if(document.getElementById(id).value==""||document.getElementById(id2).value=="" ||document.getElementById(id3).value=="" ){
          document.getElementById("rbutton").disabled=true;
        }
        else{
          document.getElementById("rbutton").disabled=false;
          document.getElementById(spanid).innerHTML="";
        }
}
function Rfilledinput(id,id2,id3,spanid){
      if(document.getElementById(id).value!=""&&document.getElementById(id2).value!="" &&document.getElementById(id3).value!=""){
          document.getElementById("rbutton").disabled=false;
        }
      document.getElementById(spanid).innerHTML="";
      if(id=='rinput2'){
          $(document).ready(function(){
            $("#pro").show("slow");
          });
      }
}
//ending velidation for registration form/
/**and validation ends here */
//
//
//
//progress bar scripting goes here
$(document).ready(function(){
        $("#rinput1").focus(function(){
         $("#pro").hide("fast");
        }); 
        $("#rinput3").focus(function(){
         $("#pro").hide("fast");
        }); 

/**progress bar styling ends here */
//confirm password scripting 
  $("#rinput3").keyup(function(){
      
          var pass1=document.getElementById("rinput2").value;
          var pass2=document.getElementById("rinput3").value;
          if(pass1!=pass2){
          document.getElementById("rinput3").classList.add("shake");
          document.getElementById("rbutton").disabled=true;
          }
          else{
            document.getElementById("rinput3").classList.remove("shake");
              document.getElementById("rinput3").style.backgroundColor="white";
              if(document.getElementById("rinput1").value!=""&&document.getElementById("rinput2").value!="" &&document.getElementById("rinput3").value!="")
              document.getElementById("rbutton").disabled=false;


          }
     });
//
//
//
// scripting on button on account page
});

var a=true;
function show(eye1,eye2,id){
  document.getElementById(eye1).style.display="none";
  document.getElementById(eye2).style.display="inline-block";
  if(a){
    document.getElementById(id).setAttribute("type","text");
    a=false;
  }
  else{
    document.getElementById(id).setAttribute("type","password");
    a=true;
  }

}
 /**Scripting for account page ends here**/
 /************************************************/
 // none responsiveness
var items=document.getElementById("ul");
items.style.height="0px";
function onLoad(){
    document.getElementById("none").onclick=function(){
     if(items.style.height=="0px"){
         items.style.height="150px";
     }
     else{
         items.style.height="0px";
     }
     return false;
     }
}
//none responsiveness ends here
//
//
//
// media query in javascript for responsiveness
    const mediaQuery=window.matchMedia('(max-width: 1150px)');
    $(document).ready(function(){
      $("#fourth").click(function(){  
            document.getElementById("fourth").style.color="rgb(150, 149, 149)";
            if(mediaQuery.matches){
                      items.style.height="0px";
                      var b=document.getElementById("cut");
                      b.style.display="inline-block";
                      var c=document.getElementById("left");
                      c.style.width="100%";
                      document.getElementById("cut").style.marginLeft="500px";
                      c.style.transition="width 0.4s";
                      var b=document.getElementsByClassName("small")[0];
                          b.style.display="inline-block";
                          var c=document.getElementsByClassName("small")[1];
                          c.style.display="inline-block";
                          var e=document.getElementsByClassName("small")[2];
                          e.style.display="inline-block";
                          var d=document.getElementsByClassName("small")[3];
                          d.style.display="inline-block";  
            }
            else{
                  document.getElementById("fourth").style.color="rgb(150, 149, 149)";
                  items.style.height="0px";
                  var b=document.getElementById("cut");
                  b.style.display="inline-block";
                  var c=document.getElementById("left");
                  c.style.width="40%";
                  document.getElementById("cut").style.marginLeft="330px";
                  c.style.transition="width 0.4s";
                  var b=document.getElementsByClassName("small")[0];
                      b.style.display="inline-block";
                      var c=document.getElementsByClassName("small")[1];
                      c.style.display="inline-block";
                      var e=document.getElementsByClassName("small")[2];
                      e.style.display="inline-block";
                      var d=document.getElementsByClassName("small")[3];
                      d.style.display="inline-block";  
            }
          });
      });
     // end of media query in javascript for responsiveness
//  direction box scripting starts here
$(document).ready(function(){
      $("#order-button").click(function(){
                      if($("#select-city1").val()=="none" || $("#select-city2").val()=="none"){
                                alert("Select Appropriate City");
                      }
                      else if($("#select-city1").val()=="Delhi" && $("#select-city2").val()=="Kolkata"){
                                if(document.getElementById("Tue").checked||document.getElementById("Fri").checked){
                                  document.getElementById("direction").style.display="none";
                                  document.getElementById("booking-ticket-1").style.display="block";
                                }
                                else if(document.getElementById("Mon").checked){
                                  document.getElementById("direction").style.display="none";
                                  document.getElementById("booking-ticket-2").style.display="block";
                                }
                                else if(document.getElementById("Sun").checked||document.getElementById("Wed").checked||document.getElementById("Thu").checked||document.getElementById("Sat").checked){
                                  document.getElementById("direction").style.display="none";
                                  document.getElementById("error-div").style.display="block";
                                }
                                else{
                                  document.getElementById("direction").style.display="none";
                                  document.getElementById("booking-ticket-1").style.display="block";
                                  document.getElementById("booking-ticket-2").style.display="block";
                                }
                      }
                      else if($("#select-city1").val()=="Tamilnadu" && $("#select-city2").val()=="Kolkata"){
                              if(document.getElementById("Wed").checked||document.getElementById("Fri").checked){
                                document.getElementById("direction").style.display="none";
                                document.getElementById("booking-ticket-3").style.display="block";
                              }
                              else if(document.getElementById("Sat").checked){
                                document.getElementById("direction").style.display="none";
                                document.getElementById("booking-ticket-4").style.display="block";
                              }
                              else if(document.getElementById("Sun").checked||document.getElementById("Mon").checked||document.getElementById("Tue").checked||document.getElementById("Thu").checked){
                                document.getElementById("direction").style.display="none";
                                document.getElementById("error-div").style.display="block";
                              }
                              else{
                                document.getElementById("direction").style.display="none";
                                document.getElementById("booking-ticket-3").style.display="block";
                                document.getElementById("booking-ticket-4").style.display="block";
                              }
                      } 
                      else if($("#select-city1").val()== $("#select-city2").val()){
                                alert("Same Cities Are Not Allowed")
                      }  
                      else{
                                document.getElementById("direction").style.display="none";
                                document.getElementById("error-div").style.display="block";
                      }
      });
});   
// direction box scripting ends here