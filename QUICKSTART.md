# 🚀 Tez Boshlanish - 5 DAQIQA

## Saytni Hali Shuni Bugun Boshlang!

### STEP 1: Saytni Browser-da Oching (30 sekund)
```
C:\Users\Abdulla\Nextcloud\Python\Abdulla Qahhor\project\index.html
```
Faylga ikki marta click qiling → **SAYT OCHILADI**

✅ Saytni test qiling - Barcha bo'limlar ishlaydi!

---

### STEP 2: Matnlarni O'zgartirlsh (2 daqiqa)

Notepad yoki VS Code bilan `index.html` faylini oching:

#### Qadam 1: "Xush Kelibsiz" matnini tahrir qiling
**25-26 qatorlar:**
```html
<h1 class="header-title">Abdulla Qahhor</h1>
<p class="header-subtitle">Buyuk O'zbek Yozuvchisi</p>
```

#### Qadam 2: Biografia matnini o'zgartir qiling
**164-166 qatorlar:**
```html
<p>Abdulla Qahhor (1907-1978) - o'zbek adabiyotining buyuk yozuvchisi...</p>
```

#### Qadam 3: Kontakt ma'lumotlarini yangilang
**570-574 qatorlar:**
```html
<li><i class="fas fa-envelope"></i> <a href="mailto:your@email.com">your@email.com</a></li>
<li><i class="fas fa-phone"></i> <a href="tel:+998712345678">+998 71 234-56-78</a></li>
```

**Saqlang** (Ctrl+S) → Brauzer-da **F5** bosign → ✅ YANGI MATN KO'RSATILADI!

---

### STEP 3: Ranglar O'zgartirlsh (2 daqiqa)

`css/style.css` faylini oching, **7-14 qatorlar:**

```css
:root {
    --primary-color: #8B7355;      /* ASOSIY RANG */
    --secondary-color: #D4A574;    /* IKKINCHI RANG */
    --accent-color: #C19A6B;       /* AKSENT RANG */
}
```

**Rang misollari:**
- Qizil: `#C41E3A`
- Ko'k: `#0052B4`
- Yashil: `#2E8B57`
- Jigarrang: `#8B4513`

**O'ngartish:**
- Rang picker: https://htmlcolorcodes.com
- Ko'z kelganni tanlang → Ko'd nusxasini oling → Joyni almashtiring

---

### STEP 4: Rasmlarni Qo'shish (1 daqiqa)

1. Rasmlarni tayyorlang (JPG, PNG)
2. `project/images/` papkasiga joylashtiring
3. Faylning nomini to'g'ri qiling:
   - `abdulla-qahhor-port.jpg` - Portret
   - `ogrim.jpg` - Kitob muqovasi
   - `photo1.jpg` - Galereya rasmi

**Saqlang** → Brauzer-da F5 → ✅ RASMLAR KO'RSATILADI!

(Rasmlar hozir bo'lmasa, placeholder rasmlar ko'rsatiladi)

---

### STEP 5: Iqtiboslar Qo'shish (1 daqiqa)

`js/script.js` faylini oching, **1-15 qatorlar:**

```javascript
const quotes = [
    {
        text: "Birinchi iqtibos",
        author: "Abdulla Qahhor"
    },
    {
        text: "Ikkinchi iqtibos",
        author: "Abdulla Qahhor"
    },
    // YANGI IQTIBOS QO'SHING
    {
        text: "Yangi iqtibos matni",
        author: "Abdulla Qahhor"
    }
];
```

**Saqlang** → Brauzer-da F5 → ✅ YANGI IQTIBOS KO'RSATILADI!

---

## 🎯 Eng Muhim Fayllar

| Fayl | Maqsadi |
|------|---------|
| `index.html` | **Asosiy tarkib** - Matn, sarlavhalar |
| `css/style.css` | **Ranglar va shakil** - Dizayn |
| `js/script.js` | **Interaktivlik** - Iqtiboslar, funktsiyalar |
| `data/data.json` | **Ma'lumotlar** - JSON formatida |

---

## 📱 Saytni Test Qilish

### Safari yoki Chrome-da:
1. `index.html` faylni brauzer-ga su'string qiling
2. **F12** bosing → Developer Console ochiladi
3. Xatolar bor-yo'q tekshiring

### Telefonda:
- Shunaqa WiFi shaxsing kabi joylashtiring
- Telefonda: `http://192.168.x.x:8000`

---

## ✅ Tekshirish Ro'yxati

Har bir tahrirlashdan keyyin:

- [ ] Sayt brauzerda ochiladi
- [ ] Matnlar to'g'ri ko'rsatiladi
- [ ] Rasmlar ko'rsatiladi
- [ ] Linklar ishlaydi
- [ ] Renkli to'g'ri ko'rsatiladi
- [ ] Mobilda ham ko'rinadi

---

## 🐛 Eng Muhim Masalalar

### Xata: Sayt ochilmadi
**Echim:** Faylning nomini tekshiring (Lotin harflari)

### Xata: Matn eski qoldi
**Echim:** F5 bosing (Cache delete)

### Xata: Rasm ko'rsatilmadi
**Echim:** File nomini tekshiring - kichik harflari bo'lsin

### Xata: Sayt sekin
**Echim:** Rasmlarni compress qiling

---

## 🔗 Saytni Joylashtirish (Ixtiyoriy)

### Eng Oson - GitHub Pages (BEPUL)

1. GitHub-ga kirish: https://github.com
2. Yangi repo: `username.github.io`
3. Fayllarni joylashtir
4. **SAYT LIVE BO'LADI:** `https://username.github.io`

**Batafsil:** DEPLOYMENT_GUIDE.md-dagi Step 2 bo'limni o'qing

---

## 📞 Qo'shimcha Ko'rsatmalar

Agar savol bo'lsa:
- `README.md` - Sayt haqida
- `IMAGES_GUIDE.md` - Rasmlar haqida
- `CUSTOMIZATION_GUIDE.md` - Tahrirlash haqida
- `DEPLOYMENT_GUIDE.md` - Joylashtirish haqida

---

## 🎉 TAYYOR!

Siz hozir Abdulla Qahhor nomi bilan modern veb-saytga ega bo'ldingiz!

**Keyingi qadamlar:**
1. ✅ Saytni brauzerda oching
2. ✅ Matnlarni o'zgartirlsh
3. ✅ Ranglarni sozla
4. ✅ Rasmlarni qo'shish
5. ✅ Joylashtirish (ixtiyoriy)

---

**Sayt qilish vaqti:** 30 daqiqa
**Joylashtirish vaqti:** 5 daqiqa (GitHub Pages)
**Total:** 1 soat

**Bismillah - Boshlang!** 🚀

---

*Tayyorlangan: Mart 2026*
*Tili: O'zbek*
*Versiya: 1.0*
