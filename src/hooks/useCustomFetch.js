import { useState, useEffect } from "react";

function useCustomFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    async function customeFetch(url) {
        try {
            setLoading(true);
            let response = await fetch(url.url, url.payload);
            let rData;
            if (((url.url.split("/")[url.url.split("/").length - 1] === "validate_otp") || (url.url.split("/")[url.url.split("/").length - 1] === "forgot_password")) && response.status === 201) {
                rData = true;
            }
            else {
                rData = await response.json();
            }
            if (response.status === 201 || response.status === 200) {
                setData(rData);
                setError(null);
            }
            else {
                setData(null)
                setError({ rData })
            }
            setLoading(false);
        } catch (e) {
            setError(e);
            setData(null)
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url) {
            customeFetch(url);
        }
    }, [url]);

    return [data, loading, error];
}

export default useCustomFetch;