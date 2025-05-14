function limitedInterval(callback, wait, limit){
  const intervalId = setInterval(callback, wait)
  setTimeout(()=>{
    clearInterval(intervalId)
  }, limit)
}

limitedInterval(() => console.log('repeating'), 100, 550);