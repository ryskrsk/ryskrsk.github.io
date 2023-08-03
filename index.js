
//variable buat bikin soal
let kumpulanSoal = [{
    q: "Indonesia merdeka pada tanggal...?",
    a: ["15 Agustus 1945", "16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945"],
    j: "17 Agustus 1945"
    
 
},
{
    q: "Siapa yang membacakan teks Proklamasi?",
    a: ["Ir Soekarno didampingi Muhammad Hatta", "Jenderal Soedirman didampingi Muhammad Yamin", "Jenderal Soeharto didampingi B.J. Habibie", "Ir Joko Widodo didampingi Kiai Ma'ruf amin"] ,
    j: "Ir Soekarno didampingi Muhammad Hatta"
 
},
{
    q: "Setelah disepakati, siapakah yang menyalin dan mengetik teks Proklamasi",
    a: ["Muhammad Hatta", "Sayuti Melik", "Soekardi", "Soediro"],
    j: "Sayuti Melik"
    
 
},
{
    q: "Pada 12 Agustus 1945, tiga tokoh nasional yang terdiri dari Radjiman Wedyodiningrat, Soekarno, dan Mohammad Hatta bertandang ke sebuah kota untuk memenuhi undangan dari Jenderal Terauchi. Kota apakah yang dimaksud?",
    a: ["Den Haag, Belanda", "Bangkok, Thailand", "Viena, Austria", "Dalat, Vietnam"],
    j: "Dalat, Vietnam"
    
 
},
{
    q: "Pada 6 Agustus dan 9 Agustus 1945, dua buah bom atom dijatuhkan di atas dua kota di Jepang. dimanakah dua kota yang dimaksud?",
    a: ["Hiroshima dan Nagasaki", "Tokyo dan Kyoto", "Hokkaido dan Osaka", "Nara dan Kobe"],
    j: "Hiroshima dan Nagasaki"
 
},
{
    q: "Berapa tahun Jepang menjajah Indonesia?",
    a: ["3 tahun", "2 tahun", "1 tahun", "3,5 tahun"],
    j: "3,5 tahun"
 
},
{
    q: "Pukul berapa teks Proklamasi dibacakan",
    a: ["10 pagi", "11 pagi", "10 malam", "11 malam"],
    j: "10 pagi"
 
},
{
    q: 'Siapa pencipta lagu "Indonesia Raya"',
    a: ["Husein Mutahar", "W.R. Soepratman", "Prohar Sudharnoto", "Cornel Simanjuntak"],
    j: "W.R. Soepratman"
 
},
{
    q: 'Siapa pencipta lagu "Maju Tak Gentar"',
    a: ["Husein Mutahar", "Prohar Sudharnoto", "Cornel Simanjuntak", "W.R. Soepratman"],
    j: "Cornel Simanjuntak"
 
},
{
    q: "Pembacaan teks Proklamasi dilakukan di...",
    a: ["Jalan Imam Bonjol", "Jalan Pegangsaan Timur No. 56", "Rumah Soekarno", "Rangesdengklok"],
    j: "Jalan Pegangsaan Timur No. 56"
 
},
{
    q: "Peristiwa pengamanan Ir Soekarno dan Moh. Hatta oleh golongan pemuda dikenal sebagai peristiwa?",
    a: ["Peristiwa G30SPKI", "Peristiwa Pengamanan Nasional", "Peristiwa Proklamasi", "Peristiwa Rangesdengklok"],
    j: "Peristiwa Rangesdengklok"
 
},
{
    q: "Satu hari setelah kemerdekaan, UUD ditetapkan sebagai negara oleh?",
    a: ["Partai Perhimpunan Indonesia", "Sarekat Islam", "PPKI", "BPUPKI"],
    j: "PPKI"
 
},
{
    q: "PETA adalah kesatuan militer sukarela yang dibentuk Jepang di Indonesia apa kepanjangan dari PETA?",
    a: ["Pembebas Tanah Air", "Pejuang Tanah Air", "Pembela Tanah Air", "Pemuda Tanah Air"],
    j: "Pembela Tanah Air"
},
{
    q: "Proklamasi kemerdekaan bangsa Indonesia ditandatangani Ir. Soekarno dan Drs. Moh. Hatta atas nama ....",
    a: ["BPUPKI", "Presiden dan Rakyat", "Bangsa Indonesia", "Bangsa Jepang"],
    j: "Bangsa Indonesia"
 
},
{
    q: "Tujuan mengubah isi dalam Piagam Jakarta dari kalimat “Ketuhanan dengan berkewajiban menjalankan syariat-syariat Islam bagi para pemeluknya” diganti dengan “Ketuhanan yang Maha Esa” adalah ....",
    a: ["Menghormati pemeluk agama lain.", "Memudahkan pengucapan pembaca", "Menyingkat kalimat yang terlalu panjang.", "Indonesia bersahabat dengan negara non-Islam."],
    j: "Menghormati pemeluk agama lain."
 
},
{
    q: "Pemberian nama Pancasila sebagai dasar negara diusulkan oleh ....",
    a: ["Drs. Moh. Hatta", "Ir. Soekarno", "Mohammad Yamin", "Suwardi Suryaningrat"],
    j: "Ir. Soekarno"
 
},
{
    q: "Tokoh yang mengusulkan agar naskah proklamasi ditandatangani Ir. Soekarno dan Moh. Hatta atas nama bangsa Indonesia adalah ....",
    a: ["Samanhudi", "Ahmad Soebardjo", "Wikana", "Soekarni"],
    j: "Soekarni"
 
},
{
    q: '"Walaupun berbeda-beda tetap satu jua" adalah arti dari...',
    a: ["Bhineka Tunggal Ika", "Pancasila", "UUD 1945", "Piagam Jakarta"],
    j: "Bhineka Tunggal Ika"
 
},
{
    q: "Jepang mulai menjajah Indonesia pada tahun ....",
    a: ["1941", "1942", "1943", "1944"],
    j: "1942"
 
},
{
    q: "Siapakah yang menyimpan naskah asli teks Proklamasi?",
    a: ["Soekarni", "Fatmawati", "BM Diah", "Megawati"],
    j: "BM Diah"
 
}
]

