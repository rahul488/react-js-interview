//Array Map
Array.prototype.cMap = function cMap(cb) {
  const arr = [];
  if (typeof cb !== "function") {
    throw Error(`${cb} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
}

//Array Filter
Array.prototype.myFilter = function (cb){
  const arr = [];
  if(typeof cb !== 'function'){
    throw Error(`${cb} is not a function`)
  }
  for(let i=0;i<this.length;i++){
    if(cb(this[i])){
      arr.push(this[i])
    }
  }
  return arr;

}
//Array Find
Array.prototype.myFind = function (cb){
  let res=undefined;
  if(typeof cb !== 'function'){
    throw Error(`${cb} is not a function`)
  }
  for(let i=0;i<this.length;i++){
    if(cb(this[i])){
      res=this[i]
      break;
    }
  }
  return res;
}

//Array Reduce
Array.prototype.myReduce = function (callback,initialValue){
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const array = this;
  const length = array.length;
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < length; i++) {
    if (i in array) {
      accumulator = callback.call(undefined, accumulator, array[i], i, array);
    }
  }

  return accumulator;
}

// console.log([1, 2, 3, 4].cMap((x) => x * 2));
// console.log([1,2,3,4].myFilter((x) => x==2));
//  console.log([1,2,3,4].myFind((x) => x%2 == 0));
//  console.log([1,2,3,4].myReduce(((acc,currVal,currIndx,currArr) => currVal+acc),0));

//promise polyfill

const myPromise = function(excutor){
  let onResolve;
  let onReject;
  let isCalled=false;
  let value;
  let error;
  let isFulfilled;
  let isRejected;

  this.then = function(successHandler){
    onResolve = successHandler;
    if(!isCalled && isFulfilled){
      onResolve(value);
      isCalled=true;
    }
    return this;
  }
  this.catch = function(errorHandler){
    onReject = errorHandler;
    if(!isCalled && isRejected){
      onReject(value);
      isCalled=true;
    }
    return this;
  }
  function resolve(val){
    isFulfilled =true;
    value=val;
    if(typeof onResolve === 'function' && !isCalled){
      onResolve(val);
      isCalled=true;
    }
  }
  function reject(err){
    isRejected = true;
    value=val;
    if(typeof onReject === 'function' && !isCalled){
      onReject(val);
      isCalled=true;
    }
  }
  excutor(resolve,reject);
}

 const res = new myPromise((res,rej) => {
  res(2);
})
res.then((data) => console.log(data))

