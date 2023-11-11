import { useCallback, useState } from "react"

const useToogle = (initialValue=false) => {

  const [toogleValue, setToogleValue] = useState(initialValue)

  const setTrue = useCallback(()=>{setToogleValue(true)},[])
  const setFalse = useCallback(()=>{setToogleValue(false)},[])
  const toogle = useCallback(()=>{setToogleValue(!toogleValue)},[])

  return {
    toogleValue,
    setTrue,
    setFalse,
    toogle
  }
}

export default useToogle