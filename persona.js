var contactos = [];
function anadir() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var persona = {
        nombre: nombre,
        edad: edad
    };
    contactos.push(persona);
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
}
function listar() {
    console.log(contactos);
}