let buttonVis =  document.getElementById("btn")
   buttonVis.style.visibility = "hidden"

let jumlahSoal = 0;
let score = 0
let nilai = 0
let nama = ""
let randomIndex = 0 //randomIndex di set 0 dulu dan ditaro di luar function supaya bisa digunakan lebih dari 1 function
let usedSoal = []
document.getElementById("resbtn").style.display = "none"

//function ini untuk meload soal
function loadSoal(){
    
    buttonVis.style.visibility = "visible"
    let foundUniqueQuestion = false;
    while (!foundUniqueQuestion) {
        randomIndex = Math.floor(Math.random() * kumpulanSoal.length);
        if (!usedSoal.includes(randomIndex)) {
            foundUniqueQuestion = true;
            usedSoal.push(randomIndex);
        }
    }
    // console.log(usedSoal);
    let soal = document.getElementById("soal") //ambil dari index.html
    let pilihan = document.getElementById("pilihan") //ambil dari index.html
    
    soal.textContent = kumpulanSoal[randomIndex].q; //ini untuk soalnya
    pilihan.innerHTML = ""
 
    for (let i = 0; i < kumpulanSoal[randomIndex].a.length; i++) { //ini untuk pilihan gandanya
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = kumpulanSoal[randomIndex].a[i];
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        pilihan.appendChild(choicesdiv);
    }
   
}





function submitName() {
    
    nama = document.getElementById("nama").value;
    // localStorage.setItem("nama", JSON.stringify(nama))
    if(!nama){
        alert("ISI DULU NAMANYA BOS")
    } else {
        document.getElementById("nameForm").remove(); // hapus form nama
        loadSoal(); // Load pertanyaan pertama
    }
    
}




//function ini untuk meload score
function loadScore() {
    // localStorage.setItem("score", JSON.stringify(nilai))
    let totalScore = document.getElementById("score")
    let totalNilai = document.getElementById("nilai")
    let myAudio = document.querySelector('#audionilaibagus')

    totalScore.textContent = `Anda menjawab ${score} pertanyaan benar dari 5 pertanyaan`
    if (nilai > 90 ){
        totalNilai.textContent = `${nama.toUpperCase()}, nilai anda adalah ${nilai}, kamu adalah Anak Bangsa sejati!`
        document.getElementById("resbtn").style.display = "inline"
        myAudio.play()
    } else if(nilai > 60){
        totalNilai.textContent = `${nama.toUpperCase()}, nilai anda adalah ${nilai}, kamu bisa berusaha lebih baik lagi.`
        document.getElementById("resbtn").style.display = "inline"
    } else if(nilai > 30){
        totalNilai.textContent = `${nama.toUpperCase()}, nilai anda adalah ${nilai}, guru SD-mu kecewa.`
        document.getElementById("resbtn").style.display = "inline"
    } else {
        totalNilai.textContent = `${nama.toUpperCase()}, nilai anda adalah ${nilai}, mungkin kamu Alien.`
        document.getElementById("resbtn").style.display = "inline"
    }
}

function pertanyaanSelanjutnya() {
    if (jumlahSoal < 4) {
        jumlahSoal++;
        loadSoal();
    } else {
        usedSoal = []
        document.getElementById("pilihan").remove()
        document.getElementById("soal").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}


//ini untuk cekjawaban sekaligus manggil soal selanjutnya
function checkJawaban() {
    let selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    let correctAns = kumpulanSoal[randomIndex].j;
    
    if (kumpulanSoal[randomIndex].a[selectedAns] === correctAns) {
        score++;
        nilai += 20;
        console.log("Correct");
    } else {
        console.log("Incorrect");
    }
    
    pertanyaanSelanjutnya();
}