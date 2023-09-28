let numArray = [
  { id: 1, name: "Ammu", nums: 1234567890 },
  { id: 2, name: "Harry", nums: 1234567890 },
  { id: 3, name: "Buji", nums: 1234567890 },
];

let editId = 0;

const nameInputRef = document.getElementById("nameInput");
const numInputRef = document.getElementById("numInput");
const numbersRef = document.getElementById("numbers");
const btnRef = document.getElementById("btn");

const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

const editNum = (id) => {
  editId = id;
  const clickedNum = numArray.find((nums) => nums.id === id);
  btnRef.innerText = "Edit";
  numInputRef.value = clickedNum.nums;
  nameInputRef.value=clickedNum.name;
};

const deleteNum = (id) => {
  numArray = numArray.filter((del) => {
    if (del.id !== id) {
      return del;
    }
  });
  render();
};

const render = () => {
  let numsDiv = "";

  for (let nums of numArray) {
    numsDiv += `<div
  class="d-flex align-items-center justify-content-between p-2 border-bottom border-white"
>
  <div class="fs-5 ">${nums.name}</div>
  <div class="fs-5 ">${nums.nums}</div>
  <div>
  
    <button onclick="editNum(${nums.id})" class="btn btn-outline-success me-3">Edit</button>
    <button onclick="deleteNum(${nums.id})" class="btn btn-outline-danger">Delete</button>
  </div>
</div>`;
  }

  numbersRef.innerHTML = numsDiv;
};

btnRef.addEventListener("click", () => {
  if (nameInputRef.value !== "" && numInputRef.value !== "") {
    if (editId === 0) {
      numArray.push({
        id: getRandomNumber(),
        name: nameInputRef.value,
        nums: numInputRef.value,
      });
      nameInputRef.value = "";
      numInputRef.value = "";
    } else {
      numArray = numArray.map((numss) => {
        if (numss.id == editId)
          return { ...numss, name: nameInputRef.value, nums: numInputRef.value };
        else return numss;
      });
    }
    editId = 0;
    nameInputRef.value="";
    numInputRef.value = "";
    btnRef.innerText = "Add";
    render();
  } else {
    numInputRef.classList.replace("border-primary", "is-invalid");
  }
});

// console.log(nameInputRef);

// nameInputRef.addEventListener("keyup", () => {
//   if (nameInputRef.value !== "") {
//     nameInputRef.classList.replace("is-invalid", "border-primary");
//   } else {
//     nameInputRef.classList.replace("border-primary", "is-invalid");
//   }
// });

// numInputRef.addEventListener("keyup", () => {
//   if (numInputRef.value !== "") {
//     numInputRef.classList.replace("is-invalid", "border-primary");
//   } else {
//     numInputRef.classList.replace("border-primary", "is-invalid");
//   }
// });

render();
