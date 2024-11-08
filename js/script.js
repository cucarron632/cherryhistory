const videos = document.querySelectorAll('.video__player');
const videoSources = [


    "https://media.icfcdn.com/fee05b/72/121708570/a08263b5b3f8405b8e5a69ca821fcba5/media.mp4",
    "https://media.icfcdn.com/9deeea/56/125387138/130cfdff436c409cb780e0dff54908e1/media.mp4",
    "https://media.icfcdn.com/dcbf60/32/120348766/a73185c8f61d42af992b3e1ad737acf1/media.mp4",
    "https://media.icfcdn.com/9deeea/72/127107566/930ab37176604e36b403dd1f4dbb7860/media.mp4",
    "https://media.icfcdn.com/9deeea/80/113228709/1cb52b4c541e42e5a8f40249bfc66f01/media.mp4",
    "https://media.icfcdn.com/9deeea/44/114276707/79fcf29b7f204f9ea77d3965d687e173/media.mp4",
    "https://media.icfcdn.com/9deeea/0/116377395/06e5cdb96f0c42edadd3e76354b03358/media.mp4",
    "https://media.icfcdn.com/9deeea/28/118263038/41f5f9b9858244c683b9130127673d5b/media.mp4",
    "https://media.icfcdn.com/fee05b/40/118263038/4bf90f1fdb3948e1b276990a1d8a111d/media.mp4",
    "https://media.icfcdn.com/9deeea/52/113228709/1a61ebb258c6477799f88e97117398ac/media.mp4",
    "https://media.icfcdn.com/9deeea/28/125937776/5b3c3d77dfd24f2f926242930b5eed6a/media.mp4",
    "https://media.icfcdn.com/dcbf60/12/125882045/28c22a1536bc4040bde90bfb818e6594/media.mp4",
    "https://media.icfcdn.com/dcbf60/96/113228709/b36ce1de0e954c75a6d5a748776e0fb3/media.mp4",
    "https://media.icfcdn.com/9deeea/80/99955153/4f28175e30374a3993e3570cd1a690ab/media.mp4",
    "https://media.icfcdn.com/9deeea/12/23086375/2ac47749edb7478f8c7c527f3279dc41/media.mp4",



    // Agrega aquí más URLs de videos según sea necesario
];

const nombresAleatorios = [
    "🇵🇹 Lorena Caterina 🇵🇹 ",
    "🇫🇮 Ana Maria 🇫🇮",
    "🇨🇦 Carolina Garcia 🇨🇦",
    "🇦🇺 NAKARY MILLER 🇦🇺",
    "🇺🇸 GRACIELA CATERINA 🇺🇸",
    "🇻🇪 Valentina Ribeiro 🇻🇪",
    "🇻🇪 G R A C I E L A 💘 🇻🇪",
    "🇵🇪 Mariana López 🇵🇪",
    "🇷🇴 Andrei Popescu 🇷🇴",
    "🇧🇪 Emma Dubois 🇧🇪",
    "🇬🇷 Ioanna Papadopoulos 🇬🇷",
    "🇨🇱 Matías Silva 🇨🇱",
    "🇭🇺 Levente Kovács 🇭🇺",
    "🇸🇦 Fatima Al-Mansoori 🇸🇦",
    "🇲🇽 Alejandro Hernández 🇲🇽",
    "🇵🇦 Camila González 🇵🇦",
    "🇨🇮 Aminata Diop 🇨🇮",
    "🇨🇴 Isabela Ríos 🇨🇴",
    "🇮🇹 Sofia Santoro 🇮🇹",
    "🇳🇴 Emilie Andersen 🇳🇴",
    "🇦🇹 Lara Hofmann 🇦🇹",
    "🇳🇿 Harper Wilson 🇳🇿",
    "🇨🇿 Klára Nováková 🇨🇿",
    "🇮🇪 Aoife Murphy 🇮🇪",
    "🇨🇭 Alessia Rossi 🇨🇭",
    "🇮🇳 Aarav Patel 🇮🇳",
    "🇦🇪 Layla Khan 🇦🇪",
    "🇸🇪 Malin Lindström 🇸🇪",
    "🇿🇦 Thabo Molefe 🇿🇦",
    "🇳🇱 Daan van der Berg 🇳🇱",
    "🇧🇷 Maria da Silva 🇧🇷",
    "🇫🇷 Léa Dubois 🇫🇷",
    "🇰🇷 Min-jun Kim 🇰🇷",
    "🇯🇵 Yui Tanaka 🇯🇵",
    "🇩🇪 Lena Müller 🇩🇪",
    "🇬🇧 Oliver Hughes 🇬🇧",
    "🇪🇸 Marta García 🇪🇸",
    // Agrega más nombres según sea necesario
];

const textosAleatorios = [
    "Watch Me Masturbate Live ❤️",
    "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
    "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
    "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
    "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
    "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
    "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
    "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
    "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
    "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
    "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
    "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
    "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
    "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
    "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
    "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
    "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
    // Agrega más textos según sea necesario
];

// Función para cambiar aleatoriamente el video
function changeRandomVideo() {
    videos.forEach(video => {
        const randomSourceIndex = Math.floor(Math.random() * videoSources.length);
        const newSource = videoSources[randomSourceIndex];

        video.src = newSource;
        video.load();
        video.play();
    });
}

// Función para cambiar aleatoriamente el nombre
function changeRandomName() {
    const nameElement = document.getElementById('randomName');
    const randomIndex = Math.floor(Math.random() * nombresAleatorios.length);
    const newName = nombresAleatorios[randomIndex];

    nameElement.textContent = newName;
}

// Función para cambiar aleatoriamente el texto
function changeRandomText() {
    const textElement = document.getElementById('randomText');
    const randomIndex = Math.floor(Math.random() * textosAleatorios.length);
    const newText = textosAleatorios[randomIndex];

    textElement.textContent = newText;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
    changeRandomVideo();
    changeRandomName();
    changeRandomText();
};

function recargarPagina() {
    // Recargar la página
    location.reload();
}





