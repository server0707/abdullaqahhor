# Saytni Amaliy Foydalanish va Tahrirlash Co'rsatmasi

## Tez Boshlanish

### 1. Saytni Ochish
```bash
cd "c:\Users\Abdulla\Nextcloud\Python\Abdulla Qahhor\project"
# Keyin index.html ni ikki marta click qiling
```

### 2. Eng Muhim Fayllar
| Fayl | Maqsadi | O'zgartirlsh |
|------|---------|-------------|
| `index.html` | Asosiy tarkib | Matnlarni, sarlavhalarni o'zgartiring |
| `css/style.css` | Ranglar va shakil | Ranglarni `--primary-color` o'zgartirlng |
| `js/script.js` | Interaktivlik | Iqtiboslar, faqiqatliar qo'shing |
| `data/data.json` | Ma'lumotlar | Abdulla Qahhor haqida ma'lumotlar |

---

## Kontent Tahrirlash

### Asosiy Matnlarni O'zgartirlsh

#### 1. Sayt Sarlavhasi
`index.html` 25-26 qatorlari:
```html
<h1 class="header-title">Abdulla Qahhor</h1>
<p class="header-subtitle">Buyuk O'zbek Yozuvchisi</p>
```

#### 2. Xush Kelibsiz Bo'limi
107 qatoridagi matnni tahrir qiling:
```html
<p>Abdulla Qahhor hayoti ijodi va hikoyalari haqida ko'proq ma'lumot olish...</p>
```

#### 3. Biografia Bo'limi
164 qatorida:
```html
<p>Abdulla Qahhor (1907-1978) - o'zbek adabiyotining buyuk yozuvchisi...</p>
```

#### 4. Asarlar Ro'yxati
144-178 qatorlarda. Yangi asarlari qo'shish:
```html
<div class="work-item">
    <div class="work-image">
        <img src="images/yeni-kitob.jpg" alt="Yangi Kitob">
    </div>
    <h3>Kitobning Nomi</h3>
    <p class="work-year">2024</p>
</div>
```

---

## Ilohiy Qo'shish

### Yangi Iqtibos Qo'shish
`js/script.js` 1-15 qatorlarda `quotes` arrayiga:
```javascript
const quotes = [
    {
        text: "Birinchi iqtibos matni",
        author: "Abdulla Qahhor"
    },
    {
        text: "Ikkinchi iqtibos matni",
        author: "Abdulla Qahhor"
    },
    // Yangi iqtibos QO'SHING
    {
        text: "Yangi iqtibos matni",
        author: "Abdulla Qahhor"
    }
];
```

### Timeline Event Qo'shish
`data/data.json` faylida:
```json
{
    "year": 1925,
    "event": "Yangi voqea tasmigi"
}
```

---

## Ranglar O'zgartirlsh

### CSS Ranglarini Sozlash
`css/style.css` 7-14 qatorlar:
```css
:root {
    --primary-color: #8B7355;      /* Asosiy rang */
    --secondary-color: #D4A574;    /* Ikkinchi rang */
    --accent-color: #C19A6B;       /* Aksent rang */
    --dark-color: #5C4033;         /* To'nqin rang */
    --light-color: #F5E6D3;        /* Yengil rang */
}
```

#### Rang misollari:
- **Qizil:** `#C41E3A`
- **Ko'k:** `#0052B4`
- **Yashil:** `#2E8B57`
- **Jigarrang:** `#8B4513`
- **Qora:** `#1C1C1C`

#### Rang kodlarini topish:
- https://color-picker.com
- https://htmlcolorcodes.com 
- https://www.canva.com/colors

---

## Xususiy Maktu Sayflar Qo'shish

### Yangi Sahifa Yaratash
1. HTML faylida yangi `<section>` qo'shing:
```html
<section id="yangi-sahifa" class="new-section">
    <div class="container">
        <h2 class="section-title">Yangi Sahifa</h2>
        <p>Kontent bu yerga keladi</p>
    </div>
</section>
```

2. Navigation menuyda link qo'shing:
```html
<li class="nav-item"><a href="#yangi-sahifa" class="nav-link">Yangi Sahifa</a></li>
```

3. CSS ga stil qo'shing:
```css
.new-section {
    padding: 60px 20px;
    background: white;
}
```

---

## Forma va Kontakt Qo'shish

### Kontakt Formasi
`index.html` footer bo'limiga qo'shing:
```html
<section class="contact-form-section">
    <div class="container">
        <h2>Biz Bilan Bog'laning</h2>
        <form action="mail.php" method="POST">
            <input type="text" name="ism" placeholder="Isming" required>
            <input type="email" name="email" placeholder="Email" required>
            <textarea name="xabar" placeholder="Xabaring" rows="5"></textarea>
            <button type="submit">Yuborish</button>
        </form>
    </div>
</section>
```

