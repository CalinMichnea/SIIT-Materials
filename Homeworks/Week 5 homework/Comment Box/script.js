
function getComment() {
    userCom = document.getElementById('userComment').value;
    if (userCom) {
    var newComment = displayComment();
    var commentList = document.querySelector(".commentSection");
    commentList.appendChild(newComment);
    userCom = document.getElementById('userComment').value = "";
  } else {
    alert("Please enter your comment!");
  }
}


function displayComment() {
    var div = document.createElement("div"); 
    div.classList.add("commentElement");
    div.innerHTML = "<img src='avatar.jpg'>" + userCom + "<button onclick ='removeComment(event)'>Remove</button>";
    return div;
 }

function removeComment(event) {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
}