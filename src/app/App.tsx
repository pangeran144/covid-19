import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { StatsOverview } from '@/app/components/StatsOverview';
import { SelfAssessment } from '@/app/components/SelfAssessment';
import { IsolationCalculator } from '@/app/components/IsolationCalculator';
import { Chatbot } from '@/app/components/Chatbot';
import { TravelRequirements } from '@/app/components/TravelRequirements';
import { NewNormalGuide } from '@/app/components/NewNormalGuide';
import { MentalHealth } from '@/app/components/MentalHealth';
import { Community } from '@/app/components/Community';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent } from '@/app/components/ui/card';
import { Activity, Info, Heart, Users, Shield, Phone } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const fontSizeClass = {
    normal: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  }[fontSize];

  return (
    <div className={`min-h-screen bg-gray-50 ${fontSizeClass} ${theme === 'dark' ? 'dark' : ''}`}>
      <Header
        language={language}
        setLanguage={setLanguage}
        fontSize={fontSize}
        setFontSize={setFontSize}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">
            {language === 'id' 
              ? 'Informasi COVID-19 Terpercaya & Terkini' 
              : 'Trusted & Latest COVID-19 Information'}
          </h2>
          <p className="text-gray-600">
            {language === 'id'
              ? 'Portal lengkap untuk informasi, tools interaktif, dan dukungan kesehatan mental'
              : 'Complete portal for information, interactive tools, and mental health support'}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {language === 'id' ? '📊 Data Real-time' : '📊 Real-time Data'}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {language === 'id' ? '🤖 Chatbot AI' : '🤖 AI Chatbot'}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              {language === 'id' ? '🧠 Dukungan Mental' : '🧠 Mental Support'}
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              {language === 'id' ? '♿ Aksesibilitas' : '♿ Accessibility'}
            </span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <StatsOverview language={language} />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-6">
            <TabsTrigger value="tools" className="flex items-center gap-1 text-xs md:text-sm">
              <Activity className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Tools' : 'Tools'}</span>
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-1 text-xs md:text-sm">
              <Info className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Informasi' : 'Information'}</span>
            </TabsTrigger>
            <TabsTrigger value="mental" className="flex items-center gap-1 text-xs md:text-sm">
              <Heart className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Kesehatan' : 'Health'}</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-1 text-xs md:text-sm">
              <Users className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Komunitas' : 'Community'}</span>
            </TabsTrigger>
            <TabsTrigger value="protection" className="flex items-center gap-1 text-xs md:text-sm">
              <Shield className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Protokol' : 'Protocol'}</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-1 text-xs md:text-sm">
              <Phone className="size-4" />
              <span className="hidden md:inline">{language === 'id' ? 'Kontak' : 'Contact'}</span>
            </TabsTrigger>
          </TabsList>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <SelfAssessment />
              <IsolationCalculator />
            </div>
            <Chatbot />
          </TabsContent>

          {/* Information Tab */}
          <TabsContent value="info" className="space-y-6">
            <TravelRequirements />
          </TabsContent>

          {/* Mental Health Tab */}
          <TabsContent value="mental" className="space-y-6">
            <MentalHealth />
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <Community />
          </TabsContent>

          {/* Protocol Tab */}
          <TabsContent value="protection" className="space-y-6">
            <NewNormalGuide />
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {language === 'id' ? 'Kontak Darurat COVID-19' : 'COVID-19 Emergency Contacts'}
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-4 py-2">
                    <p className="font-semibold text-lg">119 ext. 9</p>
                    <p className="text-sm text-gray-600">
                      {language === 'id' ? 'Hotline Kemenkes (24 jam)' : 'Ministry of Health Hotline (24 hours)'}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 py-2">
                    <p className="font-semibold text-lg">0811-8750-707</p>
                    <p className="text-sm text-gray-600">
                      {language === 'id' ? 'WhatsApp Konsultasi' : 'WhatsApp Consultation'}
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <p className="font-semibold text-lg">08112112119</p>
                    <p className="text-sm text-gray-600">
                      {language === 'id' ? 'SMS Gateway' : 'SMS Gateway'}
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <p className="font-semibold text-lg">500-454 / 119 ext. 8</p>
                    <p className="text-sm text-gray-600">
                      {language === 'id' ? 'Hotline Kesehatan Mental (24 jam)' : 'Mental Health Hotline (24 hours)'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">
                    {language === 'id' ? '⚠️ Kapan Harus Menghubungi?' : '⚠️ When to Call?'}
                  </h4>
                  <ul className="text-sm space-y-1 ml-4 list-disc text-yellow-800">
                    <li>{language === 'id' ? 'Sesak napas atau sulit bernapas' : 'Difficulty breathing or shortness of breath'}</li>
                    <li>{language === 'id' ? 'Nyeri dada yang menetap' : 'Persistent chest pain'}</li>
                    <li>{language === 'id' ? 'Kebingungan atau tidak bisa bangun' : 'Confusion or inability to wake up'}</li>
                    <li>{language === 'id' ? 'Bibir atau wajah membiru' : 'Bluish lips or face'}</li>
                    <li>{language === 'id' ? 'Demam tinggi yang tidak turun' : 'High fever that does not subside'}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              {language === 'id' 
                ? '© 2026 Info COVID-19 Indonesia. Data diambil dari sumber resmi Kemenkes RI.'
                : '© 2026 COVID-19 Info Indonesia. Data sourced from official Ministry of Health.'}
            </p>
            <p className="text-xs">
              {language === 'id'
                ? '⚠️ Disclaimer: Website ini untuk informasi umum. Konsultasikan dengan tenaga medis profesional untuk diagnosis dan pengobatan.'
                : '⚠️ Disclaimer: This website is for general information. Consult healthcare professionals for diagnosis and treatment.'}
            </p>
            <div className="mt-4 flex justify-center gap-4 text-xs">
              <a href="#" className="hover:text-blue-600">{language === 'id' ? 'Tentang Kami' : 'About Us'}</a>
              <a href="#" className="hover:text-blue-600">{language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a>
              <a href="#" className="hover:text-blue-600">{language === 'id' ? 'Kontak' : 'Contact'}</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
