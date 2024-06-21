  // Ambil modal
  var modal = document.getElementById('tambahModal');

  // Ambil tombol untuk membuka modal
  var btnTambah = document.querySelector('.btn-tambah');

  // Ambil tombol untuk menutup modal
  var spanClose = document.querySelector('.close');

  // Ketika tombol btn-tambah diklik, tampilkan modal
  btnTambah.onclick = function() {
    modal.style.display = 'block';
  }

  // Ketika tombol close diklik, sembunyikan modal
  spanClose.onclick = function() {
    modal.style.display = 'none';
  }

  // Ketika pengguna mengklik di luar modal, sembunyikan modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  document.getElementById('nohp').addEventListener('input', function () {
    if (this.value.length < 11) {
        this.setCustomValidity('Nomor handphone harus memiliki setidaknya 11 digit');
    } else {
        this.setCustomValidity('');
    }
});



/// EDIT
// Ambil modal edit
var editModal = document.getElementById('editModal');

// Ambil tombol edit
var btnEdit = document.querySelector('.btn.edit');

// Ambil tombol untuk menutup modal edit
var spanCloseEdit = document.querySelector('#editModal .close');

// Ketika tombol edit diklik, tampilkan modal edit
btnEdit.onclick = function() {
  editModal.style.display = 'block';
}

// Ketika tombol close di modal edit diklik, sembunyikan modal edit
spanCloseEdit.onclick = function() {
  editModal.style.display = 'none';
}

// Ketika pengguna mengklik di luar modal edit, sembunyikan modal edit
window.onclick = function(event) {
  if (event.target == editModal) {
    editModal.style.display = 'none';
  }
}

/// HAPUS
// Ambil modal hapus
var hapusModal = document.getElementById('hapusModal');

// Ambil semua tombol hapus
var btnsHapus = document.querySelectorAll('.btn.hapus');

// Ambil tombol untuk menutup modal hapus
var spanCloseHapus = document.querySelector('#hapusModal .close');

// Ambil tombol Hapus di dalam modal
var btnDelete = document.getElementById('btnDelete');

// Fungsi untuk menampilkan modal hapus
btnsHapus.forEach(function(btn) {
    btn.onclick = function() {
        hapusModal.style.display = 'flex';
    };
});

// Ketika tombol close di modal hapus diklik, sembunyikan modal hapus
spanCloseHapus.onclick = function() {
    hapusModal.style.display = 'none';
}

// Ketika pengguna mengklik di luar modal hapus, sembunyikan modal hapus
window.onclick = function(event) {
    if (event.target == hapusModal) {
        hapusModal.style.display = 'none';
    }
}

// Fungsi untuk menutup modal hapus dengan tombol Batal
function closeDeleteModal() {
    hapusModal.style.display = 'none';
}

// Ketika tombol hapus di dalam modal diklik, lakukan tindakan dan sembunyikan modal
btnDelete.onclick = function() {
    // Tambahkan logika untuk menghapus data di sini

    // Setelah logika penghapusan, sembunyikan modal
    hapusModal.style.display = 'none';
}
