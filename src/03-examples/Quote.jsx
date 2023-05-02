import { useLayoutEffect, useRef, useState } from "react";
import { useFetch, useCounter } from "../hooks"


export const Quote = () => {

  const pRef = useRef()

  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const{author, quote} = !!data && data[0];
  
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width})
  
  }, [quote])
  

    
  return (
    <>
        <blockquote 
          className="blockquote text-end"
          style={{display: 'flex'}}
        >
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
