let enterUser,
  enterPassword,
  validationUserPassword,
  yesNo,
  validationChangePassword,
  newPassword,
  indexUserPassword,
  indexNewPassword;

let savedUser = "mreyes";
let savedPassword = "1234";

for (let i = 1; i < 4; i++) {
  enterUser = prompt("Ingrese usuario: ");
  enterPassword = prompt("Ingrese contraseña: ");
  validationUserPassword = checkUser(enterUser, enterPassword);
  if (validationUserPassword == true) {
    yesNo = prompt(
      "Ingreso autorizado. Por seguridad debe actualizar su contraseña (S/N): "
    );
    break;
  } else {
    alert("Usuario o clave incorrecto.");
    indexUserPassword = i;
  }
}

if (indexUserPassword === 3) {
  alert("INGRESO BLOQUEADO")
} else {
  if (yesNo.toLowerCase() === "s") {
    for (let index = 1; index < 4; index++) {
      enterPassword = prompt("Ingrese contraseña actual: ");
      if (enterPassword === savedPassword) {
        newPassword = prompt("Ingrese nueva contraseña: ");
        changePassword(newPassword);
        break;
      } else {
        alert("Contraseña actual incorrecta.");
      }
    }
  } else {
    alert("BIENVENIDO A LA MATRIX");
  }
}


function checkUser(user, password) {
  if (user === savedUser && password === savedPassword) {
    return true;
  } else {
    return false;
  }
}

function changePassword(password) {
  savedPassword = password;
  alert("Contraseña actualizada.")
}
