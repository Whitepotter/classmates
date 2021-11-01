var classmatearray=[];
function Submit(){
    var name1= document.getElementById("Classmate1").value;
    var name2= document.getElementById("Classmate2").value;
    var name3= document.getElementById("Classmate3").value;
    var name4= document.getElementById("Classmate4").value;
    classmatearray.push(name1);
    classmatearray.push(name2);
    classmatearray.push(name3);
    classmatearray.push(name4);
    console.log(classmatearray);
    document.getElementById("names").innerHTML=classmatearray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    document.getElementById("setback").style.display="inline-block";
    
}
function Sorting(){
    classmatearray.sort();
    console.log(classmatearray);
    document.getElementById("names").innerHTML=classmatearray;
}
function reset(){
    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
    document.getElementById("setback").style.display="none";
    document.getElementById("Classmate1").value="";
    document.getElementById("Classmate2").value="";
    document.getElementById("Classmate3").value="";
    document.getElementById("Classmate4").value="";
    document.getElementById("names").innerHTML="";
}