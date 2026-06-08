function submitForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    if (name === "" || email === "" || msg === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Thank you for volunteering with InAmigos Foundation! We will get in touch with you soon.");

    document.getElementById("volunteerForm").reset();

    return false;
}