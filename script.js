const usernames = ['martinavargas', 'florenciavivas', 'SantiagoLongo2'];

  $(document).ready(function(){
    $.each(usernames, function(index, username) {
      $.ajax({
        url: `https://api.github.com/users/${username}`,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          $("#info").append("followers: " + data.followers + " Nombre: " + data.name + " Ubicacion: " + data.location +" Imagen: " + `<img src="${data.avatar_url}" alt="">` + "<br/>");
        },
        error: function() {
          console.error();
        }
      });
    });
  });
