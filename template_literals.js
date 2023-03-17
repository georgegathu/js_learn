// Template Literals (``) in JS
let firstName = "Deejay";
let lastName = "Gathu";
let videos = 15;
let subsciber = 5500;

let result = `Youtube channel ${firstName} ${lastName} has ${videos} videos and ${subsciber} subscribers!`;

console.log(result);

//NB: The ``(backticks) helps us concatinate different values with different data types with ease and less confussion

let htmlTemplate = `<h1>${firstName} ${lastName}</h1>
<p>Videos: ${videos}</p>
<p>Subscibers: ${subsciber}</p>`;

console.log(htmlTemplate);
