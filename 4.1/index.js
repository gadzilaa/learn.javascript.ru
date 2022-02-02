// let user = {};  

// user.name: "John";
// user.surname: "Smith";
// user.name = "pete";
// delete user.name;


// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }


//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };


//   const result = () => {
//       sum = salaries.John + salaries.Ann + salaries.Pete
//       salaries = {} ? 0 : sum;

//   }




function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}