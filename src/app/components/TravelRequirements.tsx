import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Plane, Train, Ship, CheckCircle, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';

export function TravelRequirements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syarat Perjalanan Terkini</CardTitle>
        <CardDescription>
          Informasi persyaratan perjalanan domestik dan internasional
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="domestic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="domestic">Domestik</TabsTrigger>
            <TabsTrigger value="international">Internasional</TabsTrigger>
          </TabsList>

          <TabsContent value="domestic" className="space-y-4">
            <div className="space-y-4">
              {/* Pesawat */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Plane className="size-5 text-blue-600" />
                  <h3 className="font-semibold">Perjalanan Udara</h3>
                  <Badge variant="outline" className="ml-auto">Update: Jan 2026</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vaksin booster untuk penerbangan tertentu (opsional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Aplikasi PeduliLindungi dengan status "hijau" (rekomendasi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Tes PCR/Antigen tidak diwajibkan untuk domestik (kecuali daerah tertentu)</span>
                  </li>
                </ul>
              </div>

              {/* Kereta */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Train className="size-5 text-green-600" />
                  <h3 className="font-semibold">Perjalanan Kereta Api</h3>
                  <Badge variant="outline" className="ml-auto">Update: Jan 2026</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cukup tunjukkan tiket dan identitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tetap gunakan masker di dalam kereta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vaksinasi tidak diwajibkan, namun direkomendasikan</span>
                  </li>
                </ul>
              </div>

              {/* Kapal */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Ship className="size-5 text-cyan-600" />
                  <h3 className="font-semibold">Perjalanan Laut</h3>
                  <Badge variant="outline" className="ml-auto">Update: Jan 2026</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vaksin minimal dosis 2 untuk rute tertentu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protokol kesehatan di pelabuhan</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="international" className="space-y-4">
            <div className="space-y-4">
              {/* Keluar Indonesia */}
              <div className="border rounded-lg p-4 bg-blue-50">
                <h3 className="font-semibold mb-3">Keluar dari Indonesia</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vaksinasi lengkap (minimal 2 dosis)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Periksa persyaratan negara tujuan (berbeda-beda)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Beberapa negara masih memerlukan tes PCR/Antigen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Asuransi perjalanan yang mencakup COVID-19 (rekomendasi)</span>
                  </li>
                </ul>
              </div>

              {/* Masuk ke Indonesia */}
              <div className="border rounded-lg p-4 bg-green-50">
                <h3 className="font-semibold mb-3">Masuk ke Indonesia</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Vaksinasi lengkap (booster untuk beberapa kategori)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Tes PCR tidak lagi diwajibkan untuk WNI/WNA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Isi eHAC (Electronic Health Alert Card)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Karantina tidak diwajibkan untuk yang sudah vaksin lengkap</span>
                  </li>
                </ul>
              </div>

              {/* Catatan */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">⚠️ Catatan Penting:</h4>
                <ul className="text-sm space-y-1 ml-4 list-disc text-yellow-800">
                  <li>Persyaratan dapat berubah sewaktu-waktu</li>
                  <li>Selalu cek update terbaru sebelum bepergian</li>
                  <li>Hubungi maskapai/travel agent untuk konfirmasi</li>
                  <li>Cek website Kemenkes dan Imigrasi untuk info resmi</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
