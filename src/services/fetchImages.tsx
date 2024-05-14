import { useEffect, useState } from "react";
import Image from "../types/types";
interface FetchImagesResult {
    images :Image[] | undefined ;
    error: string;
  }
  
  export default function fetchImages(): FetchImagesResult {
    const [images, setList] = useState<Image[]| undefined>();
    const [error, setError] = useState<string>("");
    useEffect(() => {
      fetch(`url`,{
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
          setList(data);
        })
        .catch((error) => {
            setError(error.message);
        });
    }, []);
  
        return ({images, error})
  }