// ==================== QUOTE CAROUSEL ==================== 
const quotes = [
    {
        text: "Adabiyot atomdan kuchli, lekin uning kuchini o'tin yorishga sarf qilish kerak emas.",
        author: "Abdulla Qahhor"
    },
    {
        text: "Yaxshi tarbiya ko'rgan odamning xislatlaridan biri shuki, bunday odam o'z faoliyatida boshqalardan bir qadam oldinga o'tsa, darrov orqaga qaraydi, sheriklariga yordam qo'lini uzatadi, safini kengaytirib, yangi g'alabani ko'zlaydi.",
        author: "Abdulla Qahhor"
    },
    {
        text: "Oilaviy baxtda hikmat ko'p. Baxtiyar oila eng birinchi va eng kuchli tarbiya o'chog'i, demak, yoshlarimizning tole'i, ertangi saodatli kishilar jamiyatimizning poydevoridir.",
        author: "Abdulla Qahhor"
    },
    {
        text: "Dunyodagi har bir katta-kichik kasbning fazilatlarini aytib o'tish uchungina ham bittadan roman yaratsa bo'ladi.",
        author: "Abdulla Qahhor"
    },
    {
        text: "Adabiy asar yozish uchun, hech shubhasiz, talant kerak. Lekin yozilgan narsani o'chirish, kitobxonga zarur gaplarning o'zini qoldirish uchun talantning o'zigina kifoya qilmaydi, insof ham kerak.",
        author: "Abdulla Qahhor"
    },
    {
        text: "Yurtni obod qilaman degan kishi o'zi obod bo'ladi.",
        author: "Abdulla Qahhor"
    }
];

let currentQuoteIndex = 0;

function showQuote(index) {
    const container = document.querySelector('.quotes-carousel');
    if (container && quotes[index]) {
        container.innerHTML = `
            <div class="quote-item">
                <p class="quote-text">"${quotes[index].text}"</p>
                <span class="quote-author">- ${quotes[index].author}</span>
            </div>
        `;
    }
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote(currentQuoteIndex);
}

function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentQuoteIndex);
}

// Auto-rotate quotes every 8 seconds
setInterval(() => {
    nextQuote();
}, 8000);

// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.work-item, .resource-item, .gallery-item').forEach(el => {
    observer.observe(el);
});

// ==================== MOBILE MENU ==================== 
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// ==================== GALLERY LIGHTBOX ==================== 
const galleryItems = document.querySelectorAll('.gallery-item');
let lightboxOpen = false;

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('.gallery-img');
        if (img && img.src) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    lightboxOpen = true;
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            <img src="${src}" alt="${alt}" class="lightbox-img">
            <p class="lightbox-caption">${alt}</p>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Add lightbox styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s;
        }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .lightbox-img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 8px;
        }
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 3em;
            cursor: pointer;
            z-index: 1001;
        }
        .lightbox-caption {
            color: white;
            text-align: center;
            margin-top: 15px;
        }
    `;
    document.head.appendChild(style);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOpen) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.remove();
        lightboxOpen = false;
    }
}

// ==================== SCROLL TO TOP BUTTON ==================== 
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '&#8679;';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #8B7355;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5em;
    opacity: 0;
    transition: all 0.3s;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== LOAD EVENT ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // Initialize first quote
    showQuote(0);
    
    // Add active class to current nav item
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ==================== PLACEHOLDER IMAGE HANDLING ==================== 
const placeholderImages = [
    'images/abdulla-qahhor-port.jpg',
    'images/ogrim.jpg',
    'images/sinchalak.jpg',
    'images/bemor.jpg',
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg'
];

// Create placeholder SVG for images
function createPlaceholder(alt) {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23D4A574' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%238B7355' text-anchor='middle' dy='.3em' font-family='Georgia'%3E${encodeURIComponent(alt)}%3C/text%3E%3C/svg%3E`;
}

// Replace missing images with placeholders
document.querySelectorAll('img').forEach(img => {
    const onError = () => {
        img.src = createPlaceholder(img.alt || 'Rasm');
        img.style.background = '#E8DCC4';
    };
    img.addEventListener('error', onError);
    
    // Check if image loaded
    if (img.complete && img.naturalHeight === 0) {
        onError();
    }
});

