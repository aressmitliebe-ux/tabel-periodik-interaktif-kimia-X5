const elements = [
    { number: 1, symbol: "H", name: "Hidrogen", period: 1, group: 1 },
    { number: 2, symbol: "He", name: "Helium", period: 1, group: 18 },
    { number: 3, symbol: "Li", name: "Litium", period: 2, group: 1 },
    { number: 4, symbol: "Be", name: "Berilium", period: 2, group: 2 },
    { number: 5, symbol: "B", name: "Boron", period: 2, group: 13 },
    { number: 6, symbol: "C", name: "Karbon", period: 2, group: 14 },
    { number: 7, symbol: "N", name: "Nitrogen", period: 2, group: 15 },
    { number: 8, symbol: "O", name: "Oksigen", period: 2, group: 16 },
    { number: 9, symbol: "F", name: "Fluor", period: 2, group: 17 },
    { number: 10, symbol: "Ne", name: "Neon", period: 2, group: 18 },
    { number: 11, symbol: "Na", name: "Natrium", period: 3, group: 1 },
    { number: 12, symbol: "Mg", name: "Magnesium", period: 3, group: 2 },
    { number: 13, symbol: "Al", name: "Aluminium", period: 3, group: 13 },
    { number: 14, symbol: "Si", name: "Silikon", period: 3, group: 14 },
    { number: 15, symbol: "P", name: "Fosforus", period: 3, group: 15 },
    { number: 16, symbol: "S", name: "Sulfur", period: 3, group: 16 },
    { number: 17, symbol: "Cl", name: "Klorin", period: 3, group: 17 },
    { number: 18, symbol: "Ar", name: "Argon", period: 3, group: 18 },
    { number: 19, symbol: "K", name: "Kalium", period: 4, group: 1 },
    { number: 20, symbol: "Ca", name: "Kalsium", period: 4, group: 2 },
    { number: 21, symbol: "Sc", name: "Skandium", period: 4, group: 3 },
    { number: 22, symbol: "Ti", name: "Titan", period: 4, group: 4 },
    { number: 23, symbol: "V", name: "Vanadium", period: 4, group: 5 },
    { number: 24, symbol: "Cr", name: "Krom", period: 4, group: 6 },
    { number: 25, symbol: "Mn", name: "Mangan", period: 4, group: 7 },
    { number: 26, symbol: "Fe", name: "Besi", period: 4, group: 8 },
    { number: 27, symbol: "Co", name: "Kobalt", period: 4, group: 9 },
    { number: 28, symbol: "Ni", name: "Nikel", period: 4, group: 10 },
    { number: 29, symbol: "Cu", name: "Tembaga", period: 4, group: 11 },
    { number: 30, symbol: "Zn", name: "Seng", period: 4, group: 12 },
    { number: 31, symbol: "Ga", name: "Galium", period: 4, group: 13 },
    { number: 32, symbol: "Ge", name: "Germanium", period: 4, group: 14 },
    { number: 33, symbol: "As", name: "Arsenik", period: 4, group: 15 },
    { number: 34, symbol: "Se", name: "Selenium", period: 4, group: 16 },
    { number: 35, symbol: "Br", name: "Bromin", period: 4, group: 17 },
    { number: 36, symbol: "Kr", name: "Krypton", period: 4, group: 18 },
    { number: 37, symbol: "Rb", name: "Rubidium", period: 5, group: 1 },
    { number: 38, symbol: "Sr", name: "Stronsium", period: 5, group: 2 },
    { number: 39, symbol: "Y", name: "Itrium", period: 5, group: 3 },
    { number: 40, symbol: "Zr", name: "Zirkonium", period: 5, group: 4 },
    { number: 41, symbol: "Nb", name: "Niobium", period: 5, group: 5 },
    { number: 42, symbol: "Mo", name: "Molibdenum", period: 5, group: 6 },
    { number: 43, symbol: "Tc", name: "Teknesium", period: 5, group: 7 },
    { number: 44, symbol: "Ru", name: "Rutenium", period: 5, group: 8 },
    { number: 45, symbol: "Rh", name: "Rodium", period: 5, group: 9 },
    { number: 46, symbol: "Pd", name: "Paladium", period: 5, group: 10 },
    { number: 47, symbol: "Ag", name: "Perak", period: 5, group: 11 },
    { number: 48, symbol: "Cd", name: "Kadmium", period: 5, group: 12 },
    { number: 49, symbol: "In", name: "Indium", period: 5, group: 13 },
    { number: 50, symbol: "Sn", name: "Timah", period: 5, group: 14 },
    { number: 51, symbol: "Sb", name: "Antimon", period: 5, group: 15 },
    { number: 52, symbol: "Te", name: "Telurium", period: 5, group: 16 },
    { number: 53, symbol: "I", name: "Iodin", period: 5, group: 17 },
    { number: 54, symbol: "Xe", name: "Xenon", period: 5, group: 18 },
    { number: 55, symbol: "Cs", name: "Sesium", period: 6, group: 1 },
    { number: 56, symbol: "Ba", name: "Barium", period: 6, group: 2 },
    { number: "57-71", symbol: "", name: "Lantanida", period: 6, group: 3 },
    { number: 72, symbol: "Hf", name: "Hafnium", period: 6, group: 4 },
    { number: 73, symbol: "Ta", name: "Tantalum", period: 6, group: 5 },
    { number: 74, symbol: "W", name: "Wolfram", period: 6, group: 6 },
    { number: 75, symbol: "Re", name: "Renium", period: 6, group: 7 },
    { number: 76, symbol: "Os", name: "Osmium", period: 6, group: 8 },
    { number: 77, symbol: "Ir", name: "Iridium", period: 6, group: 9 },
    { number: 78, symbol: "Pt", name: "Platina", period: 6, group: 10 },
    { number: 79, symbol: "Au", name: "Emas", period: 6, group: 11 },
    { number: 80, symbol: "Hg", name: "Raksa", period: 6, group: 12 },
    { number: 81, symbol: "Tl", name: "Talium", period: 6, group: 13 },
    { number: 82, symbol: "Pb", name: "Timbal", period: 6, group: 14 },
    { number: 83, symbol: "Bi", name: "Bismut", period: 6, group: 15 },
    { number: 84, symbol: "Po", name: "Polonium", period: 6, group: 16 },
    { number: 85, symbol: "At", name: "Astatin", period: 6, group: 17 },
    { number: 86, symbol: "Rn", name: "Radon", period: 6, group: 18 },
    { number: 87, symbol: "Fr", name: "Fransium", period: 7, group: 1 },
    { number: 88, symbol: "Ra", name: "Radium", period: 7, group: 2 },
    { number: "89-103", symbol: "", name: "Aktinida", period: 7, group: 3 },
    { number: 104, symbol: "Rf", name: "Rutherfordium", period: 7, group: 4 },
    { number: 105, symbol: "Db", name: "Dubnium", period: 7, group: 5 },
    { number: 106, symbol: "Sg", name: "Seaborgium", period: 7, group: 6 },
    { number: 107, symbol: "Bh", name: "Bohrium", period: 7, group: 7 },
    { number: 108, symbol: "Hs", name: "Hassium", period: 7, group: 8 },
    { number: 109, symbol: "Mt", name: "Meitnerium", period: 7, group: 9 },
    { number: 110, symbol: "Ds", name: "Darmstadtium", period: 7, group: 10 },
    { number: 111, symbol: "Rg", name: "Roentgenium", period: 7, group: 11 },
    { number: 112, symbol: "Cn", name: "Copernicium", period: 7, group: 12 },
    { number: 113, symbol: "Nh", name: "Nihonium", period: 7, group: 13 },
    { number: 114, symbol: "Fl", name: "Flerovium", period: 7, group: 14 },
    { number: 115, symbol: "Mc", name: "Moskovium", period: 7, group: 15 },
    { number: 116, symbol: "Lv", name: "Livermorium", period: 7, group: 16 },
    { number: 117, symbol: "Ts", name: "Tenesin", period: 7, group: 17 },
    { number: 118, symbol: "Og", name: "Oganeson", period: 7, group: 18 },
    { number: 57, symbol: "La", name: "Lantanum", period: 8, group: 4 },
    { number: 58, symbol: "Ce", name: "Serium", period: 8, group: 5 },
    { number: 59, symbol: "Pr", name: "Praseodimium", period: 8, group: 6 },
    { number: 60, symbol: "Nd", name: "Neodimium", period: 8, group: 7 },
    { number: 61, symbol: "Pm", name: "Prometium", period: 8, group: 8 },
    { number: 62, symbol: "Sm", name: "Samarium", period: 8, group: 9 },
    { number: 63, symbol: "Eu", name: "Europium", period: 8, group: 10 },
    { number: 64, symbol: "Gd", name: "Gadolinium", period: 8, group: 11 },
    { number: 65, symbol: "Tb", name: "Terbium", period: 8, group: 12 },
    { number: 66, symbol: "Dy", name: "Disprosium", period: 8, group: 13 },
    { number: 67, symbol: "Ho", name: "Holmium", period: 8, group: 14 },
    { number: 68, symbol: "Er", name: "Erbium", period: 8, group: 15 },
    { number: 69, symbol: "Tm", name: "Tulium", period: 8, group: 16 },
    { number: 70, symbol: "Yb", name: "Iterbium", period: 8, group: 17 },
    { number: 71, symbol: "Lu", name: "Lutetium", period: 8, group: 18 },
    { number: 89, symbol: "Ac", name: "Aktinium", period: 9, group: 4 },
    { number: 90, symbol: "Th", name: "Torium", period: 9, group: 5 },
    { number: 91, symbol: "Pa", name: "Protaktinium", period: 9, group: 6 },
    { number: 92, symbol: "U", name: "Uranium", period: 9, group: 7 },
    { number: 93, symbol: "Np", name: "Neptunium", period: 9, group: 8 },
    { number: 94, symbol: "Pu", name: "Plutonium", period: 9, group: 9 },
    { number: 95, symbol: "Am", name: "Amerisium", period: 9, group: 10 },
    { number: 96, symbol: "Cm", name: "Kurium", period: 9, group: 11 },
    { number: 97, symbol: "Bk", name: "Berkelium", period: 9, group: 12 },
    { number: 98, symbol: "Cf", name: "Kalifornium", period: 9, group: 13 },
    { number: 99, symbol: "Es", name: "Einsteinium", period: 9, group: 14 },
    { number: 100, symbol: "Fm", name: "Fermium", period: 9, group: 15 },
    { number: 101, symbol: "Md", name: "Mendelevium", period: 9, group: 16 },
    { number: 102, symbol: "No", name: "Nobelium", period: 9, group: 17 },
    { number: 103, symbol: "Lr", name: "Lawrensium", period: 9, group: 18 }
];

