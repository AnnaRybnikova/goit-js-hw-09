const FEEDBACK_STORAGE_KEY = "feedback-form-state";
let formData = {
    email: "",
    message: ""
};

const formEl = document.querySelector('.feedback-form');
const savedData = localStorage.getItem(FEEDBACK_STORAGE_KEY);

if (savedData) {
    formData = JSON.parse(savedData);
    formEl.email.value = formData.email || '';
    formEl.message.value = formData.message || '';
}

formEl.addEventListener("input", event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
});

formEl.addEventListener("submit", event => {
    event.preventDefault();

    if (!formEl.email.value || !formEl.message.value) {
        window.alert('Fill please all fields');
        return;
    }
    console.log(formData);

    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    formEl.email.value = "";
    formEl.message.value = "";
})