// ==================== SERVICE WORKER (Optional) ==================== 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration code can go here
    });
}

// ==================== ANALYTICS TRACKING (Optional) ==================== 
function trackPageView(pageName) {
    console.log('Page view:', pageName);
    // Add analytics code here
}

// ==================== PRINT STYLES ==================== 
window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Website loaded successfully');
        initializeCarousel();
        initializeMap();
    });
} else {
    console.log('Website loaded successfully');
    initializeCarousel();
    initializeMap();
}

// ==================== CAROUSEL/SLIDER FUNCTIONS ==================== 
let currentSlideIndex = 1;

function nextSlide() {
    showSlide(currentSlideIndex += 1);
}

function prevSlide() {
    showSlide(currentSlideIndex -= 1);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    if (dots.length > 0) {
        dots.forEach(dot => dot.style.backgroundColor = '#D4A574');
        dots[currentSlideIndex - 1].style.backgroundColor = '#8B7355';
    }
    
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
}

function initializeCarousel() {
    showSlide(currentSlideIndex);
    // Auto-rotate carousel every 6 seconds
    setInterval(() => {
        nextSlide();
    }, 6000);
}

// ==================== WORK MODAL FUNCTIONS ==================== 
const workDetails = {
    'ogri': {
        title: 'O\'g\'ri',
        year: '',
        type: 'Hikoya',
        description: 'Hikoyada oddiy dehqon Qobil boboning yagona ho\'kizi o\'g\'irlanishi va uni topish ilinjida amaldorlarga murojaat qilishi tasvirlangan. Qobil bobo amaldorlarning poraxo\'rligi va loqaydligi sababli nafaqat ho\'kizidan, balki bor-yo\'g\'idan ham ayriladi. Asar orqali o\'sha davr tuzumining adolatsizligi va xalqning soddaligi ochib berilgan.'
    },
    'bemor': {
        title: 'Bemor',
        year: '',
        type: 'Hikoya',
        description: 'Sotiboldining xotini og\'ir dardga chalinadi. Kambag\'allik va savodsizlik sababli u xotinini zamonaviy tibbiyotga emas, balki folbin va eshonlarga olib boradi. Sotiboldining chorasizligi va oxir-oqibat ayolining vafot etishi jamiyatdagi chuqur ijtimoiy muammolarni ko\'rsatadi.'
    },
    'dahshat': {
        title: 'Dahshat',
        year: '',
        type: 'Hikoya',
        description: 'Unsin ismli ayolning qabristonga borishga majbur bo\'lishi va u yerda boshidan kechirgan ruhiy iztiroblari tasvirlangan. Asarda ayollarning huquqsizligi va inson ruhiyatidagi qo\'rquvning "dahshatli" oqibatlari mahorat bilan yoritilgan.'
    },
    'sinchalak': {
        title: 'Sinchalak',
        year: '',
        type: 'Qissa',
        description: 'Asar Saida ismli yosh, bilimli va qat\'iyatli qiz haqida. U eskicha dunyoqarashli, manmanlikka berilgan kolxoz raisi Qalandarov bilan to\'qnash keladi. Saida o\'zining "kichik" bo\'lishiga qaramay, haqiqat va yangilik uchun kurashadi. Qissa o\'zbek ayolining jamiyatdagi faol o\'rnini ko\'rsatib bergan.'
    },
    'otmishdan': {
        title: 'O\'tmishdan ertaklar',
        year: 1965,
        type: 'Avtobiografik asar',
        description: 'Adibning bolalik xotiralari asosida yozilgan avtobiografik asar. Unda yozuvchining ota-onasi bilan kechgan og\'ir kunlari, qashshoqlik va mustamlaka davridagi xalq hayoti "yumshoq" lekin achchiq xotiralar orqali hikoya qilinadi.'
    },
    'sarob': {
        title: 'Sarob',
        year: 1934,
        type: 'Roman',
        description: 'Bu roman Abdulla Qahhorning eng yirik va murakkab asarlaridan biridir. Asar bosh qahramoni Saidiy timsolida o\'z yo\'lini topolmagan, hayoti "sarob"ga aylangan ziyolining ruhiy tushkunligi va fojiasi tasvirlangan. Romanda inson ruhiyatining eng nozik qatlamlari ochib berilgan.'
    },
    'anor': {
        title: 'Anor',
        year: '',
        type: 'Hikoya',
        description: 'Hikoya qahramoni Turobjonning homilador xotini kutilmaganda anor tusab qoladi. Turobjon esa o\'ta kambag\'al, uyida bir tishlam non tugul, anor sotib olishga sariq chaqasi ham yo\'q. U anorni topish uchun har xil yo\'llarni qidiradi. Oxir-oqibat anorni topib kelganida, xotini bilan o\'rtasida chiqqan janjal orqali chorasiz insonning ruhiy iztirobi ko\'rsatilgan. Asar qashshoqlik nafaqat qorinni, balki insoniy munosabatlarni ham och qoldirishi haqida o\'ylashga majbur qiladi.'
    },
    'asrbobo': {
        title: 'Asror bobo',
        year: '',
        type: 'Hikoya',
        description: 'Bu asar insonning hayotga bo\'lgan cheksiz muhabbati va mehnatsevarligi haqida. Asror bobo — yoshi bir joyga borib qolgan, lekin g\'ayrati ichiga sig\'maydigan mehnatkash chol. U o\'z hovlisida tinmay mehnat qiladi, bog\' yaratadi. Hikoyada Asror boboning o\'limi oldidan ham o\'z bog\'i, ekayotgan nihollari haqida qayg\'urishi tasvirlangan. Qahhor bu asar orqali insonning umri faqat yashab o\'tish emas, balki o\'zidan keyin biror iz, bog\' yoki yaxshilik qoldirishdan iborat ekanini uqtiradi.'
    }
};

