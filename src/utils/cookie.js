


// cette fonction stock un cookie contenant les infos de l'utilisateur
// il expire dans 20min date à laquelle l'utilsateur est déconnecté du serveur
export function setCookie(name, value) {
  sessionStorage.setItem(name, value);
  }
  

// retourner un cookie
export function getCookie(name) {
  const value = sessionStorage.getItem(name);
  return value ? JSON.parse(value) : null;
  }
  

  //supprimer un cookie
export function deleteCookie(name) {
  sessionStorage.removeItem(name);
  window.location.reload();
  }

