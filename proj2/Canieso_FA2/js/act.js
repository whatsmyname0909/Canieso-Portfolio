document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const pw = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const terms = document.getElementById('terms').checked;

    const gender = document.querySelector('input[name="gender"]:checked');

    if (!fullName || !email || !pw || !phone || !dob || !course || !gender || !terms) {
        alert("Please fill in all required fields correctly.");
        return;
    }

    const message = 
        `Please confirm your details:\n\n` +
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Gender: ${gender.value}\n` +
        `Date of Birth: ${dob}\n` +
        `Course/Program: ${document.querySelector('#course option:checked').text}`;

    const confirmReg = confirm(message);

    if (confirmReg) {
        alert("Registration Successfully");
    }
});
