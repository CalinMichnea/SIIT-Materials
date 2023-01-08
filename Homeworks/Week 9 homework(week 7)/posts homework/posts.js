function runWeatherApp() {
  var weatherKey = "3e20f53fb2ef40e28bf95905221510";
  var weatherBaseUrl = "https://api.weatherapi.com/v1";

  var temperatureButtonEl = document.querySelector("#temperature-button");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  var temperatureContainerEl = document.querySelector("#temperature-container");

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherKey + "&q=Cluj-Napoca";
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        var myWeather = weather || {};
        var currentWeather = myWeather.current || {};
        var temperature = currentWeather.temp_c || null;
        if (temperature !== null) {
          temperatureContainerEl.style = null;
          var temperatureEl =
            temperatureContainerEl.querySelector("#temperature");
          temperatureEl.innerHTML = temperature;
        }
      });
  }
}

function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var modalCancelButton = document.querySelector("#cancel");
    var modalUpdateButton = document.querySelector("#updatePost");

    var div = document.createElement("div");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Post";
    var editButton = document.createElement("button");
    editButton.innerText = "Edit Post";

    //delete post function
    deleteButton.onclick = function () {
      fetch(postsBaseUrl + "/posts/" + post.id, {
        method: "DELETE",
      }).then((response) => {
        if (response) {
          div.remove();
        }
        return response;
      });
    };

    //getting values displayed in modal
    editButton.onclick = function () {
      document
        .getElementById("updatePostModal")
        .classList.remove("modalHidden");
      document
        .getElementById("updatePostModal")
        .classList.add("modalDisplayed");
      var inputTitle = (document.getElementById("title").value = post.title);
      var inputBody = (document.getElementById("body").value = post.body);

      //updating posts title/body
      modalUpdateButton.onclick = () => {
        const updatedTitle = document.getElementById("title").value;
        const updatedBody = document.getElementById("body").value;

        fetch(postsBaseUrl + "/posts/" + post.id, {
          method: "PUT",
          body: JSON.stringify({
            title: updatedTitle,
            body: updatedBody,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .then(
            (div.innerHTML =
              "<div class ='post-title'>" +
              "<h2>" +
              updatedTitle +
              "</h2>" +
              "</div><p class ='post-body'>" +
              updatedBody +
              "</p>")
          )
          .then((div.appendChild(deleteButton), div.appendChild(editButton)));
      };
    };

    //cancel button modal display function
    modalCancelButton.onclick = function () {
      document
        .getElementById("updatePostModal")
        .classList.remove("modalDisplayed");
      document.getElementById("updatePostModal").classList.add("modalHidden");
    };

    //post.id
    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>";

    div.appendChild(deleteButton);
    div.appendChild(editButton);

    return div;
  }

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}

var pageInit = function () {
  runWeatherApp();
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});
