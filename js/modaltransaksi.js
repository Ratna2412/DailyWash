document.addEventListener('DOMContentLoaded', function() {
    var tambahBtn = document.querySelector('.btn-tambah');
    var modal = document.getElementById('tambahModal');
    var backBtn = document.getElementById('back');
    var simpanBtn = document.getElementById('simpan');
    const editModal = document.getElementById("editModal");
    const editButtons = document.querySelectorAll(".btn.edit");
    const closeButton = editModal.querySelector(".btn-secondary#back");
    const simpanEdit = editModal.querySelector(".btn-secondary#simpan");

// TAMBAH
    // Show modal when + Tambah button is clicked
    tambahBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Hide modal when Back button is clicked
    backBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    simpanBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Hide modal when user clicks outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });



// EDIT
    editButtons.forEach(button => {
        button.addEventListener("click", function() {
          editModal.style.display = "block";
        });
      });

      simpanEdit.addEventListener("click", function() {
        editModal.style.display = "none";
      });
    
      closeButton.addEventListener("click", function() {
        editModal.style.display = "none";
      });
    
      window.addEventListener("click", function(event) {
        if (event.target == editModal) {
          editModal.style.display = "none";
        }
      });
});

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


  

  