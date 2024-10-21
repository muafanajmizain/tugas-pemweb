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
    const phoneNumber = "6287790531215"; // Ganti dengan nomor telepon Anda
    const message = "Halo min, saya ingin bertanya tentang produk Anda."; // Ganti dengan pesan default Anda
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
});


// Register
 // Menggunakan Axios untuk mengirim data dengan POST
 document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Mengirim data menggunakan Axios POST
  axios.post('https://6716607e3fcb11b265d22465.mockapi.io/api/login', {
      username: username,
      email: email,
      password: password
  })
  .then(function (response) {
      // Menampilkan respon di elemen dengan id "output"
      //document.getElementById('output').textContent = JSON.stringify(response.data, null, 2);
  })
  .catch(function (error) {
      console.error('Terjadi kesalahan:', error);
  });
});