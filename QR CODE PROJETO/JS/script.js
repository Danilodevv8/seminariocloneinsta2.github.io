const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeinput = document.querySelector("#qr-form input");
const qrCodeimg = document.querySelector("#qr-code img");
//Eventos
function generateQrCode() {
    const qrCodeinputValue = qrCodeinput.value;

    if (!qrCodeinputValue) return;

    qrCodeBtn.innerText = "Gerando Código...";

    qrCodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeinputValue}`;
    qrCodeimg.addEventListener("load", () => {
        container.classList.add("active");

        qrCodeBtn.innerText = "Código Criado !!";
    });
}
qrCodeBtn.addEventListener("click", () => {

    generateQrCode();
});
qrCodeinput.addEventListener("keydown", (e) => {

    if (e.code === "Enter") {

        generateQrCode();
    }
});
// Limpador área do QR Code

qrCodeinput.addEventListener("keyup", () => {

    if (!qrCodeinput.value) {

        container.classList.remove("active");

        qrCodeBtn.innerText = "Gerar QR Code";
    }
});