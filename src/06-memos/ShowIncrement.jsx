import { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
  return (
    <button
        className="btn btn-primary"
        onClick={()=>{
            increment();
        }}
    >
        Incrementar
    </button>
  )
})
 