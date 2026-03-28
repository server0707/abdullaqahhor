# Saytni Joylashtirish Bo'yicha Ko'rsatma

Abdulla Qahhor haqida veb-saytni turli joyoqlarda joylashtirish uchun ko'rsatmalar.

## 1. Lokal Kompyuterda Test Qilish

### Python bilan
```bash
cd project
python -m http.server 8000
```
Keyin brauzerda `http://localhost:8000` manzdiga kiring.

### PHP bilan
```bash
cd project
php -S localhost:8000
```

### Node.js bilan
```bash
cd project
npx http-server
```

---

## 2. GitHub Pages (BEPUL)

### Qadamlar:

1. **GitHub ni yangi repozitoriyaga o'tkazing**
   - Saytga kiring: https://github.com
   - Yangi repository yarating: `abduquahhor.github.io`
   - (yoki: `username.github.io/abduquahhor`)

2. **Loyihani joylashtiring**
   ```bash
   cd project
   git init
   git add .
   git commit -m "Initial commit: Abdulla Qahhor website"
   git branch -M main
   git remote add origin https://github.com/yourname/abduquahhor.github.io.git
   git push -u origin main
   ```

3. **Joylashtirish sozlamalarini tekshiring**
   - Repository > Settings > Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`

4. **Veb-sayt mavjud bo'ladi**
   - https://yourname.github.io/abduquahhor

---

## 3. Netlify DEPLOY (BEPUL)

### Qadamlar:

1. **Netlify-ga ro'yxat o'tkazing**
   - Saytga kiring: https://netlify.com

2. **Repo-ni ulanish (GitHub orqali)**
   - "New site from Git" bosmasi
   - GitHub-ni tanlang
   - `abduquahhor` repozitoriyasini tanlang

3. **Deployment sozlamalari**
   - Build command: (bo'sh qoldiring)
   - Publish directory: `project`

4. **Deploy qiling**
   - Netlify avtomatik deploy qiladi
   - https://yoursite.netlify.app

---

## 4. Vercel (BEPUL)

### Qadamlar:

1. **Vercel-ga ro'yxat o'tkazing**
   - Saytga kiring: https://vercel.com

2. **Loyihani import qiling**
   - "Import Project"
   - GitHub repozitoriyasini tanlang

3. **Deploy qiling**
   - Build command: (bo'sh)
   - https://yourproject.vercel.app

---

## 5. O'zbek Hosting (To'langan)

### Tafsiya qilingan Hosting Provayderlar

#### **UzHost**
- Veb-sayt: https://uzhost.uz
- Narxi: Taxminan 10,000-30,000 som/oy
- Qo'llab-quvvatlash: O'zbekcha va Ruscha

#### **InternetUZ**
- Veb-sayt: https://internet.uz
- Ishonchli hamshera
- A2 Hosting bilan hamkorlik

#### **NetPOP**
- Veb-sayt: https://netpop.uz
- PHP va MySQL qo'llashadi

### Joylashtirish Qadamlari:

1. **Hosting Rejasini Tanlang**
   - Shared Hosting (eng arzonlari)
   - 5-10 GB disk joy
   - PHP 7.4+
   - MySQL 5.7+

2. **FTP orqali Yuklaganing**
   ```bash
   # FTP clientni yuklab oling (FileZilla)
   # Kirish parametrlari:
   # Host: ftp.yourdomain.uz
   # Username: FTP username
   # Password: FTP parol
   
   # Fayllarni yuklaganing
   # public_html/ papkasiga project/ fayllarini joylashtiring
   ```

3. **Domen Ulanganing**
   - Domen registratori: https://uznic.uz
   - Domen: abdullaqahhor.uz
   - (Narxi: ~50,000 som/yil)

---

## 6. Cloud Hosting - AWS (To'langan)

### Tafsiya: AWS Amplify

1. **AWS Amplify-ga o'tkazing**
   - https://amplify.aws

2. **GitHub-ni ulang**
   - Deploy GitHub repozitoriyasini tanlang

3. **Build sozlamalarini o'rnating**
   - Build command: (bo'sh)
   - Start command: (bo'sh)

---

## 7. Docker-ga Paketlash (Advanced)

### Dockerfile yarating:
```dockerfile
FROM node:18-alpine
WORKDIR /app
RUN npm install -g http-server
COPY . .
EXPOSE 8080
CMD ["http-server", "-p", "8080", "-c-1"]
```

### Ishga tushirish:
```bash
# Docker tasvir yarating
docker build -t abduquahhor-website .

