let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] }, 
   { name: "Courses in France", prices: [null, null] }, 
];

//Основные тесты
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350]; 
let requiredRange3 = [200, null];

//Дополнительные тесты для более глубокой проверки
let requiredRange4 = [25, 1000];
let requiredRange5 = [1000, null]; 
let requiredRange6 = [25, 50];
let requiredRange7 = [0, 1];
let requiredRange8 = [0, 50];
let requiredRange9 = [null, 10000];
let requiredRange10 = [1, null];

// Функция сортировки курсов
function sortByPrice(courses, requiredRange) {
   let newArrayCourse = courses.filter(course => {
      const minCoursePrice = course.prices[0];
      const maxCoursePrice = course.prices[1];
      const minRangePrice = requiredRange[0];
      const maxRangePrice = requiredRange[1];
      const minCoursePriceIsNull = minCoursePrice === null;
      const maxCoursePriceIsNull = maxCoursePrice === null;
      if(minRangePrice === null){
         return (minCoursePriceIsNull ? maxCoursePriceIsNull ? Infinity : true : minCoursePrice <= maxRangePrice)
      }else if(maxRangePrice === null){
         return (maxCoursePriceIsNull ? minCoursePriceIsNull ? Infinity : true : maxCoursePrice >= minRangePrice)
      }else if(minRangePrice !== null && maxRangePrice !== null){
         return (minCoursePriceIsNull ? maxCoursePriceIsNull ? Infinity : maxCoursePrice >= minRangePrice : minCoursePrice <= maxRangePrice)
      }
   })
      return newArrayCourse; 
}


// Вызов функции с различными тестами
sortByPrice(courses,requiredRange1)
sortByPrice(courses,requiredRange2)
sortByPrice(courses,requiredRange3)
sortByPrice(courses,requiredRange4)
sortByPrice(courses,requiredRange5)
sortByPrice(courses,requiredRange6)
sortByPrice(courses,requiredRange7)
sortByPrice(courses,requiredRange8)
sortByPrice(courses,requiredRange9)
sortByPrice(courses,requiredRange10)