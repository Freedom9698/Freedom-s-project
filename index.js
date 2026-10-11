




// 1. გამოცდის შედეგები

////////////////////////////////////////////////////

// შექმენი Array:

// [45, 67, 89, 34, 92, 76, 58, 100]

// for ციკლით:

// 1. იპოვე ქულების ჯამი.

// 2. დაითვალე რამდენმა მიიღო 70-ზე მეტი.

// 3. იპოვე ყველაზე მაღალი ქულა Math.max()-ით.

// 4. იპოვე ყველაზე დაბალი ქულა Math.min()-ით.

// ყველა შედეგი გამოიტანე console-ში.

// let array = [45, 67, 89, 34, 92, 76, 58, 100]
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i]  
// }
// console.log(sum)

// let array = [45, 67, 89, 34, 92, 76, 58, 100]
// for(let i = 0; i < array.length; i++){
//     if(array[i]>70){
//         console.log(array[i])
//     }
// }

// let array = [45, 67, 89, 34, 92, 76, 58, 100]
// let max = Math.max(...array);
// for(let i = 0; i < array.length; i++){
//     console.log(max)
// }

// let array = [45, 67, 89, 34, 92, 76, 58, 100]
//  let max = Math.min(...array);
//  for(let i = 0; i < array.length; i++){
//      console.log(max)
//  }

////////////////////////////////////////////////////

// 2. ბანკის ანგარიში

////////////////////////////////////////////////////

// შექმენი Object:

// let account = {

//   owner: "Lizi",

//   balance: 2500

// }

// prompt()-ით შეიყვანე თანხა.

// prompt()-ით შეიყვანე მოქმედება:

// "deposit" ან "withdraw"

// თუ deposit არის:

// თანხა დაამატე balance-ს.

// თუ withdraw არის:

// შეამოწმე საკმარისია თუ არა balance.

// თუ საკმარისია, გამოაკელი თანხა.

// თუ არა:

// "არასაკმარისი თანხა"

// ბოლოს გამოიტანე დარჩენილი balance.

// let account = {

//    owner: "Lizi",

//    balance: 2500

// }




////////////////////////////////////////////////////

// 3. პროდუქტების ფასდაკლება

////////////////////////////////////////////////////

// შექმენი Array:

// [120, 350, 80, 560, 900, 230]

// for ციკლით თითოეულ ფასზე:

// თუ ფაconsole.log(array[i])სი 500-ზე მეტია,

// დაუკელი 20%.

// სხვა შემთხვევაში დაუკელი 10%.

// შექმენი ახალი Array discountedPrices

// და მასში შეინახე შეცვლილი ფასები.

// ბოლოს გამოიტანე Array.

// let array = [120, 350, 80, 560, 900, 230]
// let discountedPrices = [108, 315, 72, 448, 720, 207]
// for(let i = 0; i < array.length; i++){
//        if(array[i]>500){
//               console.log(discountedPrices[i])
    
// }
// }


    //   if(array[i]<500){
    //       console.log(discountedPrices[i])


////////////////////////////////////////////////////

// 4. სახელების ძებნა

////////////////////////////////////////////////////

// შექმენი Array:

// ["ნიკა", "ანა", "გიორგი", "მარიამი", "ლუკა", "ელენე"]

// prompt()-ით შეიყვანე სახელი.

// for ციკლით მოძებნე სახელი.

// თუ იპოვე:

// გამოიტანე მისი ინდექსი.

// თუ ვერ იპოვე:

// "ასეთი სახელი სიაში არ არის"

// გამოიყენე indexOf().

//  let array = ["nika", "ana", "გიორგი", "მარიამი", "ლუკა", "ელენე"]
//  array = prompt("chawere sheni saxeli")
//      if(array.indexOf("nika", "ana", "გიორგი", "მარიამი", "ლუკა", "ელენე") !==-1){
//          console.log("your name is on the list")
//      }else{
//          console.log("your name is not on the list")
//      }

////////////////////////////////////////////////////

// 5. კალათის ღირებულება

////////////////////////////////////////////////////

// შექმენი:

// let cart = [

//   { name: "პური", price: 3 },

//   { name: "რძე", price: 5 },

//   { name: "ყველი", price: 15 },

//   { name: "შოკოლადი", price: 8 }

// ]

// for ციკლით დაითვალე ყველა პროდუქტის ჯამური ფასი.

// თუ ჯამი 25-ზე მეტია:

