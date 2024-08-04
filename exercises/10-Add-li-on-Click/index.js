let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let li = document.createElement("li");
	li.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(li);
});
