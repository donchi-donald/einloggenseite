

function check(){
    var name=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    console.log(name);
    console.log(pass);
    if( name=== "doni" && pass === "1234"){

        document.location.href = "https://donchi-donald.github.io/Donald_CV1/#portfolio";
        
        document.close();
    }else{
        alert("Wrong data");
    }

}
