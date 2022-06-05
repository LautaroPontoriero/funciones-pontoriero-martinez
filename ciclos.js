debugger

let username = prompt("Ingrese su nombre de usuario")

let age = parseInt(prompt("Ingrese su edad"))

if  (age >= "18"){
     console.log("Bienvenido", username)
     let drink = prompt("Ingresar la bebida deseada")
 while (age >= "18") {

    switch (drink) {
        case "cerveza":
            alert("La cerveza cuesta $400")
            break;
        case "vino":
            alert("El vino cuesta $600")
            break;
        case "fernet":
            alert("No hay stock")
            break;
        default:
            alert("No tenemos eso, escabiá mejor 🙄")
            break;
    }
 }

}else  {
    alert("No puede ingresar, vuelva cuando sea mayor de edad.")
}