function getCategory(element) {
    const symbol = element.symbol;
    const group = element.group;
    const number = Number(element.number);

    if (element.name === "Lantanida") return "lantanida";
    if (element.name === "Aktinida") return "aktinida";

    if ([3, 11, 19, 37, 55, 87].includes(number)) return "alkali";

    if ([4, 12, 20, 38, 56, 88].includes(number)) return "alkali-tanah";

    if (number >= 57 && number <= 71) return "lantanida";
    if (number >= 89 && number <= 103) return "aktinida";

    if (["B", "Si", "Ge", "As", "Sb", "Te"].includes(symbol)) return "metaloid";

    if (["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(symbol)) return "gas-mulia";

    if (["H", "C", "N", "O", "P", "S", "Se", "F", "Cl", "Br", "I"  ].includes(symbol)) return "nonlogam";

    if (["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(symbol)) return "logam-miskin";

    if (group >= 3 && group <= 12) return "transisi";

    return "logam-miskin";
}


const table = document.getElementById("periodic-table");

// Membuat semua kotak unsur
elements.forEach(function(element) {
    table.innerHTML += `
        <div class="element category-${getCategory(element)}"
            style="grid-column: ${element.group}; grid-row: ${element.period}">
            <span class="number">${element.number}</span>
            <span class="symbol">${element.symbol}</span>
            <span class="name">${element.name}</span>
        </div>
    `;
});

// DATA INFORMASI UNSUR 1-80
// Format: massa, blok, konfigurasi elektron, fakta unik

const elementInfo = {
1: [1.008, "s", "1s¹", "Hidrogen merupakan unsur paling ringan dan paling melimpah di alam semesta."],
2: [4.0026, "s", "1s²", "Helium digunakan untuk mengisi balon karena lebih ringan daripada udara dan tidak mudah terbakar."],
3: [6.94, "s", "[He] 2s¹", "Litium merupakan logam paling ringan dan banyak digunakan dalam baterai isi ulang."],
4: [9.0122, "s", "[He] 2s²", "Berilium digunakan dalam industri pesawat dan luar angkasa karena ringan dan kuat."],
5: [10.81, "p", "[He] 2s² 2p¹", "Boron digunakan dalam pembuatan kaca tahan panas dan berbagai bahan keramik."],
6: [12.011, "p", "[He] 2s² 2p²", "Karbon merupakan unsur dasar penyusun seluruh makhluk hidup dan memiliki bentuk seperti berlian serta grafit."],
7: [14.007, "p", "[He] 2s² 2p³", "Nitrogen membentuk sekitar 78% atmosfer Bumi."],
8: [15.999, "p", "[He] 2s² 2p⁴", "Oksigen sangat penting untuk respirasi sebagian besar makhluk hidup."],
9: [18.998, "p", "[He] 2s² 2p⁵", "Fluor merupakan unsur paling elektronegatif dalam tabel periodik."],
10: [20.180, "p", "[He] 2s² 2p⁶", "Neon menghasilkan cahaya berwarna merah jingga ketika digunakan dalam lampu pelepasan gas."],
11: [22.990, "s", "[Ne] 3s¹", "Natrium dapat memberikan warna kuning terang pada uji nyala."],
12: [24.305, "s", "[Ne] 3s²", "Magnesium menghasilkan cahaya putih terang ketika terbakar."],
13: [26.982, "p", "[Ne] 3s² 3p¹", "Aluminium banyak digunakan dalam kaleng, kendaraan, dan pesawat karena ringan."],
14: [28.085, "p", "[Ne] 3s² 3p²", "Silikon merupakan bahan utama dalam pembuatan chip komputer dan panel surya."],
15: [30.974, "p", "[Ne] 3s² 3p³", "Fosfor merupakan unsur penting dalam DNA, RNA, dan ATP."],
16: [32.06, "p", "[Ne] 3s² 3p⁴", "Sulfur telah dikenal sejak zaman kuno dan sering ditemukan di daerah vulkanik."],
17: [35.45, "p", "[Ne] 3s² 3p⁵", "Klorin digunakan untuk membantu mendisinfeksi air dalam jumlah dan konsentrasi yang terkontrol."],
18: [39.948, "p", "[Ne] 3s² 3p⁶", "Argon digunakan sebagai gas pelindung dalam proses pengelasan."],
19: [39.098, "s", "[Ar] 4s¹", "Kalium merupakan mineral penting yang membantu fungsi otot dan saraf."],
20: [40.078, "s", "[Ar] 4s²", "Kalsium merupakan komponen utama tulang dan gigi."],
21: [44.956, "d", "[Ar] 3d¹ 4s²", "Skandium digunakan dalam beberapa paduan aluminium untuk meningkatkan kekuatannya."],
22: [47.867, "d", "[Ar] 3d² 4s²", "Titan terkenal karena kuat, ringan, dan tahan terhadap korosi."],
23: [50.942, "d", "[Ar] 3d³ 4s²", "Vanadium digunakan untuk meningkatkan kekuatan berbagai jenis baja."],
24: [51.996, "d", "[Ar] 3d⁵ 4s¹", "Krom memberikan warna dan ketahanan korosi pada lapisan krom."],
25: [54.938, "d", "[Ar] 3d⁵ 4s²", "Mangan merupakan unsur penting dalam pembuatan baja dan baterai."],
26: [55.845, "d", "[Ar] 3d⁶ 4s²", "Besi merupakan bahan utama dalam pembuatan baja dan juga terdapat dalam hemoglobin."],
27: [58.933, "d", "[Ar] 3d⁷ 4s²", "Kobalt digunakan dalam pembuatan magnet kuat dan baterai."],
28: [58.693, "d", "[Ar] 3d⁸ 4s²", "Nikel digunakan dalam koin, baja tahan karat, dan baterai."],
29: [63.546, "d", "[Ar] 3d¹⁰ 4s¹", "Tembaga merupakan penghantar listrik yang sangat baik dan banyak digunakan dalam kabel."],
30: [65.38, "d", "[Ar] 3d¹⁰ 4s²", "Seng digunakan untuk melapisi besi agar lebih tahan terhadap karat."],
31: [69.723, "p", "[Ar] 3d¹⁰ 4s² 4p¹", "Galium dapat meleleh pada suhu sekitar 29,8°C."],
32: [72.630, "p", "[Ar] 3d¹⁰ 4s² 4p²", "Germanium merupakan semikonduktor yang digunakan dalam berbagai perangkat elektronik."],
33: [74.922, "p", "[Ar] 3d¹⁰ 4s² 4p³", "Arsenik merupakan metaloid yang dikenal karena senyawanya dapat bersifat sangat beracun."],
34: [78.971, "p", "[Ar] 3d¹⁰ 4s² 4p⁴", "Selenium digunakan dalam beberapa jenis sel surya dan perangkat elektronik."],
35: [79.904, "p", "[Ar] 3d¹⁰ 4s² 4p⁵", "Bromin merupakan satu-satunya unsur nonlogam yang berwujud cair pada suhu ruang."],
36: [83.798, "p", "[Ar] 3d¹⁰ 4s² 4p⁶", "Kripton digunakan dalam beberapa jenis lampu dan sistem pencahayaan."],
37: [85.468, "s", "[Kr] 5s¹", "Rubidium sangat reaktif dan digunakan dalam penelitian jam atom."],
38: [87.62, "s", "[Kr] 5s²", "Stronsium menghasilkan warna merah terang dalam uji nyala."],
39: [88.906, "d", "[Kr] 4d¹ 5s²", "Itrium digunakan dalam bahan fosfor untuk layar dan lampu LED."],
40: [91.224, "d", "[Kr] 4d² 5s²", "Zirkonium tahan korosi dan digunakan dalam berbagai komponen reaktor nuklir."],
41: [92.906, "d", "[Kr] 4d⁴ 5s¹", "Niobium digunakan dalam paduan logam superkonduktor."],
42: [95.95, "d", "[Kr] 4d⁵ 5s¹", "Molibdenum memiliki titik leleh yang sangat tinggi dan digunakan dalam paduan baja."],
43: [98, "d", "[Kr] 4d⁵ 5s²", "Teknesium merupakan unsur pertama yang ditemukan melalui produksi buatan."],
44: [101.07, "d", "[Kr] 4d⁷ 5s¹", "Rutenium digunakan dalam komponen elektronik dan sebagai katalis."],
45: [102.906, "d", "[Kr] 4d⁸ 5s¹", "Rodium sangat langka dan digunakan dalam catalytic converter kendaraan."],
46: [106.42, "d", "[Kr] 4d¹⁰", "Paladium dapat menyerap hidrogen dalam jumlah besar dibandingkan volumenya sendiri."],
47: [107.868, "d", "[Kr] 4d¹⁰ 5s¹", "Perak memiliki konduktivitas listrik tertinggi di antara semua unsur."],
48: [112.414, "d", "[Kr] 4d¹⁰ 5s²", "Kadmium pernah banyak digunakan dalam baterai nikel-kadmium."],
49: [114.818, "p", "[Kr] 4d¹⁰ 5s² 5p¹", "Indium digunakan dalam lapisan transparan penghantar listrik pada layar sentuh."],
50: [118.710, "p", "[Kr] 4d¹⁰ 5s² 5p²", "Timah telah digunakan manusia sejak zaman kuno, terutama dalam pembuatan perunggu."],
51: [121.760, "p", "[Kr] 4d¹⁰ 5s² 5p³", "Antimon digunakan dalam beberapa paduan logam dan bahan tahan api."],
52: [127.60, "p", "[Kr] 4d¹⁰ 5s² 5p⁴", "Telurium merupakan unsur langka yang digunakan dalam beberapa perangkat elektronik."],
53: [126.904, "p", "[Kr] 4d¹⁰ 5s² 5p⁵", "Iodin dibutuhkan tubuh dalam jumlah kecil untuk membantu produksi hormon tiroid."],
54: [131.293, "p", "[Kr] 4d¹⁰ 5s² 5p⁶", "Xenon digunakan dalam lampu khusus dan beberapa jenis lampu kilat fotografi."],
55: [132.905, "s", "[Xe] 6s¹", "Sesium digunakan dalam jam atom yang sangat akurat."],
56: [137.327, "s", "[Xe] 6s²", "Barium sulfat digunakan sebagai bahan kontras dalam pemeriksaan sinar-X tertentu."],
57: [138.905, "f", "[Xe] 5d¹ 6s²", "Lantanum digunakan dalam lensa kamera khusus dan baterai tertentu."],
58: [140.116, "f", "[Xe] 4f¹ 5d¹ 6s²", "Serium digunakan dalam bahan pemoles kaca dan katalis."],
59: [140.908, "f", "[Xe] 4f³ 6s²", "Praseodimium digunakan untuk menghasilkan warna pada kaca dan keramik."],
60: [144.242, "f", "[Xe] 4f⁴ 6s²", "Neodimium digunakan untuk membuat magnet permanen yang sangat kuat."],
61: [145, "f", "[Xe] 4f⁵ 6s²", "Prometium merupakan unsur radioaktif yang tidak memiliki isotop stabil."],
62: [150.36, "f", "[Xe] 4f⁶ 6s²", "Samarium digunakan dalam pembuatan magnet samarium-kobalt."],
63: [151.964, "f", "[Xe] 4f⁷ 6s²", "Europium digunakan untuk menghasilkan warna merah dan biru pada layar dan lampu tertentu."],
64: [157.25, "f", "[Xe] 4f⁷ 5d¹ 6s²", "Gadolinium memiliki sifat magnetik yang kuat dan digunakan dalam teknologi medis tertentu."],
65: [158.925, "f", "[Xe] 4f⁹ 6s²", "Terbium digunakan untuk menghasilkan warna hijau pada bahan fosfor."],
66: [162.500, "f", "[Xe] 4f¹⁰ 6s²", "Disprosium digunakan dalam magnet berkinerja tinggi."],
67: [164.930, "f", "[Xe] 4f¹¹ 6s²", "Holmium memiliki momen magnetik yang sangat tinggi."],
68: [167.259, "f", "[Xe] 4f¹² 6s²", "Erbium digunakan dalam teknologi serat optik."],
69: [168.934, "f", "[Xe] 4f¹³ 6s²", "Tulium merupakan salah satu unsur tanah jarang yang cukup langka."],
70: [173.045, "f", "[Xe] 4f¹⁴ 6s²", "Iterbium digunakan dalam beberapa jenis laser dan jam atom."],
71: [174.967, "d", "[Xe] 4f¹⁴ 5d¹ 6s²", "Lutetium digunakan dalam detektor pada alat pemindaian medis PET."],
72: [178.49, "d", "[Xe] 4f¹⁴ 5d² 6s²", "Hafnium memiliki kemampuan menyerap neutron sehingga digunakan dalam batang kendali reaktor."],
73: [180.948, "d", "[Xe] 4f¹⁴ 5d³ 6s²", "Tantalum sangat tahan korosi dan digunakan dalam komponen elektronik."],
74: [183.84, "d", "[Xe] 4f¹⁴ 5d⁴ 6s²", "Wolfram memiliki titik leleh tertinggi di antara logam murni."],
75: [186.207, "d", "[Xe] 4f¹⁴ 5d⁵ 6s²", "Renium termasuk unsur yang sangat langka dan digunakan dalam mesin jet."],
76: [190.23, "d", "[Xe] 4f¹⁴ 5d⁶ 6s²", "Osmium merupakan salah satu unsur paling rapat atau padat."],
77: [192.217, "d", "[Xe] 4f¹⁴ 5d⁷ 6s²", "Iridium sangat tahan terhadap korosi."],
78: [195.084, "d", "[Xe] 4f¹⁴ 5d⁹ 6s¹", "Platina banyak digunakan sebagai katalis dan dalam perhiasan."],
79: [196.967, "d", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "Emas sangat mudah ditempa dan tidak mudah mengalami korosi."],
80: [200.592, "d", "[Xe] 4f¹⁴ 5d¹⁰ 6s²", "Raksa merupakan satu-satunya logam yang berwujud cair pada suhu ruang."]
};

// Nama golongan
const groupNames = {
    1: "1 (IA)",
    2: "2 (IIA)",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13 (IIIA)",
    14: "14 (IVA)",
    15: "15 (VA)",
    16: "16 (VIA)",
    17: "17 (VIIA)",
    18: "18 (VIIIA)"
};

// Fungsi menampilkan informasi unsur
function showElementInfo(element) {
    const info = document.getElementById("element-info");
    const data = elementInfo[element.number];

    if (!data) return;

    const [mass, block, configuration, fact] = data;
    const category = getCategory(element);

    const categoryNames = {
        "alkali": "Logam Alkali",
        "alkali-tanah": "Logam Alkali Tanah",
        "lantanida": "Lantanida",
        "transisi": "Logam Transisi",
        "logam-miskin": "Logam Pasca-Transisi",
        "metaloid": "Metaloid",
        "nonlogam": "Nonlogam",
        "gas-mulia": "Gas Mulia",
        "aktinida": "Aktinida"
    };

    info.innerHTML = `
        <div class="info-top">

            <div class="info-element">
                <span class="info-number">${element.number}</span>
                <span class="info-symbol">${element.symbol}</span>
                <span class="info-name">${element.name}</span>
                <span class="info-category">${categoryNames[category]}</span>
            </div>

            <div class="info-details">
                <p><span class="label-simbol">Simbol:</span> ${element.symbol}</p>
                <p><span class="label-nomor">Nomor Atom:</span> ${element.number}</p>
                <p><span class="label-massa">Massa Atom Relatif:</span> ${mass}</p>
                <p><span class="label-golongan">Golongan / Periode / Blok:</span> ${groupNames[element.group]} / ${element.period} / ${block}</p>
                <p><span class="label-kategori">Kategori Unsur:</span> ${categoryNames[category]}</p>
                <p><span class="label-konfigurasi">Konfigurasi Elektron:</span> ${configuration}</p>
            </div>

        </div>

        <div class="info-fact">
            <h2>Fakta Unik!</h2>
            <p>${fact}</p>
        </div>
    `;

    info.classList.add("show");

    info.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Menghubungkan setiap kotak unsur dengan informasinya
const elementBoxes = table.querySelectorAll(".element");

elementBoxes.forEach(function(box, index) {
    const element = elements[index];

    // Hanya unsur bernomor 1-80 yang memiliki informasi
    if (Number(element.number) >= 1 && Number(element.number) <= 80) {
        box.addEventListener("click", function() {
            showElementInfo(element);
        });
    }
});
