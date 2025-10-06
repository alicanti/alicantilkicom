# Plesk'e Kurulum Rehberi

Bu rehber, Next.js 14 uygulamasını Plesk hosting üzerine nasıl kuracağınızı adım adım anlatır.

## ⚠️ Önemli Gereksinimler

### Plesk'te Olması Gerekenler:
1. **Node.js Extension** yüklü olmalı (Plesk Extensions'dan yükleyin)
2. **Node.js 18.x veya üzeri** versiyonu mevcut olmalı
3. **SSH erişimi** (opsiyonel ama önerilen)
4. En az **512MB RAM** (1GB+ önerilir)

### Kontrol Etme:
Plesk'te **Domains** → Domain seçin → **Node.js** menüsünü görebiliyor musunuz?
- ✅ Evet → Devam edebilirsiniz
- ❌ Hayır → Önce Node.js Extension'ı yüklemelisiniz

## 📦 Kurulum Adımları

### Adım 1: Dosyaları Yükleme

**Seçenek A: FTP/SFTP ile**
```
Tüm proje dosyalarını domain'in root dizinine yükleyin:
/httpdocs/ veya /public_html/
```

**Seçenek B: Git ile (SSH gerekli)**
```bash
cd /var/www/vhosts/alicantilki.com/httpdocs
git clone [repository-url] .
```

### Adım 2: Plesk Node.js Ayarları

1. **Plesk Panel** → **Domains** → **alicantilki.com** → **Node.js**

2. Aşağıdaki ayarları yapın:

   ```
   Node.js version: 18.x veya 20.x
   Application mode: Production
   Application root: /httpdocs (veya dosyaların olduğu dizin)
   Application startup file: server.js
   ```

3. **Custom environment variables** ekleyin:
   ```
   NODE_ENV=production
   SITE_URL=https://alicantilki.com
   ```

4. **NPM install command**: `npm ci` (otomatik çalışacak)

### Adım 3: Bağımlılıkları Yükleme

Plesk arayüzünde **"NPM Install"** butonuna tıklayın veya SSH ile:

```bash
cd /var/www/vhosts/alicantilki.com/httpdocs
npm ci
```

⏱️ Bu işlem 2-5 dakika sürebilir.

### Adım 4: Build (Derleme)

SSH ile veya Plesk'in terminal özelliği ile:

```bash
npm run build
```

⏱️ Bu işlem 3-10 dakika sürebilir. `.next` klasörü oluşacak.

### Adım 5: Uygulamayı Başlatma

Plesk Node.js ayarlarında:
1. **"Enable Node.js"** seçeneğini aktif edin
2. **"Restart App"** butonuna tıklayın

Uygulama başlayacak ve Plesk'in atadığı portta çalışacak.

## 🔧 Sorun Giderme

### Problem: "npm: command not found"
**Çözüm**: Node.js Extension yüklü değil veya aktif değil
```bash
# SSH ile kontrol edin:
which node
which npm
```

### Problem: "Port already in use"
**Çözüm**: Plesk otomatik port atar, `server.js` dosyasında `process.env.PORT` kullanıldığından sorun olmamalı.

### Problem: Build sırasında "Out of memory"
**Çözüm**: Hosting paketiniz yetersiz RAM'e sahip olabilir.
```bash
# SSH ile geçici çözüm:
export NODE_OPTIONS="--max-old-space-size=2048"
npm run build
```

### Problem: "Module not found" hatası
**Çözüm**: 
```bash
rm -rf node_modules .next
npm ci
npm run build
```

### Problem: Sayfa açılmıyor / 502 Bad Gateway
**Çözüm**:
1. Plesk'te Node.js'in "Enable" olduğunu kontrol edin
2. Error log'ları kontrol edin: **Logs** → **Error Log**
3. Uygulamayı restart edin
4. `.next` klasörünün oluştuğunu kontrol edin
5. `server.js` dosyasının mevcut olduğunu kontrol edin

### Problem: Statik dosyalar yüklenmiyor
**Çözüm**: Apache/Nginx proxy ayarları gerekebilir
```
Plesk → Apache & nginx Settings
Proxy mode: aktif olmalı
```

### Problem: 404 hatası alıyorum
**Çözüm**: Sadece şu sayfalar mevcut:
- `/en` veya `/tr` (Ana sayfa)
- `/en/instantpose` veya `/tr/instantpose`
- `/en/about`, `/en/contact`, `/en/privacy`, `/en/terms`

## 🔄 Güncelleme Yapma

Kod değişikliği yaptığınızda:

```bash
# 1. Dosyaları güncelleyin (FTP veya Git)
git pull  # veya FTP ile yükleyin

# 2. Bağımlılıkları güncelleyin (gerekirse)
npm ci

# 3. Yeniden build edin
npm run build

# 4. Uygulamayı restart edin
# Plesk → Node.js → Restart App
```

## 📊 Performans İpuçları

### 1. Static Asset Caching
Plesk → **Apache & nginx Settings**
```nginx
# .next/static/ için cache ekleyin
location /_next/static {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. Gzip Compression
Plesk'te zaten aktif olmalı, kontrol edin:
**Apache & nginx Settings** → **nginx settings** → Gzip: ON

### 3. SSL/HTTPS
**SSL/TLS Certificates** → Let's Encrypt ile ücretsiz SSL

### 4. Monitoring
**Statistics** bölümünden kaynak kullanımını izleyin:
- CPU kullanımı
- RAM kullanımı
- Disk alanı

## 🔐 Güvenlik

### Dosya İzinleri
```bash
# Doğru izinleri ayarlayın:
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod 600 .env
```

### Güvenlik Güncellemeleri
```bash
# Düzenli olarak çalıştırın:
npm audit
npm audit fix
```

### .env Dosyası
`.env` dosyasını web'den erişilemez yapın (Plesk otomatik yapmalı)

## 📱 Alternatif: Passenger Kullanımı

Bazı Plesk kurulumlarında Passenger (mod_passenger) varsa:

1. `passenger_startup_file` olarak `server.js` kullanın
2. Environment variables'ı Passenger config'e ekleyin
3. Restart: `touch tmp/restart.txt`

## 🆘 Destek

### Hosting Sağlayıcınızla İletişim
Eğer:
- Node.js Extension yüklenemiyorsa
- RAM yetersizse
- Port sorunları varsa

Hosting sağlayıcınızın teknik desteğine başvurun.

### Uygulama Sorunları
Uygulama ile ilgili sorunlar için: contact@alicantilki.com

## ✅ Kontrol Listesi

Kurulum tamamlandıktan sonra kontrol edin:

- [ ] Site açılıyor mu? (https://alicantilki.com)
- [ ] Dil değiştirme çalışıyor mu? (EN/TR)
- [ ] Tüm sayfalar yükleniyor mu?
  - [ ] `/en` - Ana sayfa
  - [ ] `/en/instantpose` - InstantPose sayfası
  - [ ] `/en/about` - Hakkımda
  - [ ] `/en/contact` - İletişim
- [ ] Responsive tasarım çalışıyor mu? (mobil test)
- [ ] SSL sertifikası aktif mi? (https)
- [ ] Sitemap erişilebilir mi? (/sitemap.xml)
- [ ] OG image çalışıyor mu? (/api/og)

## 🚀 Production Checklist

- [ ] `NODE_ENV=production` ayarlı
- [ ] `npm run build` başarılı
- [ ] `.next` klasörü mevcut
- [ ] SSL/HTTPS aktif
- [ ] Gzip compression aktif
- [ ] Cache headers ayarlı
- [ ] Error logging aktif
- [ ] Backup planı var

---

**Not**: Plesk her hosting sağlayıcıda biraz farklı yapılandırılmış olabilir. Bu rehber genel bir kılavuzdur. Spesifik sorunlar için hosting sağlayıcınızın dokümantasyonuna bakın.
