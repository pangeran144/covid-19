import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';

interface Question {
  id: string;
  question: string;
}

export function SelfAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    { id: 'fever', question: 'Apakah Anda mengalami demam (suhu tubuh ≥ 38°C)?' },
    { id: 'cough', question: 'Apakah Anda mengalami batuk kering?' },
    { id: 'breathing', question: 'Apakah Anda mengalami kesulitan bernapas?' },
    { id: 'taste', question: 'Apakah Anda kehilangan indra penciuman atau perasa?' },
    { id: 'travel', question: 'Apakah Anda baru saja bepergian ke luar kota/negara?' },
    { id: 'contact', question: 'Apakah Anda berkontak dengan pasien positif COVID-19?' },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateRisk = () => {
    const yesCount = Object.values(answers).filter(a => a === 'yes').length;
    
    if (yesCount >= 3) {
      return 'high';
    } else if (yesCount >= 1) {
      return 'medium';
    }
    return 'low';
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const riskLevel = calculateRisk();

  if (showResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Hasil Penilaian Mandiri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {riskLevel === 'high' && (
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>Risiko Tinggi</AlertTitle>
              <AlertDescription>
                Berdasarkan gejala yang Anda alami, kami sangat menyarankan Anda untuk:
                <ul className="mt-2 ml-4 list-disc space-y-1">
                  <li>Segera hubungi fasilitas kesehatan terdekat</li>
                  <li>Lakukan tes PCR atau rapid antigen</li>
                  <li>Isolasi mandiri dan hindari kontak dengan orang lain</li>
                  <li>Hubungi hotline COVID-19: 119 ext. 9</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {riskLevel === 'medium' && (
            <Alert>
              <AlertCircle className="size-4" />
              <AlertTitle>Risiko Sedang</AlertTitle>
              <AlertDescription>
                Anda menunjukkan beberapa gejala. Saran untuk Anda:
                <ul className="mt-2 ml-4 list-disc space-y-1">
                  <li>Monitor kesehatan Anda dengan cermat</li>
                  <li>Pertimbangkan untuk melakukan tes COVID-19</li>
                  <li>Batasi aktivitas di luar rumah</li>
                  <li>Gunakan masker dan jaga jarak dengan orang lain</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {riskLevel === 'low' && (
            <Alert className="border-green-600 bg-green-50">
              <CheckCircle className="size-4 text-green-600" />
              <AlertTitle className="text-green-800">Risiko Rendah</AlertTitle>
              <AlertDescription className="text-green-700">
                Berdasarkan jawaban Anda, risiko COVID-19 Anda rendah. Tetap jaga kesehatan dengan:
                <ul className="mt-2 ml-4 list-disc space-y-1">
                  <li>Mencuci tangan secara teratur</li>
                  <li>Menggunakan masker di tempat ramai</li>
                  <li>Menjaga jarak dengan orang lain</li>
                  <li>Melengkapi vaksinasi</li>
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="pt-4">
            <Button onClick={resetAssessment} className="w-full">
              Ulangi Penilaian
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            *Disclaimer: Hasil ini hanya sebagai panduan awal dan bukan diagnosis medis. 
            Konsultasikan dengan tenaga kesehatan profesional untuk diagnosis yang akurat.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Penilaian Mandiri COVID-19</CardTitle>
        <CardDescription>
          Jawab pertanyaan berikut untuk menilai risiko COVID-19 Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Pertanyaan {currentStep + 1} dari {questions.length}</span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="py-4">
            <h3 className="text-lg mb-4">{questions[currentStep].question}</h3>
            
            <RadioGroup
              value={answers[questions[currentStep].id] || ''}
              onValueChange={handleAnswer}
            >
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="flex-1 cursor-pointer">Ya</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="flex-1 cursor-pointer">Tidak</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex gap-2">
          {currentStep > 0 && (
            <Button onClick={prevQuestion} variant="outline" className="flex-1">
              Kembali
            </Button>
          )}
          <Button 
            onClick={nextQuestion} 
            disabled={!answers[questions[currentStep].id]}
            className="flex-1"
          >
            {currentStep === questions.length - 1 ? 'Lihat Hasil' : 'Lanjut'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
