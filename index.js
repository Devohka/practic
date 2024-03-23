// 1
// console.log("це працює!!!!!!!!!!!!!!!!!!!!!");

// fetch("http://localhost:3000/goods")
//     .then(response =>
//         response.json()
//     ).then(data =>
//         console.log(data)
//     );


// const listEl = document.querySelector("ul");
// const url = "http://localhost:3000/machinery";

// function fetchUrl(url) {
//     const data = fetch(url);
//     return data;
// };

// fetchUrl(url)
//     .then(data =>
//         data.json()
//     ).then(data =>
//         // console.log(data)
//         createEl(data)
//     );

// function createEl(data) {
//     const listMarkUp = data.map((machinery) => {
//         const listInfo = `<li class="item-user">
//                     <p class="text-user">name: ${machinery.name}</p>
//                     <p class="text-user">price: ${machinery.price}</p>
//                     <p class="text-user">id: ${machinery.id}</p>
//                    </li>`;
//         return listInfo;
//     });
//     return listEl.innerHTML = listMarkUp;
// };


// 2 Пагінація
// const btnEl = document.querySelector("button")
// const listEl = document.querySelector("ul");
// let currentPage = 1;
// const url = `https://jsonplaceholder.typicode.com/posts?_limit=8&_page=${currentPage}`;

// function fetchUrl(url) {
//     const data = fetch(url);
//     return data;
// };
// function getPost() {
//     fetchUrl(url)
//         .then(data =>
//             data.json()
//         ).then(data =>
//             // console.log(data),
//             createEl(data)
//         );
// };
// getPost()

// function loadPost() {
//     getPost()
// };

// function createEl(data) {
//     data.forEach(() => {
//         const listMarkUp = data.map((el) => {
//             const listInfo = `<li class="item-user">
//                         <p class="text-user">name: ${el.userId}</p>
//                         <p class="text-user">price: ${el.id}</p>
//                         <p class="text-user">id: ${el.title}</p>
//                         <p class="text-user">body: ${el.body}}</p>
//                        </li>`;
//             return listInfo;
//         });
//         return listEl.innerHTML = listMarkUp;
//     });
// };

// btnEl.addEventListener("click", () => {
//     currentPage++;
//     loadPost()
// });

// b314da6bfee04616afec980b24e8c3fe