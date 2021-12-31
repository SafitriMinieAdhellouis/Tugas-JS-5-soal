const hs = document.getElementById("hasil")
const binatang = document.getElementById("binatang")
function imageBinatang() {
    if (binatang.value == "b") {
        return hs.src = "beruang.png"
    } else if (binatang.value == "h") {
        return hs.src = "harimau.png"
    } else if (binatang.value == "k") {
        return hs.src = "kucing.png"
    } else if (binatang.value == "p") {
        return hs.src = "pudu.png"
    }else {
        return hs.src = "serigala.png"
    }
}
function imageConfirmation() {
    alert(hs.src)
}