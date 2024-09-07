function buttonclick(val){
    console.log(val)
document.getElementById("screen").value=document.getElementById("screen").value+val;
console.log("working")
}
function buttonclear(){
    document.getElementById("screen").value=''
}
function buttonequal(){
    var text=document.getElementById("screen").value
    var site=eval(text)
    document.getElementById("screen").value=site
    
}