function openWorkModal(workId) {
    const work = workDetails[workId];
    if (!work) return;
    
    const modal = document.createElement('div');
    modal.className = 'work-modal';
    modal.id = 'work-modal-' + workId;
    modal.innerHTML = `
        <div class="work-modal-content">
            <span class="close" onclick="closeWorkModal('${workId}')">&times;</span>
            <h2>${work.title}</h2>
            <p class="work-meta">${work.year ? `<strong>Yil:</strong> ${work.year} | ` : ''}<strong>Turi:</strong> ${work.type}</p>
            <div class="work-description">
                <p>${work.description}</p>
            </div>
            <button onclick="closeWorkModal('${workId}')" class="btn-primary">Yopish</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeWorkModal(workId);
        }
    });
}

function closeWorkModal(workId) {
    const modal = document.getElementById('work-modal-' + workId);
    if (modal) {
        modal.remove();
    }
}

// ==================== TEST VALIDATION FUNCTIONS ==================== 
function submitTest() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    if (!q1 || !q2 || !q3) {
        alert('Iltimos, barcha savollariga javob bering!');
        return;
    }
    
    let correct = 0;
    if (q1.value === 'correct') correct++;
    if (q2.value === 'correct') correct++;
    if (q3.value === 'correct') correct++;
    
    const percentage = (correct / 3) * 100;
    const resultDiv = document.getElementById('test-result');
    
    if (percentage === 100) {
        resultDiv.innerHTML = `<div style="background: #4CAF50; color: white; padding: 15px; border-radius: 5px;"><strong>🎉 Ajoyib!</strong> Siz 3 ta 3 ta savolga to'g'ri javob berdingiz. Qahhor haqida juda ko'p bilasiz!</div>`;
        resultDiv.style.display = 'block';
    } else if (percentage >= 66) {
        resultDiv.innerHTML = `<div style="background: #2196F3; color: white; padding: 15px; border-radius: 5px;"><strong>✓ Yaxshi!</strong> Siz ${correct} ta 3 ta savolga to'g'ri javob berdingiz. Qahhor haqida ko'proq o'qishingiz mumkin.</div>`;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = `<div style="background: #FF9800; color: white; padding: 15px; border-radius: 5px;"><strong>⚠ Qayta ko'riklar</strong> Siz ${correct} ta 3 ta savolga to'g'ri javob berdingiz. Abdulla Qahhor haqida ko'proq o'qing!</div>`;
        resultDiv.style.display = 'block';
    }
}

