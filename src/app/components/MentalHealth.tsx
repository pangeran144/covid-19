import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Brain, Phone, Heart, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export function MentalHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="size-5" />
          Kesehatan Mental & Long COVID
        </CardTitle>
        <CardDescription>
          Dukungan untuk kesehatan mental dan informasi Long COVID
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mental" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mental">Kesehatan Mental</TabsTrigger>
            <TabsTrigger value="longcovid">Long COVID</TabsTrigger>
          </TabsList>

          <TabsContent value="mental" className="space-y-4">
            <Alert>
              <Heart className="size-4" />
              <AlertTitle>Anda Tidak Sendirian</AlertTitle>
              <AlertDescription>
                Pandemi mempengaruhi kesehatan mental semua orang. Wajar jika Anda merasa 
                cemas, stres, atau lelah. Berikut beberapa cara mengatasinya.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="size-4 text-orange-600" />
                  Tanda-Tanda Kecemasan & Stres
                </h3>
                <ul className="text-sm space-y-2 ml-4 list-disc">
                  <li>Sulit tidur atau tidur berlebihan</li>
                  <li>Kehilangan minat pada aktivitas yang biasa disukai</li>
                  <li>Mudah marah atau sensitif</li>
                  <li>Sulit berkonsentrasi</li>
                  <li>Perubahan nafsu makan (naik atau turun drastis)</li>
                  <li>Merasa lelah terus-menerus</li>
                  <li>Pikiran negatif berulang</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h3 className="font-semibold mb-3">Tips Mengatasi Kecemasan</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-blue-900">1. Batasi Konsumsi Berita</p>
                    <p className="text-blue-800">
                      Cek berita COVID-19 1-2 kali sehari dari sumber terpercaya. 
                      Hindari doomscrolling (scroll media sosial tanpa henti).
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-900">2. Jaga Rutinitas Harian</p>
                    <p className="text-blue-800">
                      Bangun dan tidur di jam yang sama. Mandi, berpakaian rapi meski WFH. 
                      Rutinitas memberikan rasa kontrol.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">3. Tetap Terhubung</p>
                    <p className="text-blue-800">
                      Video call keluarga/teman secara rutin. Bergabung dengan komunitas online. 
                      Isolasi fisik bukan berarti isolasi sosial.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">4. Olahraga Teratur</p>
                    <p className="text-blue-800">
                      Minimal 30 menit aktivitas fisik per hari. Yoga, jalan pagi, 
                      atau workout di rumah. Olahraga melepas endorfin (hormon bahagia).
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">5. Teknik Relaksasi</p>
                    <p className="text-blue-800">
                      Latihan pernapasan dalam (4-7-8 breathing), meditasi, atau mindfulness. 
                      Banyak aplikasi gratis tersedia (Headspace, Calm, Insight Timer).
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">6. Journaling</p>
                    <p className="text-blue-800">
                      Tulis perasaan Anda di jurnal. Ekspresikan rasa takut, harapan, dan syukur. 
                      Menulis membantu memproses emosi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="size-4 text-green-700" />
                  Layanan Konseling Gratis
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="border-b border-green-200 pb-2">
                    <p className="font-semibold text-green-900">Sehat Jiwa (Kemenkes)</p>
                    <p className="text-green-800">WhatsApp: 0812-9695-9090</p>
                    <p className="text-green-700 text-xs">Senin-Jumat, 08:00-16:00 WIB</p>
                  </div>

                  <div className="border-b border-green-200 pb-2">
                    <p className="font-semibold text-green-900">Into The Light Indonesia</p>
                    <p className="text-green-800">Instagram: @intothelightid</p>
                    <p className="text-green-700 text-xs">Peer support untuk kesehatan mental</p>
                  </div>

                  <div className="border-b border-green-200 pb-2">
                    <p className="font-semibold text-green-900">Love Yourself Indonesia</p>
                    <p className="text-green-800">Instagram: @loveyourself.id</p>
                    <p className="text-green-700 text-xs">Komunitas support kesehatan mental</p>
                  </div>

                  <div>
                    <p className="font-semibold text-green-900">Hotline Nasional</p>
                    <p className="text-green-800">Telepon: 500-454 / 119 ext. 8</p>
                    <p className="text-green-700 text-xs">Layanan 24 jam</p>
                  </div>
                </div>
              </div>

              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Kapan Harus Mencari Bantuan Profesional?</AlertTitle>
                <AlertDescription>
                  <ul className="mt-2 ml-4 list-disc space-y-1">
                    <li>Pikiran untuk menyakiti diri sendiri atau bunuh diri</li>
                    <li>Tidak bisa melakukan aktivitas harian selama lebih dari 2 minggu</li>
                    <li>Menggunakan alkohol/zat untuk mengatasi emosi</li>
                    <li>Gejala anxiety/depresi yang memburuk</li>
                  </ul>
                  <p className="mt-2 font-semibold">Segera hubungi psikolog/psikiater atau hotline darurat!</p>
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="longcovid" className="space-y-4">
            <Alert>
              <AlertCircle className="size-4" />
              <AlertTitle>Apa itu Long COVID?</AlertTitle>
              <AlertDescription>
                Long COVID adalah kondisi ketika gejala COVID-19 menetap atau muncul gejala baru 
                setelah 4 minggu dari infeksi awal, bahkan setelah tes PCR negatif.
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Gejala Long COVID yang Umum</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Gejala Fisik:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>Kelelahan ekstrem (fatigue)</li>
                      <li>Sesak napas</li>
                      <li>Nyeri dada atau jantung berdebar</li>
                      <li>Sakit kepala berkepanjangan</li>
                      <li>Nyeri otot dan sendi</li>
                      <li>Batuk yang tidak kunjung hilang</li>
                      <li>Gangguan pencernaan</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-purple-900 mb-2">Gejala Kognitif & Mental:</p>
                    <ul className="ml-4 space-y-1 list-disc">
                      <li>Brain fog (sulit konsentrasi/mengingat)</li>
                      <li>Gangguan tidur</li>
                      <li>Depresi dan kecemasan</li>
                      <li>Hilang indra penciuman/perasa berkepanjangan</li>
                      <li>Pusing atau vertigo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-yellow-50">
                <h3 className="font-semibold mb-3">Kapan Harus ke Dokter?</h3>
                <p className="text-sm text-yellow-900 mb-2">
                  Konsultasikan ke dokter jika Anda mengalami:
                </p>
                <ul className="text-sm space-y-1 ml-4 list-disc text-yellow-800">
                  <li>Gejala yang mengganggu aktivitas harian</li>
                  <li>Sesak napas saat aktivitas ringan</li>
                  <li>Nyeri dada yang tidak hilang</li>
                  <li>Gejala yang semakin memburuk</li>
                  <li>Kelelahan ekstrem yang tidak membaik dengan istirahat</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-blue-50">
                <h3 className="font-semibold mb-3">Tips Rehabilitasi Long COVID</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-blue-900">1. Pacing (Atur Energi)</p>
                    <p className="text-blue-800">
                      Jangan memaksakan aktivitas. Istirahat secara berkala. 
                      Gunakan "50% rule": jangan gunakan lebih dari 50% energi Anda.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">2. Latihan Pernapasan</p>
                    <p className="text-blue-800">
                      Latihan pernapasan diafragma 3x sehari, masing-masing 5-10 menit. 
                      Membantu meningkatkan kapasitas paru-paru.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">3. Aktivitas Fisik Bertahap</p>
                    <p className="text-blue-800">
                      Mulai dengan aktivitas ringan (jalan 5-10 menit). 
                      Tingkatkan durasi secara bertahap jika tidak ada gejala memburuk.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">4. Nutrisi Seimbang</p>
                    <p className="text-blue-800">
                      Konsumsi makanan bergizi, protein cukup, vitamin C, D, dan zinc. 
                      Hindari makanan olahan dan tinggi gula.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">5. Latihan Kognitif</p>
                    <p className="text-blue-800">
                      Untuk brain fog: puzzle, sudoku, membaca, atau brain training apps. 
                      Mulai dengan level mudah dan tingkatkan bertahap.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-blue-900">6. Dukungan Psikologis</p>
                    <p className="text-blue-800">
                      Bergabung dengan support group Long COVID. 
                      Berbagi pengalaman membantu mengurangi rasa terisolasi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Pemeriksaan yang Mungkin Dibutuhkan</h3>
                <ul className="text-sm space-y-2 ml-4 list-disc">
                  <li>Tes fungsi paru (spirometri)</li>
                  <li>EKG dan echocardiogram (jika ada keluhan jantung)</li>
                  <li>Tes darah lengkap</li>
                  <li>Rontgen dada</li>
                  <li>Tes fungsi kognitif (jika brain fog parah)</li>
                </ul>
                <p className="text-sm mt-3 text-gray-600">
                  *Konsultasikan dengan dokter untuk pemeriksaan yang sesuai kondisi Anda.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
