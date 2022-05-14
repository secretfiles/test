function test(){
  let answer = document.getElementById("u");  
  let textbox = document.getElementById("p");
  let button = document.getElementById("button");

  let login = "123";
  let password = "wordpass";
  let entryCount = 0;
  let entryLimit = 3;

button.addEventListener("click", function(){
  if (entryCount < entryLimit) {
    if (textbox.value != password && answer.value != login){
      alert("Wrong password!");
      entryCount++;
      textbox.value = "";
    } else {
      // success!
      entryCount = 0;
      window.location.href = 'https://docs.google.com/document/d/1ve8e09TETaNEE94cZEjRTfYYoX-XkwQHLlYmubJzsK4/edit';
    }
  } else {
      alert("Out of entries");
  }
})
}
