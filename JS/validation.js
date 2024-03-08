try {
 function saveData(studentDetails) {
   localStorage.setItem("studentDetails", JSON.stringify(studentDetails));
 }

 function getsaveData() {
   const storedData = localStorage.getItem("studentDetails");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return null;
  }
 }

 function getStudentDetails() {
   const studentName = document.querySelector("#studentName").value;
   const schoolName = document.querySelector("#schoolName").value;
   const studentLevel = document.querySelector("#studentLevel").value;
   const studentEmail = document.querySelector("#studentEmail").value;
   const phoneNumber = document.querySelector("#phoneNumber").value;
   const parentOrGuardian = document.querySelector("#parentOrGuardian").value;
   const password = document.querySelector("#password").value;
   const confrimPassword = document.querySelector("#confrimPassword").value;
   const nameErrorMessage = document.querySelector("#nameErrorMessage");
   const schoolErrorMessage = document.querySelector("#schoolErrorMessage");
   const gradeErrorMessage = document.querySelector("#gradeErrorMessage");
   const emailErrorMessage = document.querySelector("#emailErrorMessage");
   const phoneNumberErrorMessage = document.querySelector("#phoneNumberErrorMessage");
   const pAndGerrorMessage = document.querySelector("#pAndGerrorMessage");
   const passwordErrorMessage = document.querySelector("#passwordErrorMessage");
   const confrimPsswordErrorMessage = document.querySelector("#confrimPsswordErrorMessage");
   
   if (studentName === "") {
     nameErrorMessage.textContent = "required";
     nameErrorMessage.style.color = "red";
     error = true;
     return;
   } else if (!isNaN(studentName)) {
     nameErrorMessage.textContent = "is invalid";
     nameErrorMessage.style.color = "red";
     error = true;
     return;
   } else if (studentName.length < 3) {
     nameErrorMessage.textContent = "length is small";
     nameErrorMessage.style.color = "red";
     error = true;
     return;
   } else {
     nameErrorMessage.textContent = "";
   }
  if (schoolName === "") {
    schoolErrorMessage.textContent = "required";
    schoolErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (!isNaN(schoolName)) {
    schoolErrorMessage.textContent = "is invalid";
    schoolErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (schoolName.length < 3) {
    schoolErrorMessage.textContent = "length is small";
    schoolErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    schoolErrorMessage.textContent = "";
  }
  if (studentLevel === "") {
    gradeErrorMessage.textContent = "required";
    gradeErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (isNaN(studentLevel)) {
    gradeErrorMessage.textContent = "is invalid";
    gradeErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (studentLevel.length > 1) {
    gradeErrorMessage.textContent = "Grade is invalid";
    gradeErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    gradeErrorMessage.textContent = "";
  }
  if (studentEmail === "") {
    emailErrorMessage.textContent = "required";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (!isNaN(studentEmail)) {
    emailErrorMessage.textContent = "is invalid";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (studentEmail.indexOf("@") == -1) {
    emailErrorMessage.textContent = "@ reqiured";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  }  if (studentEmail.indexOf("@") <= 0) {
    emailErrorMessage.textContent = "Invalid position of @ symbol";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  }
  if (studentEmail.indexOf(".") <= -1) {
    emailErrorMessage.textContent = "Invalid format";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (
    studentEmail.indexOf(".") - studentEmail.indexOf("@") < 2 ||
    studentEmail.indexOf(".") > studentEmail.length - 3
  ) {
    emailErrorMessage.textContent = "Invalid format";
    emailErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    emailErrorMessage.textContent = "";
  }
  if (phoneNumber === "") {
    phoneNumberErrorMessage.textContent = "required";
    phoneNumberErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (isNaN(phoneNumber)) {
    phoneNumberErrorMessage.textContent = "is invalid";
    phoneNumberErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (phoneNumber.length < 7 || phoneNumber.length > 14) {
    phoneNumberErrorMessage.textContent = "Invalid length";
    phoneNumberErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    phoneNumberErrorMessage.textContent = "";
  }
  if (parentOrGuardian === "") {
    pAndGerrorMessage.textContent = "required";
    pAndGerrorMessage.style.color = "red";
    error = true;
    return;
  } else if (isNaN(parentOrGuardian)) {
    pAndGerrorMessage.textContent = "is invalid";
    pAndGerrorMessage.style.color = "red";
    error = true;
    return;
  } else if (parentOrGuardian.length < 7 || parentOrGuardian.length > 14) {
    pAndGerrorMessage.textContent = "Invalid length";
    pAndGerrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    pAndGerrorMessage.textContent = "";
  }
  if (password === "") {
    passwordErrorMessage.textContent = "required";
    passwordErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (password.length < 8 || parentOrGuardian.length > 14) {
    passwordErrorMessage.textContent = "Invalid length";
    passwordErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    passwordErrorMessage.textContent = "";
  }
  if (confrimPassword === "") {
    confrimPsswordErrorMessage.textContent = "required";
    confrimPsswordErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (confrimPassword.length !== password.length) {
    confrimPsswordErrorMessage.textContent = "Does not match";
    confrimPsswordErrorMessage.style.color = "red";
    error = true;
    return;
  } else if (confrimPassword !== password) {
    confrimPsswordErrorMessage.textContent = "Does not match";
    confrimPsswordErrorMessage.style.color = "red";
    error = true;
    return;
  } else {
    confrimPsswordErrorMessage.textContent = "";
  }


   if (
     studentName &&
     schoolName &&
     studentLevel &&
     studentEmail &&
     phoneNumber &&
     parentOrGuardian &&
     password &&
     confrimPassword
   ) {
     const studentDetails = {
       studentName: studentName,
       schoolName: schoolName,
       studentLevel: studentLevel,
       studentEmail: studentEmail,
       phoneNumber: phoneNumber,
       parentOrGuardian: parentOrGuardian,
       password: password,
       confrimPassword: confrimPassword,
     };
     saveData(studentDetails);
     window.location.href = "loginPage.html";
   } else {
     throw new Error(alert("please make sure to fill all fields"));
   }
 }

 function login() {
   const studentLoginEmail = document.querySelector("#studentEmail").value;
   const studentLoginpassword = document.querySelector("#password").value;
   const slidindWords = document.querySelector("#slidindWords");
     if (studentLoginEmail === "") {
       emailErrorMessage.textContent = "required";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     } else if (!isNaN(studentLoginEmail)) {
       emailErrorMessage.textContent = "is invalid";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     } else if (studentLoginEmail.indexOf("@") == -1) {
       emailErrorMessage.textContent = "@ reqiured";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     }
     if (studentLoginEmail.indexOf("@") <= 0) {
       emailErrorMessage.textContent = "Invalid position of @ symbol";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     }
     if (studentLoginEmail.indexOf(".") <= -1) {
       emailErrorMessage.textContent = "Invalid format";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     } else if (
       studentLoginEmail.indexOf(".") - studentLoginEmail.indexOf("@") < 2 ||
       studentLoginEmail.indexOf(".") > studentLoginEmail.length - 3
     ) {
       emailErrorMessage.textContent = "Invalid format";
       emailErrorMessage.style.color = "red";
       error = true;
       return;
     } else {
       emailErrorMessage.textContent = "";
     }
     if (studentLoginpassword === "") {
       passwordErrorMessage.textContent = "required";
       passwordErrorMessage.style.color = "red";
       error = true;
       return;
     } else if (studentLoginpassword.length < 8) {
       passwordErrorMessage.textContent = "Invalid length";
       passwordErrorMessage.style.color = "red";
       error = true;
       return;
     } else {
       passwordErrorMessage.textContent = "";
     }
   if (studentLoginEmail && studentLoginpassword) {
     const studentinfo = getsaveData();
     if (
       studentinfo &&
       studentinfo.studentEmail === studentLoginEmail &&
       studentinfo.password === studentLoginpassword
     ) {
       window.location.href = "instruction.html"
     } else {
         throw new Error((slidindWords.style.visibility = "visible"));
     }
   } else {
     throw new Error(alert("fill all fields"));
   }
 }
} catch (err) {
 console.log(err.message)
}

let previousWinner = null;
fetch('previousWinners.json')
.then((res)=>res.json())
.then((data)=>{
  previousWinner = data;
  console.log(data)
  showWinners();
})
.catch((err)=>{
  console.error(err.message)
})

function showWinners(){
 let winnerBoard = document.querySelector("#winnerBoard");

 if(previousWinner != null){
  previousWinner.forEach(winner => {
    let displayWinner = document.createElement("div")
    displayWinner.innerHTML = `
    <div class="previous-winners">
      <div class="previous-winners-passport"><img src="${winner.image}" alt="" class="previous-winners-jpg">
    </div>
   <div class="details-board">
    <div class="details"> 
    <div class="year">
    ${winner.name}, 
    <br> winner of year 
    ${winner.year}
    </div>
  <div class="school">School: ${winner.school}</div>
  <div class="school">D.O.B: ${winner.dateOfBirth}</div></div>
  </div>
  </div>
  </div>`;
  winnerBoard.appendChild(displayWinner)
  });
 }
}



function setDeadline(deadlineDate) {
    const now = new Date();
    const timeUntilDeadline = deadlineDate.getTime() - now.getTime();
    if (timeUntilDeadline <= 0) {
        document.getElementById("advert").innerHTML =
          "Note, you are to pay a fine of ₦5,000.00 only for late registration, timeline for early registration ended 11:59pm 2024-03-04";
        return;
    }
    setTimeout(function() {
        alert("Hi");
    }, timeUntilDeadline);
    document.getElementById("advert").innerHTML =
      "Take note: late registration begins from 12am, 2024-03-05, failure to register early will attract a fine of ₦5,000.00 only";
}

const deadlineDate = new Date("2024-03-05");
setDeadline(deadlineDate);
