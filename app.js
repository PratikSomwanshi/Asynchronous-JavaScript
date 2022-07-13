// using xml
const getToodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.status === 200 && request.readyState === 4) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("could not fetch data", undefined);
        }
    });

    request.open("GET", "https://dog.ceo/api/breeds/image/random");

    request.send();
};

console.log(1);
console.log(2);

getToodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);
