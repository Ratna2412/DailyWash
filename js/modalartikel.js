// Modal elements
var tambahModal = document.getElementById("tambahModal");
var editModal = document.getElementById("editModal");
var hapusModal = document.getElementById("hapusModal");

// Buttons to open the modal
var btnTambah = document.querySelector(".btn-tambah");
var btnEdit = document.querySelectorAll(".btn.edit");
var btnHapus = document.querySelectorAll(".btn.hapus");

// Close buttons
var spanClose = document.getElementsByClassName("close");

// Function to open a modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Event listeners for opening the modals
if (btnTambah) {
    btnTambah.onclick = function() {
        openModal(tambahModal);
    }
}

btnEdit.forEach(function(btn) {
    btn.onclick = function() {
        openModal(editModal);
    }
});

btnHapus.forEach(function(btn) {
    btn.onclick = function() {
        openModal(hapusModal);
    }
});

// Event listeners for closing the modals
for (var i = 0; i < spanClose.length; i++) {
    spanClose[i].onclick = function() {
        closeModal(tambahModal);
        closeModal(editModal);
        closeModal(hapusModal);
    }
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == tambahModal) {
        closeModal(tambahModal);
    }
    if (event.target == editModal) {
        closeModal(editModal);
    }
    if (event.target == hapusModal) {
        closeModal(hapusModal);
    }
}

// Extra close button for the "Batal" action in the hapusModal
document.querySelector("#hapusModal .btn.btn-secondary").onclick = function() {
    closeModal(hapusModal);
}

// Ketika tombol hapus di dalam modal diklik, lakukan tindakan dan sembunyikan modal
btnDelete.onclick = function() {
    // Tambahkan logika untuk menghapus data di sini

    // Setelah logika penghapusan, sembunyikan modal
    hapusModal.style.display = 'none';
}
