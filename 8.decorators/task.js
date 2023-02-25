function cachingDecoratorNew(func) {
  // Ваш код

  const maxLengthCache = 5;
  let cache = [];
  return (...args) => { 
    const hash = args.join(','); 
    const objectFromCache = cache.find(object => object.hash === hash);
    if(objectFromCache){
      console.log("Из кэша: ", objectFromCache.hash);
      return "Из кэша: " + objectFromCache.value;
    } else {
      let rezult = func(...args);
      cache.push({hash: hash, value: rezult});
      if(cache.length > maxLengthCache) {
        cache.shift();    
      }
      return "Вычисляем: " + rezult;
    }
  }  
}


function debounceDecoratorNew(func) {
  // Ваш код

  let timeoutId = null;
  wrapper.count = 0;
  wrapper.alCount = 0;

  function wrapper(...args){
    wrapper.alCount++;

    if(timeoutId === null){
      wrapper.count++;
      func(...args);
    }

    if(timeoutId){
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);

    return wrapper;
  }
}