class Persona {
    constructor({
        titulo = "",
        nombre = "",
        segundoNombre = "",
        apellidos = "",
        direccion = "",
        fechaNacimiento = null
    }) {
        this.titulo = titulo;                 
        this.nombre = nombre;                
        this.segundoNombre = segundoNombre;  
        this.apellidos = apellidos;       
        this.direccion = direccion;
        this.fechaNacimiento = fechaNacimiento;
        this.hospitales = [];
    }
}

module.exports = Persona;
