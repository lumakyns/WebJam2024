
function fetchy(address, type, rawobject) {

    const myHeaders = new Headers();
    const raw = JSON.stringify(rawobject);
    
    const requestOptions = {
        method: type,
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    
    fetch(address, requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error(error));
}

module.exports = fetchy;