let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let li = document.createElement("li");
	li.innerHTML = "New Item";
	document.querySelector("#myList").appendChild(li);
});
