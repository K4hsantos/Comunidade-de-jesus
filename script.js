// js mobile

const btn = document.querySelector("#copyBtn");

function copiarPix() {
    const chavePix = btn.dataset.pix
    navigator.clipboard.writeText(chavePix)

    .then(() => {
        alert("Chave Pix copiada!");
    })
    .catch(() => {
        alert("Erro ao copiar o Pix.");
    });
}

btn.addEventListener("click", copiarPix);


// js desktop

const qrBtn = document.querySelector("#qrBtn");
const qrContainer = document.querySelector("#qrContainer");

qrBtn.addEventListener("click", (event) => {
  event.preventDefault();
  qrContainer.classList.toggle("show");
});


