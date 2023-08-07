
const Alex = {
    firstName: 'Alex',
    surName: 'Naidoo',
    role: 'Head of Marketing'

};

export const role = Alex.role;

document.querySelector('#alex').innerText = Alex.firstName + " " + Alex.surName + " (" + Alex.role + ")";