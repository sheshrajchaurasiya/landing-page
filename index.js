function scrollElement(ele){
    let val = `"${ele}"`;
    console.log("clciekc")
    console.log(ele)
    // var element = document.getElementsByClassName(val);
    // console.log(element)

    window.scroll(0, Position(document.getElementsByClassName(val)), {behavior: 'smooth'})
    
    // element.scrollIntoView();

    // const y = ele.getBoundingClientRect().top + window.scrollY;
    // window.scroll({
    // top: y,
    // behavior: 'smooth'
    // });
}

function Position(obj){
    var currenttop = 0;
    if (obj.offsetParent){
    do{
        currenttop += obj.offsetTop;
    }while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

validateForm = (e) => {
    let x = document.forms["form"]["firstName"].value;
    console.log(x);
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

const onsubmit = (e) => {
    e.preventDefault();
    console.log("Ondfjnj")
    console.log(e.target.firstName)
}

// const submit = document.getElementById("submitForm");

// submit.addEventListener("click", validate);

// function validate(e) {
//     e.preventDefault();
  
//     const firstNameField = document.getElementById("firstname");
//     let valid = true;
//   console.log(firstNameField);
//     if (!firstNameField.value) {
//       const nameError = document.getElementById("nameError");
//       nameError.classList.add("visible");
//       firstNameField.classList.add("invalid");
//       nameError.setAttribute("aria-hidden", false);
//       nameError.setAttribute("aria-invalid", true);
//     }
//     return valid;
//   }