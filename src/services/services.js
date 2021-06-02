export const fetchApi = (data) => {
    return new Promise(function async(resolve, reject) {
        fetch(data.url, data.payload).then((response) => {
            resolve(response)
        }).catch((e) => {
            reject({ type: "network", message:"network error" })
        });
    });
}