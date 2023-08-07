const Johannes = {
  firstName: "Johannes",
  surName: "Potgieter",
  role: "Intern",
};

export const role = Johannes.role;

document.querySelector("#johannes").innerText = Johannes.firstName + " " + Johannes.surName + " (" + Johannes.role + ")";