// ==================== RESOURCE FUNCTIONS ==================== 
function showResourceDetail(category) {
    const resources = {
        'works': {
            title: 'Abdulla Qahhorning Asarlari',
            items: [
                'O\'g\'rim (1934) - Roman',
                'Sinchalak (1930) - Novelka',
                'Bemor (1928) - Drama',
                'Paxta Dehqonlari (1935) - Roman',
                'Shayton Uyi (1930) - Drama',
                'Lik Asarlar (1920-1940) - Lik to\'plamlari'
            ]
        },
        'articles': {
            title: 'Ilmiy va Adabiy Maqolalar',
            items: [
                'Qahhorning Ijodiy Uslubi - O. Ismatov',
                'Sabab-Natija Hamjamiyati Qahhor Asarlarida - M. Abdullayev',
                'Sotsial Realism Qahhor Ijodida - L. Isaqova',
                'Qahrornoma Tipi va Tasnifi - R. Mirkhaitov',
                'Qahhor Drama va Teatr Masalasi - Sh. Karmatov'
            ]
        },
        'links': {
            title: 'Foydali Veb-Saytlar',
            items: [
                'O\'zbek Klassik Adabiyoti - www.adabiyot.uz',
                'Sharq Adabiyoti Markazi - www.sharq.uz',
                'O\'zbek Davlat Kutubxonasi - www.library.uz',
                'Adabiy-Sened Markazi - www.risalat.uz',
                'Abdulla Qahhor Xotira Markazi - www.qahhor-memorial.uz'
            ]
        }
    };
    
    const resource = resources[category];
    if (!resource) return;
    
    const modal = document.createElement('div');
    modal.className = 'resource-modal';
    modal.innerHTML = `
        <div class="resource-modal-content">
            <span class="close" onclick="this.closest('.resource-modal').remove()">&times;</span>
            <h2>${resource.title}</h2>
            <ul>
                ${resource.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <button onclick="this.closest('.resource-modal').remove()" class="btn-primary">Yopish</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ==================== AUDIO PLAYER FUNCTIONS ==================== 
const audioFiles = {
    'ogrim-audio': {
        title: 'O\'g\'rim - Abdulla Qahhor',
        src: 'audio/ogrim-sample.mp3'
    },
    'sinchalak-audio': {
        title: 'Sinchalak - Abdulla Qahhor',
        src: 'audio/sinchalak-sample.mp3'
    },
    'bemor-audio': {
        title: 'Bemor - Abdulla Qahhor',
        src: 'audio/bemor-sample.mp3'
    }
};

function playAudio(audioId) {
    const audio = audioFiles[audioId];
    if (!audio) {
        alert('Audio fayl topilmadi!');
        return;
    }
    
    const modal = document.getElementById('audio-player-modal');
    const audioElement = document.getElementById('audio-element');
    const audioTitle = document.getElementById('audio-title');
    
    if (modal && audioElement) {
        audioTitle.textContent = audio.title;
        audioElement.src = audio.src;
        modal.style.display = 'flex';
    }
}

function closeAudioPlayer() {
    const modal = document.getElementById('audio-player-modal');
    const audioElement = document.getElementById('audio-element');
    if (modal) {
        modal.style.display = 'none';
        audioElement.pause();
    }
}

// ==================== MAP INITIALIZATION ==================== 
function initializeMap() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        console.log('Leaflet not loaded, map will be initialized on script load');
        return;
    }
    
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Initialize map centered on Tashkent
    const map = L.map('map').setView([41.2995, 69.2401], 12);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        maxNativeZoom: 18
    }).addTo(map);
    
    // Add markers for important locations
    const locations = [
        {
            name: 'Tashkent - Abdulla Qahhor Tug\'ilgan Shaxar',
            lat: 41.2995,
            lng: 69.2401,
            description: 'Abdulla Qahhor 1907 yili bu yerdagi Tashkentda tug\'ilgan'
        },
        {
            name: 'O\'zbekiston Davlat Kutubxonasi',
            lat: 41.299,
            lng: 69.241,
            description: 'Abdulla Qahhorning asarlari shu yerdagi kutubxonada saqlanadi'
        },
        {
            name: 'Xorezm - Qahhorning Mehri',
            lat: 41.367,
            lng: 70.933,
            description: 'Qahhor o\'z asarlarida Xorezm tarixiga alohida e\'tibor bergan'
        }
    ];
    
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .bindPopup(`<b>${location.name}</b><br>${location.description}`)
            .addTo(map);
    });
}
