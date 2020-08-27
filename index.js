// Add your code here





function submitData(username, emailAddress) {
    let userInfo = { name: username, email: emailAddress }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    }
    return fetch('http://localhost:3000/users', configObj)
    .then( function(res){
        return res.json()
    })
    .then(function (obj) {
        console.log(obj)
        document.body.innerHTML = obj["id"]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    })
}