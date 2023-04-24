
// NavBar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Film Photos
// var textOverImages = document.getElementsByClassName('onClickTextOverImage');
// var previousTextOverImage;
// for (var i = 0; i < textOverImages.length; i++){
 // textOverImages[i].onclick = function(){
 //   var classes = this.classList;
 //   if (classes.contains("show")){
 //     classes.remove("show");
 //   }
 //   else {
 //     if(previousTextOverImage != null)
 //       previousTextOverImage.classList.remove("show");
 //     previousTextOverImage = this;
 //     classes.add("show");
 //   }
 // }
// }
// function stopPropagation(event){
 // event.stopPropagation();
// }