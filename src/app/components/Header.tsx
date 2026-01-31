import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Languages, Moon, Sun, Type } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

interface HeaderProps {
  language: 'id' | 'en';
  setLanguage: (lang: 'id' | 'en') => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export function Header({ language, setLanguage, fontSize, setFontSize, theme, setTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="size-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C19</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {language === 'id' ? 'Info COVID-19 Indonesia' : 'COVID-19 Info Indonesia'}
                </h1>
                <p className="text-xs text-gray-500">
                  {language === 'id' ? 'Portal Informasi Terpercaya' : 'Trusted Information Portal'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" title={language === 'id' ? 'Ukuran Teks' : 'Text Size'}>
                  <Type className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFontSize('normal')}>
                  {language === 'id' ? 'Normal' : 'Normal'} {fontSize === 'normal' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFontSize('large')}>
                  {language === 'id' ? 'Besar' : 'Large'} {fontSize === 'large' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFontSize('xlarge')}>
                  {language === 'id' ? 'Sangat Besar' : 'Extra Large'} {fontSize === 'xlarge' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" title={language === 'id' ? 'Bahasa' : 'Language'}>
                  <Languages className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('id')}>
                  🇮🇩 Bahasa Indonesia {language === 'id' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  🇬🇧 English {language === 'en' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              title={language === 'id' ? 'Mode Gelap' : 'Dark Mode'}
            >
              {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
