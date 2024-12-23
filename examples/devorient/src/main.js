window.addEventListener("deviceorientationabsolute", e => {
    document.getElementById("devorient").innerHTML = 
        `Alpha: ${e.alpha}<br />Beta: ${e.beta}<br />Gamma: ${e.gamma}`;
});
