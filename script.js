const toggleContent = document.getElementById('toggle-content');
toggleContent.classList.add('hidden-menu')

document.querySelector('.menu').addEventListener('click', function() {
  if (toggleContent.classList.contains('hidden-menu')) {
      toggleContent.classList.remove('hidden-menu');
      toggleContent.classList.add('flex-menu');
  } else {
    toggleContent.classList.remove('flex-menu');
    toggleContent.classList.add('hidden-menu');
  }
});
// }

const whatsappButtons = document.querySelectorAll('.whatsappButton');
whatsappButtons.forEach(button => {
  button.onclick = function() {
    const phoneNumber = "6282328137106"; // Ganti dengan nomor telepon Anda
    const message = "Halo min, saya ingin bertanya tentang produk Anda."; // Ganti dengan pesan default Anda
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
});
