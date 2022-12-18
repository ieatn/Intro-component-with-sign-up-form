function validateForm() {
    // retrieve the form elements
    const firstName = document.forms[0]["first-name"].value;
    const lastName = document.forms[0]["last-name"].value;
    const email = document.forms[0]["email"].value;
    const password = document.forms[0]["password"].value;

    // check if any of the fields are empty
    if (firstName == "" || lastName == "" || email == "" || password == "") {
        alert("All fields are required. Please fill out the form.");
        return false;
    }

    // check if the email address is valid using regular expression
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // if all the checks pass, submit the form
    return true;
}