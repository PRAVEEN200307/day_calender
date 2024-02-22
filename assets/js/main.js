// https://www.tamildailycalendar.com/2024/25022024.jpg

const dayImage = document.querySelector('#dayImage');


const inputEl = document.querySelector('#userData');

inputEl.addEventListener('change', (e) => {
  const value = e.target.value;
  processData(value)
});


function processData(customDate) {

  let date =customDate?new Date(customDate):new Date();
  const result = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  })
  
  const datedetail = result.replaceAll('/', '');
  dayImage.src = `https://www.tamildailycalendar.com/${date.getFullYear()}/${datedetail}.jpg`;

}
processData()