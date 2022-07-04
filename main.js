const form = document.querySelector('#form');


form.addEventListener("submit", function (event){
    event.preventDefault();

    const name = event.target.name.value;
    const age= event.target.age.value;
    const email= event.target.email.value ;
    const password= event.target.password.value;
    const password2=event.target.password2.value ;
    const country=event.target.country.value;
    const terminos= event.target.terminos.checked;
    const gender= event.target.gender.value;
    const coment= event.target.coment.value;
    
const user = [
    {   name: name,
        age: age,
        email: email,
        password:password,
        password2:password2,
        country:country,
        terminos:terminos,
        gender:gender,
        coment:coment
    }]

    const container = document.querySelector(".container")

let html =` <div>
     <h1>Estos son los datos proporcinados</h1 >
     <h3>Nombre: <h4> ${user[0].name}</h4></h3>
   
    <h3>Edad: <h4> ${user[0].age}</h4></h3>
    <h3>email: <h4> ${user[0].email}</h4></h3>
    <h3>Genero: <h4> ${user[0].gender}</h4></h3>
    <h3>Contraseña: <h4> ${user[0].password}</h4></h3>
    <h3>Pais: <h4> ${user[0].country}</h4></h3>
    <h3>terminos aceptados: <h4> Si</h4></h3>
    <h3>Su comentario fue:<h4> ${user[0].coment}</h4></h3>
        </div>`
    
 
        
  
    

    if (name.trim() ==="" ||
     age.trim()=== "" ||
     email.trim()=== "" ||
     age.trim()=== "" ||
   password.trim()=== "" ||
     password2.trim()=== "" ||
     country.trim()=== "" ||
     !terminos||
     gender.trim()=== "" ||
     coment.trim()=== ""        
    ) {  
        return alert("todos los campos son necesarios")
        
    }
    if (password!==password2) {
        return alert("las Contraseña no coinciden")
    }


    container.innerHTML = html;
}


); 


