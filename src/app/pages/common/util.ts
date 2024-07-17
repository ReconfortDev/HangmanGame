// import {Observable} from "rxjs";

// export function createHttpRequest(url:string){
//   return Observable.create(observer => {
//     const controller = new AbortController();
//     const signal = controller.signal;  //If it emits true fetch will be canceled


//     fetch(url, {signal})
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         }
//         else{
//           observer.error('Request failed ' + response.status);
//         }
//       })
//       .then(body => {
//         observer.next(body);
//         observer.complete();
//       })
//       .catch(err => {
//         observer.error(err);
//       });

//     return () => controller.abort()
//   })
// }

