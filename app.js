// using xml
const getToodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            // console.log(request, request.readyState);
            if (request.status === 200 && request.readyState === 4) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("could not fetch data");
            }
        });

        request.open("GET", resource);

        request.send();
    });
};

// promises example

getToodos("todos/first.json")
    .then((data) => {
        console.log("Promise resolved 1", data);
        return getToodos("todoss/second.json");
    })
    .then((data) => {
        console.log("Promise resolved 2", data);
        return getToodos("todos/third.json");
    })
    .then((data) => {
        console.log("Promise resolved 3", data);
    })
    .catch((err) => {
        console.log("error occured");
    });
