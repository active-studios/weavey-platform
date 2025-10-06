// let $effect_row = document.querySelectorAll(".responsive-row.stacked ");

// function shuffleArray(array) {
//   for (var i = array.length - 1; i >= 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

// setTimeout(() => {
//   document
//     .querySelectorAll(".responsive-row .responsive-column")
//     .forEach((node) => {
//       // node.classList.remove('selected');

//       // Put a wrapper around the text
//       const h1 = node.querySelector("h1");
//       if (h1) {
//         let words = h1.textContent.split(" ");
//         words = words.map((word) => {
//           let letters = word.split("");
//           letters = letters.map(
//             (letter) => `<span class="aurora effect-inner">${letter}</span>`,
//           );
//           return letters.join("");
//         });
//         words = words.map(
//           (word) => `<span class="aurora__item effect-outer">${word}</span>`,
//         );
//         h1.innerHTML = words.join(" ");
//       }
//     });

//   // $effect_row = document.querySelectorAll('.responsive-row.stacked ')[0];
//   // $effect_columns = $effect_row.querySelectorAll('.responsive-column ');
//   // // $effect_columns[0].classList.add('selected')

//   // setTimeout(() => {

//   //     let delay = 0;
//   //     // Clear previous animation
//   //     setTimeout(() => {
//   //         $effect_leftters = $effect_row.querySelectorAll('.responsive-column .effect-outer');
//   //         $effect_leftters.forEach((node) => {
//   //             node.style.width = node.offsetWidth + 'px';
//   //             node.style.height = node.offsetHeight + 'px';
//   //             // console.log('effect node', node)
//   //             delay = delay + 50;
//   //             node.style.animationDelay = `${delay}ms, ${delay + 50}ms, ${delay + 70}ms, ${delay + 90}ms`;
//   //             node.style.animationPlayState = 'running, running, running, running';
//   //         });

//   //         // Add animation
//   //         delay = 0;
//   //         let $effect_row2 = document.querySelector('.responsive-row');
//   //         $effect_row2.querySelectorAll('.responsive-column')[2].style.display = 'none';
//   //         $effect_row2.querySelectorAll('.responsive-column')[3].style.display = 'none';
//   //         console.log(`$$effect_row2 `, $effect_row2 );
//   //         let $effect_columns2 = $effect_row2.querySelectorAll('.responsive-column')[1];
//   //         console.log(`$effect_columns2`, $effect_columns2);
//   //         // $effect_columns[0].classList.add('next')
//   //         setTimeout(() => {
//   //             $effect_leftters = $effect_columns2.querySelectorAll('.effect-outer');
//   //             console.log(`$     $effect_leftters`,     $effect_leftters, $effect_leftters?.length);
//   //             $effect_leftters.forEach((node) => {
//   //                 node.style.width = node.offsetWidth + 'px';
//   //                 node.style.height = node.offsetHeight + 'px';
//   //                 // console.log('effect node', node)
//   //                 delay = delay + 50;
//   //                 node.style.animation = 'tornadoEnterTop 200ms forwards, tornadoEnterLeft 400ms forwards, tornadoEnterSize 600ms forwards';
//   //                 node.style.animationDelay = `${delay}ms, ${delay + 50}ms, ${delay + 70}ms, ${delay + 90}ms`;
//   //                 node.style.animationPlayState = 'running, running, running, running';
//   //             });
//   //         }, 2000)
//   //     }, 300)

//   // }, 2000)
// }, 1000);
