# Rasmlarni Topish va Joylashtirish Bo'yicha Ko'rsatma

Bu fayl saytda qo'llanilgan rasmlarni qayerdan topish va qanday joylashtirish haqida yo'riqnoma beradi.

## Zarur Rasmlar Ro'yxati

### 1. **Abdulla Qahhor Portret Rasmi** (`images/abdulla-qahhor-port.jpg`)
- **Faylning nomi:** `abdulla-qahhor-port.jpg`
- **O'lchami:** 300x400 px yoki undan katta
- **Nisbat:** 3:4 (vertikal)
- **Sifat:** Engli 1200x1600 px
- **Qayerdan topish:**
  - Wikipedia
  - Uzbek Literary Museum
  - National Archives of Uzbekistan
  - Google Images (Flickr, Commons)

### 2. **Asarlari Muqovaslari** 
#### O'G'RIM (`images/ogrim.jpg`)
- **Faylning nomi:** `ogrim.jpg`
- **O'lchami:** 250x350 px yoki undan katta
- **Nisbat:** 5:7 (kitob muqovasi)

#### Sinchalak (`images/sinchalak.jpg`)
- **Faylning nomi:** `sinchalak.jpg`
- **O'lchami:** 250x350 px yoki undan katta
- **Nisbat:** 5:7

#### BEMOR (`images/bemor.jpg`)
- **Faylning nomi:** `bemor.jpg`
- **O'lchami:** 250x350 px yoki undan katta
- **Nisbat:** 5:7

**Topish joylar:**
- Kitob sotuvchi do'konlari (o'zbek adabiyoti bo'limi)
- Kutubxonalar (Tashkent Davlat Kutubxonasi)
- Arxivlar
- Online kitob sotuvchi (Kitob.uz, Oybek.uz)

### 3. **Galereya Rasmlar** (`images/photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`)
- **O'lchami:** 500x500 px yoki undan katta
- **Nisbat:** 1:1 (kvadrat)
- **Sana:** Raqamli asr rasmlar (1900-1970)

**Qanday rasmlar bo'lishi kerak:**
- photo1.jpg - Abdulla Qahhor portreti (ilk 1900-lar)
- photo2.jpg - Yozuv tajribasi, maktab yoki ofisi
- photo3.jpg - Oila rasmi yoki ijtimoiy tadbir
- photo4.jpg - Kitobhona yoki adabiy jamiasi

**Topish joylar:**
- Tashkent Davlat Arxivi
- Uzbekiston Film Studiyasi
- Adabiy Muzeylar
- Rasm Galereyalar
- Arxiv va muze saytlari

## Rasm Formatlari

### Tushuntirilgan formatlar
- **JPG/JPEG** - Fotogrammalar (sifat: 85-95%)
- **PNG** - Grafika va transzparentsiya bilan
- **WebP** - Zamonaviy format (kichik hajm)

### Tavsiya etilgan
1. Avvalo JPG-da yuklang (sifat: 90%)
2. Ortiqcha to'g'ri bo'lsang, WebP versiyasini yarating
3. Hech qachon GIF ishlatmang (eskirgan)

## Rasm Sifatini Tekshirish

Yuklagandan oldin quyidagarni tekshiring:

✓ Rasm javobgar va ko'p kontrastli
✓ O'lchami 3MB dan ortiq emas
✓ Barcha rasm formatlari mo'ljallangan bo'lgan 
✓ Mualliflik huquqi muammosi yo'q
✓ Fuzionlash yaroqli

## Rasm Sifatini Yaxshilash (ImageMagick)

```bash
# Rasm o'lchami o'zgartirish
convert photo.jpg -resize 500x500 -quality 90 photo.jpg

# WebP formatga aylantirish
convert photo.jpg -quality 90 photo.webp

# Batch processing (barcha JPG rasmlar)
for file in *.jpg; do
  convert "$file" -resize 500x500 -quality 90 "resized_$file"
done
```

