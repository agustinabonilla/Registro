document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviar").addEventListener("click", function () {
      const nombre = document.querySelector(".input[name='Nombre']").value;
      const apellido = document.querySelector(".input[name='Apellido']").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
      
      const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
      };
  
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
         
          console.log(data); 
        })
        .catch((error) => {
         
          console.error("Error:", error);
        });
    });
  });
  