// "თქვენ გაქვთ დიდი შეკვეთა"

// სხვა შემთხვევაში:

// "პატარა შეკვეთაა"


////////////////////////////////////////////////////

// 6. რიცხვების სტატისტიკა

////////////////////////////////////////////////////

// შექმენი Array:

// [12, 55, 23, 78, 91, 44, 36, 100, 7]

// for ციკლით:

// 1. დაითვალე ლუწების რაოდენობა.

// 2. დაითვალე კენტების რაოდენობა.

// 3. იპოვე ლუწების ჯამი.

// 4. იპოვე კენტების ჯამი.

// 5. იპოვე მაქსიმუმი.

// 6. იპოვე მინიმუმი.

// შედეგები გამოიტანე console-ში.

////////////////////////////////////////////////////

// 7. სტუდენტების შეფასება

////////////////////////////////////////////////////

// შექმენი:

// let students = [

//   { name: "ანა", grade: 91 },

//   { name: "ნიკა", grade: 64 },

//   { name: "გიორგი", grade: 78 },

//   { name: "მარიამი", grade: 49 },

//   { name: "ლუკა", grade: 85 }

// ]

// for ციკლით:

// თუ grade >= 90:

// "შესანიშნავი"

// თუ grade >= 70:

// "კარგი"

// თუ grade >= 50:

// "დამაკმაყოფილებელი"

// სხვა შემთხვევაში:

// "ჩაჭრილია"

// თითოეულ სტუდენტზე გამოიტანე სახელი და შეფასება.

////////////////////////////////////////////////////

// 8. ATM

////////////////////////////////////////////////////

// შექმენი Object:

// let user = {

//   name: "Nika",

//   pin: "1234",

//   balance: 1500

// }

// prompt()-ით შეიყვანე PIN.

// თუ PIN სწორია:

// prompt()-ით შეაყვანინე თანხა.

// თუ თანხა balance-ზე ნაკლებია ან ტოლია:

// გამოაკელი თანხა.

// სხვა შემთხვევაში:

// "არასაკმარისი თანხა"

// თუ PIN არასწორია:

// "არასწორი PIN"

////////////////////////////////////////////////////

// 9. ფილმების ფილტრაცია

////////////////////////////////////////////////////

// შექმენი:

// let movies = [

//   { name: "Avatar", rating: 8.5 },

//   { name: "Joker", rating: 9.1 },

//   { name: "Titanic", rating: 7.8 },

//   { name: "Inception", rating: 8.8 },

//   { name: "Batman", rating: 6.9 }

// ]

// for ციკლით გამოიტანე მხოლოდ ის ფილმები,

// რომელთა rating 8-ზე მეტია.

// ასევე დაითვალე რამდენი ასეთი ფილმია.

////////////////////////////////////////////////////

// 10. საწყობი

////////////////////////////////////////////////////

// შექმენი:

// let warehouse = [

//   { name: "Laptop", quantity: 5 },

//   { name: "Phone", quantity: 0 },

//   { name: "Mouse", quantity: 12 },

//   { name: "Keyboard", quantity: 3 }

// ]

// for ციკლით შეამოწმე თითოეული პროდუქტი.

// თუ quantity > 0:

// "მარაგშია"

// თუ quantity === 0:

// "ამოიწურა"

// ბოლოს დაითვალე რამდენი პროდუქტია მარაგში.

////////////////////////////////////////////////////

// 11. სამოგზაურო ბიუჯეტი

////////////////////////////////////////////////////

// prompt()-ით შეიყვანე ბიუჯეტი.

// შექმენი:

// let expenses = [

//   300,

//   450,

//   120,

//   250,

//   180

// ]

// for ციკლით იპოვე ხარჯების ჯამი.

// გამოთვალე რამდენი თანხა დარჩა.

// თუ დარჩენილი თანხა 0-ზე მეტია:

// "ბიუჯეტი საკმარისია"

// თუ 0-ზე ნაკლებია:

// "ბიუჯეტი გადაჭარბებულია"

// ასევე გამოიტანე დარჩენილი თანხა.

////////////////////////////////////////////////////

// 12. პაროლის სისტემა

////////////////////////////////////////////////////

// შექმენი:

// let correctPassword = "javascript123";

// მომხმარებელს აქვს 3 მცდელობა.

// for ციკლით 3-ჯერ prompt()-ით შეაყვანინე პაროლი.

