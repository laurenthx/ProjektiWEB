var regexName=/[A-Z]{1}[a-zA-z]/;
var regexAdresa=/[A-Za-z]/;
var regexProdukti=/[a-zA-Z]/;
var regextel=/04\d{7}/;
  
   function funksioni(){
    var name=document.getElementsByTagName('input')[0].value;
    var adresa=document.getElementsByTagName('input')[1].value;
    var produkti=document.getElementsByTagName('input')[2].value;
    var tel=document.getElementsByTagName('input')[3].value;
     
    var kushti1=regexName.test(name);
    var kushti2=regexAdresa.test(adresa);
    var kushti3=regexProdukti.test(produkti);
    var kushti4=regextel.test(tel);
    
    if(name===""||adresa===""||produkti===""||tel===""){
      alert('Ju lutem plotsoni te gjitha fushat!')
   }
    if(kushti1 &&kushti2&& kushti3&& kushti4){
      alert("Porosia eshte ne rregull!");
   }
   else{
       alert('Ju lutem kontrolloni te dhenat tuaja!');
   }
}