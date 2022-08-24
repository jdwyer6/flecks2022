// const Nightmare = require('nightmare')
// const Actions = require('nightmare-react-utils').Actions

// Nightmare.action(...Actions)

// Nightmare()
//   .goto('https://www.geappliances.com/appliance/GE-Profile-Series-ENERGY-STAR-22-1-Cu-Ft-Counter-Depth-French-Door-Refrigerator-with-Hands-Free-AutoFill-PYE22KELDS')
//   .react.findAll('.price--withoutTax')
//   .then(function(items) {
//     console.log(items.value)
//   })

// async function checkPrice(){
//     const priceString = await Nightmare.goto('https://www.geappliances.com/appliance/GE-Profile-Series-ENERGY-STAR-22-1-Cu-Ft-Counter-Depth-French-Door-Refrigerator-with-Hands-Free-AutoFill-PYE22KELDS')
//         .wait('.price--withoutTax')
//         .evaluate(() => document.querySelector('.price--withoutTax').innerText)
//         .end();

//     console.log(priceString)

//     return priceString
// }

// Nightmare();