# Docker konteyner chalmayaing
docker run -p 8080:8080 abduquahhor-website
```

---

## 8. Telegram Bot oʻrnatish (O'zbek foydalanuvchilar uchun)

### Sayt ma'lumotlarini Telegram bot orqali tarqatish:

1. **Bot yarating**
   - BotFather-ga yozing: @BotFather
   - `/newbot` buyrug'i

2. **Bot Python skripti**
   ```python
   import telebot
   
   API_TOKEN = 'YOUR_BOT_TOKEN'
   bot = telebot.TeleBot(API_TOKEN)
   
   @bot.message_handler(commands=['start'])
   def start(message):
       bot.reply_to(message, 
           "Abdulla Qahhor haqida veb-saytga xush kelibsiz!\n"
           "https://yoursite.com")
   
   bot.infinity_polling()
   ```

---

## SEO Optimizatsiyasi

### 1. Google Search Console-ga o'tkazing
- https://search.google.com/search-console
- Sitemap qo'shigan: `/sitemap.xml`

### 2. Bing Webmaster Tools
- https://www.bing.com/webmasters

### 3. Meta Tags Tavsiya
```html
<meta name="description" content="Abdulla Qahhor - Buyuk O'zbek Yozuvchisi">
<meta name="keywords" content="Abdulla Qahhor, O'zbek adabiyoti">
<meta property="og:title" content="Abdulla Qahhor">
```

---

## SSL/HTTPS Sozlamash

### Let's Encrypt (BEPUL)

```bash
# Certbot ni o'rnating
sudo apt-get install certbot python3-certbot-nginx

# Sertifikat yarating
sudo certbot certonly -d yourdomain.uz

# Auto-renewal oxirgi
sudo systemctl enable certbot.timer
```

---

## Performance Optimizatsiyasi

### 1. Image Compression
```bash
# ImageMagick bilan
convert image.jpg -quality 85 -resize 80% compressed.jpg

# Or: tinypng.com
```

### 2. Cache Konfiguratsiyasi
- CSS/JS cache: 30 kun
- Rasmlar cache: 6 oy
- HTML cache: 1 soat

### 3. CDN (Content Delivery Network)
- **Cloudflare** (BEPUL): https://cloudflare.com
- **Bunny CDN**: https://bunnycdn.com

---

## Monitoring va Logging

### 1. Error Tracking
- **Sentry**: https://sentry.io
- **Rollbar**: https://rollbar.com

### 2. Analytics
- **Google Analytics**: https://analytics.google.com
- **Yandex Metrica**: https://metrica.yandex.ru

### 3. Uptime Monitoring
- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://www.pingdom.com

---

## Tezlik Tavsiya Qadamlari

| Qadami | Narx | Qo'llash Vaqti |
|--------|------|---------------|
| 1. GitHub Pages | Bepul | 5 min |
| 2. Netlify | Bepul | 10 min |
| 3. O'zbek ISP | To'langan | 1-3 soat |
| 4. AWS | To'langan | 30 min |
| 5. Docker | O'rtacha | 15 min |

---

## Masalalar va Echimlar

### 404 Xataliklar
**Muammo:** `index.html` topilinmaydi
**Echim:** `.htaccess` yoki `web.config` tekshiring

### CORS Xataliklar
**Muammo:** `data.json` yuklanmaydi
**Echim:** Server CORS headerlarini qo'shimcha qiling

### Rasm ko'rsatilmadi
**Muammo:** Faylning nomida xatolik
**Echim:** Faylning nomini tekshiring (kichik harflar)

### Sabit yuklanish
**Muammo:** JavaScript yoki CSS yuklanmaydi
**Echim:** CDN yoki cache tekshiring

---

## Kontakt va Qo'llab-Quvvatlash

**Savol bo'lsa:**
- Email: support@yourdomain.uz
- Telegram: @yourusername
- WhatsApp: +998 XX XXX XX XX

---

## Keyingi Qadamlar

1. ✓ Loyiha yaratish
2. ✓ Saytni test qilish
3. **→ Hosting tanlash**
4. → Domen ro'yxat qilish
5. → Saytni joylashtirish
6. → SEO optimizatsiyasi
7. → Monitoring o'rnating
8. → Marketing boshlash

---

**Tayyorlash sana:** Mart 2026
**Oxirgi yangilash:** Mart 2026
