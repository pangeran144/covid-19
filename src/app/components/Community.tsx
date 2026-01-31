import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Heart, Droplet, MessageSquare, HandHeart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Community() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      age: 35,
      story: 'Saya positif COVID-19 pada Desember 2025. Awalnya sangat takut, tapi dengan dukungan keluarga dan mengikuti protokol isolasi, Alhamdulillah saya sembuh. Pesan saya: jangan panik, ikuti anjuran dokter, dan jaga mental health!',
      date: 'Sembuh: Januari 2026'
    },
    {
      name: 'Siti Rahmawati',
      age: 42,
      story: 'Sebagai tenaga kesehatan, saya pernah terpapar COVID-19 saat merawat pasien. 10 hari isolasi terasa berat, tapi saya bersyukur bisa kembali bekerja. Vaksinasi sangat membantu meringankan gejala. Tetap jaga kesehatan, teman-teman!',
      date: 'Sembuh: Desember 2025'
    },
    {
      name: 'Rudi Hermawan',
      age: 28,
      story: 'Saya mengalami Long COVID selama 3 bulan - mudah lelah dan brain fog. Dengan latihan pernapasan dan olahraga bertahap, kondisi saya membaik. Jangan menyerah, pemulihan memang butuh waktu!',
      date: 'Dalam pemulihan: Januari 2026'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="size-5 text-red-600" />
          Solidaritas & Komunitas
        </CardTitle>
        <CardDescription>
          Bersama kita lebih kuat menghadapi pandemi
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Donor Plasma/Darah */}
        <div className="border rounded-lg p-4 bg-red-50">
          <div className="flex items-center gap-2 mb-3">
            <Droplet className="size-5 text-red-600" />
            <h3 className="font-semibold">Donor Darah & Plasma Konvalesen</h3>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-red-900">
              Jika Anda telah sembuh dari COVID-19, pertimbangkan untuk mendonorkan plasma 
              atau darah untuk membantu pasien lain.
            </p>
            
            <div>
              <p className="font-semibold text-red-900 mb-2">Syarat Donor Plasma Konvalesen:</p>
              <ul className="ml-4 space-y-1 list-disc text-red-800">
                <li>Sembuh dari COVID-19 minimal 14-28 hari</li>
                <li>Usia 18-60 tahun</li>
                <li>Berat badan minimal 55 kg</li>
                <li>Hasil tes PCR negatif</li>
                <li>Sehat secara umum</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-red-900 mb-2">Lokasi Donor Plasma:</p>
              <ul className="ml-4 space-y-1 list-disc text-red-800">
                <li>PMI (Palang Merah Indonesia) cabang terdekat</li>
                <li>Rumah sakit rujukan COVID-19</li>
                <li>Hubungi: 021-7992325 (PMI Pusat)</li>
              </ul>
            </div>

            <Button className="w-full mt-3 bg-red-600 hover:bg-red-700">
              <Droplet className="size-4 mr-2" />
              Info Donor Plasma
            </Button>
          </div>
        </div>

        {/* Kisah Penyintas */}
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="size-5 text-blue-600" />
            <h3 className="font-semibold">Kisah Inspiratif Penyintas</h3>
          </div>
          <div className="space-y-4">
            {testimonials.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-blue-900">{item.name}, {item.age} tahun</p>
                    <p className="text-xs text-blue-600">{item.date}</p>
                  </div>
                </div>
                <p className="text-sm text-blue-900 italic">"{item.story}"</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            *Ingin berbagi kisah Anda? Kirim ke email: kisahpenyintas@covid19.id
          </p>
        </div>

        {/* Saluran Donasi */}
        <div className="border rounded-lg p-4 bg-green-50">
          <div className="flex items-center gap-2 mb-3">
            <HandHeart className="size-5 text-green-600" />
            <h3 className="font-semibold">Saluran Donasi Terpercaya</h3>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-green-900">
              Bantu sesama yang terdampak ekonomi akibat pandemi melalui lembaga terpercaya:
            </p>
            
            <div className="space-y-3">
              <div className="border border-green-200 rounded p-3">
                <p className="font-semibold text-green-900">Dompet Dhuafa</p>
                <p className="text-green-700 text-xs mb-2">Program Tanggap COVID-19</p>
                <p className="text-green-800">Bank Syariah Indonesia</p>
                <p className="text-green-800">No. Rek: 0070000086</p>
                <p className="text-green-700 text-xs">a.n. Dompet Dhuafa</p>
              </div>

              <div className="border border-green-200 rounded p-3">
                <p className="font-semibold text-green-900">Aksi Cepat Tanggap (ACT)</p>
                <p className="text-green-700 text-xs mb-2">Dana Darurat COVID-19</p>
                <p className="text-green-800">Bank Syariah Indonesia</p>
                <p className="text-green-800">No. Rek: 0123456789</p>
                <p className="text-green-700 text-xs">a.n. Yayasan ACT</p>
              </div>

              <div className="border border-green-200 rounded p-3">
                <p className="font-semibold text-green-900">Kitabisa.com</p>
                <p className="text-green-700 text-xs mb-2">Platform Donasi Online</p>
                <p className="text-green-800">Website: www.kitabisa.com/covid19</p>
                <p className="text-green-700 text-xs">Berbagai campaign untuk korban COVID-19</p>
              </div>

              <div className="border border-green-200 rounded p-3">
                <p className="font-semibold text-green-900">Baznas (Badan Amil Zakat Nasional)</p>
                <p className="text-green-700 text-xs mb-2">Zakat untuk Penanganan COVID-19</p>
                <p className="text-green-800">Hotline: 1500 242</p>
                <p className="text-green-800">Website: baznas.go.id</p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p className="font-semibold text-yellow-900 text-xs mb-1">⚠️ Tips Donasi Aman:</p>
              <ul className="text-xs space-y-1 ml-4 list-disc text-yellow-800">
                <li>Pastikan donasi ke lembaga resmi dan terpercaya</li>
                <li>Cek legalitas dan track record lembaga</li>
                <li>Simpan bukti transfer untuk transparansi</li>
                <li>Waspada penipuan mengatasnamakan donasi COVID-19</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Group */}
        <div className="border rounded-lg p-4 bg-purple-50">
          <h3 className="font-semibold mb-3 text-purple-900">Komunitas Support Group</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center border-b border-purple-200 pb-2">
              <div>
                <p className="font-semibold text-purple-900">COVID-19 Survivors Indonesia</p>
                <p className="text-purple-700 text-xs">Facebook Group</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs">Gabung</Button>
            </div>

            <div className="flex justify-between items-center border-b border-purple-200 pb-2">
              <div>
                <p className="font-semibold text-purple-900">Long COVID Indonesia Support</p>
                <p className="text-purple-700 text-xs">WhatsApp Group</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs">Gabung</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-purple-900">Peduli Kesehatan Mental</p>
                <p className="text-purple-700 text-xs">Telegram Group</p>
              </div>
              <Button variant="outline" size="sm" className="text-xs">Gabung</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
