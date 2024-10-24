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
    const message = "Halo min, saya ingin bertanya tentang produk di VentelaShoes."; // Ganti dengan pesan default Anda
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
});


// Register
 // Menggunakan Axios untuk mengirim data dengan POST
//  document.getElementById('registration-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Mencegah pengiriman form secara default

//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Mengirim data menggunakan Axios POST
//   axios.post('https://6716607e3fcb11b265d22465.mockapi.io/api/login', {
//       username: username,
//       email: email,
//       password: password
//   })
//   .then(function (response) {
//       // Menampilkan respon di elemen dengan id "output"
//       //document.getElementById('output').textContent = JSON.stringify(response.data, null, 2);
//   })
//   .catch(function (error) {
//       console.error('Terjadi kesalahan:', error);
//   });
// });

// Fungsi untuk toggle visibility password
function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  const icon = document.getElementById(`toggle-${id}-icon`);

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// Script untuk Pendaftaran
document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('password-confirm').value;

  if (password !== passwordConfirm) {
    alert('Kata sandi dan konfirmasi kata sandi tidak cocok.');
    return;
  }

  // Mengirim data pendaftaran ke Mock API atau server
  axios.post('https://6716607e3fcb11b265d22465.mockapi.io/api/login', {
    username: nama,
    email: email,
    password: password
  })
    .then(function (response) {
      alert('Pendaftaran berhasil! Silakan login.');
      // Tampilkan form login
      document.getElementById('login-section').classList.remove('hidden');
      document.getElementById('registration-section').classList.add('hidden');
    })
    .catch(function (error) {
      console.error('Terjadi kesalahan saat pendaftaran:', error);
    });
  
});

// Script untuk Login
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Cek data login melalui Mock API atau server
  axios.post('https://6716607e3fcb11b265d22465.mockapi.io/api/login', {
    email: email,
    password: password
  })
    .then(function (response) {
      if (response.data) {
        // Di sini kamu bisa menyesuaikan logika untuk mengecek hasil respons
        if (response.data.email === email && response.data.password === password) {
          alert('Login berhasil!');
          // Arahkan ke halaman utama website setelah login berhasil
          document.getElementById('login-section').classList.add('hidden');
          document.getElementById('registration-section').classList.add('hidden')
        } else {
          alert('Email atau kata sandi salah!');
        }
      } else {
        alert('Email atau kata sandi salah!');
      }
    })
    .catch(function (error) {
      console.error('Terjadi kesalahan saat login:', error);
    });
});

document.querySelector('a[href="#login-section"]').addEventListener('click', function() {
  document.getElementById('registration-section').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
});

document.querySelector('a[href="#registration-section"]').addEventListener('click', function() {
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('registration-section').classList.remove('hidden');
});

