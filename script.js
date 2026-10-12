function login(event){
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email && password){
        alert("เข้าสู่ระบบสำเร็จ 🍊");
        window.location.href = "index.html";
    }
}