// objetivo: criar uma única função range(), que saiba trabalhar com diferentes números de parâmetros e 
// gere um array de acordo com os parâmetros passados. O algoritmo deve funcionar em cada cenário

// function range(a, b, c = 1) {
//     const nums = []
//     const n1 = b === undefined ? 1 : a; // condição para o primeiro arrayque começa em 1
//     const n2 = b === undefined ? a : b; // condição para que o 5 do primeiro console, passe  a ser o 
//                                         // valor de b, já que pela condição acima, 1 é o valor de a
//     const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c)
//     for (let i = n1; n1 <= n2 ? i <= n2 : i>= n2; i += step) {
//         nums.push(i)
//     }

//     return nums
// }

// console.log(range(5));           // [1, 2, 3, 4, 5]
// console.log(range(6, 11));       // [6, 7, 8, 9, 10, 11]
// console.log(range(10, 19, 2))    // [10, 12, 14, 16, 18]
// console.log(range(6, 2));        // [6, 5, 4, 3, 2]
// console.log(range(8, -3, 4));    // [8, 4, 0]




// Fiz as funções abaixo, mas queria tentar deixar apenas 1 algoritmo. Sozinha não consegui, então fui acompanhando a vídeo aula para fazer o resultado acima
// 1
//range1(5) [1, 2, 3, 4, 5]
// function range1(a) {
//     const nums1 = []

//     for(let i = 1; i <= 5; i++) {
//         nums1.push(i)
//     }
//     return nums1
// }
// console.log(range1(5));




// 2
// range2(6, 11) [6, 7, 8, 9, 10, 11]
// function range2(b, c) {
//     const nums2 = []

//     for (let i = b; i <= c; i++) {
//         nums2.push(i)
        
//     }
//     return nums2
// }
// console.log(range2(6, 11));




// 3
// range3(10, 19, 2) [10, 12, 14, 16, 18]
// function range3(d, e, f) {
//     const nums3 = []

//     for (let i = d; i <= e; i += f) {
//         nums3.push(i)
//     }

//     return nums3
// }
// console.log(range3(10, 19, 2));




// 4
// range(6, 2) [6, 5, 4, 3, 2]
// function range4(g, h) {
//     const nums4 = []

//     for (let i = g; i >= h; i--) {
//         nums4.push(i)
//     }

//     return nums4
// }
// console.log(range4(6, 2));



//5
// range5(8, -3, 4) [8, 4, 0]
// function range5(j, k, l) {
//     const nums5 = []

//     for (let i = j; i >= k; i -= l) {
//         nums5.push(i)
//     }

//     return nums5
// }
// console.log(range5(8, -3, 4));
