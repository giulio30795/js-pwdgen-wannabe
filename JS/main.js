//      Password generator:
// - chiedi all’utente il suo nome,
// - poi chiedi il suo cognome,
// - poi chiedi il suo colore preferito
// - infine scrivi sulla pagina i dati ricevuti nel formato: nomecognomecolorepreferito21

const Name = prompt('Qual è il tuo nome?');
const Surname = prompt('Qual è il tuo cognome?');
const Color = prompt('Qual è il tuo colore preferito?');

document.getElementById('password').innerHTML = Name + Surname + Color + '21';