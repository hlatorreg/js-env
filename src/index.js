import {getUsers, deleteUser} from './api/userApi.js';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Borrar</a></td>
            <td>"${user.id}"</td>
            <td>"${user.firstName}"</td>
            <td>"${user.lastName}"</td>
            <td>"${user.email}"</td>
        `
    }, this);

    global.document.getElementById("users").innerHTML = usersBody;

     const deleteLinks = global.document.getElementsByClassName('deleteUser');

     // Se usa array.from en vez de forEach ya que getElementsByClassName retorna un objeto 'array like'
     Array.from(deleteLinks, link => {
         link.onclick = function(event) {
             const element = event.target;
             event.preventDefault();
             deleteUser(element.attributes["data-id"].value);
             const row = element.parentNode.parentNode;
             row.parentNode.removeChild(row);
         }
     });
});