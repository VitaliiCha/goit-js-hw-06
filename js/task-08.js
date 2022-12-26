const form = document.querySelector(".login-form");

form.addEventListener("submit",  (event)=> {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
      if (email.value.trim === '' || password.value === '') {
        return alert('All fields must be filled!')
      }
      const userForm = {
          email: email.value, password: password.value
      }
      console.log(userForm);
      event.currentTarget.reset()
});

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);  
//   function handleSubmit (event) {
//   event.preventDefault();
//   const {
//     elements: { email, password }
//   } = event.currentTarget;
//       if (email.value.trim === '' || password.value === '') {
//         return alert('All fields must be filled!')
//       }
//       const userForm = {
//           email: email.value, password: password.value
//       }
//       console.log(userForm);
//       event.currentTarget.reset()
// };
