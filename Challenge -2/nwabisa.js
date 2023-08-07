  const nwabisa = { 
     firstName: "Nwabisa",
     surName: "Gabe",
     role: "CEO"
  };

  export const role = nwabisa.role;

document.querySelector('#nwabisa').innerText = nwabisa.firstName + " " + nwabisa.surName + " (" + nwabisa.role + ")";