function handleClick1() {
  var x = document.getElementById("socials");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    console.log('Function 1 executed');
  }
}

function handleClick2() {
   var path = document.querySelector("#nuoli path"); 
   if (path.style.fill === "rgb(110, 128, 152)") { path.style.fill = "#FFFFFF"; }
    else { 
      path.style.fill = "#6E8098"; }
       console.log('Function 2 executed'); }

       
       function handleClick3() {
        var x = document.getElementById("socialsButton");
        if (x.style.backgroundColor === "rgb(238, 241, 252)") {
          x.style.backgroundColor = "#6E8098";
        } else {
          x.style.backgroundColor = "rgb(238, 241, 252)";
          console.log('Function 3 executed');
        }
      }













const handleCombinedClick = () => {
  handleClick1();
  handleClick2();
  handleClick3();
  
};

/*function Component() {
  // Function 1
  const handleClick1 = () => {
    console.log('Function 1 executed');
  };
 
  // Function 2
  const handleClick2 = () => {
    console.log('Function 2 executed');
  };
 
  // Combined function that calls both handleClick1 and handleClick2
  const handleCombinedClick = () => {
    handleClick1();
    handleClick2();
  };
 
  return (
    <button onClick={handleCombinedClick}>
      Click me
    </button>
  );}
*/