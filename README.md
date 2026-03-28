# Abdulla Qahhor - Resmi Veb-Sayt

Bu loyiha Abdulla Qahhor haqida bir to'liq, zamonaviy va jasur veb-sayt.

## Proyekta Struktura

```
project/
├── index.html          # Asosiy HTML fayl
├── css/
│   └── style.css       # CSS stillar (dizayni va responsiv)
├── js/
│   └── script.js       # JavaScript (interaktivlik)
├── images/             # Rasmlar bo'limi
└── data/
    └── data.json       # JSON ma'lumotlar
```

## Asosiy Xususiyatlar

✅ **Zamonaviy Dizayni** - Vintage va klassik uslubda qo'llanilgan
✅ **Responsive Design** - Mobil, tablet, desktop da to'g'ri ishlaydi
✅ **Oson Navigatsiya** - Barcha bo'limlar oson topiladi
✅ **Interaktiv Elementlar** - Quote carousel, image gallery, smooth scroll
✅ **SEO Optimized** - Qidiruv tizimlari uchun optimizeer
✅ **Accessibility** - Barcha foydalanuvchilar uchun qulay

## Saytni Boshlash

### 1. Fayllari Tayyorlash

Rasmlarni `images/` papkasiga joylashtiring:
- `abdulla-qahhor-port.jpg` - Abdulla Qahhor rasmi (yuqori bo'lib)
- `ogrim.jpg` - "O'G'RIM" asarining muqovasi
- `sinchalak.jpg` - "Sinchalak" asarining muqovasi
- `bemor.jpg` - "BEMOR" asarining muqovasi
- `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg` - Galereya rasmlar

### 2. Saytni Ko'rish

1. `index.html` faylini brauzerda oching
2. YOKI sadasi web serverda joylashtiring:
   ```bash
   python -m http.server 8000
   ```
   Keyin `http://localhost:8000` manzdiga kiring

## Sayt Bo'limlari

### 1. **Header** - Abdulla Qahhor sarlavhasi va rasmi
### 2. **Navigation** - Asosiy menyu
### 3. **Xush Kelibsiz** - Kirish bo'limi
### 4. **Mashhur Asarlar** - Eng muhim kitoblar
### 5. **Tarjimai Hol** - Biografia va muhim voqealar
### 6. **Iqtiboslar** - Ayolning mashhur so'zlari
### 7. **Foto Galereya** - Rasmlar to'plami
### 8. **Video va Media** - Video fayllar
### 9. **Zakovat Testi** - Bilim sinavi
### 10. **Foydali Manbalar** - Qoshimcha ma'lumotlar
### 11. **Audio Asarlar** - Ovozli yozuvlar
### 12. **Contact** - Aloqa bo'limi

## Rang Sxemasi

- **Asosiy rang**: `#8B7355` (Qahva rangida)
- **Ikkinchi rang**: `#D4A574` (Oq qotiling)
- **Aksent rang**: `#C19A6B` (Oltin rangida)
- **Fon**: `#FDFAF5` (Eskirgancha oq)

## O'zgartirishlar va Sozlashlar

### HTML o'zgartirishlar
`index.html` faylida:
- Sarlavhalar va tavsiflarni o'zgartiring
- Bo'limlarni qo'shing yoki olib tashlang
- Linklar va kontakt ma'lumotlarini yangilang

### CSS o'zgartirishlar
`css/style.css` faylida:
- Ranglarni `--primary-color` va boshqalarni o'zgartiring
- Font hajmlarini `font-size` bilan sozlang
- Padding va margin qiymatlarini o'zgartiring

### JavaScript o'zgartirishlar
`js/script.js` faylida:
- Iqtiboslarni qo'shing (quotes arrayiga)
- Yangi interaktiv xususiyatlar qo'shing
- Analytics kodni integratsiya qiling

## Rasmlarni Topish va Qo'shish

Agar rasmlar mavjud bo'lmasa, placeholder rasmlar ko'rsatiladi. 
Rasmlarni qo'shish uchun:

1. Rasmni PNG, JPG, WebP formatida tayyorlang
2. `images/` papkasiga joylashtiring
3. HTML faylida nomi to'g'ri bo'lishiga qarang

**Tavsiya etilgan rasm hajmlari:**
- Header rasmi: 300x400 px
- Asarlar muqovasi: 300x400 px
- Galereya rasmlar: 500x500 px (kvadrat)

## Web Serverga Joylashtirish

### GitHub Pages bilan
1. Proyektani GitHub-ga yuklang
2. Settings > Pages
3. Branch ni `main` tanlang

### Heroku bilan
1. `Procfile` fayl yarating:
   ```
   web: python -m http.server 8000
   ```
2. Git push qiling va Heroku-da deploy qiling

### ISP bilan
FTP orqali `project/` papkasini serverga yuklang

## Support va Do'stlik

Sayt semantik HTML5 va CSS3 dan foydalanadi.
JavaScript hech qanday external libraryga bog'liq emas (vanilla JS).

## MIT Litsenziyasi

Shu proyektani beri ishlatishingiz mumkin.

## Ko'proq Ma'lumot

- [Abdulla Qahhor haqida](https://uz.wikipedia.org)
- [O'zbek Adabiyoti](https://literature.uz)
- [Web Dizayni](https://webdesigndesk.com)

---

**Yaratilgan:** 2024
**Oxirgi o'zgartirish:** Mart 2026
