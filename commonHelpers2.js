import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),s=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email.value=s.email||"";e.message.value=s.message||"";e.addEventListener("input",function(t){if(t.target.name==="email"||t.target.name==="message"){const a={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))}});e.addEventListener("submit",function(t){t.preventDefault();const a=JSON.parse(localStorage.getItem("feedback-form-state"))||{};if(!a.email||!a.message){alert("Please fill email and message fields before submitting.");return}console.log("Form Data:",{email:a.email,message:a.message}),localStorage.removeItem("feedback-form-state"),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
