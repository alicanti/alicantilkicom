# ⚡ Plesk Hızlı Kurulum - Özet

## ✅ Evet, Plesk'te Çalışır!

Bu Next.js projesi **Plesk hosting üzerinde çalışacak şekilde** özel olarak yapılandırılmıştır.

## 🎯 Temel Gereksinimler

### Hosting'inizde Olması Gerekenler:
- ✅ **Plesk Panel** (Obsidian veya daha yeni)
- ✅ **Node.js Extension** yüklü
- ✅ **Node.js 18+** versiyonu
- ✅ En az **512MB RAM** (1GB önerilir)
- ✅ **SSH erişimi** (opsiyonel ama işleri kolaylaştırır)

### Kontrol:
Plesk'te **"Node.js"** menüsünü görebiliyor musunuz?
- **Evet** → Hazırsınız! 🎉
- **Hayır** → Hosting sağlayıcınızdan Node.js Extension'ı yüklemesini isteyin

## 🚀 5 Adımda Kurulum

### 1️⃣ Dosyaları Yükle
FTP/SFTP ile tüm dosyaları `/httpdocs/` klasörüne yükleyin

### 2️⃣ Plesk Ayarları
```
Domains → alicantilki.com → Node.js

Ayarlar:
- Node.js version: 18.x
- Application mode: Production  
- Application startup file: server.js
- Environment variables:
  NODE_ENV=production
  SITE_URL=https://alicantilki.com
```

### 3️⃣ Bağımlılıkları Yükle
Plesk'te **"NPM Install"** butonuna tıklayın
veya SSH ile: `npm ci`

### 4️⃣ Build Et
SSH veya Plesk terminal ile:
```bash
npm run build
```
⏱️ 3-5 dakika sürer

### 5️⃣ Başlat
Plesk'te:
- **"Enable Node.js"** ✅
- **"Restart App"** 🔄

🎉 **Hazır!** Site çalışıyor olmalı.

## 🔧 Özel Yapılandırmalar

### `server.js` Dosyası
Plesk'in PORT değişkenini otomatik kullanır. Plesk her uygulamaya farklı port atar, bu dosya bunu yönetir.

### `package.json`
```json
"main": "server.js"
```
Plesk'e hangi dosyayı çalıştıracağını söyler.

### Environment Variables
Plesk otomatik olarak `PORT` değişkenini set eder. Siz sadece:
- `NODE_ENV=production`
- `SITE_URL=https://alicantilki.com`

eklemeniz yeterli.

## ❓ Sık Sorulan Sorular

### npm komutları çalışır mı?
✅ **Evet!** Plesk Node.js Extension npm'i destekler.

### Build işlemi nerede yapılır?
Hosting sunucusunda. SSH veya Plesk terminal ile `npm run build` çalıştırırsınız.

### Vercel gibi otomatik deploy var mı?
❌ Hayır, manuel deploy yaparsınız. Ama Git ile otomatikleştirebilirsiniz.

### RAM yetersiz olursa?
Build sırasında hata alırsınız. Çözüm:
```bash
export NODE_OPTIONS="--max-old-space-size=2048"
npm run build
```
veya hosting paketinizi yükseltin.

### Güncelleme nasıl yapılır?
1. Yeni dosyaları yükle (FTP)
2. `npm run build`
3. Plesk'te "Restart App"

### SSL/HTTPS?
Plesk'te **SSL/TLS Certificates** → Let's Encrypt (ücretsiz)

### Hata logları nerede?
Plesk → **Logs** → **Error Log**

## 📚 Detaylı Rehberler

- **Türkçe detaylı rehber**: [PLESK-KURULUM.md](./PLESK-KURULUM.md)
- **English guide**: [README-PLESK.md](./README-PLESK.md)

## 🆘 Sorun mu Var?

### Build hatası
```bash
rm -rf node_modules .next
npm ci
npm run build
```

### Site açılmıyor
1. Plesk'te Node.js "Enable" mi kontrol et
2. Error log'a bak
3. "Restart App" yap
4. `.next` klasörü var mı kontrol et

### 502 Bad Gateway
- Node.js versiyonu 18+ mı?
- Build başarılı mı?
- Port çakışması var mı? (Plesk otomatik yönetir)

## ✨ Avantajlar

- ✅ Tam kontrol (kendi sunucunuz)
- ✅ Maliyet etkin
- ✅ Türk hosting firmaları destekler
- ✅ Diğer projelerle aynı hosting'te çalışabilir

## ⚠️ Dezavantajlar

- ❌ Manuel deploy (Vercel gibi otomatik değil)
- ❌ Sunucu yönetimi gerekebilir
- ❌ Build işlemi sizde

## 🎯 Sonuç

**Evet, kesinlikle çalışır!** Proje tam olarak Plesk için optimize edilmiş durumda. Sadece yukarıdaki 5 adımı takip edin.

---

**Yardım**: Detaylı rehberlere bakın veya contact@alicantilki.com
