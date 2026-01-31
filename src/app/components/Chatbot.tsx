import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MessageCircle, Send, Bot, User } from 'lucide-react';
import { ScrollArea } from '@/app/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface FAQ {
  keywords: string[];
  answer: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Halo! Saya adalah asisten virtual COVID-19. Saya dapat membantu menjawab pertanyaan seputar COVID-19, lokasi rumah sakit, harga tes, dan informasi lainnya. Ada yang bisa saya bantu?',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const faqs: FAQ[] = [
    {
      keywords: ['rumah sakit', 'rs', 'hospital', 'terdekat', 'lokasi rs'],
      answer: 'Berikut beberapa rumah sakit rujukan COVID-19:\n\n• RSUP Dr. Sardjito (Yogyakarta)\n• RSUP Fatmawati (Jakarta Selatan)\n• RSUP Persahabatan (Jakarta Timur)\n• RSUD Dr. Soetomo (Surabaya)\n• RSUP Dr. Hasan Sadikin (Bandung)\n\nUntuk mencari RS terdekat, hubungi hotline 119 ext. 9 atau kunjungi website Kemenkes.'
    },
    {
      keywords: ['harga', 'biaya', 'pcr', 'rapid', 'antigen', 'tes'],
      answer: 'Kisaran harga tes COVID-19:\n\n• Rapid Antigen: Rp 99.000 - Rp 275.000\n• PCR: Rp 275.000 - Rp 900.000\n• GeNose: Rp 25.000 - Rp 50.000\n\nHarga dapat berbeda tergantung lokasi dan faskes. Beberapa puskesmas menyediakan tes gratis untuk kelompok tertentu.'
    },
    {
      keywords: ['gejala', 'ciri', 'tanda', 'symptom'],
      answer: 'Gejala umum COVID-19:\n\n• Demam (≥38°C)\n• Batuk kering\n• Sesak napas\n• Kelelahan\n• Hilang indra penciuman/perasa\n• Nyeri tenggorokan\n• Sakit kepala\n• Diare (pada beberapa kasus)\n\nJika mengalami gejala berat seperti sesak napas, segera hubungi fasilitas kesehatan.'
    },
    {
      keywords: ['vaksin', 'vaksinasi', 'suntik', 'booster'],
      answer: 'Informasi vaksinasi COVID-19:\n\n• Vaksin tersedia gratis di puskesmas dan faskes\n• Dosis primer: 2 dosis dengan jarak 1-3 bulan\n• Booster pertama: minimal 3 bulan setelah dosis kedua\n• Booster kedua: minimal 6 bulan setelah booster pertama\n\nDaftar vaksinasi melalui aplikasi PeduliLindungi atau langsung ke puskesmas terdekat.'
    },
    {
      keywords: ['isolasi', 'karantina', 'berapa lama', 'durasi'],
      answer: 'Pedoman isolasi mandiri:\n\n• Pasien tanpa gejala: 10 hari sejak tes positif\n• Pasien dengan gejala: 10 hari sejak gejala muncul\n• Setelah isolasi, gunakan masker 14 hari\n• Tetap monitor kesehatan\n\nGunakan Kalkulator Isolasi di website ini untuk menghitung waktu isolasi Anda.'
    },
    {
      keywords: ['pengobatan', 'obat', 'terapi', 'sembuh'],
      answer: 'Penanganan COVID-19:\n\n• Gejala ringan: istirahat, minum air putih, konsumsi vitamin\n• Gejala sedang-berat: konsultasi dokter untuk terapi antiviral\n• Jangan konsumsi antibiotik tanpa resep dokter\n• Monitor saturasi oksigen dengan oximeter\n\nHubungi telemedicine atau dokter untuk konsultasi pengobatan yang tepat.'
    },
    {
      keywords: ['protokol', 'prokes', '5m', 'pencegahan'],
      answer: 'Protokol kesehatan 5M:\n\n1. Memakai masker\n2. Mencuci tangan dengan sabun\n3. Menjaga jarak minimal 1,5 meter\n4. Menjauhi kerumunan\n5. Membatasi mobilitas\n\nTetap terapkan protokol meski sudah divaksin untuk perlindungan maksimal.'
    },
    {
      keywords: ['hotline', 'kontak', 'telepon', 'darurat', 'emergency'],
      answer: 'Kontak darurat COVID-19:\n\n• Hotline Kemenkes: 119 ext. 9\n• WhatsApp Konsultasi: 0811-8750-707\n• SMS Gateway: 08112112119\n\nLayanan tersedia 24 jam untuk konsultasi dan informasi.'
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const findAnswer = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const faq of faqs) {
      if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return faq.answer;
      }
    }

    return 'Maaf, saya belum bisa menjawab pertanyaan tersebut. Berikut beberapa topik yang dapat saya bantu:\n\n• Lokasi rumah sakit rujukan\n• Harga tes PCR/Antigen\n• Gejala COVID-19\n• Informasi vaksinasi\n• Protokol isolasi\n• Pengobatan\n• Protokol kesehatan\n• Kontak darurat\n\nSilakan tanyakan salah satu topik di atas, atau hubungi hotline 119 ext. 9 untuk bantuan langsung.';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="size-5" />
          Chatbot COVID-19
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'bot' ? 'bg-blue-100' : 'bg-gray-200'
                }`}>
                  {message.sender === 'bot' ? (
                    <Bot className="size-5 text-blue-600" />
                  ) : (
                    <User className="size-5 text-gray-600" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'bot'
                      ? 'bg-blue-50 text-blue-900'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <span className="text-xs opacity-60 mt-1 block">
                    {message.timestamp.toLocaleTimeString('id-ID', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Ketik pertanyaan Anda..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
