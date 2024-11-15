function validarFormulario() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Aquí podrías agregar lógica adicional, como verificar formato de correo o enviar datos a un servidor

    return true; // Permite el envío del formulario
}