// თუ სწორია:

// "წვდომა დაშვებულია"

// და შეწყვიტე ციკლი.

// თუ სამივე მცდელობა არასწორია:

// "ანგარიში დაბლოკილია"

// გამოიყენე for და if.

////////////////////////////////////////////////////

// 13. კალკულატორი Array-ით

////////////////////////////////////////////////////

// prompt()-ით შეიყვანე 5 რიცხვი.

// თითოეული რიცხვი შეინახე Array-ში.

// შემდეგ:

// 1. იპოვე ჯამი.

// 2. იპოვე საშუალო არითმეტიკული.

// 3. იპოვე მაქსიმუმი.

// 4. იპოვე მინიმუმი.

// 5. დაითვალე რამდენია ლუწი.

// ყველა შედეგი გამოიტანე console-ში.

////////////////////////////////////////////////////

// 14. პროდუქტების ძებნა Object-ში

////////////////////////////////////////////////////

// შექმენი:

// let products = [

//   { name: "Laptop", price: 2500 },

//   { name: "Phone", price: 1500 },

//   { name: "Tablet", price: 900 },

//   { name: "Mouse", price: 100 }

// ]

// prompt()-ით შეიყვანე პროდუქტის სახელი.

// for ციკლით მოძებნე პროდუქტი.

// თუ იპოვე:

// გამოიტანე მისი name და price.

// თუ ვერ იპოვე:

// "პროდუქტი ვერ მოიძებნა"

// გამოიყენე boolean ცვლადი found.

////////////////////////////////////////////////////

// 15. ყველაზე ძვირი პროდუქტი

////////////////////////////////////////////////////

// შექმენი:

// let products = [

//   { name: "Laptop", price: 2500 },

//   { name: "Phone", price: 1800 },

//   { name: "TV", price: 3200 },

//   { name: "Mouse", price: 100 },

//   { name: "Keyboard", price: 250 }

// ]

// for ციკლით იპოვე ყველაზე ძვირი პროდუქტი.

// შეინახე მისი სახელი და ფასი ცალკე ცვლადებში.

// არ გამოიყენო Math.max().

// მინიშნება:

// შექმენი maxPrice = 0;

// შემდეგ შეადარე თითოეული პროდუქტის price.

////////////////////////////////////////////////////

// 16. ქულების სისტემა

////////////////////////////////////////////////////

// prompt()-ით შეიყვანე სტუდენტის ქულა.

// შეამოწმე:

// 90-100 → "A"

// 80-89 → "B"

// 70-79 → "C"

// 60-69 → "D"

// 0-59 → "F"

// თუ მომხმარებელმა შეიყვანა 0-ზე ნაკლები

// ან 100-ზე მეტი:

// "არასწორი ქულა"

// გამოიყენე if / else if.

////////////////////////////////////////////////////

// 17. რიცხვების შეცვლა

////////////////////////////////////////////////////

// შექმენი Array:

// [10, 20, 30, 40, 50, 60]

// for ციკლით შექმენი ახალი Array.

// თუ რიცხვი ლუწია:

// გაამრავლე 2-ზე.

// თუ კენტია:

// გაამრავლე 3-ზე.

// მაგალითად:

// [20, 40, 60, 80, 100, 120]

// შედეგი შეინახე ახალ Array-ში.

////////////////////////////////////////////////////

// 18. მომხმარებლების ძებნა

////////////////////////////////////////////////////

// შექმენი:

// let users = [

//   { name: "ანა", age: 17 },

//   { name: "ნიკა", age: 22 },

//   { name: "გიორგი", age: 19 },

//   { name: "მარიამი", age: 16 },

//   { name: "ლუკა", age: 25 }

// ]

// for ციკლით გამოიტანე მხოლოდ სრულწლოვანი მომხმარებლები.

// შემდეგ ცალკე დაითვალე მათი რაოდენობა.

// შედეგი:

// სახელი + ასაკი

////////////////////////////////////////////////////

// 19. ონლაინ მაღაზია

////////////////////////////////////////////////////

// შექმენი Object:

// let shop = {

//   name: "Tech Store",

//   balance: 5000,

//   products: [

//     { name: "Laptop", price: 2500 },

//     { name: "Phone", price: 1400 },

//     { name: "Headphones", price: 300 },

//     { name: "Mouse", price: 100 }

//   ]

// }

// prompt()-ით შეიყვანე პროდუქტის სახელი.

