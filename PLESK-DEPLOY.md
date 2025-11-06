# 🚀 Plesk'e Deploy Rehberi

## ✅ Yüklenecek Dosyalar

Plesk'teki domain klasörüne (örn: `/httpdocs/`) **TÜM** proje dosyalarını yüklemeniz gerekiyor:

### Yüklenecek Klasörler ve Dosyalar:
```
✅ app/                  (Tüm sayfa dosyaları)
✅ components/           (React bileşenleri)
✅ data/                 (Apps verisi)
✅ lib/                  (Utility fonksiyonlar)
✅ messages/             (Çeviriler - en.json, tr.json)
✅ public/               (Statik dosyalar - icon, vb.)
✅ node_modules/         (Bağımlılıklar - Plesk'te yüklenecek)
✅ .next/                (Build çıktısı - Plesk'te oluşturulacak)

✅ package.json
✅ package-lock.json
✅ next.config.mjs
✅ tailwind.config.ts
✅ postcss.config.mjs
✅ tsconfig.json
✅ middleware.ts
✅ i18n.ts
✅ server.js           ⭐ ÖNEMLİ
✅ .eslintrc.json
✅ .npmrc
```

### ❌ Yüklenmeyecek Dosyalar:
```
❌ .git/               (Git dosyaları)
❌ node_modules/       (Plesk'te yüklenecek)
❌ .next/              (Plesk'te build edilecek)
❌ .env.local          (Plesk'te oluşturulacak)
```

## 📋 Plesk'te Yapılacaklar

### 1. Dosyaları Yükle
FTP/SFTP ile tüm dosyaları `/httpdocs/` klasörüne yükleyin.

### 2. Plesk Node.js Ayarları
```
Domains → alicantilki.com → Node.js

Ayarlar:
- Node.js version: 18.x veya 20.x
- Application mode: Production
- Application root: /httpdocs
- Application startup file: server.js
- Document root: /httpdocs/public

Environment Variables:
NODE_ENV=production
SITE_URL=https://alicantilki.com
```

### 3. Bağımlılıkları Yükle
Plesk Node.js panelinde:
- **"NPM Install"** butonuna tıklayın

VEYA SSH ile:
```bash
cd /var/www/vhosts/alicantilki.com/httpdocs
npm ci
```

### 4. Build Et
SSH ile:
```bash
cd /var/www/vhosts/alicantilki.com/httpdocs
npm run build
```

### 5. Başlat
Plesk Node.js panelinde:
- **"Enable Node.js"** ✅
- **"Restart App"** 🔄

## 🎯 Hızlı Yükleme (ZIP ile)

1. Projeyi ZIP'le (node_modules ve .next hariç):
```bash
zip -r alicantilki.zip . -x "node_modules/*" ".next/*" ".git/*"
```

2. ZIP'i Plesk'e yükle ve çıkart

3. Plesk'te npm install + build + restart

## ⚡ Git ile Deploy (Önerilen)

Eğer Plesk'te Git extension varsa:

1. Plesk → Git → Add Repository
2. Repository URL: https://github.com/alicanti/alicantilkicom.git
3. Branch: main
4. Deploy path: /httpdocs
5. "Pull Updates" her güncellemede

## 🔧 Sorun Giderme

### Build hatası alıyorsanız:
```bash
rm -rf .next node_modules
npm ci
npm run build
```

### Site açılmıyorsa:
1. Plesk Node.js "Enable" mi kontrol edin
2. Error log'a bakın: Logs → Error Log
3. server.js dosyası var mı kontrol edin
4. PORT environment variable Plesk tarafından set ediliyor

### 502 Bad Gateway:
- Node.js versiyonu 18+ olmalı
- Build başarılı olmalı (.next klasörü mevcut)
- server.js çalışıyor olmalı

## 📞 Destek

Sorun yaşarsanız: hello@alicantilki.com
