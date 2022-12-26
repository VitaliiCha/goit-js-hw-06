const form = document.querySelector('input#validation-input');

form.addEventListener('blur', onInputBlur);
function onInputBlur(e, onInputBlurRemove) {
    if (e.currentTarget.value.length === Number(form.dataset.length)) {
        form.classList.remove('invalid');
        form.classList.add('valid')
    }
    
    else if (e.currentTarget.value.length !== Number(form.dataset.length)) {
        form.classList.remove('valid');
        form.classList.add('invalid');
    }
};

