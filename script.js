const formObat = document.getElementById("form-obat");
const daftarObat = document.getElementById("daftar-obat");
const judulDaftar = document.getElementById("judul-daftar");

function cekDaftarKosong() {
  if (daftarObat.children.length === 0) {
    judulDaftar.textContent = "Daftar Obat Kosong 🧾";
  } else {
    judulDaftar.textContent = "Daftar Obat";
  }
}

formObat.addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama-obat").value;
  const jenis = document.getElementById("jenis-obat").value;
  const kadaluarsa = document.getElementById("kadaluarsa-obat").value;
   const gambar = document.getElementById("gambar-obat").value;

  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <img src="${gambar}" alt="${nama}" style="width:100px; height:auto; display:block; margin-bottom:5px;">
      <strong>${nama}</strong><br>
      Jenis: ${jenis} | Kadaluarsa: ${kadaluarsa}
    </div>
  `;



    
  const btnHapus = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.classList.add("hapus");
  btnHapus.addEventListener("click", function() {
    if (confirm(`Yakin ingin menghapus obat "${nama}"?`)) {
      li.remove();
      cekDaftarKosong();
    }
  });

  li.appendChild(btnHapus);
  daftarObat.appendChild(li);

  formObat.reset();
  cekDaftarKosong();
});

cekDaftarKosong();
