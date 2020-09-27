function checkloveper(){
    var myName = document.getElementById('myname').value;
    var loveName = document.getElementById('lovename').value;
    
    if (myName == ""){
        alert('enter your name');
    }else if(myName.length <=2){
        alert('plese write 3 letter');
    }else if(!isNaN(myName)){
        alert('only letter');
    }else if(loveName == ""){
        alert('Enter your Name');
    }else if(loveName.length <=2){
        alert('Plese write minimum 3 letter');
    }else if(!isNaN(loveName)){
        alert('Number is not allowed');
    }

    else{
        var loveData = Math.random() * 100;
        loveData = Math.floor(loveData);
        document.getElementById('lovevalue').value = loveData + "%";
    };
}
//     var loveData = Math.random() * 100;
//     loveData = Math.floor(loveData);
//     document.getElementById('lovevalue').value = loveData + "%";
// }
// function checkloveper(){
//     var loveData = Math.random() * 100;
//     loveData = Math.floor(loveData);
//     document.getElementById('lovevalue').value = loveData + "%";
// }