let bd = [];

document.getElementById("cad").addEventListener('click', (event)=>{
event.preventDefault();
let mail = document.getElementById("email").value;
let sen = document.getElementById("pass").value;

let usuario = {
    email: mail,
    senha: sen
}
if(mail != "" && sen != ""){
bd.push(usuario);
localStorage.setItem('Meus_dados', JSON.stringify(bd));
location.href = 'login.html'
}else{
    alert("Digite Senha e Email")
}

})


