import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Calendar, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';

export function IsolationCalculator() {
  const [testDate, setTestDate] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateIsolationEnd = () => {
    if (!testDate) return null;

    const startDate = new Date(testDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 10); // 10 hari isolasi sesuai pedoman Kemenkes

    return endDate;
  };

  const handleCalculate = () => {
    if (testDate) {
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setTestDate('');
    setShowResult(false);
  };

  const endDate = calculateIsolationEnd();
  const today = new Date();
  const daysRemaining = endDate ? Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="size-5" />
          Kalkulator Masa Isolasi
        </CardTitle>
        <CardDescription>
          Hitung estimasi waktu isolasi mandiri Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!showResult ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="testDate">Tanggal Hasil Tes Positif</Label>
              <Input
                id="testDate"
                type="date"
                value={testDate}
                onChange={(e) => setTestDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <Alert>
              <AlertCircle className="size-4" />
              <AlertDescription>
                Kalkulator ini menggunakan pedoman isolasi 10 hari sesuai dengan Kemenkes RI. 
                Pastikan untuk berkonsultasi dengan dokter sebelum mengakhiri isolasi.
              </AlertDescription>
            </Alert>

            <Button 
              onClick={handleCalculate} 
              disabled={!testDate}
              className="w-full"
            >
              Hitung Masa Isolasi
            </Button>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-sm text-blue-600 mb-1">Tanggal Tes Positif</div>
                <div className="text-lg">
                  {testDate ? new Date(testDate).toLocaleDateString('id-ID', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : '-'}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-sm text-green-600 mb-1">Estimasi Selesai Isolasi</div>
                <div className="text-lg">
                  {endDate ? endDate.toLocaleDateString('id-ID', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : '-'}
                </div>
              </div>

              {daysRemaining > 0 ? (
                <Alert>
                  <AlertCircle className="size-4" />
                  <AlertTitle>Masih dalam masa isolasi</AlertTitle>
                  <AlertDescription>
                    Anda masih perlu isolasi selama <strong>{daysRemaining} hari lagi</strong>.
                    Tetap di rumah dan monitor kesehatan Anda.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="border-green-600 bg-green-50">
                  <AlertCircle className="size-4 text-green-600" />
                  <AlertTitle className="text-green-800">Periode isolasi telah selesai</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Anda sudah melewati periode isolasi 10 hari. Namun, tetap perhatikan kondisi kesehatan 
                    dan lakukan tes ulang jika disarankan oleh dokter.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-2">Catatan Penting:</h4>
                <ul className="text-sm space-y-1 ml-4 list-disc text-yellow-800">
                  <li>Isolasi dapat diperpanjang jika gejala masih berlanjut</li>
                  <li>Konsultasikan dengan dokter sebelum mengakhiri isolasi</li>
                  <li>Tetap gunakan masker saat bertemu orang lain setelah isolasi</li>
                  <li>Monitor kesehatan 14 hari setelah tes positif</li>
                </ul>
              </div>
            </div>

            <Button onClick={resetCalculator} variant="outline" className="w-full">
              Hitung Ulang
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
