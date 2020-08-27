// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const id = object.id
            let body = document.querySelector('body')
            body.innerHTML = id
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            let body = document.querySelector('body');
            body.innerHTML = error.message;
            console.log(error.message);
        });
}