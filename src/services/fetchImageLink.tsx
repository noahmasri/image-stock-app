import { useEffect, useState } from "react";
import Image from "../types/types";
interface FetchImageLinkResult {
    url: string  | undefined;
    error: string;
  }
  
  export default function fetchImages(): FetchImageLinkResult {
    const [url, setUrl] = useState<string| undefined>();
    const [error, setError] = useState<string>("");
    useEffect(() => {
      fetch(`image-id`,{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setUrl(data);
        })
        .catch((error) => {
            setError(error.message);
        });
    }, []);
  
        return ({url, error})
  }