### Email Yuboruvchi Script
`mail.php` faylini yarating:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ism = htmlspecialchars($_POST['ism']);
    $email = htmlspecialchars($_POST['email']);
    $xabar = htmlspecialchars($_POST['xabar']);
    
    $to = "info@abduquahhor.uz";
    $subject = "Yangi xabar: " . $ism;
    $body = "Kim: $ism\nEmail: $email\n\nXabari:\n$xabar";
    
    mail($to, $subject, $body);
    echo "Rahmat! Xabar yuborildi.";
}
?>
```

---

## Social Media Linklar

### Ijtimoiy Tarmoqlarini Ulash
Footer bo'limiga URL larni o'zgartirlng:
```html
<a href="https://facebook.com/abduquahhor" class="social-link">
    <i class="fab fa-facebook"></i>
</a>
```

---

## JSON Ma'lumotlarini O'zgartirlsh

`data/data.json` faylini tahrir qiling:

### Asarları Qo'shish:
```json
{
    "title": "Yangi Asari Nomi",
    "year": 1940,
    "type": "Roman",
    "description": "Asari toʻgʻrisida tavsif",
    "image": "yangi-asari.jpg"
}
```

### Timline Qo'shish:
```json
{
    "year": 1945,
    "event": "Muhim voqea"
}
```

---

## Tipik Tahrirlashlar

### 1. Sayt Nomini O'zgartirish
```html
<!-- index.html -->
<title>Yangi Sayt Nomi - O'zbeki Sayt</title>
```

### 2. Domen o'zgartirish
```html
<!-- index.html footer -->
<a href="mailto:yangi@email.uz">yangi@email.uz</a>
```

### 3. Tili O'zgartirish
HTML bovida:
```html
<html lang="uz">  <!-- O'zbek -->
<!-- yoki -->
<html lang="en">  <!-- Ingliz -->
```

### 4. Asosiy Rangni O'zgartirish
```css
/* css/style.css */
--primary-color: #2E8B57;  /* Yashil */
```

---

## JavaScript Foydalanuvchi Funktsiyalargini Qo'shish

`js/script.js` oxirida yangi funksiya qo'shing:

```javascript
// Yangi funksiya
function myCustomFunction() {
    console.log("Mening funktsiyam bajarildi");
    alert("Salom!");
}

// Event listener
document.getElementById("myButton").addEventListener("click", myCustomFunction);
```

---

## Rasmlarni O'zgartirlsh

### Rasmning nomini tahrir qiling
HTML-da:
```html
<!-- Eski -->
<img src="images/photo1.jpg" alt="Abdulla Qahhor">

<!-- Yangi -->
<img src="images/yangi-rasm.jpg" alt="Abdulla Qahhor">
```

### Rasm o'lchamni o'zgartirlsh
CSS-da:
```css
.work-image {
    height: 350px;  /* Eski: 300px */
}
```

---

## Performance Improvementlar

### 1. Rasmlarni Compress Qilish
```bash
# Windows bilan ImageMagick
magick convert photo.jpg -quality 85 photo-compressed.jpg
```

### 2. CSS Minify Qilsh
- Online tool: https://cssminifier.com

### 3. JavaScript Minify Qilsh
- Online tool: https://minifycode.com/javascript

---

## Testing Checklist

Tahrirlangandan keyyin tekshiring:

- [ ] Sayt brauzerda ochiladi
- [ ] Barcha linklar ishlayni
- [ ] Rasmlar ko'rsatiladi
- [ ] Responsive design (mobile, tablet) ishlayni
- [ ] JavaScript console da xatolar yo'q
- [ ] CSS to'g'ri joylanadi
- [ ] Matnlar to'g'ri kodlangan
- [ ] Linklar to'g'ri redirect qiladi

---

## Problems va Echimlar

### Xata: "ReferenceError: ... is not defined"
**Sabab:** JavaScript o'zgaruvchi topilmadi
**Echim:** Variablening nomini tekshiring

### Xata: 404 Fayl topilmadi
**Sabab:** Faylning yo'li noto'g'ri
**Echim:** Faylning paketini tekshiring

### Rasm ko'rsatilmadi
**Sabab:** Rasm nomi yoki pathi noto'g'ri
**Echim:** Faylning nomi HTML-dagi nomga mos kelishini tekshiring

### Sayt sekin
**Sabab:** Rasmlar kattaligi
**Echim:** Rasmlarni compress qiling

---

## Backup Olib Olish

Regular backup yaratish:
```bash
# Butun proyektani kopirlash
Copy-Item -Path "project" -Destination "project-backup-$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
```

---

## Keyingi Qadamlar

1. ✓ Kontent o'zgartirlsh
2. ✓ Ranglar sozlash
3. → Rasmlarni qo'shish
4. → Saytni test qilish
5. → Joylashtirish
6. → SEO sozlash

---

## Qo'llab-Quvvatlash

Savollar bo'lsa:
- README.md - Asosiy ma'lumot
- IMAGES_GUIDE.md - Rasmlar haqida
- DEPLOYMENT_GUIDE.md - Joylashtirish haqida

---

**Tayyorlash sana:** Mart 2026
