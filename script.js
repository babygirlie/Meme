// ==========================================
// PASTE YOUR 20 REELS LINKS HERE
// ==========================================
const allReels = [
    "https://www.instagram.com/reel/DUVz7etCbtE/?igsh=bHJranh4Nzlmd2g2",
    "https://www.instagram.com/reel/DUGnlfokhme/?igsh=ODl5OTd3bndlZTE=",
    "https://www.instagram.com/reel/DT5YvlnCXTf/?igsh=cXRpYjY3NjlmOHVp",
    "https://pin.it/5pQF6okZU",
    "https://www.instagram.com/reel/DXYofi0DkT9/?igsh=MTMzem9kbTh3N2FhMg==",
    "https://youtube.com/shorts/kCFugm8LD0g?si=RK8P0a5W4cP-Qfdp",
    "https://pin.it/4vTNqKiVp",
    "https://pin.it/37Sg3xx4S",
    "https://www.instagram.com/reel/DWrTZgUAZnA/?l=1",
    "https://pin.it/KR6BUvFy2",
    "https://youtube.com/shorts/uuMEIum07eE?si=q2WQ4QELaDykaD_n",
    "https://youtube.com/shorts/W9HghtrwVm8?si=2GnmV6OeSHMCvHGP",
    "https://youtube.com/shorts/07H71X04W1g?si=TTcV1rvsEmqRFtVJ",
    "https://youtube.com/shorts/xTokoZUERuk?si=-P0aaDQQc-pECEoc",
    "https://youtube.com/shorts/wz_SVUPrV4I?si=QkpwCV4ZJq5pFQPa",
    "https://youtube.com/shorts/4sAsdw8d78s?si=b8hIDXAUbK4zawsW",
    "https://youtube.com/shorts/z6ZffyGxR0A?si=2_fmXmJ5AIeucEwZ",
    "https://youtube.com/shorts/WyqB47-lCIs?si=geaFTEvcElje2hOZ",
    "https://youtube.com/shorts/vPb0atspXEQ?si=AB3LXH51xmNiZqrC",
    "https://youtube.com/shorts/cyrxV4ARvyA?si=tjMbvnxDU5yRyutc"
];

let currentMemeIndex = 1;
const totalMemes = 100; // Total meme pages

let currentReelsPage = 1;
const reelsPerPage = 10; // 10 links on page 1, 10 links on page 2 (Total 2 pages)

// Move from Main Page to Page 1 and play music
function startCollection() {
    // Play the background music
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(error => {
            console.log("Audio playback failed or needs user interaction:", error);
        });
    }

    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('meme-page').classList.remove('hidden');
    showMeme(currentMemeIndex);
}


// Load a Meme Page
function showMeme(index) {
    document.getElementById('meme-title').innerText = `Meme Page ${index} of ${totalMemes}`;
    // This expects your photos to be named 1.jpg, 2.jpg, etc. inside the same folder
    document.getElementById('meme-img').src = `${index}.jpg`;
}

// Move to next meme page or switch to reels
function nextMeme() {
    if (currentMemeIndex < totalMemes) {
        currentMemeIndex++;
        showMeme(currentMemeIndex);
    } else {
        // If 100 memes are done, switch to Reels Section
        document.getElementById('meme-page').classList.add('hidden');
        document.getElementById('reels-page').classList.remove('hidden');
        showReelsPage(currentReelsPage);
    }
}

// Load Reels Page (1 or 2)
function showReelsPage(page) {
    document.getElementById('reels-title').innerText = `Reels Page ${page} of 2`;
    const listContainer = document.getElementById('reels-list');
    listContainer.innerHTML = '';

    let start = (page - 1) * reelsPerPage;
    let end = start + reelsPerPage;
    let pageReels = allReels.slice(start, end);

    pageReels.forEach((link, idx) => {
        let globalIndex = start + idx + 1;
        listContainer.innerHTML += `<a href="${link}" target="_blank" class="reel-link">🎬 Reel Link #${globalIndex}</a>`;
    });

    // Change button text on the very last page
    if (page === 2) {
        document.getElementById('reels-next-btn').innerText = "The End ❤️";
    }
}

// Handle switching between the 2 reels pages
function nextReelsPage() {
    if (currentReelsPage === 1) {
        currentReelsPage = 2;
        showReelsPage(currentReelsPage);
    } else {
        alert("You reached the end of the collection! ❤️");
    }
}
