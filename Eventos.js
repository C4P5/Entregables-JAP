document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementsByTagName("div")[0];
  
 div.addEventListener("click", () => {
  Swal.fire({
    title: 'Hola!',
    text: 'Soy el DIV :)',
    icon: 'info',
    confirmButtonText: 'Ok'
  });
});
});