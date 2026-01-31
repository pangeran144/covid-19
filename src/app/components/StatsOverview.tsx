import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { TrendingUp, TrendingDown, Users, Activity, Shield, AlertTriangle } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

export function StatsOverview({ language }: { language: 'id' | 'en' }) {
  const stats: Stat[] = [
    {
      label: language === 'id' ? 'Total Kasus' : 'Total Cases',
      value: '6,812,048',
      change: '+234',
      trend: 'up',
      icon: <Users className="size-4" />
    },
    {
      label: language === 'id' ? 'Kasus Aktif' : 'Active Cases',
      value: '12,456',
      change: '-89',
      trend: 'down',
      icon: <Activity className="size-4" />
    },
    {
      label: language === 'id' ? 'Sembuh' : 'Recovered',
      value: '6,639,205',
      change: '+312',
      trend: 'up',
      icon: <Shield className="size-4" />
    },
    {
      label: language === 'id' ? 'Meninggal' : 'Deaths',
      value: '160,387',
      change: '+11',
      trend: 'up',
      icon: <AlertTriangle className="size-4" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
              {stat.icon}
              {stat.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className={`flex items-center gap-1 text-sm mt-1 ${
              stat.trend === 'up' ? 'text-red-600' : 'text-green-600'
            }`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              <span>{stat.change} {language === 'id' ? 'hari ini' : 'today'}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