// for ციკლით მოძებნე პროდუქტი.

// თუ პროდუქტი არსებობს:

// შეამოწმე balance.

// თუ balance >= price:

// balance-დან გამოაკელი ფასი.

// გამოიტანე:

// "შეძენა წარმატებულია"

// და ახალი balance.

// თუ თანხა არ არის საკმარისი:

// "არასაკმარისი თანხა"

// თუ პროდუქტი არ არსებობს:

// "პროდუქტი ვერ მოიძებნა"

////////////////////////////////////////////////////

// 20. დიდი საბოლოო დავალება — სტუდენტების მართვის სისტემა

////////////////////////////////////////////////////

// შექმენი Object:

// let academy = {

//   name: "JL Academy",

//   balance: 10000,

//   students: [

//     { name: "ანა", age: 19, grade: 85, paid: 300 },

//     { name: "ნიკა", age: 17, grade: 72, paid: 0 },

//     { name: "გიორგი", age: 22, grade: 94, paid: 300 },

//     { name: "მარიამი", age: 20, grade: 58, paid: 150 },

//     { name: "ლუკა", age: 18, grade: 91, paid: 300 }

//   ]

// }

// for ციკლით შეასრულე:

// 1. დაითვალე სტუდენტების რაოდენობა.

// 2. დაითვალე რამდენი სტუდენტია სრულწლოვანი.

// 3. იპოვე ყველა სტუდენტი,

// რომელსაც grade 80-ზე მეტი აქვს.

// 4. დაითვალე ყველა სტუდენტის გადახდილი თანხის ჯამი.

// 5. იპოვე ყველაზე მაღალი grade.

// 6. იპოვე ყველაზე დაბალი grade.

// 7. იპოვე სტუდენტი,

// რომელსაც ყველაზე მაღალი grade აქვს.

// 8. დაითვალე რამდენ სტუდენტს აქვს paid === 0.

// 9. prompt()-ით შეიყვანე სტუდენტის სახელი.

// მოძებნე სტუდენტი.

// თუ იპოვე:

// გამოიტანე მისი სახელი, ასაკი, grade და paid.

// თუ ვერ იპოვე:

// "სტუდენტი ვერ მოიძებნა"

// 10. ბოლოს გამოიტანე ყველა შედეგი console-ში.



//  const button1 = document.querySelector(".button1");
//  const boxi = document.querySelector(".boxi");
//  button1.addEventListener("click", function(){
//      boxi.innerText = "გამარჯობა!";
//  });

// const button2 = document.querySelector(".button2");
// const boxi2 = document.querySelector(".boxi2");

//   button2.addEventListener("click",()=>{
//     boxi2.classList.add("box3")
//   });

// const button3 = document.querySelector(".button3");
// const box = document.querySelector(".box");

//    button3.addEventListener("click",()=>{
//     box.classList.remove("box")
//    })


// const button4 = document.querySelector(".button4")
// const p1 = document.querySelector(".p1")

//     button4.addEventListener("click",()=>{
//         p1.classList.add("hide")
//     })

// const button5 = document.querySelector(".button5");
// const active = document.querySelector(".active");

//   button5.addEventListener("click",()=>{
//     active.classList.remove("active")
//   })

// const button6 = document.querySelector(".button6");
// const div1 = document.querySelector(".div1");
 
//     button6.addEventListener("click",()=>{
//         div1.innerHTML = "hello world"
// //  })

//  const button7 = document.querySelector(".button7");
//  const box = document.querySelector(".box")

//     button7.addEventListener("click",()=>{
//      box.classList.remove("box")
//    })

//   const button8 = document.querySelector(".button8");
//   const div = document.querySelector("div")

//      button8.addEventListener("click",()=>{
//       div.classList.add("box")
//     })


//   const button7 = document.querySelector(".button7");
//   const h1 = document.querySelector("h1")

//      button7.addEventListener("click",()=>{
//       h1.classList.remove("red")
//     })

//     const button8 = document.querySelector(".button8");
//     const red = document.querySelector(".red")

//        button8.addEventListener("click",()=>{
//           red.classList.add("red")
//       })

// const red = document.querySelector(".red");
// const blue = document.querySelector(".blue");
// const box = document.querySelector(".box");
    
//       red.addEventListener("click",()=>{
//         box.classList.add("red");
//       })


//       blue.addEventListener("click",()=>{
//         box.classList.add("blue");
//       })