## Rasm Yuklaganing Qadamlari

1. **Rasmni yuklab oling**
   ```bash
   cd project/images/
   ```

2. **Rasmni o'zgartirlng (o'lchami va sifat)**
   ```bash
   # O'lchami o'zgartirish
   convert abdulla-qahhor.jpg -resize 300x400 -quality 90 abdulla-qahhor-port.jpg
   ```

3. **Faylning nomini tekshiring**
   - HTML faylida nomi to'g'ri bo'lishi kerak
   - Kichik harflarga o'tkazing
   - Bo'sh joylar va maxsus belgilar ishlatmang

4. **HTML-dagi manzilni tekshiring**
   ```html
   <img src="images/abdulla-qahhor-port.jpg" alt="Abdulla Qahhor">
   ```

## Placeholder Rasmlar

Agar shunaqa vaqtda rasmlar bo'lmasa, sayt avtomatik placeholder (SVG) rasmlarni ko'rsatadi.

## Creative Commons Rasmlar

Quyidagi manbalardan mualliflik huquqi bilan to'g'ri rasmlarni topish mumkin:

1. **Wikimedia Commons** - https://commons.wikimedia.org
   - Tarmog: "Abdulla Qahhor" + "Uzbek writer"

2. **Unsplash** - https://unsplash.com

3. **Pexels** - https://pexels.com

4. **Pixabay** - https://pixabay.com

5. **Archive.org** - https://archive.org

## Copyright Management

- **Public Domain** rasmlarni isteʻmol qiling (1923 yildan oldin amaliyotta bo'lgan rasmlar)
- **Creative Commons** lisenziya bilan rasmlarni isteʻmol qiling (CC0, CC-BY)
- Muallif ismi va manbani har doim qolg'ini

## Masalalar va Echimlar

| Muammo | Echimi |
|--------|--------|
| Rasm yuklanmadi | Faylning nomi to'g'ri ekanligini tekshiring |
| Rasm bugunilikdek ko'rinmaydi | O'lchamni va nisbatni tekshiring |
| Rasm sekin yuklanadi | Hajmini qichqiring (650KB dan o'zaro) |
| Copyright muammosi | Public Domain yoki Creative Commons rasm isteʻmol qiling |

## Tafsiya

Sayt avtomatik placeholder rasmlar bilan ishlaydi. Hozir rasmlar bo'lmasa:
1. Placeholder rasmlar ko'rsatiladi
2. Rasmlarni keyinchalik qo'shish mumkin
3. Faylning nomini HTML-dagi binodda o'zgartirishning zaruriyati yo'q

## Tezkor Rasmlarni Yuklagening Skripti

```python
#!/usr/bin/env python3
import os
from PIL import Image

# Rasmlarning o'lchami
sizes = {
    'abdulla-qahhor-port.jpg': (300, 400),
    'ogrim.jpg': (250, 350),
    'sinchalak.jpg': (250, 350),
    'bemor.jpg': (250, 350),
    'photo1.jpg': (500, 500),
    'photo2.jpg': (500, 500),
    'photo3.jpg': (500, 500),
    'photo4.jpg': (500, 500)
}

# Rasmlarni o'zgartirlng
for filename, size in sizes.items():
    if os.path.exists(filename):
        img = Image.open(filename)
        img.thumbnail(size, Image.LANCZOS)
        img.save(filename, quality=90)
        print(f"✓ {filename} - O'zgartirildi")
    else:
        print(f"✗ {filename} - Topilmadi")
```

---

**Maslahatlar va koʻmakatdan foʻydalanish:**

Agar rasmlarni topishda muammo bo'lsa, o'zbek adabiyot mutaxassislaridan yoki Tashkent Davlat Kutubxonasidan foydalanishni tafsiya qiling.

**Muallif huquqi:** Bu ko'rsatma saytning qismi va Creative Commons lisenziyasi ostida tarqatiladi.
