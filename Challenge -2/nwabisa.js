  const nwabisa = { 
     firstname: "Nwabisa",
     surname: "Gabe",
     role: "CEO"
  };

  export const role = nwabisa.role;

document.querySelector('#nwabisa').innerText = nwabisa.firstname + " " + nwabisa.surname + " (" + nwabisa.role + ")";