// const button10 = document.querySelector(".button10");
// const hidden = document.querySelector(".hidden");

//      button10.addEventListener("click", ()=>{
//         hidden.classList.remove("hidden")
//      })

//  let fruits = ["ვაშლი", "ბანანი", "ატამი"];
//    for(let i = 0; i < 1; i++)
//     console.log(fruits[i])

//  let names = ["Lizi", "Ana", "Nino", "Saba"];
//     for(let i = 0; i < 3; i++)
//      console.log(names[i])


// let names = ["Nika", "Gio", "Luka", "Ana", "Saba"];

// for(let i = 0; i < names.length; i++){
//     alert(names[i])
// }

// let numbers = [2, 4, 6, 8, 10];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// let numbers = [1, 3, 5, 7, 9];
//   for(let i = 0; i <numbers.length; i++)
//     if(numbers[i]>5){
//         console.log(numbers[i])
//     }


// let numbers = [10, 20, 30, 40, 50];
//  for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]>30){
//         console.log(numbers[i])
//     }
//  }


// let fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];
//     for(let i = 0; i<fruits.length; i++){
//         if(fruits[i] === "ატამი"){
//             console.log(fruits[i])
//         }
//     }
        
           
// let names = ["Lizi", "Ana", "Saba"];
//   for(let i = 0; i <  names.length; i++){
//     alert("gamarjoba " + names[i])
//   }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

 
// const button11 = document.querySelector(".button11")
// const div = document.querySelector("div")
//       button11.addEventListener("click",()=>{
//         div.classList.add("box")
//       })

// const button12 = document.querySelector(".button12")
// const div = document.querySelector("div")
//     button12.addEventListener("click", ()=>{
//         div.classList.remove("box")
//     })

// const button13 = document.querySelector(".button13")
// const h1 = document.querySelector("h1")
//         button13.addEventListener("click",()=>{
//             h1.classList.add("red")
//         })

// const button14 = document.querySelector(".button14")
// const div = document.querySelector("div")
//        button14.addEventListener("click",()=>{
//         div.classList.add("circle")
//        })

//   const button15 = document.querySelector(".button15")
//   const p = document.querySelector("p")
//        button15.addEventListener("click",()=>{
//           p.classList.toggle("hide")
//        })


// const button16 = document.querySelector(".button16")
// const body = document.querySelector("body")
//     button16.addEventListener("click",()=>{
//         body.classList.toggle("dark")
//     })

// const button17 = document.querySelector(".button17")
// const img = document.querySelector("img")
//       button17.addEventListener("click",()=>{
//         img.classList.add("border")
//       })


// const button18 = document.querySelector(".button18")
// const button19 = document.querySelector(".button19")
// const div = document.querySelector("div")
//       button18.addEventListener("click",()=>{
//         div.classList.add("red")
//       })
//       button19.addEventListener("click",()=>{
//         div.classList.remove("red")
//       })

// const button20 = document.querySelector(".button20")
// const p = document.querySelector("p")
//        button20.addEventListener("click",()=>{
//         p.classList.toggle("red")
//        })

//  const button21 = document.querySelector(".button21")
//  const button22 = document.querySelector(".button22")
//  const button23 = document.querySelector(".button23")
//  const div = document.querySelector("div")
//        button21.addEventListener("click",()=>{
//          div.classList.add("red")
//        })
//        button22.addEventListener("click",()=>{
//          div.classList.add("black")
//        })
//               button23.addEventListener("click",()=>{
//          div.classList.add("blue")
//        })


// for(let i = 1; i <= 10; i++){
//     console.log([i])
// }


//  for(let i = 10; i >= 1; i--){
//      console.log([i])
//  }

// for(let i = 1; i <= 30; i++ ){
//     if(i %2 === 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 25; i++){
//     if(i %3 === 0){
//         console.log(i)
//     }
// }

// let array = ["nika", "gio", "luka", "lizi", "lasha"]
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// let numbers = [10, 15, 6, 7, 11]
// let sum = 0   
// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i]
// }
// console.log(sum)
 
    

   
//  const btns = document.querySelectorAll(".btn");

//  btns.forEach(function(btn){
//      btn.addEventListener("click",()=>{
//         btn.classList.add("hide")
//      })
//  }) 


 const button = document.querySelectorAll("button")
    
     button.forEach(function(button){
        button.addEventListener("click",()=>{
        button.classList.add("hide")    
        })
        
     })


