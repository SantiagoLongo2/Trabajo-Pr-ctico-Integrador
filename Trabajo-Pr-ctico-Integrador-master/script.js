const usernames = ['martinavargas', 'florenciavivas', 'SantiagoLongo2'];

$(document).ready(function () {
  $.each(usernames, function (index, username) {
    let $userDiv = $("<div class='user-info'></div>");
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        $userDiv.append(`<img id="imagen" src="${data.avatar_url}" alt="">` + "<br/>" + `<p id="nombre">${data.name}</p>` + `<p id="biografia">${data.bio}</p>` + `<p id="ubicacion">${data.location}</p>` + `<a href='${data.html_url}'><button id="contactame" >Contáctame</button></a>`);
        $("#info").append($userDiv)
      },
      error: function () {
        console.error();
      }
    });
  });
});
