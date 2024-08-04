let countries = [
  "USA",
  "France",
  "Italy",
  "Brazil",
  "Colombia",
  "Belize",
  "Venezuela",
];

// Your code here

let select = document.querySelector("select");

for (let country of countries) {
  let option = document.createElement("option");
  option.textContent = country;
  select.appendChild(option);
}

// End of your code

select.addEventListener("change", (event) => {
	// Your code here
    let selectedCountry = event.target.value;
    alert(`You selected: ${selectedCountry}`);
});
    // End of your code

