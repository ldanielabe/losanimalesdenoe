$(document).ready(function() {

    $("#alertSI").hide();
    $("#alertNO").hide();

   $("#miformulario").submit(function(e){
       e.preventDefault();    
       
       if(nomA.length>=0){           
         $("#alertNO").fadeTo(2000, 500).slideUp(500, function() {
             $("#alertNO").slideUp(500);
           });         
       }else{
         $("#alertSI").fadeTo(2000, 500).slideUp(500, function() {
             $("#alertSI").slideUp(500);
           }); 
           document.getElementById("nomD").value = "";
           document.getElementById("email").value = "";
           document.getElementById("cel").value = "";
           document.getElementById("nomA").value = "";
           document.getElementById("raza").value = "";
           document.getElementById("tipo").value = "";
           document.getElementById("edad").value = "";
           document.getElementById("tipoA").value = "";
       }
       });   

    $('#subirImagen').on('click', function() {
        $("#file").click();
       
       });


    $(document).on("change","#file",  function(){
    
        var formData = new FormData($('#miformulario')[0]);
    
        $.ajax({
            type: "POST",
            url: "cargarImag.php",
            data: formData,
            cache:false,
            contentType:false,
            processData:false,

           success: function (msg) {
           
               var img=$("#file")[0].files[0].name;
               var path="img2/"+img;
               var imagen = document.getElementById("subirImagen");
               imagen.style.backgroundImage = "url("+path+")";
               $("#subirImagen").attr("src",path);
           
           },
           error: function () {
            console.log(msg);
           }
       });


        
           
    
    });

});


function registrar(){
    //ERROR var datos
     
      var formData = new FormData($('#miformulario')[0]);
      

          var nomD = $("#nomD").val();
          var email = $("#email").val();
          var cel = $("#cel").val();
          var nomA = $("#nomA").val();
          var raza = $("#raza").val();
          var tipo = $("#tipo").val();
          var edad = $("#edad").val();
          var tipoA = $("#tipoA").val();
          var imagen = $("#imagen").val();
   
          
         

          var dataString = 'nomD=' + nomD + '&email=' + email + '&cel=' + cel+ '&nomA=' + 
          nomA + '&raza=' + raza + '&tipo=' + tipo + '&edad=' + edad  +'&tipoA=' + tipoA + '&imagen=' + imagen;
  
  
         $.ajax({
            type: "POST",
            url: "connect.php",
            data: formData,
            cache:false,
            contentType:false,
            processData:false,

           success: function (msg) {
            console.log(msg);
            if(msg>0){
                var path="img/".msg;
                var imagen = document.getElementById("subirImagen");
                imagen.style.backgroundImage = "url("+path+")";
                $("#subirImagen").attr("src",path);
            }
           },
           error: function () {
            console.log(msg);
           }
       });
}



function cargarImage(){

    let preview = document.getElementById('imagen'),
            image = document.createElement('img');

    image.src = reader.result;

    preview.innerHTML = '';
    preview.append(image);

    document.getElementById('imagen').style.backgroundImage="url('" +  $("#imagen").val(); + "')";
  }

  


