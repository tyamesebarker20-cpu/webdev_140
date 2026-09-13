const passwordInput = document.querySelector("#password");
const strengthMessage = document.querySelector("#strengthMessage");

if (passwordInput && strengthMessage) {
passwordInput.addEventListener("input", function () {

```
    const password = passwordInput.value;

    let strength = "Weak";

    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }

    strengthMessage.textContent = `Password strength: ${strength}`;
});
```

}
