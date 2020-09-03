// Add your code here
function submitData(username, emailAddress){

    const userInfo = {name: username, email: emailAddress}
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
     };
     
     return fetch("http://localhost:3000/users", configObj)
     .then(function(response) {
       return response.json();
     })
     .then(function(object) {
        document.body.innerHTML = object["id"]
     })
     .catch(function(error) {
        document.body.innerHTML = error.message
       console.log(error.message);
     });
}