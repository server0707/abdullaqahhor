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
        description: `<p style="text-align: right;">Otning o‘limi itning bayrami.
Maqol</p>

Kampir tong qorong‘isida xamir qilgani turib ho‘kizidan xabar oldi. O!.. Ho‘kiz yo‘q, og‘il ko‘cha tomondan teshilgan... Dehqonning uyi kuysa kuysin, ho‘kizi yo‘qolmasin. Bir qop somon, o‘n-o‘n beshta xoda, bir arava qamish—uy, ho‘kiz topish uchun necha zamonlar qozonni suvga tashlab qo‘yish kerak bo‘ladi.
Odamlar dod ovoziga o‘rganib qolgan: birovni eri uradi, birovning uyi xatga tushadi... Ammo kampirning dodiga odam tez to‘plandi. Qobil bobo yalang bosh, yalang oyoq, yaktakchan og‘il eshigi yonida turib dag‘-dag‘ titraydi, tizzalari bukilib-bukilib ketadi; ko‘zlari javdiraydi, hammaga qaraydi, ammo hech kimni ko‘rmaydi. Xotinlar o‘g‘rini qarg‘aydi, it huradi, tovuqlar qaqag‘laydi. Kimdir shunday kichkina teshikdan ho‘kiz sig‘ishiga aql ishonmasligi to‘g‘risida kishilarga gap ma’qullaydi.
Qobil boboning qo‘shnisi - burunsiz ellikboshi kirdi. U og‘ilga kirib teshikni, ho‘kiz bog‘langan ustunni diqqat bilan ko‘zdan kechirdi; negadir ustunni qimirlatib ham ko‘rdi, so‘ngra Qobil boboni chaqirdi va past tovush bilan dedi:
–    Ho‘kizing hech qayoqqa ketmaydi, topiladi!
Uning og‘ilga kirib qilgan taftishi Qobil boboga bir umid bag‘ishlagan edi, bu so‘zi haddan ziyod sevintirdi. Chol yig‘lab yubordi.
–    Xudo xayr bersin... Ola ho‘kiz edi...
Odamlar, o‘g‘ri devorni qachon va qanday asbob bilan teshgani, ho‘kizni qaysi tomonga olib ketgani, uni qaysi bozorda sotishi mumkin ekanligi to‘g‘risida bahslasha-bahslasha tarqaldi. G’ovur bosildi. Qobil boboning kampiri yig‘idan to‘xtab, ellikboshini duo qila ketdi. 
Ellikboshi o‘g‘ri teshgan yerni yana bir ko‘rdi. Qobil bobo qo‘l qovushtirib uning ketidan yurar va yig‘lar edi.
—    Yig‘lama, yig‘lama deyman! Ho‘kizing oq poshsho qo‘l ostidan chiqib ketmagan bo‘lsa, topiladi.
Ellikboshi ho‘kizni juda naqd qilib qo‘ydi – go‘yo u ko‘chaga chiqsa bas – ho‘kiz topiladi. Bu "xudo yallaqagur" shunchalik qilgandan keyin bir nima berish lozim-da. Tekinga mushuk oftobga chiqmaydi. Bu odam ellikboshi bo‘lish uchun ozmuncha pul sochganmi? Mingboshining bir o‘ziga yetti yuz bog‘ beda, bir toy bergani ma’lum. Poshsholikdan oylik yemasa! Qobil bobo hamyonini qoqishtirib, borini ellikboshiga berdi, yana qancha duo qiddi. Ellikboshi beto‘xtov aminga xabar qil-moqchi bo‘lib chiqib ketdi.
Kechqurun Qobil bobo aminning oldiga boradigan bo‘ldi. Quruq qoshiq og‘iz yirtadi, aminga qancha pul olib borsa bo‘ladi? Berganga bitta ham ko‘p, olganga o‘nta ham oz. Chol-kampir kengashib shunday qarorga kelishdi: bu chiqim oxirgi va ho‘kizni bo‘ynidan bog‘lab beradigan chiqim, shuning uchun pulning yuziga qarash aqldan emas.
Qobil bobo ro‘para bo‘lganda amin og‘zini ochmasdan qattiq kekirdi, keyin bag‘baqasini osiltirib kuldi.
—    Ha, sigir, yo‘qoldimi?
—    Yo‘q... sigir emas, ho‘kiz, ola ho‘kiz edi.
—    Ho‘kizmi?.. Ho‘kiz ekan-da! Himm... Ola ho‘kiz? Tavba!..
—    Bori-yo‘g‘im shu bitta ho‘kiz edi...
Amin chinchalog‘ini ikkinchi bo‘g‘inigacha burniga tiqib kuldi.
—    Yo‘qolmasdan ilgari bormidi? Qandaqa ho‘kiz edi?
—    Ola ho‘kiz...
—    Yaxshi ho‘kizmidi yo yomon ho‘kizmidi?
—    Qo‘sh mahali...
—    Yaxshi ho‘kiz birov yetaklasa keta beradimi?
—    Bisotimda hech narsa yo‘q...
—    O’zi qaytib kelmasmikin?.. Birov olib ketsa qaytib kela ber, deb qo‘yilmagan ekan-da! Nega yig‘lanadi? A? Yig‘lanmasin!
Qobil bobo yerga qarab tek qoldi.
—    Qidirtirsakmikin-a?—dedi amin chinchalog‘ini etigining ostiga artib, - suyunchisi nima bo‘ladi? Suyunchidan chashna olib kelinmadimi?
 Aminning bu gapi Qobil boboga "Ma, ho‘kizing" degan-day bo‘lib ketdi.
—    Kam bo‘lmang,— dedi pulni uzatib,— yana xizmatingizdaman.
—    Men beto‘xtov pristavga xabar beraman. O’zi chaqirtiradi. Bir hafta o‘tdi. Bu bir hafta ichida kampir "duoning zo‘ri bilan qulf ochadigan" azayimxonga obdastagardon qildirgani qatnab yarim qop jiyda, uch yelpish tovoq jo‘xori, ikki kalava ip eltdi, ammo ish chiqmadi. Sakkizinchi kuni Qobil bobo yana aminning oldiga bordi. Aminning tepa sochi tikka bo‘ddi:
—    Ha, ho‘kizni uylariga eltib berilsinmi?! Axir, borilsin, arz qilinsin-da! Fuqaroning arzga borishi arbobning izzati bo‘ladi!
Qobil bobo yor-do‘stlari bilan kengashdi — pristavga puldan boshqa nima olib borsa bo‘ladi? Ma’lum bo‘ldiki, uni begim deguncha kishining beli sinar ekan.
Uchta tovuq, garchi biri kurk bo‘lsa ham, Qobil boboning o‘zidan chiqdi. Yuzta tuxumni qo‘ni-qo‘shni, yor-birodarlar o‘zaro yig‘ib berdi. Ammo bu tortiq bilan tilmochdan nari o‘tib bo‘lmadi. Tilmoch tortiqni oldi va beto‘xtov pristavga yaxshilab tushuntirishni va’da qildi. Cholning butun bo‘g‘inlari bo‘shashib ketdi, keyin tutoqishdi, ammo go‘rda bir narsa deya oladimi! "O’ynashmagil arbob bilan - seni urar har bob bilan". "Yaxshilab tushuntirilgan" pristav bitta kulangir, bitta farangi tovuq, uch so‘m pulni olganidan keyin, Qobil boboning baxtiga, "beto‘xtov hokimga xabar beraman" demasdan, "aminga bor",  deb qo‘ya qoldi. Amin "ellikboshiga borilsin", dedi.
—    Gumoningizni ayting bo‘lmasa! — dedi ellikboshi tajang bo‘lib, - kim olganini men bilmasam, avliyo bo‘lmasam! Olgan odam allaqachon so‘yib saranjomladi-da! Uzoq demasangiz, erinmasangiz ko‘nchilikka borib terilarni bir qarab chiqing. Ammo terisi ko‘nchilikka tushgan bo‘lsa, allaqachon charm bo‘ldi; xudo biladi, kavush bo‘lib bozorga chiqdimi...
—    Endi bizga juda qiyin bo‘ldi-da. Peshonam sho‘r bo‘lmasa... — dedi chol yerga qarab.
 — Ey, yosh bolamisiz! Nega yig‘laysiz? Kap-katta odam... Bitta ho‘kiz bo‘lsa bir gap bo‘lar, xudo ajalga to‘zim bersin! Men qaynagamga aytayin, sizga bitta xo‘kiz bersin. Bitta ho‘kiz odamning xunimi?
Ertasiga ellikboshi Qobil boboni boshlab qaynatasi— Egamberdi paxtafurushning oldiga olib bordi. Paxtafurush cholning holiga ko‘p achindi va yerini haydab olgani bitta emas, ikkita ho‘kiz berdi, lekin "kichkinagina" sharti bor. Bu shart kuzda ma’lum bo‘ladi...
`
    },
    'bemor': {
        title: 'Bemor',
        year: '',
        type: 'Hikoya',
        description: `<p style="text-align: right;">Osmon yiroq, yer qattiq (maqol).</p>

Sotiboldining xotini og‘rib qoldi. Sotiboldi kasalni o‘qitdi - bo‘lmadi, tabibga ko‘rsatdi. Tabib qon oldi, betobning ko‘zi tinib, boshi aylanadigan bo‘lib qoldi, baxshi o‘qidi. Allaqanday bir xotin kelib, tolning xipchini bilan savaladi, tovuq so‘yib qonladi. Bularning hammasi, albatta, pul bilan bo‘ladi. Bunday vaqtlarda yo‘g‘on cho‘ziladi, ingichka uziladi.
Shaharda bitta doktorxona bor. Bu doktorxona to‘g‘risida Sotiboldining bilgani shu: salqin, tinch parkda, daraxtlar ichiga ko‘milgan baland va oq imorat: shisha qabzali kulrang eshigida qo‘ng‘iroq tugmasi bor. Chigit po‘choq va kunjara bilan savdo qiladigan xo‘jayin Abdug‘aniboy omborida qulab ketgan qoplar ostida qolib uladigan bo‘lganida bu doktorxonaga bormay Sim*ga ketgan edi.

Doktorxona deganda Sotiboldining ko‘zi oldiga izvosh va oq podshoning surati solingan 25 so‘mlik pul kelar edi.
Bemor og‘irlashdi. Sotiboldi xo‘jayinining oldiga arzga bordi, ammo bu borishdan muddaosi nima ekanini aniq bilmas edi. Abdug‘aniboy uning so‘zini eshitib ko‘p afsuslandi, qo‘lidan kelsa hozir uning xotinini oyoqqa bostirib berishga tayyor ekanini bildirdi, keyin so‘radi:
- Devonai Baxovaddinga hech narsa ko‘tardingmi? o‘avsula’zamga-chi?
Sotiboldi ketdi. Bemorning oldidan jilmaslik va shu bilan birga tirikchilik uchun xonaki bir kasb kilishga majbur bo‘ldi - har xil savatchalar to‘kishni o‘rgandi. U ertadan kechgacha oftobshuvoqda gavronlar ichiga ko‘milib savat to‘qiydi. To‘rt yashar qizchasi qo‘liga ro‘molcha olib, onasining yuzini karaxt, nimjon, xirra pashshalardan quriydi, ba’zan, qo‘lida ro‘molcha, mukka tushib uxlab qoladi. Hammayoq jim. Faqat pashsha g‘ing‘ilaydi. Bemor inkillaydi, har zamon yaqin - yiroqdan gadoy tovushi eshitiladi: «Xey do‘st, shaydullo ba nomi Ollo, sadaqa raddi balo, ba qavli rasuli xudo...»
Bir kechasi bemor juda azob tortdi. U har ingraganda Sotiboldi chakkasiga birov solingan kishiday talvasaga tushar edi. Qo‘shnisi - bir kampirni chaqirdi. Kampir bemorning to‘zigan sochlarini tuzatdi, u yoq bu yog‘ini siladi, so‘ngra ... o‘tirib yig‘ladi.
- Begunoh go‘dakning saxarda qilgan duosi ijobat bo‘ladi, uyg‘oting qizingizni ! - dedi.
Bola anchagacha uyqu g‘ashligi bilan yig‘ladi. Keyin otasining g‘azabidan, onasining ahvolidan qo‘rkib, kampir o‘rgatgancha duo qildi:
- Xudoyo ayamdi daydiga davo beygin...
Bemor kundan kunga battar, oxiri usal buldi. «Ko‘ngilga armon bo‘lmasin» deb «Chilyosin» xam qildirishga to‘g‘ri keldi. Sotiboldi to‘kigan savatlarini ulgurji oladigan baqqoldan 20 tanga qarz ko‘tardi. «Chilyosin»dan bemor tetik chiqqanday bo‘ldi, shu kechasi hatto ko‘zini ochib, qizchasini yoniga tortdi va pichirladi:
- Xudo qizimning saxarlari qilgan duosini dargohiga qabul qildi. Dadasi, endi tuzukman, qizimni saxarlari uyg‘otmang.

Yana ko‘zini yumdi, shu yumgancha qaytib ochmadi - saxarga borib uzildi. Sotiboldi qizchasini o‘lik yonidan olib, boshqa yoqqa yotqizayotganda qizcha uyg‘ondi va ko‘zini ochmasdan odatdagicha duo qildi:
- Xudoyo ayamdi daydiga davo beygin....
Sim* hozirgi Farg‘ona shahri
`
    },
    'dahshat': {
        title: 'Dahshat',
        year: '',
        type: 'Hikoya',
        description: `<p style="text-align: right;">Xotin-qizlarning burun zamonda ko‘rgan kunini bilmaysizlar, qizlarim, aytgan bilan ishonmaysizlar!..
To‘raxon oyi</p>

Yaqin ikki haftadan beri ko‘z ochirmayotgan kuzak shamoli yaydoq daraxtlar shoxida chiyillaydi, g‘uvillaydi; tomlarda vishillaydi, yopiq eshik va darchalarga bosh urib uf tortadi.
Bunday kechalarda odamzod qo‘ymijoz g‘uj bo‘lib va nimanidir kutib jimgina o‘tirishni xohlab qoladi.
Olimbek dodxoning sakkiz xotini katta kundosh Nodirmohbegimning uyiga yig‘ilib, sandal atrofida o‘tirishar edi. Dodxo har kecha taroveh namozidan keyin halqaga qolar edi, bu kecha erta qaytdi. Hamma to‘zidi: xotinlardan biri uning sallasini oldi, biri chakmoniga qo‘l uzatdi, biri mahsisini tortgani chog‘landi... Kundoshlarning eng kichigi — bu dargohga tushganiga besh oygina bo‘lgan kelinchak — ganjiravonlik Unsinoy chilim solib tutdi. Dodxo chilimni bir marta, lekin juda qattiq tortdi-yu, yasov tortib turgan xotinlariga e’tibor qilmay, to‘rga o‘tdi va darchani jindakkina qiya qilib, bir ko‘zi bilan tashqariga qaradi. Shamol goh och bo‘riday uvillar, goh o‘lim changaliga tushgan mushukday pixillar, vag‘illar, hech narsa-hech narsa ko‘rinmas edi.
Dodxo darchani zichlab yopib, joyiga o‘tirib tasbeh o‘girishga kirishdi. Uning barmoqlari tasbeh donalarini tez-tez o‘tkazayotgan bo‘lsa ham, qulog‘i g‘uvillayotgan shamolda, xayoli go‘ristonda edi: "Hozir go‘riston qanaqa vahimali bo‘lsa ekan..."
Uzbek go‘ristoni o‘zi xunuk, buning ustiga, go‘riston haqida aytilmagan xunuk gap, to‘qilmagan vahimali mish-mish qolgan emas. Haqiqatan, bunday kechalarda go‘riston esiga tushgan har qanday odam, ayniqsa, dodxo singari payg‘ambar yoshidan oshib, kafanligini sandiqqa solib qo‘ygan kishi o‘lishdan ham ko‘ra go‘ristonda yotishini o‘ylaganida tiligacha sovuq ter chiqaradi.
Dodxo boshidan go‘riston xayolini chiqarib tashlash uchun tasbehini qo‘yib undan-bundan gapirgan bo‘ldi, lekin hech kim bu gaplarga gap ulamadi.
Shamol bir xuruj qilganida nimanidir keltirib darchaga urdi. U narsa darchani tirmalaganicha sidirilib pastga tushib ketdi. Hamma o‘tirgan yerida go‘yo bir qarich cho‘kkanday bo‘ldi va tin olmay bir-biriga qaradi. Dodxo xotinlariga, ulardan ham ko‘ra o‘ziga taskin berish uchun o‘rnidan turib darchaning bir tomonini ochdi. Darchadan kirgan shamol osma chiroqni lipillatdi, tebratdi. Dodxo pastga qaradi va suyunib ketganday:
—    Bo‘yra, bo‘yra ekan!— dedi va darchani yana zich yopib joyigao‘tirdi.
Bo‘yra odatda tobutga solinadigan bo‘lganidan, dodxoning ko‘z oddiga odamlarning yelkasida lapanglab ketayotgan tobutni keltirdi. Tobut esa yana go‘ristonni eslatdi, go‘riston haqida bolaligidan qulog‘ida qolib kelgan vahimali gaplarni, hodisalarni jonlantirib yubordi. Dodxo bu xayollarni yengish uchun go‘riston vahimalaridan o‘zi so‘z ochdi va ikki og‘iz gapining birida o‘zining dovyurakligini xotinlariga, ulardan ham ko‘ra o‘ziga pisanda qila ketdi.
Gapdan gap chiqib, Nodirmohbegim bir voqeani aytib berdi.
—    Bola edim. Rahmatli dadam gap yer edilar. Bir mehmonxona yigit... Mana shunaqa shamol kechasi ekan. "Hozir kim go‘ristonga borib, Asqarponsotning go‘riga pichoq sanchib
keladi?" degan gap bo‘lipti. Shunda bir kishi pichog‘ini qinidan sug‘urib: "Men sanchib kelaman",— depti, bitta qo‘ydan garov bog‘lashib yo‘lga tushipti. Jo‘ralari hali kutishar emish — yo‘q, hali kutishar emish — yo‘q; tong otipti, uyida ham yo‘q emish; go‘ristonga borib qarashsa, Asqarponsotning go‘ri oldida o‘lib yotgan emish! Bechora go‘rga pichoq sanchganida etagini qo‘shib sanchgan ekan, qaytay desa etagidan birov tortganday bo‘lgan-da...
Hammaning eti jivillashib ketdi. Uzoq jimliqdan keyin Unsin yonida o‘tirgan kundoshiga shivirlab:
—    O’lsin, nokas odam ekan, bitta qo‘yni deb... Koshki arziydigan narsa bo‘lsa!.. — dedi.
Bu gapni dodxo eshitib qoldi. Uning nafsoniyati qo‘zg‘adi. Dodxoday odam go‘riston deganda tizzasi qaltirasa, birov "olamga podsho qilaman" degan taqdirda ham bormasa, borolmasa-yu, bu qiz mushtday boshi bilan, "arziydigan narsa bo‘lsa men boraman" desa!
Dodxo g‘ashi kelib, Unsinni masxara qildi:
—    Obbo, tegirmonchining qizi!.. Bitta qo‘yni nazarlari ilmaydi! Nechta qo‘y bo‘lsa arzir edi? Sen o‘zing o‘nta qo‘y bersam, pichoq sanchib kelasanmi? Yuzta qo‘y, davlatimning yarmini bersam borasanmi?
Unsinoy bozvantidagi tangalarni o‘ynab:
—    Menga davlat kerak emas, davlat kerak bo‘lsa borar edim, — dedi.
Bu gap dodxoga tegib ketdi.
—    Nima kerak?
Unsin indamadi. Dodxoning savoli javobsiz qolishi mumkin emas edi. Shuning uchun bittasi gunoh qilsa, hammasi baravar kaltak yeydigan kundoshlar Unsinni turtkilashdi:
—    Javob bersang-chi!
—    Tildan qoldingmi?!
Yonida o‘tirgan kundoshi tirsagi bilan biqiniga ikki-uch turtgandan keyin, Unsin boshini ko‘tarib, balo-qazoday tikilib turgan dodxoga bir ko‘z tashladi-yu, yana boshini egib, lekin dadil javob berdi:
—    Javob bersangiz... Ganjiravonga ketsam... Bitta go‘rga bitta pichoq emas, o‘nta go‘rga o‘nta pichoq sanchib kelaman... - dedi.
Uning maqsadini kundoshlar darrov fahmlashdi. Lekin dodxo bunday gapni sira kutmagani uchun yanglish tushundi.
—    Tag‘in nima qilasan Ganjiravonda, borib kelganingga ikki oy ham bo‘lgani yo‘q-ku!
Nodirmohbegim sandal ichidan oyog‘ini uzatib Unsinning boldirini chimchiladi, ko‘zi bilan "xayriyat, tushunmadi, bas, gapirma", deb ishora qildi. Biroq Unsin jonidan kechgan kishining shijoati bilan dodxoga tik qaradi.
—    Yo‘q, men butkul ketsam deyman, javobimni bersangiz demoqchiman.
Gapni aytgan Unsinu, boshqalar o‘tirgan joyida yerga qapishib ketdi. Biroq dodxo, hammaning kutganiga qarshi, qo‘liga qamchi olib Unsinni "qaering qichidi"ga solmadi, aksincha, zaharxanda bilan bo‘lsa ham, muloyim gapirdi:
—    Shunaqami?.. Xo‘p, mayli, aytganing bo‘la qolsin, — dedi va bir oz o‘ylab turib g‘ijinganini yashirolmay ilova qildi: — Lekin go‘ristonga pichoq emas, qumg‘on olib borasan. Onhazratim sag‘anasi oldida qumg‘on qaynatib, bitta choy damlab kelasan, maylimi?
—    Mayli, mayli! — dedi Unsin ko‘zlari javdirab, — lekin lafzingizdan qaytmasangiz...
Dodxoning dami ichiga tushib ketdi. Bir gadovachchaning bu dargohdan ketishga oshiqishi unga haqorat bo‘lib tushdi. Endi Unsinni tilab olish uchun biron so‘z aytishga hech kim, hatto go‘ristondan uning o‘ligi kelishiga ko‘zi yetib, ichida faryod chekayotgan Nodirmohbegim ham jur’at qilolmay qoldi.
Dodxoning oppoq, uzun soqoli, tovushi titradi.
—    Xo‘p, lafzimdan qaytmayman, mana xotirjam bo‘la qol: men hozir seni bir taloq qo‘ydim, qaytib kelganingdan keyin uch taloqsan! Bor, qumg‘onni ko‘tar!..
Unsin dodxodan darrov yuzini berkitganicha chiqib ketdi. Nodirmohbegim, qo‘lidan boshqa ish kelmagandan keyin, hech bo‘lmasa Unsinning yuragiga quvvat bo‘ladigan bir-ikki og‘iz so‘z aytish maqsadida ketidan chiqmoqchi bo‘lgan edi, dodxo xo‘mrayib joyiga o‘tqazib qo‘ydi. Kundoshlar bitta-bitta oyoq uchida yurib chiqib ketishdi.
Unsin uyiga kirdi, paranji-chimmatini yopindi, qumg‘onga suv to‘ldirib, choynakka choy soldi-yu, jo‘nadi. Ko‘r oydin. Osmonning chekkasi sarig‘-kir uvadaga o‘xshaydi. Bu kir shu’la qo‘ynida past-baland uylar, shamolda egilayotgan, tebranayotgan daraxtlar qop-qora qo‘rinadi. Pishqirayotgan shamol har xuruj qilganida Unsinni tentiratar, talay joyga surib tashlar edi. Unsin paranji-chimmatini yumaloqlab qo‘liga olganidan keyin yo‘l yurish osonroq bo‘ldi.
Go‘riston to‘g‘risida dodxo nimalar eshitgan bo‘lsa, Unsin ham shuni eshitgan, shamol kechasi go‘riston dodxo xayolida qandoq dahshatli bo‘lsa, uning xayolida ham shunday dahshatli, lekin shundoq bo‘lsa ham, tiriklar go‘ristoni bo‘lgan bu dargohning dahshati oldida o‘liklar go‘ristonining dahshati unga dahshat ko‘rinmas, bundan tashqari, ertagayoq Ganjiravonga jo‘nash, ota-onasini, dugonalarini ko‘rish umidi uning boshiga boshqa hech qanday fikr-xayolni yo‘latmas edi.
Unsin xuddi dadasidan katta hayitlik olib bozorboshiga ketayotgan yosh boladay chopqillab, qarshisidan esayotgan shamolga so‘z bermay, ba’zan irg‘ishlab borar edi; biroq go‘riston ko‘chasiga burilib, salobat bilan tebranayotgan qop-qora keksa chinor ostida oqarishib turgan sag‘analarni, belgisiz zulmatni ko‘rganida yuragi uvishdi-yu, zovur ko‘prigidan o‘tib, ikki qadam qo‘yganicha to‘xtab qoldi. Dahshat uning yuragiga raxna soldi: Ganjiravon, ota-onasi, dugonalari xayolidan ko‘tarilib, ko‘z oldiga oppoq kafanga o‘ralib sag‘ana va go‘rlar atrofida yelib yurgan arvohlar keldi. Uning eti jivirlashib, sochi boshidagi ro‘molini bir qarich ko‘targanday bo‘ldi. Unsin beixtiyor bir qadam orqaga chekindi, lekin shu ondayoq xuddi o‘likdan qo‘rqmasligini birovga pisanda qilayotganday, baqirib: "O’likning joni yo‘q! O’likning joni yo‘q!" - deb olg‘a intildi, shu yugurganicha chinor ostidagi Onhazratim sag‘anasi oldida to‘xtadi; choynak bilan qumg‘onni oyog‘i ostiga qo‘ydi, paranji-chimmatni bir chekkaga tashladi, ichida: «Ko‘pi ketib ozi qoldi», deb suyundi. Biroq uning suyungani behuda edi: hamma narsani olipti-yu, eng zaruri — o‘tin esidan chiqipti! Har sag‘anadan bir qo‘l, har go‘rdan bir tovush chiqishini kutib o‘tin qidirish vahimasi uning yuragiga yana raxna sola boshladi. Unsin o‘ziga-o‘zi baland tovush bilan yana: "O’likning joni yo‘q!"- deb, hozir diliga bitta odamchalik quvvat bo‘layotgan bu gapni og‘zidan qo‘ymay, sag‘ana va go‘rlarni oralab o‘tin qidirdi; paypaslanib, qo‘liga ilingan narsani etagiga soldi, qamish sindirdi, yantoq, giyoh yuldi, qo‘llari qonab ketganini ham payqamay, topgan-tutganini keltirib o‘t yoqdi. O’t chirsillab-chirsillib birpasda gurkiradi, shamolda to‘lg‘anayotgan tutun aralash alanganing qizg‘ish shu’lasidan qorong‘ilik lipillab, uzoq-yaqinda do‘playib turgan go‘rlar, xuddi birov tuproqni ko‘tarib chiqayotganday harakatga keldi.
Unsin yana o‘tin qidirdi, lekin har safar o‘tin qalaganida alanganing gurkirashi, chirsillashi mudrab yotgan arvohlarni uyg‘otib yuborishidan qo‘rqqandek, uning ustiga o‘zini tashlaguday bo‘lar edi.
Nihoyat, qumg‘on qaynadi. Unsin naridan-beri choy damladi, quruq yantoq va qamishlarga o‘t ketmasin uchun o‘tni tepkilab o‘chirdi; o‘ng qo‘lida choynak va chap qo‘lida qumg‘on, o‘tning shu’lasidan ko‘zi hanuz qamashib borar ekan, bir joyda yer o‘pirilib, chap oyog‘i taqimigacha botib ketdi va oyog‘ining uchi yumshoq bir narsaga tekkanday bo‘ldi. Unsin boyagi gapni duoday tez-tez qaytarib, qo‘rquvni o‘ziga yo‘latmayotgan bo‘lsa ham, ko‘ngliga "o‘likning qornimikin" degan gaplar keldi-yu, yuragi orziqib, oyog‘ini darrov sug‘urib oldi va chuqurda qolgan bir poy kavushini olgani yurak qilolmay mahsichan ketaverdi. Unsin bir necha qadam bosganidan keyin paranji-chimmati sag‘ananing oldida qolganini eslab to‘xtadi, lekin qaytib borgani botinolmadi, hozir qaytish emas, qayrilib qaragani ham yuragi dov bermas, nazarida hamma o‘liklar sag‘analardan, go‘rlardan boshini chiqarib, ketidan qarab turganday edi. Unsin nima qilishini bilmay turib qoldi. Shu asnoda kattakon bir sag‘ananing ichidanmi, naryog‘idanmi allaqanaqa bir tovush eshitildi-yu, xayal o‘tmay nimadir kelib Unsinning yelkasiga minib oldi, aftidan, bo‘g‘moqchi bo‘lib qo‘l uzatdi. Unsin ko‘kragiga nihoyatda og‘ir bir narsa bilan urilganday ko‘ngli ozib tentirab ketdi-yu, yiqilmadi, lekin oyoq uzra turib hushidan ketdi; oradan qancha vaqt o‘tganini bilmadi, ko‘zini ochib qarasa jonvor yelkasidan tushipti, emaklab boyagi sag‘ananing orqasiga o‘tib ketdi. Unsin qo‘rquvdan telba bir ahvolda bo‘lsa ham fahmladi: maymun! Dodxoning maymuni! Maymunni dodxoning o‘zi olib kelmagandir, birovdan berib yuborgan! Dunyoda dodxoday berahm odam yana bor ekanmi!
Unsin yelkasiga maymun mingan dakiqada naqadar qo‘rqqan bo‘lsa, hozir shu qadar tinchidi, xotirjam bo‘ldi: demak, qandoq berahm bo‘lsa ham shu atrofda odam bor!
Unsin go‘ristoqdan chiqib, katta yo‘lga tushib oldi, yarim yo‘lga borganida chap qo‘liga qattiq og‘riq kirganini sezdi. Og‘riq qumg‘onni eslatdi. Chap qo‘lida qumg‘on bor edi, qani? Unsin bir to‘xtadi-yu, choynakni ikkala qo‘li bilan bag‘riga bosib, darmoni yetguncha jadalladi. Tushida yugurganday uning yo‘li ko‘paymas, ikki oyog‘i gavdasidan keyinda qolar, qo‘lidagi choynak tobora og‘irlashib borar edi.
Unsin Nodirmohbegimning og‘ir eshigini zo‘rg‘a ochdi, ostonadan o‘tib, bir necha qadam bosganidan keyin holdan toyib cho‘kkaladi va ne mashaqqat bilan intilib, jo‘mragidan choy oqib bug‘lanayotgan choynakni sandalning bir chekkasiga qo‘ydi, umrlik orzusi ushalganday, hordig‘i chiqib, o‘zini yerga tashladi. Sandalda o‘tirib pinakka ketgan dodxo uyg‘onib tamshandi, boshini ko‘tarib Unsinni ko‘rdi-yu, "jon berayotipti" deb o‘yladi shekilli, ko‘zlari olaydi, undan ko‘zini olmay sekin o‘rnidan turdi, xuddi o‘lim xavfidan qochganday, bir irg‘ib sandaldan oshdi-da, o‘zini eshikka urdi...
Unsin hushdan ketgan ekan, bir vaqg ko‘zini ochib qarasa, sandalning chetida chalqancha yotibdi, tepasida Nodirmohbegim yig‘lab o‘tiripti. Uning o‘ng ko‘zi momataloq bo‘lib shishib ketgan, oq doka ro‘molining u yer-bu yeriga qon tekkan ekan. Unsin Nodirmohbegimga ko‘zi tushgan zamoni undan dodxoning lafzi lafzmi ekanini so‘ramoqchi bo‘lgan edi, uning ahvolini ko‘rib, eshitilar-eshitilmas:
—    Sizga nima bo‘ldi?— dedi.
Nodirmohbegim Unsinning yosh joniga rahm qilishini, uni qaytarishni so‘rab dodxoga yolvorganida dodxo uni tutib olib xo‘p urgan edi. Nodirmohbegim Unsinning savoliga javob bermadi, tovush chiqarmay yana ham qattiqroq yig‘lab, uning boshini siladi, yuzini yuziga qo‘ydi; so‘ng, o‘sha chog‘i odam yuborib go‘ristondan oldirgan ikki chimdim tuproqni yarim piyola suvga chayib Unsinga tutdi.
—    Ich, jigarim, qo‘rqqansan... Go‘ristonda qo‘rqqanga go‘ristonning tuprog‘i davo bo‘ladi.
Unsin piyoladagi loyqa suvni darrov ichdi va xiyla yengil tortganday bo‘ldi.
—    Mendan qaytmasa xudodan qaytsin... Ota-onam borishimni harna ertaroq eshitsa, harna ertaroq suyunsa...
Nodirmohbegim yana kaltaklanishidan hayiqmay, Ganjiravonga bir xizmatkorini yubordi.
Biroq Unsin peshingacha yetmadi — uzildi.
Shom qorong‘isida uning jasadini qizil ko‘rpaga o‘rab aravaga solishdi. Shamol hamon guvillar, yaydoq daraxtlarning shoxida chiyillar, g‘uvillar edi.
Darvozadan boshida paranji va qo‘lida oq tuguncha Nodirmohbegim chiqdi. U darvozaga yuzini o‘girib cho‘nqaydi, ikki qo‘lini fotihaga ochib, bir nimalar dedi. Dodxoning o‘zi bilan birga bu dargohni yerning qa’riga yuborganday ikkala mushtini uch marta yerga qadadi; keyin "bu dargohni endi yelkamning chuquri ko‘rsin" deganday bir harakat bilan keskin burilib aravaga chiqdi, marhumaning bosh tomoniga o‘tirdi.
Arava jo‘nadi, shahar qo‘rg‘onidan chiqqanda kunduzi Nodirmohbegim yuborgan xizmatkor Ganjiravondan qaytib kelmoqda edi.
`
    },
    'sinchalak': {
        title: 'Sinchalak',
        year: '',
        type: 'Qissa',
        description: `Kechki payt. Rayon partiya komitetining sekretari o‘rtoq Tohirjon Nosirov chang bosgan «Villis»dan tushib, yoshi ellikdan oshib qolganiga qaramay, raykom binosining zinasidan chopqillab chiqib ketayotgan edi, birdan to‘xtadi; zinaning bir chekkasiga borib, koverkot makintoshining etagini, brezent etigini qoqdi: poxol shlyapasini boshidan olib, ro‘molchasi bilan peshana va bo‘ynini naridan-beri artdi-da, endi salmoqli qadam tashlab chiqib ketdi.
Tohirjon Nosirov rayon partiya komitetining sekretarligiga yaqinda saylangan bo‘lib, hozir rayon bilan tanishib yurgan edi.
Nosirov qabulxonada hurmat yuzasidan o‘rnidan turgan yordamchisi — yigirma ikki yoshlardagi baland bo‘yli, xushqomat, juda nozik qizga salom berib, kabinetiga kirib ketdi. Qiz bir dasta gazeta-jurnal, bitta qizil papkani olib, uning ketidan kirdi, bu narsalarni sekretarning stoliga qo‘ydi-da, borib derazalarni ochib yubordi. Dim kabinetga bog‘chadan muzday havo, handalaknimi, bosvoldi qovunnimi esga soladigan yalpiz hidi kirdi; chumchuqlarning chug‘urlashi, deraza ostida oqayotgan ariqchaning shovillashi eshitildi. Nosirov qizil papkadagi qog‘ozlardan bir-ikkitasini ko‘zdan kechirdi, keyin ko‘zoynagini peshanasiga surib grafindan stakanga qilqillatib yaxna choy quyar ekan, qizga ayrim diqqat bilan razm soldi. Qiz buni payqadi-da, chiqib ketishni ham, chiqmaslikni ham bilmay eshik oldida turib qoldi.
— Menga gapingiz bor shekilli...
— Yo‘q...
Saida chiqib ketmoqchi edi, Nosirov to‘xtatdi.
— Mayli, hozir ayta qolay... O’tiring.
Saida, arzon chit bo‘lsa ham yaxshi tikilgan ko‘ylagining orqa etagini g‘ijim qilmaslikka tirishib, ehtiyot bilan kursiga o‘tirdi, yo‘l-yo‘l baxmal jiletkasining biqin cho‘ntagidan yarmi chiqib turgan kichkinagina bloknotini olib stolga qo‘ydi, ingichka qalaminnng ketini iyagiga niqtab, Nosirovga savol nazari bilan qaradi. Nosirov bnr stakan za’faronday yaxna choyni nafas olmay shimirdi, stakanni taq etib stolga qo‘ydi-da, qip-qizil, silliq, derazaning aksi ko‘rishib turgan yaltiroq boshini silar ekan, kulimsirab:
— Ko‘chadan ketayotgan avtomobil birovni bossa yoki turtibmi, yiqitibmi ozor-bersa, nima bo‘ladi? — dedi.
Saida cho‘chib tushdi.
— Nima bo‘ldi, mashinangiz birovni urdimi?
— Yo‘... yo‘q, mening mashinam hech kimga ozor bergani yo‘q... Xo‘sh, nima bo‘ladi?
Saida nima deyishini bilmay:
— Militsiya to‘xtatadi... — dedi.
— Bordi-yu, mashinani to‘xtatadigan, shofyorni javobgarlikka tortadigan militsionerning o‘zini qasddan urib, yiqitib o‘tsa-chi, unda nima bo‘ladi?
Saida kuldi.
— Unisnni bilmadim... Qanaqa shofyor ekan u dovyurak?
— Arslonbek Qalandarov!
Saida u odamdan har nima kutish mumkin degan ma’noda jilmayib bosh chayqadi.
Arslonbek Qalandarov — «Bo‘ston» kolxozining raisi, mashhur raislardan bo‘lib, o‘tgan hafta kolxozdan rayonga mashina haydab ketayotganida yo‘lini to‘sgan militsioner bilan janjallashgan, uni urib, yiqitib o‘tgan edi.
Voqea bundoq bo‘lgan edi.
Yangi sotib olingan besh tonnalik yuk mashinasi maydonni bir aylanib, pravlenie oldiga ko‘ndalang bo‘lganda, Qalandarov juda xursand bo‘lib ketdi; hali g‘ubor qo‘nmagan yam-yashil mashinani aylanib ko‘zdan kechirdi, kapotini ochtirib, motorini ko‘rdi; so‘ng rulga o‘tirib, startyorni bosdi. Motor bir pishqirib ravon gurillay ketdi. Qalandarov mashinani oldinga, orqaga yurgizdi, maydonni bir aylandi, ko‘prikdan o‘tib, katta yo‘lga chiqqanida, shofyorni chaqirib yoniga o‘tqizdi-da rayonga tomon yo‘l oldi. Uning mo‘ljali besh-olti kilometr yurib qaytish edi, biroq yangi mashina, to‘g‘ri va ravon asfalt yo‘l havasini keltirdi-yu, rayon markaziga tushib chiqishga qaror berdi. Qalandarov yo‘l bo‘yidagi tiniq yashil daraxtlar, barra o‘tlardan ko‘zi quvonib, kishining vujudini yayratadigan may havosidan mast bo‘lib, xirgoyi qilib ketayotgan edi, yo‘l bo‘yida turgan mshshtsioner qo‘lidagi ola tayoq bilan yo‘lning chetini ko‘rsatdi. Qalandarov  militsioner ko‘rsatgan joyga kelib to‘xtadi. Ma’lum bo‘lishicha, yo‘lning bahorgi yog‘ingarchilikdan cho‘kkan, buzilgan kichik bir uchastkasi remont qilinayotgan bo‘lib, rayon tomonga o‘tadigan bo‘sh yuk mashinalari bu yerga yarim kilometr keladigan karerdan shag‘al olib, o‘sha uchastkaga to‘kib o‘tishi kerak ekan. Qalandarov bir oz sabr qilsa, yonida o‘tirgan shofyor militsionerga mashina yangi ekanini, og‘ir yuk ortib bo‘lmasligini aytib, ortiqcha so‘zga o‘rin ham qolmas edi. Qalandarov birdan tutaqdi, shofyorni og‘iz ochgani qo‘ymay, shovqin soldi.
Militsionerning achchig‘i keldi, prava so‘radi.
Qalandarov uning so‘ziga quloq solmay mashinani yurgizdi. Militsioner zinaga chiqib rulga tarmashdi.
Qalandarov uning shapkasini olib uloqtirib yubordi.
Militsioner shapkasini olib, uning yo‘lini to‘smoqchi bo‘ldi. Qalandarov gaz berdi-da, mashinaning qanoti bilan uni urib, yiqitib o‘tdi.
Militsioner darrov o‘rnidan turdi va uning ketidak lunjini shishirib, hushtak chalganicha qola berdi.
— Qalandarov shu kuni kechqurun avtoinspektsiyaga kiribdi, — dedi Nosirov kulib. — O’sha militsionerni topib uzr so‘rabdi. Militsioner nachalnigiga raport bergan ekan. Qalandarov toza yalinibdi: «Jon uka, nachalnikka ro‘para qilib erkak qaddimni bukma, qancha shtraf olsang, ol», deb cho‘ntagini tutibdi. Avtoinspektsiyaning nachalnigi xotin kishi ekan...
Saida piqillab kulib yubordi.
— Soyada o‘sgan raislardan, — dedi kulgi yoshini artib.
«Soyada o‘sgan» degan ibora rayon partiya konferentsiyasidan chiqqan: ko‘p vakillar muzokarada raykom byurosining faoliyatini tanqid qilib, kolxozlarda partiyaviy-siyosiy ishlar o‘z holiga tashlab qo‘yilganligi, siyosiy-tarbiyaviy ishlar xo‘jalik ishlari soyasida qolib ketganligi, birmuncha kolxozlarda rahbar kadrlar soyada o‘sayotganligi to‘g‘risida gapirishgan edi.
Nosirov stolining tortmasidan bloknotini olib tez-tez varaqlar ekan:
— To‘g‘ri! Bilar ekansiz! — dedi. — Men «Bo‘ston» kolxozi bilan bir oz mashg‘ul bo‘ldim, tayinli bir xulosaga kelmagan bo‘lsam ham, ko‘ngilda bir xiralik paydo bo‘ldi. Qalandarov soyada o‘sganligidan tashqari, erkaroq rais ko‘rinadi.
— Juda to‘g‘ri payqabsiz, — dedi Saida. — Rayonning ilgarigi rahbarlari, ayniqsa, raykom sekretari o‘rtoq Qodirov Qalandarovni haddan tashqari erkalatib yuborgan edi. Uning militsiyaga bo‘ysunmaganligi ham shuning oqibati. Biroq keyinchalik o‘ylab ko‘rgan bo‘lsa kerak: bu tantiqligini rayonning hozirgi rahbarlari kechiradimi-yo‘qmi? Shuning uchun militsionerdan uzr so‘ragani borgan, shtraf ol, deb cho‘ntagini tutgan. Lekin «Xotin kishi oldida erkak qaddimni bukma» dsgani mening uchun ham yangilik!
Qalandarov, haqiqatan, Nosirov payqaganicha va Saida aytganicha xiyla erka raislardan edi.
`
    },
    'adabiyot_muallimi': {
        title: 'Adabiyot muallimi',
        year: '',
        type: 'Hikoya',
        description: `O’zining aytishiga ko‘ra "nafis adabiyot muallimi" o‘rtoq Boqijon Baqoev og‘ilga kirib ta’bi xira bo‘ldi: sigirning qulog‘iga yana kana tushibdi! Kanadan ham ko‘ra sigir uning achchig‘ini keltirdi: kanani teray desa qo‘ymaydi — boshini silkiydi, pishqiradi.
—    Hayvon! Sigir emas, hayvon! — dedi og‘ilning eshigini qattiq yopib.— Hayvon!
Xotini Mukarram hovlida samovarga suv quyar edi.
—    Hayvon! — dedi Baqoev,— bu sigirni sotib puliga cho‘chqa olish kerak!
—    Shaharda cho‘chqa asrash mumkin emas,— dedi Mukarram samovarga ko‘mir solayotib.
—    Nima uchun? Taqiq qilinganmi? Kim aytdi? Men ay-tib edimmi? To‘g‘ri, mumkin emas... albatta, mumkin emas...
—    Uyga kiring, Hamida keldi.
Hamida o‘n olti yoshlardagi tirik, quvnoq qiz, pochchasini ko‘rib sevinib ketdi.
—    Siz uyda ekansiz, bilsam, daftarimni olib kelar ekanman... esizgina...
O’rtoq Boqijon Baqoevning ta’bi ochildi — sigir, uning qulog‘idagi ko‘m-ko‘k kana, g‘o‘qillab tumshug‘i bilan ariq yoqalarini buzib yurgan cho‘chqa ko‘z oldidan ketdi.
—    Texnikumdan rabfakka o‘tibsan, deb eshitdim, rostmi? — dedi.— Himm... yaxshi qilibsan. Rabfakka o‘t, deb men aytib edim shekilli? Himm... Auff, zarda bo‘libman... Rabfak yaxshi. Men bir borgan edim. Kantselyariyaning eshigiga praktikum deb yozib qo‘yipti. To‘g‘ri emas. Praktikum, minimum, maksimum bular hammasi lotincha yoki lotinchaga yahin so‘zlar. Men, shaxsan shunday deb bilaman.
 Bir oz jim qolishdi.
—    Boqijon aka,- dedi qiz uyalibroq,- bir narsani sizdan so‘ramoqchi edim: biz sinfda Chexovning "Uyqu istagi"ni o‘qidik, go‘dakni o‘ldirgan qizni sud qilmoqchimiz. Da’vogar go‘dakning onasi — Rahima bo‘ladi, qoralovchi — Sharifjon. Sudyalar ham bo‘ladi. Men qizni oqlab, butun gunohni uning xo‘jayiniga, yosh qizni bu qadar berahm ekspluatatsiya qilgan kishiga qo‘ymoqchiman. Mana shu... Shuni yozdim. Shu to‘g‘rida sizning fikringizni bilmoqchiman. Chexov shunday demoqchi emasmi?
O’rtoq Baqoev o‘ylab turib, so‘radi:
—    Nafis adabiyot darsini sizlarga kim beradi? Hakimov? Axmoq odam! O’z ustida ishlamaydi. Savol alomati hammavaqt"mi" dan keyin qo‘yiladi desam, kuladi. Gap bunda ham emas...
Mukarram samovar ko‘tarib kirdi. Hamida irg‘ib turib, samovarni opasining qo‘lidan oldi va stolga qo‘ydi. U, homilador xotinga samovar ko‘tartirib, qarab o‘tirgan pochchasidan o‘pkalamoqchi edi, biroq uyaldi, indamadi. O’rtoq Boqijon Baqoev juda chanqab turgan ekan, ustma-ust to‘rt piyola choy ichdi va terladi.
—    Chuchvaradan keyin choy juda yaxshi ketadi-da,— dedi yuzidagi terni artib,— Himm... soqol ham o‘sipti, sartarosh bo‘lmasa odamlar maymun bo‘lib ketar edi. Maymun, juni to‘kilib, odam bo‘lgan. Bu haqda Engelsning fikri bor...
—    Haligini aytmadingiz, Boqijon aka,— dedi qiz,— Chexov shunday demoqchi emasmi?
O’rtoq Baqoev yana bir piyola choy so‘radi.
—    Chexovmi? Himm... burjuaziya realizmi to‘g‘risida so‘zlaganda, eng avval uning ob’ektiga diqqat qilish kerak. Burjuaziya realistlari tushungan, ular aks egtirgan ob’ektiv voqelikni anglash lozim bo‘ladi. Turgan gapki, Chexovning ijodi boshdan-oyoq, butun mohiyati bilan ilk burjuaziya realizmi, ya’ni... himm... Mukarram, tovuqqa moyak qo‘ydingmi? Qo‘yish kerak, bo‘lmasa daydi bo‘lib ketadi... Tavba, tovuqdan ahmoq jonivor yo‘q — moyak qo‘ysang tug‘adi! Nima guchun moyak qo‘ysang tug‘adi? Xo‘roz nima uchun saharda qichqiradi? Ajoyib psixologiya! Biologiya o‘qiysizlarmi?
Hamida biologiyadan nimalar o‘qiganini, bu o‘qish yi-lida yana nimalar o‘tilajagini so‘zlab berdi va o‘zining oqlash nutqida fiziologik asoslar ham ko‘rsatish niyati bor ekanini aytib, yana so‘zni Chexov ustiga burdi.
—    Himm...- dedi Baqoev,-Chexov to‘g‘risida o‘zimning fikrim bor. Boshqalar nima desa desin, har holda uning dunyoga qarashida... Uning dunyoga qarashi Pushkin va Lermontovlarning dunyoga qarashidan farq qiladi. Bir davr, bir sinf, bir mamlakat yozuvchilari bo‘lishlariga qaramasdan, mutlaqo farq qiladi!
—    Chexov Pushkin bilan bir davrda yashagan emas-ku,— dedi Mukarram,— bizning kutubxonada uning Maksim Gorkiy bilan oldirgan surati bor. Chexov 1904 yilda o‘lgan bo‘lsa kerak.
O’rtoq Baqoev bir oz o‘ng‘aysizlandi.
—    Sizlar qaysi Chexov to‘g‘risida gapirayotibsizlar? Choydan quy!.. Bu Chexov haqidami? To‘g‘ri, bu 1904 yilning birinchi yarmidami, ikkinchi yarmidami o‘lgan... Boshqa ro‘molcha ber, bundan piyoz hidi kelayotipti. Men ana u Chexov, ilk burjuaziya realizmining namoyandasi bo‘lgan Chexov haqida so‘zlayotibman.
—    "Uyqu istagi" qaysi Chexovniki? — dedi Hamida.
—    Hech shubhasiz bu Chexovniki. Bu narsa birinchi marta "Sovremennik" jurnalida bosilgan.
Shundan keyin o‘rtoq Boqijon Baqoev uzundan-uzoq so‘zlab ketdi. Uning nima to‘g‘rida so‘zlayotganini Hamida bilmas edi. Detirding degan allaqanday mashhur tanqidchi Shelling degan yozuvchiga "sen dastyorga zor bo‘lguncha o‘g‘ling dastyor bo‘ladi" deb xat yozgan; Marks Dobrolyubovni Mering bilan bir qatorga qo‘ygan; Stending degan allaqanday bir dramaturg o‘lar chogida Demping degan bir tanqidchiga: "Agar butun jonivorlarni xudo yaratgan bo‘lsa, men uning zavqiga qoyil emasman, echkiemar ham jonivor bo‘ldimi?" degan...
Hamidaning boshi og‘irlashib ketdi; ikki marta sekin, og‘zini ochmasdan esnadi.
Hamida mezbonlar bilan xayrlashib ko‘chaga chiqqanda qorong‘i tushgan edi; "Uyqu istagi" to‘g‘risida pochchasidan hech qanday fikr ololmadi. Uning so‘zlaridan nima olgani haqida o‘ziga hisob berar ekan, g‘uvillab turgan boshida shun-dan boshqa hech narsa yo‘q edi: praktikum, minimum, maksimum; Detirding, Stending, Shelling, Mering, Demping...
`
    },
    'ming_bir_jon': {
        title: 'Ming bir jon',
        year: '',
        type: 'Hikoya',
        description: `Martning oxirgi kunlari. Ko‘k yuzida suzib yurgan bulut parchalari oftobni bir zumda yuz ko‘yga solyapti. Oftob har safar bulut ostiga kirib chiqqanida, bahor kelganidan bexabar hanuz g‘aflatda yotgan o‘t-o‘lanni, qurt-qumursqani uyg‘otgan, avvalgidan ham yorug‘roq, avvalgidan ham issiqroq shu’la sochayotganday tuyuladi.
Kasalxonaga yaqinda tushgan Mirrahimov, jikkakkina kishi, o‘ziga juda ham katta ko‘k xalatga burkanib, yengchadan boshini chiqarib turgan sichqondek derazadan ko‘chaga qarab o‘tirgan edi, birdan tutaqib ketdi: shunday havo bo‘lsa-yu, oyoq-qo‘li butun odam ko‘chaga chiqolmay, derazadan mo‘ralab o‘tirsa!..
Mirrahimov jussasi kichkina bo‘lgani bilan tovushi juda yo‘g‘on va buning ustiga sekin gapirolmas edi. Hamshira yugurib kirdi, Mirrahimovning sog‘lig‘ini, kayfiyatini so‘radi, keyin dardni bardosh yengadi, bu xususda Mastura Alievadan ibrat olish kerak, degan mazmunda shama qildi.
Mastura Alieva sakkiz oydan beri palatasidan chiqmay yotgan og‘ir xasta, uni kasalxonada hamma bilar, ko‘p kishi kirib ko‘rgan ekan. Mirrahimovning odamgarchiligi tutib ketdi:
—    Shu sho‘rlik ayolni bir kirib ko‘raylik! Uch kunligi bormi, yo‘qmi... Sob bo‘lgan deyishadi...
—    Ha, ancha og‘ir,— dedi hamshira xo‘rsinib,— o‘n yil dard tortish osonmi!
Poygaxdagi karavotda kitob o‘qib yotgan Hoji aka degan xasta yo‘g‘on gavdasiga nomunosib chaqqonlik bilan boshini ko‘tarib, ko‘zidan oynagini oldi.
—    O’n yil? O’n yildan beri kasal ekanmi?
—    Ha, o‘n yil bo‘libdi. Bechora turmush qilganiga bir yil bo‘lar-bo‘lmas shu dardga yo‘liqqan ekan. Tomog‘idan hech narsa o‘tmaydi. Ovqatni qorniga quyishadi... Teshib qo‘yilgan... Ba’zan o‘zi quyadi, ba’zan eri.
Hoji akaning ko‘zlari o‘ynab ketdi.
—    Eri? Eri bormi?
—    Bor. Shu yerda. Besh oydan beri birga!
Hoji aka uzoq angrayib qolganidan keyin:
—    O’n yil kasal boqib, yana kasalxonada ham birgami? — dedi.
—    Shuni ayting,— dedi hamshira.— Doktorlarga yalinib-yolvorib palataga karavot qo‘ydirib oldi.
Hoji aka dardga bu qadar bardoshli ayoldan ham ko‘ra bunchalik vafodor erni ko‘rishga ishtiyoqmand bo‘lib qoldi-yu, xalatining belbog‘ini mahkam bog‘lab, shippagini kiydi.
—    Qani, yuringlar, tabarruk odamlar ekan, bir ko‘rib chiqaylik.
Hamshira Mastura bilan uning eriga xabar bergani ketdi.
Xayal o‘tmay, qorni chiqqan Hoji aka oldinda, uzun koridordan o‘ninchi palataga tomon yo‘l oldik. Palata eshigi oldida bizni hindiga o‘xshagan qop-qora, katta-katta ko‘zlari yonib turgan bir yigit, aftidan, Masturaning eri kamoli ehtirom bilan kutib oldi va har qaysimizga ayrim minnatdorchilik bildirib, ichkariga yo‘lladi. Palataga kirdik. Shu payt oftob yana bulut ostiga kirdi-yu, palatani shom qorong‘iligi bosdi. Kattakon derazaning chap tomonidagi karavotdan zaif, yo‘q, zaif emas, mayin tovush eshitildi:
—    Kelinglar... Rahmat! Odamga odam quvvat bo‘ladi, ming rahmat! Akramjon, kursi qo‘yib bering...
Oftob yana yorishdi. Masturani baralla ko‘rdik... Ko‘z o‘ngimizda xasta emas, o‘lik, haqiqiy o‘lik, sap-sariq teriyu suyakdan iborat bo‘lgan murda ichiga botib ketgan ko‘zlarini katta ochib yotar edi... Tobutda yotgan o‘likning qo‘limi, oyog‘imi biron sabab orqasida bexosdan qimirlab ketsa kishi qay ahvolga tushadi? Uning o‘lim pardasi qoplagan yuzida chaqnab turgan ko‘zlarini ko‘rgan kishi xuddi shu ahvolga tushar edi.
Boya bizni kutib olgan yigit — Akramjon kursi qo‘yib berdi. Mirrahimov ikkovimiz o‘tirdik. Hoji aka yo‘g‘on gavdasi bilan Masturani to‘sib tikka turib qoldi. Yonimdagi kursini surib Hojining etagidan tortay desam, qorni silkinyapti... Ajabo, bu odam nega kulayotibdi, deb aftiga qarasam... rangi bo‘z bo‘lib ketibdi! Uning qo‘rqqanini payqab, hamshira darrov yo‘l qildi:
—    Ie, Hoji aka, sizga dori berish esimdan chiqibdi-ku, yuring! - dedi va Hojini yetaklab chiqib ketdi. Hoji koridorga chiqib yiqilarmikan, deb o‘ylagan edim, yo‘q, xayriyat, gumburlagan tovush eshitilmadi...
Hamshira yo‘l qilib Hojini olib chiqishga chiqdi-yu, lekin baribir, Mastura payqadi. Juda-juda xunuk ish bo‘ldi. Mirrahimov ikkovimiz nima deyishimizni, nima qilishimizni bilmay qoldik. Bu hol kasalga qanday ta’sir qildi ekan, deb sekin qaradim. Mastura qonsiz labida tabassum bilan eriga yuzlandi:
—    Akramjon, daftaringizga yozib qo‘ying: uch mardi maydon meni ko‘rgani kirgan edi, bittasi arang qochdiyu, ikkitasi qochgani ham bo‘lmay, o‘tirib qoldi.
Mastura piqirlab kulib yubordi; yana kuldi, yosh boladay o‘zini tutolmay qiqirlar edi. Bu hazil va ayniqsa kulgi avval xunuk, odamning etini jimirlatadigan darajada xunuk eshitildi, keyin nuchuqdir, Masturaning yuzidan o‘lim pardasi ko‘tarilganday, hayot to‘la ko‘zlari o‘lik yuziga jon kirgizganday bo‘ldi. Mirrahimov Hoji akaning qilmishi to‘g‘risida uzr tariqasida bir nima demoqchi bo‘lib gap boshlagan edi, Mastura so‘zini og‘zidan oldi:
—    Bunaqa narsa menga ta’sir qilmaydi,— dedi,— Akramjon, bularga tobut voqeasini aytib bering... yo‘q, yo‘q, o‘zim aytib beraman! Bunga besh yildan oshdi. Ko‘z oldimdan ketmaydi... Qalin qor yoqqan kun edi. Men derazaning ro‘parasida mana shu xilda yotibman, Akramjon paypog‘ini yamayotgan edi shekilli. Birdan ko‘cha eshigimiz ochildi-yu, qizil bir narsa kirdi, nima ekan deb qarasam - tobut! Akramjonning ikki o‘rtog‘i hovlimizga tobut ko‘tarib kirdi! Yuragim jig‘ etib ketdi... Voy sho‘rim, nahot o‘lgan bo‘lsam... To es-hushimni o‘nglab, Akramjonga bir nima degunimcha, boyagi ikkovi tobutni devorga suyab qo‘yib, uyga kirib keldi; uyga kirdi-yu, meni ko‘rib ikkovi ham boyagi Hoji akangizday shaytonlab qolayozdi. Akramjon hayron... Men ana ketdi, mana ketdi bo‘lib yotgan edim-da, o‘sha kuni ertalab birov avtobusda yig‘lab ketayotgan bir bolani ko‘rib, mening ukamga o‘xshatibdi-yu, shundan haligiday gap tarqalibdi... Tobutni buzib pechkaga qalashdi. Menga shu ham ta’sir qilgani yo‘q. Bunaqa narsalar o‘lim kutib yotgan kasalga yomon ta’sir qilishi mumkin, men hech qachon o‘lim kutgan emasman, kutmayman ham! U yog‘ini surishtirsangiz, men odam bolasining o‘lim kutishiga, ya’ni dunyodan umid uzishiga ishonmayman. Hatto tildan qolgan kasalning rozilik tilashib qaragani ham dunyodan umid uzgani emas, balki «rozilik tilashgani hali erta» dermikin degan umid bilan, dunyoda tengi yo‘q, timsoli yo‘q zo‘r umid bilan qaragani deb bilaman.
Akramjon Masturaning biz bilan yozilib o‘tirganiga qanchalik xursand bo‘lsa, toliqib qolishidan shunchalik xavotirda ekani ko‘rinib turar edi; shuning uchun Masturaga tez-tez dam berishni ko‘zlab, ko‘proq bizni gapirtirishga, o‘zi gapirishga harakat qilardi.
—    Sizning nima dardingiz bor?- dedi Mirrahimovga yuzlanib.
Mirrahimov birdaniga uchta dardning nomini aytdi.
—    Voy sho‘rim!..— dedi Mastura, — jindakkina joningizga-ya! Shu jussangizga uchta dard sig‘dimi?
Bo‘ldi kulgi! Ayniqsa, Mirrahimov zavq qilib kuldi. Kasallik, o‘lim to‘g‘risidagi gap tugab, xushchaqchaq suhbat boshlanishiga ilhaq bo‘lib turgan Akramjon Mastura boshlagan askiyani ilib ketdi; askiyaga juda usta ekan, olamda dard nima, o‘lim nima ekanini butkul unutib, rosa kulishdik. Afsuski, Mirrahimovning yo‘g‘on tovushi suhbatimizning buzilishiga sabab bo‘ldi: vrach koridordan o‘tib borayotib, uning beso‘naqay kulgisini eshitgan bo‘lsa kerak, eshikni ochib qaradi va Masturaga zehn solib, uning yuzida horg‘inlik ko‘rdi shekilli, bizni chiqarib yubordi. Akramjon ketimizdan chikdi, bizning bu iltifotimiz Masturaga qancha kuch-quvvat berishini aytib, ko‘nglida mavj urib, yosh pardasi bosgan ko‘zlarida ko‘rinib turgan cheksiz min-natdorchilik tuyg‘usini aytib bitirolmas, aftidan, Masturaning bir minutlik oromi uchun o‘ng ko‘zini o‘yib berishga ham tayyor edi.
Palatamizga qaytdik. Hoji aka karavotida yonboshlab, qand choy ichib, o‘zini yelpib yotar edi. Bo‘lib o‘tgan xijolatli ish to‘g‘risida u ham indamadi, biz ham indamadik. Hoji akaga bir nima deyish u yoqtsa tursin, Mirrahimov ikkovimiz ham kechgacha bir-birimizga so‘z qotmadik; aftidan, borlig‘imiz Mastura bilan band, quyunday charx urayotgan taassurotlar, fikrlar, tuyg‘ularni ifoda qilgani so‘z topolmas edik.
Kech kirdi. Hoji aka o‘rtacharoq xurrak tortib uyquga ketdi. Mirrahimov dam-badam u yoqdan-bu yoqqa ag‘darilar edi, nihoyat, mening uyg‘oq ekanligimni payqab, boshini ko‘tardi.
—    Bu xotinning joni bitta emas, ming bitta! — dedi, — hozir tugab qolgan shamday lipillab yonayotgan joni basharti so‘ngan taqdirda ham, qolgan mingtasini yoqib keyin so‘nadi. Mana shu ishonch Masturaga o‘limni yo‘latmaydi.
Mirrahimov uzoqjim qolganidan keyin yana birdan:
—    Eri-chi, eri? — dedi, — bu yigitning ham raftoridan, yigitlik umri ming bittayu, shundan bittaginasini Masturaga qurbon qilyapti.
Ertasiga Mastura haqida yana bir ko‘ngilsiz gap eshitdik: bechoraning tomog‘idan hech narsa o‘tmasligi ustiga qorniga tez-tez suv to‘planar ekan...
Kunlar o‘tib hammamiz tarqaldik. Mirrahimov o‘zining MTSiga, Hoji aka kurortga ketdi.
Oradan bir qancha vaqt o‘tgandan keyin shu tomonga yo‘lim tushdiyu, kasalxonani bosib o‘tolmadim; kirib tanish hamshiradan so‘rasam, Mastura bir soatdan keyin operatsiyaga yotar ekan. Doktorlar operatsiya stolidan turolmaydi, deb besh oydan beri uning ra’yini qaytarib kelishar ekan, oxiri bo‘lmabdi — Mastura o‘lsam tovonim yo‘q, deb tilxat beribdi.
Kirib ko‘ray desam, doktor ijozat bermadi. Mening yo‘klab kelganimni ko‘rsa, dalda bo‘ladigan biron so‘z aytsam, zoraki darmon bo‘lsa deb kutdim.
Vaqt-soati yettanda Masturani hamshira bilan Akramjon ikki tomondan suyab olib chiqishdi. Lekin eshikdan chiqishi bilanoq Mastura ikkovini ikki tomonga itarib o‘zi yurdi; bardam qadam tashlab, operatsiya zalining eshigini o‘zi ochib kirib ketdi. Akramjon, butun diqqati xotinida bo‘lgani uchun meni payqamadi. Mastura esa menga bir qaradiyu, tanimadi shekilli, indamadi.
Operatsiyaga doktorlarning ko‘ngli chopmagani, xastaning holi o‘zimga ma’lum bo‘lgani, Masturaning o‘limning yuziga bunchalik tik qaragani qorong‘ida qo‘rqqan kishi ashula aytganidek emasmikin, degan gap ko‘nglimdan o‘tgani uchun operatsiyaning natijasini kutmadim, kechqurun kasalxonaga telefon qilmoqchi bo‘lganimda, rostini aytsam, telefon trubkasini dadil ololmadim. Yo‘q, xayriyat, Mastura operatsiyadan bardam turibdi. Shunaqa deyishdi.
Shundan keyin men uzoq safarga ketdimu, Masturaning taqdiridan bexabar bo‘ldim, lekin uni tez-tez eslar edim; bu toqati toq, joni temirdan insonning tuzalib ketishini, yashashini, uzoq umr ko‘rishini uning o‘zidan ham ko‘proq tilar edim. Shuning uchun oradan uch yil o‘tgach, Akramjonni bir begona xotin bilan ko‘rganimda alamimdan dod deb yuborayozdim.
Paxta bayrami hech qaerda Mirzacho‘ldagidek qiziqo‘tma-sa kerak, chunki bu yerga resggublikaning turli oblastlaridan kelgan odamlar o‘z oblastining ashulasini, o‘yinini ham olib kelgan deyishadi.
Paxta bayramini yor-jo‘ralar bilan Guliston rayonida o‘tkazdik.
Akramjonni, boya aytganim xotin bilan shu yerda, Guliston rayoni markazining chiqaverishida ko‘rdim. O’rta bo‘yli, xushqomat, vujudidan yoshlik kuchi va g‘ayrati yog‘ilib turgan qop-qora juvon otda olma yeb, yo‘l bo‘yida turar, Akramjon o‘z otining ayilini qayta bog‘lamoqda edi. Akramjon meni ko‘rib qoldi-yu, juvonga bir nima dedi. Juvon darrov otdan tushdi. Ikkovi yugurib keldi. Ikkovi ham men bilan juda eski qadrdonday so‘rashdi. Biroq men, harchand qilsam ham, palatadan chiqib operatsiya zaliga kirib ketayotgan Mastura ko‘z o‘ngimdan ketmay, bular bilan samimiy ko‘risha olmadim: Akramjonni bir nav quchoqlagan bo‘ldim, juvonga esa qo‘limning uchini berdim.
Juvon:
—    Amaki, meni tanimadingizmi?— dedi va xurjundan ikkita olma olib, birini menga berdi.
—    Qaerdadir ko‘rganday bo‘laman, lekin...
Juvon qo‘lidagi olmani ustma-ust bir necha martaba tishladi va chala chaynab yutdi.
—    Endi ham tanimadingizmi?— dedi.
Tanidim! Faqat ko‘zidan tanidim! Kulimsirab, olamga tabassum sochib turgan bu juvon o‘sha Mastura edi. Men nima deyishimni bilmay:
—    Bu yoqda nima qilib yuribsiz? — dedim.
Mastura kuldi.
—    Kuchimni, g‘ayratimni to‘la-to‘kis ishga solib yuribman, - dedi.
—    Operatsiyaga kirib ketayotganingizda men yo‘lakda turgan edim, hayajonda bo‘lsangiz kerak, tanimadingiz...
—    Yo‘q, amaki,— dedi Mastura bir oz xijolat bo‘lib,— kechirasiz, atayin so‘rashmagan edim... So‘rashsam, menga tasalli berar edingiz... O’sha tobda menga tasalli berib aytilgan har bir so‘z ishonchimga raxna, ko‘nglimga g‘ulg‘ula solishi mumkin edi.
Uzoq suhbatlashdik. Er-xotin otlarini yetaklab, meni talay yergacha kuzatib qo‘yishdi: so‘ng xayrlashib so‘l tomonga ot qo‘yib ketishdi.
Men sahroda lochinday uchib ketayotgan Mastura bilan Akramjonga uzoq qarab qoldim.
Ikkovi ufqqa yetganda, biri orqaga qaytdi, xayal o‘tmay yetib keldi.
Bu Mastura ekan, yo‘ldan bir necha qadam narida turib:
—    Amaki, Hoji akamga salom ayting, — dedi va ufqda kutib turgan Akramjonga tomon ot qo‘yib ketdi.
Shaharga qaytganimizdan keyin Masturaning omonatini topshirish uchun Hoji akani topdim, lekin salomini topshirolmadim: Hoji aka bechora qazo qilgan ekan.
`
    },
    'anor': {
        title: 'Anor',
        year: '',
        type: 'Hikoya',
        description: `<p style="text-align: right;">Uylar to‘la non, och-nahorim  bolam,
    Ariqlar to‘la suv, tashnai zorim bolam.
O’tmishdan</p>

Turobjon eshikdan hovliqib kirar ekan, qalami yaktagining yengi zulfinga ilinib tirsakkacha yirtildi. Uning shashti qaytdi. Jo‘xori tuyayotgan xotini uning qo‘lidagi tugunchani ko‘rib, kelisopni kelining ustiga qo‘ya chopdi. Keli lapanglab ag‘anadi, chala tuyilgan jo‘xori yerga to‘kildi. Turobjon tugunchani orqasiga  bekitib, tegishdi:
—    Akajon, degin!
—    Akajon! Jo-on aka!..
—    Nima berasan?
—    Umrimning yarmini beraman!..
Turobjon tugunchani berdi. Xotini shu yerning o‘zida, eshik oldida o‘tirib tugunchani ochdi-da, birdan bo‘shashib ketdi va sekin boshini ko‘tarib eriga qaradi. O’z qilmishiga gerdayib turgan Turobjon uning ko‘zini jiqqa yosh ko‘rib:
— Nima ekanini bildingmi?—dedi.— Asalarining uyasi! Turgan-bitgani asal! Mana, mana, siqsang asal oqadi. Bunisi oq mum, harom emas — shimsa ham bo‘ladi, chaynasa ham  bo‘ladi.
Xotin yengini tishlab bir nuqtaga qaraganicha qoldi.
—    Yo, qudratingdan, ishonmaydi-ya!—dedi Turobjon
keltirgan matoini titkilab. — Mana, chaynab ko‘r! Ko‘rgin, bo‘lmasa innaykeyin degin...
Turobjon qizardi. U bir zamon betob o‘rtog‘ini yo‘qlab eltgan tarvuzini, bemaza chiqqan bo‘lsa kerak, sigirning   oxurida ko‘rib   shunday   xijolat  bo‘lgan edi.
Hovli yuzida aylanib yurgan oqsoq mushuk to‘kilgan jo‘xorini iskab ko‘rdi, ma’qul bo‘lmadi shekilli, Turobjonga qarab  shikoyagomuz «myau» dedi.
—    Tur, jo‘xoringga qara! Uni ko‘r, mushuk tegdi.
Xotin turayotib baralla  yig‘lab yubordi.
—    Bu yer yutkur qanday balo ekan!.. Odamlarday
gulutaga, tuzga, kesakka boshqorong‘i bo‘lsam-chi!
Turobjon do‘ppisini boshidan oldi va qoqmoqchi bo‘lganida ko‘zi yirtiq yengiga tushdi, yuragi achidi: endi uch-to‘rt suv yuvilgan yangigina yaktak edi!
—    Axir, boshqorong‘i bo‘l, evida bo‘l-da!—dedi do‘ppisini  qoqmasdan  boshiga  kiyib. — Anor,   anor...  Bir qadoq anor falon pul bo‘lsa! Saharimardondan suv tashib, o‘tin yorib, o‘t yoqib bir oyda oladiganim o‘n sakkiz tanga  pul. Akam bo‘lmasa, ukam bo‘lmasa...
Er-xotin tek qolishdi. Xotin jo‘xorini tuyib bo‘ldi, uni kelidan togorachaga solayotib to‘ng‘illadi:
—    Havasga anor yeydi deysiz, shekilli...
—    Bilaman... Axir, nima qilay? Xo‘jayinimni o‘ldirib pulini olaymi, o‘zimni hindiga garov qo‘yaymi? G’alatimisan o‘zing?
Xotin ovqatga unnadi, erining «boshqorong‘i bo‘l, evida bo‘l-da», degani unga juda alam qildi, xo‘rligi keldi, o‘pkasi to‘ldi.
Ovqat pishdi. Qozonning zangi chiqib qoraygan go‘jaga qatiq ham rang kirgizolmadi. Turobjon ikki kosa ichdi, xotini esa hanuz bir kosani yarimlatolmas edi. Uning imillashini ko‘rib Turobjonning ko‘ziga negadir oqsoq mushuk ko‘rindi. Mushuk yirtilgan yengini esiga tushirdi, avzoyi buzildi. Uning avzoyidan «esiz jo‘xori, qatiq, o‘tin» degan ma’noni anglab xotin, ko‘ngli tortmasligiga qaramasdan, kosani bo‘shatdi, ammo darhol tom orqasiga o‘tib ko‘zlari qizargan, chakka tomirlari chiqqan holda qaytdi.
—    Hali tug‘ilmagan bolani yer yutkur deding-a, — dedi Turobjon borgan sayin tutaqib.
Xotin indamay dasturxonni yig‘ishtirib oldi, qozonga suv quyayotib, eshitilar-eshitilmas dedi:
—    O’sha asalning puliga anor ham berar edi.
—    Berar edi! — dedi Turobjon zaharxanda qilib. — Anor olmay asal oldim!
—    Albatta berar edi! Albatta  anor olmay, asal olgansiz!
Mana shunday vaqtlarda til qotib og‘izda aylanmay qoladi, mabodo aylansa, mushtning  xizmatini qiladi.
—    Ajab qildim, — dedi Turobjon titrab, — jigarlaring ezilib ketsin!
Bu so‘z unga qanday ta’sir qilganini faqat boshqorong‘i xotingina biladi. Turobjon bu gapni aytdi-yu, xotinining ahvolini ko‘rib achchig‘idan tushdi, agar izzat-nafs qo‘ysa hozir borib uning boshini silar va: «Qo‘y, xafa bo‘lma, jahl ustida aytdim», der edi.
—    Kishining yuragini qon qilib yuborasan, — dedi anchadan keyin. — Nainki men asal olsam! Asal otliqqa yo‘q, hali biz piyoda-ku! Xo‘jayinga bir oshnasi sovg‘a qilib kelgan ekan, bildirmasdan... o‘zidan so‘rab oz-rog‘ini oldim... O’zi berdi. Tansiq narsa, xursand bo‘larmikansan debman. Yo tansiq emasmi? Umringda necha marta asal yegansan? O’zim umrimda bir marta yeganman: Shokirxo‘ja qandolatchi asal qiyom qildirayotganda qozoniga ammamning jo‘jasi tushib ketgandi, shu jo‘jani yalaganman...
Turobjonning bu so‘zlari xotinining qulog‘iga notayin bir g‘uldirash bo‘lib kirar edi. Uning Turobjon bilan uy qilganiga uch yil bo‘lib kelayotir, nazarida, bu odam shu uch yildan beri g‘uldirab kelgan, hozirgisi shuning davomiday edi. Ittifoqo, bu kun, nima bo‘ldi-yu, uch so‘zni ravshanroq aytdi: «Jigarlaring ezilib ketsin», dedi. Olamda uning suyangani eri, birdan bir orzusi — anor edi, birdaniga har ikkisi ham yo‘qqa chiqdi.
Xotin uyga kirib ketdi. Anchadan keyin darchadan xira shu’la tushdi. Turobjon ham kirdi. Xotin darcha yonida, bir tizzasiga boshini qo‘ygan, qoramtir — kul-rang osmonga qarab o‘tirar edi. Turobjon tikka turib qoldi. Tokchadagi beshinchi chiroq pixillab yonar, uning atrofida katta bir parvona aylanar edi. Turobjon ham darcha yoniga o‘tirdi. Shiftning qaeridir «qirs» etdi, qaerdadir kaltakesak chirqilladi, Turobjonning qulog‘i jing‘illadi. U ham osmonga — xira yulduzlarga qaradi. Masjiddagi keksa baqaterak orqasidan ko‘tarilgan qizg‘ish o‘t ko‘kka olovli iz qoldirib juda yuqoriladi va go‘yo osmonga urilganday chilparchin bo‘lib, «po‘p» etdi.
—    Mushak, — dedi Turobjon, — Mullajon qozining bog‘ida. Mullajon qozi beshik to‘yi qilgan.
Xotin indamadi.
—    Shahardan to‘ralar ham chiqqan, — dedi Turobjon yana.
Xotin yana indamadi. U Mullajon qozining bog‘ini ko‘rgan emas, ammo ta’rifini eshitgan. Bu bog‘ni ko‘z oldiga keltirib ko‘rdi: bog‘ emas, anorzor... Anor daraxtlarida anor shig‘il, choynakday-choynakday bo‘lib bo‘lib osilib yotipti.
—    Bitta mushak uch miri,— dedi Turobjon, — yuzta mushak otilsa... bittangadan yuz tanga. Bir miridan kam — yetmish besh tanga bo‘ladi.
Er-xotin uzoq jim qolishdi. Turobjon og‘zini katta ochib ham esnadi, ham uf tortdi.
—    Ma, buni tik,— dedi u yaktagini yechib, — ma!
Xotin yaktakni olib yoniga qo‘ydi, aftidan, hozir tikmoqchi emas edi.
—    Bo‘l,— dedi    Turobjon,  birpasdan    keyin, — ol... Senga aytyapman!..
—    Ha, muncha!.. Turtmasdap gapira bering... Tikib qo‘yarman, muncha qistov...
Turobjonning tepa sochi tikka bo‘ldi.
—    Hay, sening dimog‘-firog‘ing kimga! Xo‘sh, nima deysan?
—    Men sizga bir narsa deyapmanmi? Tikib qo‘yarman.
—    Har narsaga ro‘zg‘or achchiq bo‘la bersa... qiyinroq bo‘lar,— dedi Turobjon yaktagini  kiyayotib, — kambag‘alchilik...
—    Kambag‘alchilik o‘lsin!
Xotin bu gapni shikoyat tarzida aytdi, ammo Turobjop buni ta’na deb tushundi.
—    Nima, men seni olganimda kambag‘alligimni yashirganmidim? Erkaboyga o‘xshab chimildiqqa birovning to‘ni, kavush-mahsisini kiyib kirganmidim? Bunday armoning  bo‘lsa  hali ham serpulroq odamga teg.    
—    Ikkita anor uchun xotiniigizni serpul odamga oshirgani uyaling!    
Bu gap Turobjonning hamiyatiga tegdi. «Jigarlaring ezilib ketsin» degani xotiniga qancha alam qilgan bo‘lsa, bu gap Turobjonga  shuncha alam qildi.    
—    E,  hoy,  anor olib  bermadimmi? — dedi Turobjon mayin tovush bilan, ammo bu mayin tovushdan qo‘rqqulik edi, — sira anor olib kelmadimmi?
—    Yo‘q! — dedi  xotini  birdan  boshini burib.
Turobjonnipg boshi  g‘ovlab, ko‘zi tindi.
—    O’tgan bozor kuni yegan anoringni o‘ynashing olib kelganmidi?!    
—    O’ynashim olib kelgan edi!
Turobjon bilolmay qoldi: xotinining yelkasiga tepib, so‘ngra o‘rnidan turdimi, yo turib keyin tepdimi; o‘zini obrezning oldida ko‘rdi. Xotin, rangi oppoq, ko‘zlarini katta-katta ochib unga vahimali nazar bilan qarar  va boshini chayqab pichirlar edi:    
—    Qo‘ying... Qo‘ying...
Turobjon uydan chiqib ketdi. Birpasdan keyin ko‘cha eshigi ochilib-yopildi.    
Xotin uzoq yig‘ladi, eriga qattiq gapirganiga pushaymon bo‘ldi, o‘zini qarg‘adi, o‘lim tiladi; yig‘idan tolib tashqariga chiqdi. Qorong‘i, uzoq-yaqinda itlar hurar edi.
Ko‘cha eshigini ochib u yoq-bu yoqqa qaradi — jimjit. Guzar tomonda faqat bitta chiroq miltillar edi. Samovarlar yotgan. Qaytib uyga kirdi.     
Tom orqasida xo‘roz qanot qoqib qichqirdi. Ko‘cha eshigi ochildi. Xotin to burilib qaraguncha Turobjon katta bir tugunni orqalab kirib keldi. U tugunni uyning o‘rtasiga tashladi. Bir choyshab anor har tomonga yumalab ketdi, bir nechasi obrezga tushdi. Turobjon xotiniga qaradi. Uning rangini ko‘rib xotin qo‘rqib ketdi — bu qadar oqargan! Turobjon o‘tirib peshonasini ushladi. Xotini yugurib oldiga keldi va yelkasiga qo‘lini qo‘ydi.
— Qayoqqa   bordingiz? — dedi entikib. — Nima   qildingiz?
Turobjon   javob   bermadi.   Uning   vujudi titrar edi.
`
    },
    'sanatkor': {
        title: 'San\'atkor',
        year: '',
        type: 'Hikoya',
        description: `Kontsert odatdagicha «navbatdagi nomeramizda... Kelganlaringga rahmat, o‘rtoqlar» bilan tamom bo‘ldi. Nomi chiqqan ashulachi — san’atkordan boshqa hamma xursand bo‘lib tarqaldi. San’atkor tajang edi: tanaffus vaqgida zalga chiqqan edi, bir traktorchi uni savodsizlikda aybladi. Traktorchi tanqid qilganiga san’atkor asti chiday olmas edi: traktor qayoqdayu, masalan, «chorzarb» qayoqda, traktorchi qayoqdayu, ashulachi qayoqda!
San’atkor uyiga ketgani izvoshga o‘tirganida yana tutaqib ketdi: «Hech bo‘lmasa aytadigan ashulanshi o‘rgan, so‘zlarini to‘g‘ri ayt» emish! Nimasini bilmayman, nimasi to‘g‘ri emas? Meni shu vaqtgacha muxbirlar, yozuvchilar ham tanqid qilgan emas; formalizm, naturalizmlardan o‘tdim — hech kim otvod bergani yo‘q. Otvod berish qayoqda, hech kim meni og‘ziga ham olmadi. Endi bir traktorchi tanqid qilar emish!..»
San’atkor, izvoshchini hayron qoldirib, o‘zidan-o‘zi g‘o‘ldirab borar edi. Uyda xizmatchi ovqat qilib qo‘ygan ekan, san’atkorning tomog‘idan hech narsa o‘tmadi — ikki piyola choy ichdi, xolos. Unga turib-turib nash’a qilar edi: «Ashulani mexaylistik aytar emishman! Tovushim yomon bo‘lsa nega plastinkaga oldi? Tanqid deganiga endi bu kishining ham tanqid qilg‘ulari kelipti... Amali traktorchi... Obbo!..»
—    O’qishga bordingizmi?— dedi xizmatchiga, qovog‘ini solib.
—    Bordim...— Xizmatchi ikki haftadan beri savod maktabida o‘qir edi.
—    Xizmatchisi savod maktabida o‘qiyotgan bir kishini traktorchi savodsiz, desa alam qilmaydimi? - dedi san’atkor o‘zicha bo‘g‘ilib, — «labingdan bo‘lsa olsam, e, shakarlab», deganim u kishiga yoqmapti, «bo‘lsa» emas, «bo‘sa» emish! O’zi bilmaydiyu, menga o‘rgatganiga kuyaman! Senga o‘xshagan savodsizlar «bo‘sa, bo‘masa» deydi. Artist kulturniy odam— gapni adabiy qilib aytadi — «bo‘lsa, bo‘lmasa» deydi. Pojarni «gugurtni yerga tashlamang» dedi, rejissyorimiz esa «gugurtning yerga tashamang» dedi. Qanday chiroylik! Pojarnimi, pojarningmi? Shoshma, nimauchun pojarni? Pojarni, albatta! Rejissyorimiz juda kulturniy odam. Odam degan mana shunday bo‘lsa, urishsa ham xafa bo‘lmaydi kishi — ikki gapning birida «ta’bir joyiz ko‘rilsa» deb turadi. Bu traktorchi menga shuncha dashnom berib, ko‘ngil uchun bir marta «ta’bir joyiz ko‘rilsa» demadi.
Xizmatchi daftar-qalam keltirib, san’atkorning oldiga qo‘ydi.
—    «J»ning kattasi qanday yozilar edi? Domlamiz bir kuni ko‘rsatgan edi, esimda qolmapti.
San’atkorning jahli chiqdi:
—    Endi «J»ga keldingizmi? Barjom deganda yoziladi.
Kechagi barjom og‘zi ochiq qolipti, gazi chiqqandan keyin bir pulga qimmat. Siz ham dunyoga kelib kulturniy bo‘lsangiz-chi!.. Burningiz terladi, arting, ta’bir joyiz ko‘rilsa!
San’atkor o‘rnidan turib yotoqqa kirib ketdi.
—    Yotasizmi?— dedi xizmatchi narigi uydan.
—    Nima edi?
—    «J»ning kattasini ko‘rsatib bermadingiz, ertaga domla so‘raydigan edilar. Qanaqa yoziladi?
— Kichigini yozib qattiqroq o‘qing!
San’atkor yechinib ko‘rpaga kirdi. Xizmatchi chiroqni o‘chirib chikdi. San’atkor ko‘zini yumdi, ko‘ziga g‘ira-shira qorong‘i zaldagi son-sanoqsiz kallalar ko‘rindi. Bular ichida eng kattasi traktorchining kallasi, u iljayar edi.
—    Afting qursin!- dedi san’atkor va narigi yonboshiga ag‘darildi.
Xayal o‘tmay uyquga ketib, xurrak otdi. Uning xurragi ham nechukdir adabiyroq edi: «Pluq-qum-prr... pluq-qum-prr...»
`
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
                ${work.description}
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
