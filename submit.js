function login(e) {
    e.preventDefault()
    const nama = document.getElementById("nama").value
    const nama = document.getElementById("pass").value
    if (nama == "lydia1997" && pass == "zubaidah") {
        alert("Login Sukses")
        location.href = "sukses.html"
    }
    else {
        alert("Login Gagal")
        window.Location.reload()
    }
}