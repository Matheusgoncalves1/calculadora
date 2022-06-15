var arr = new Array;

function mean(x){
    var sum = 0;
    for (i=0;i<x.length ; i++)
    {
        sum+= x[i];
    }
    var result = sum/x.length;
    return result.toFixed(2);
    
}

// Mediana
function median(x){
if (x.length%2==0){
    return (x[x.length/2]+x[x.length/2-1])/2;
};
    return x[x.length/2-0.5];
}

// Moda
function mode(x){
   var counter = 1;
   var repeated = 1;
   var arrMode=[];
   var elemNumber = 0;
   for (i=1;i<x.length ; i++)
    {
        if (x[i]==x[i-1]){
           counter++;
           if (counter>repeated) {
              repeated = counter;
              elemNumber = 0;
              arrMode = [];
              arrMode[elemNumber] = x[i]
           }
           else{
              if(counter==repeated && counter>1)   {
                 elemNumber++;
                 arrMode[elemNumber] = x[i];
              }
           }
        }
        else{
           counter = 1;
        }
    }
    if (arrMode.length >0){
    
    return "{"+arrMode+"} se repete por "+repeated+" vezes.";
    }
    return "Nenhum número se repete mais de uma vez."
}
function calc(){
    arr = [];       
   error=""; document.getElementById("result").innerHTML="";
    var text = document.getElementById("txtlist").value;
    var counter = 0;
    var stNum = "";
    for (i=0;i<text.length;i++){
        if(text[i] != ','){
            stNum+=text[i];
            if (parseInt(stNum)>=0)
            arr[counter]= parseInt(stNum);
            else
            error = "Desculpe, existe algum problema na sua entrada.";
        }
        else{
        
        if(parseInt(stNum)>=0){
        arr[counter]= parseInt(stNum);
            counter++;
            stNum = "";
        }
        else
        error = "Desculpe, existe algum problema na sua entrada.";
        }
    }
    if(arr.length != 0 && error.length==0){
    arr.sort(function(a, b){return a-b});
    document.getElementById("result").innerHTML = "Ordenando os números: {"+arr+"}"+"<br/>"+"Média = " + mean(arr)+"<br/>Mediana = "+median(arr)+"<br/>Moda = " + mode(arr);
    }
    else
    document.getElementById("result").innerHTML = error;
}