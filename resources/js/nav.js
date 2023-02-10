function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const currentTitle = document.title;
  
  window.addEventListener("blur",() =>{
    document.title = "You're away";
  });
  window.addEventListener("focus",() =>{
    document.title = currentTitle;
  });