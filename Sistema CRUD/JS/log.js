document.getElementById("log").addEventListener('click', (evento)=>{
    evento.preventDefault();
    let mail = document.getElementById("email");
    let sen = document.getElementById("pass");

    listarUsuarios(mail, sen);
    
});



function listarUsuarios(m, s){
 let db_usuarios = JSON.parse(localStorage.getItem('Meus_dados'));

 let usu = {
     email: '',
     senha: ''
 }
 db_usuarios.forEach(elemento=>{
    if(elemento.email === m.value && elemento.senha === s.value){
        usu = {
            id: elemento.id,
            email: elemento.email,
            senha: elemento.senha
        }
    }
 });
 if(usu.email == m.value && usu.senha == s.value){
    location.href = 'Crud.html'
    saveSession(usu.id);
}else{
    alert("Senha ou Email incorretos!")
    location.href = 'login.html'
 }
}
 function saveSession(data){
    if(saveSession){
        localStorage.setItem("session",data);
    }
    sessionStorage.setItem("logado", JSON.stringify(data));
 }
 
