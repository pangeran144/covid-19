import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Wind, Users, Utensils, Building2, ShoppingBag, GraduationCap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';

export function NewNormalGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Panduan New Normal / Endemi</CardTitle>
        <CardDescription>
          Tips aman beraktivitas di era endemi COVID-19
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ventilation">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Wind className="size-5 text-blue-600" />
                <span>Ventilasi Udara di Ruangan Tertutup</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Kenapa Penting?</p>
                <p>
                  Virus COVID-19 dapat menyebar melalui droplet di udara. Ruangan dengan 
                  ventilasi buruk meningkatkan risiko penularan.
                </p>
                
                <p className="font-semibold mt-3">Tips Ventilasi:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Buka jendela dan pintu untuk sirkulasi udara alami</li>
                  <li>Gunakan exhaust fan di ruangan tanpa jendela</li>
                  <li>Pertimbangkan air purifier dengan HEPA filter</li>
                  <li>Hindari AC yang hanya resirkulasi tanpa udara segar</li>
                  <li>Ideal: 6-12 pergantian udara per jam (ACH)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="restaurant">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Utensils className="size-5 text-orange-600" />
                <span>Makan di Restoran</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Protokol Aman:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Pilih meja di area outdoor atau dekat jendela terbuka</li>
                  <li>Jaga jarak minimal 1 meter dari meja lain</li>
                  <li>Gunakan masker saat tidak makan/minum</li>
                  <li>Cuci tangan sebelum dan sesudah makan</li>
                  <li>Hindari makan di jam ramai jika memungkinkan</li>
                  <li>Gunakan pembayaran non-tunai</li>
                  <li>Periksa sertifikat vaksin pegawai restoran (jika tersedia)</li>
                </ul>

                <p className="font-semibold mt-3">Rekomendasi:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Prioritaskan takeaway atau delivery untuk risiko minimal</li>
                  <li>Pesan reservasi untuk menghindari antrian</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="office">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Building2 className="size-5 text-gray-600" />
                <span>Masuk Kantor (WFO)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Untuk Karyawan:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Pastikan vaksinasi sudah lengkap + booster</li>
                  <li>Gunakan masker di area publik dan ruang meeting</li>
                  <li>Bawa hand sanitizer dan peralatan makan sendiri</li>
                  <li>Hindari berkumpul di pantry atau ruang sempit</li>
                  <li>Laporkan jika merasa tidak enak badan</li>
                  <li>Manfaatkan sistem WFH hybrid jika tersedia</li>
                </ul>

                <p className="font-semibold mt-3">Untuk Perusahaan:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Terapkan sistem shift atau roster</li>
                  <li>Sediakan fasilitas screening suhu dan hand sanitizer</li>
                  <li>Atur jarak antar meja minimal 1,5 meter</li>
                  <li>Pastikan ventilasi ruangan baik</li>
                  <li>Sediakan rapid test berkala untuk karyawan</li>
                  <li>Buat SOP isolasi jika ada karyawan positif</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="school">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <GraduationCap className="size-5 text-purple-600" />
                <span>Sekolah & Pembelajaran Tatap Muka</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Untuk Siswa/Mahasiswa:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Vaksinasi sesuai usia (untuk yang eligible)</li>
                  <li>Bawa bekal dan minum sendiri</li>
                  <li>Hindari berbagi alat tulis atau gadget</li>
                  <li>Tetap pakai masker selama di sekolah</li>
                  <li>Jangan ke sekolah jika merasa sakit</li>
                </ul>

                <p className="font-semibold mt-3">Untuk Sekolah:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Kapasitas kelas maksimal 50-75% (sesuai level PPKM)</li>
                  <li>Durasi belajar dikurangi untuk minimalisir waktu kontak</li>
                  <li>Sediakan tempat cuci tangan dan hand sanitizer</li>
                  <li>Buka jendela untuk ventilasi alami</li>
                  <li>Screening suhu di pintu masuk</li>
                  <li>Koordinasi dengan orang tua untuk monitoring kesehatan</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shopping">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-green-600" />
                <span>Berbelanja di Mall/Supermarket</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Tips Belanja Aman:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Buat daftar belanjaan agar cepat selesai</li>
                  <li>Pilih waktu sepi (hindari weekend sore)</li>
                  <li>Gunakan masker dengan benar (tutup hidung dan mulut)</li>
                  <li>Jaga jarak 1-2 meter saat antri kasir</li>
                  <li>Hindari menyentuh wajah saat berbelanja</li>
                  <li>Gunakan pembayaran cashless</li>
                  <li>Cuci tangan setelah selesai belanja</li>
                  <li>Disinfeksi barang belanjaan di rumah (terutama kemasan)</li>
                </ul>

                <p className="font-semibold mt-3">Alternatif Lebih Aman:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Gunakan layanan grocery delivery online</li>
                  <li>Curbside pickup (ambil pesanan tanpa turun dari mobil)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="gathering">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <Users className="size-5 text-red-600" />
                <span>Kumpul Keluarga & Acara Sosial</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Panduan Acara Kecil:</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Batasi jumlah tamu (sesuai kapasitas ruangan)</li>
                  <li>Prioritaskan acara outdoor</li>
                  <li>Pastikan semua tamu sudah vaksinasi lengkap</li>
                  <li>Gunakan masker saat tidak makan</li>
                  <li>Sediakan hand sanitizer di berbagai titik</li>
                  <li>Jangan ajak anak/lansia yang rentan jika tidak perlu</li>
                </ul>

                <p className="font-semibold mt-3">Acara Besar (Pernikahan, dll):</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Pastikan izin dan mengikuti protokol daerah setempat</li>
                  <li>Screening suhu dan cek status vaksin tamu</li>
                  <li>Atur tempat duduk dengan jarak aman</li>
                  <li>Sistem buffet diganti prasmanan dengan petugas</li>
                  <li>Sediakan masker cadangan untuk tamu</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
