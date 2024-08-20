document.getElementById("submitForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let password = document.getElementById("password").value;

    document.getElementById('form-data').innerHTML;
    `<h1>Form Data:</h1>
    <p>Name: ${name}</p>
		<p>Email: ${email}</p>
		<p>Password: ${password}</p> `
});