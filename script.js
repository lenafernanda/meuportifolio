// Obtenha o modal
// var modal = document.getElementById('imagem-modal');

// Obtenha a imagem e o elemento modal de imagem
// var img = document.getElementById('imagem-alvo');
// var modalImg = document.getElementById('imagem-grande');
// var captionText = document.getElementById('caption');

// img.onclick = function() {
//     modal.style.display = 'block';
//     modalImg.src = this.style.backgroundImage.slice(5, -2); // Extrai o URL da imagem
//     captionText.innerHTML = this.querySelector('.overlay').textContent;
// }

// // Obtenha o elemento <span> que fecha o modal
// var span = document.getElementsByClassName('close')[0];

// // Quando o usuário clicar no <span> (x), feche o modal
// span.onclick = function() { 
//     modal.style.display = 'none';
// }
function openModal(element) {
    var modal = document.getElementById('imagem-modal');
    var img = document.getElementById('imagem-grande');
    var caption = document.getElementById('caption');

    img.src = element.style.backgroundImage.slice(5, -2); // Extrai a URL da imagem
    caption.innerHTML = element.getAttribute('data-summary'); // Obtém o resumo do atributo data-summary

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('imagem-modal');
    modal.style.display = "none";
}
// Adiciona evento de clique no botão de fechar
document.querySelector(".close").addEventListener("click", closeModal);

// Adiciona evento de clique fora do modal para fechar
window.addEventListener("click", function(event) {
    var modal = document.getElementById("imagem-modal");
    if (event.target === modal) {
        closeModal();
    }
});




