// new Promise((resolve, reject) => {
//     throw new Error("에러 발생!");
//   })
//     .finally(() => alert("프라미스가 준비되었습니다."))
//     .then(null,
//           err => alert(err));

new Promise((resolve, reject) => {
    throw new Error("에러 발생!");
 })
    .finally(() => alert("프라미스가 준비되었습니다."))
    .catch(err => alert(err));
    

