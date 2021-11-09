const form = document.querySelector('#registerFormId');
const loginField = form.elements.login;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = form.password.value;
    const passwordCheck = form.passwordCheck.value;

    if (password !== passwordCheck) {
        alert('Разные пароли');
        return;
    }

    const formData = new FormData(form);

    for (const item of formData) {
        console.log(item);
    }

    const response = fetch('https://httpbin.org/post', {
        body: formData,
        method: 'POST',
    });

    response
        .then((response) => {
            return response.json(); //  когда исполнится
        })
        .then((body) => {
            console.log(body);
        })
        .catch(() => {
            console.log('catch'); // когда не исполнится
        });

    console.log(response);
});
