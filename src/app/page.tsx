'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Globe,
  Shield,
  FileText,
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Target,
  Network,
  PieChart,
  BarChart3,
  Eye,
  Clock,
  MapPin,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  LineChart,
  Flag,
  Gavel,
  Landmark,
  Rocket,
  Scale,
  Globe2,
  Link2,
  Hammer,
  Calendar,
  TrendingDown as TrendingDownIcon,
  Sparkles,
  Flame,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Code,
  Database,
  Server,
  Star,
  GitFork
} from 'lucide-react'

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter as RechartsScatter,
  ZAxis,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart,
  PieChart as RechartsPieChart,
  Cell,
  Treemap
} from 'recharts'

interface Country {
  name: string
  region: string
  riskScore: number
  paradigmStatus: string
  systemicType: string
  volatility: string
  strategicStatus: string
}

interface CountryProfile {
  name: string
  region: string
  flag: string
  riskScore: number
  paradigmStatus: string
  systemicType: string
  volatility: string
  strategicStatus: string
  gdp: number
  population: number
  militarySpending: number
  nuclearCapability: boolean
  alliances: string[]
  majorIndustries: string[]
  keyChallenges: string[]
  strengths: string[]
  recentDevelopments: string[]
}

interface AlertData {
  title: string
  severity: 'critical' | 'warning' | 'info'
  description: string
  location?: string
  threat?: string
  impact?: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [mapZoom, setMapZoom] = useState(1)
  const [mapPan, setMapPan] = useState({ x: 0, y: 0 })
  const [selectedCountry, setSelectedCountry] = useState<CountryProfile | null>(null)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const majorPowers: Country[] = [
    // North America
    { name: 'United States', region: 'NA', riskScore: 68, paradigmStatus: 'SHIFTING', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 3.2σ', strategicStatus: 'Deteriorating', color: 'from-blue-500 to-blue-600', icon: '🇺🇸' },
    { name: 'Canada', region: 'NA', riskScore: 32, paradigmStatus: 'STABLE', systemicType: 'Resource Sovereignty', volatility: 'Trending Down 1.2σ', strategicStatus: 'Stable', color: 'from-red-500 to-red-600', icon: '🇨🇦' },
    { name: 'Mexico', region: 'NA', riskScore: 54, paradigmStatus: 'EMERGING', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 2.1σ', strategicStatus: 'Growing', color: 'from-green-500 to-green-600', icon: '🇲🇽' },

    // Europe
    { name: 'Germany', region: 'EU', riskScore: 42, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.8σ', strategicStatus: 'Improving', color: 'from-yellow-500 to-yellow-600', icon: '🇩🇪' },
    { name: 'France', region: 'EU', riskScore: 38, paradigmStatus: 'STABLE', systemicType: 'Strategic Autonomy', volatility: 'Trending Down 1.5σ', strategicStatus: 'Stable', color: 'from-blue-600 to-blue-700', icon: '🇫🇷' },
    { name: 'United Kingdom', region: 'EU', riskScore: 48, paradigmStatus: 'SHIFTING', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 2.3σ', strategicStatus: 'Transitioning', color: 'from-purple-500 to-purple-600', icon: '🇬🇧' },
    { name: 'Italy', region: 'EU', riskScore: 52, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 1.8σ', strategicStatus: 'Stable', color: 'from-green-600 to-green-700', icon: '🇮🇹' },
    { name: 'Spain', region: 'EU', riskScore: 36, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.0σ', strategicStatus: 'Stable', color: 'from-orange-500 to-orange-600', icon: '🇪🇸' },
    { name: 'Poland', region: 'EU', riskScore: 58, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.5σ', strategicStatus: 'Strengthening', color: 'from-red-600 to-red-700', icon: '🇵🇱' },
    { name: 'Netherlands', region: 'EU', riskScore: 35, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 0.8σ', strategicStatus: 'Stable', color: 'from-orange-600 to-orange-700', icon: '🇳🇱' },

    // Asia
    { name: 'China', region: 'AS', riskScore: 72, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 3.8σ', strategicStatus: 'Coordinated', color: 'from-red-500 to-red-600', icon: '🇨🇳' },
    { name: 'Japan', region: 'AS', riskScore: 38, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.2σ', strategicStatus: 'Stable', color: 'from-red-600 to-white', icon: '🇯🇵' },
    { name: 'South Korea', region: 'AS', riskScore: 52, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.8σ', strategicStatus: 'Strengthening', color: 'from-blue-500 to-cyan-500', icon: '🇰🇷' },
    { name: 'Indonesia', region: 'AS', riskScore: 48, paradigmStatus: 'EMERGING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.2σ', strategicStatus: 'Growing', color: 'from-red-600 to-red-700', icon: '🇮🇩' },
    { name: 'Vietnam', region: 'AS', riskScore: 45, paradigmStatus: 'EMERGING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.0σ', strategicStatus: 'Growing', color: 'from-yellow-500 to-red-600', icon: '🇻🇳' },
    { name: 'Thailand', region: 'AS', riskScore: 42, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 1.5σ', strategicStatus: 'Stable', color: 'from-blue-500 to-blue-600', icon: '🇹🇭' },
    { name: 'Philippines', region: 'AS', riskScore: 55, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.7σ', strategicStatus: 'Transitioning', color: 'from-yellow-600 to-orange-600', icon: '🇵🇭' },

    // South Asia
    { name: 'India', region: 'SA', riskScore: 55, paradigmStatus: 'EMERGING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.5σ', strategicStatus: 'Growing', color: 'from-orange-500 to-orange-600', icon: '🇮🇳' },
    { name: 'Pakistan', region: 'SA', riskScore: 68, paradigmStatus: 'CRISIS', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 3.5σ', strategicStatus: 'Unstable', color: 'from-green-500 to-green-600', icon: '🇵🇰' },
    { name: 'Bangladesh', region: 'SA', riskScore: 58, paradigmStatus: 'EMERGING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.1σ', strategicStatus: 'Growing', color: 'from-green-600 to-green-700', icon: '🇧🇩' },

    // Eurasia
    { name: 'Russia', region: 'EU', riskScore: 78, paradigmStatus: 'CRISIS', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 4.5σ', strategicStatus: 'Isolated', color: 'from-red-600 to-red-700', icon: '🇷🇺' },
    { name: 'Ukraine', region: 'EU', riskScore: 85, paradigmStatus: 'WAR', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 5.2σ', strategicStatus: 'In Crisis', color: 'from-blue-500 to-yellow-500', icon: '🇺🇦' },

    // Oceania
    { name: 'Australia', region: 'OC', riskScore: 48, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.8σ', strategicStatus: 'Improving', color: 'from-teal-500 to-teal-600', icon: '🇦🇺' },
    { name: 'New Zealand', region: 'OC', riskScore: 32, paradigmStatus: 'STABLE', systemicType: 'Resource Sovereignty', volatility: 'Trending Down 1.0σ', strategicStatus: 'Stable', color: 'from-blue-600 to-blue-700', icon: '🇳🇿' },

    // Africa
    { name: 'Nigeria', region: 'AF', riskScore: 65, paradigmStatus: 'EMERGING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 3.2σ', strategicStatus: 'Growing', color: 'from-green-500 to-green-600', icon: '🇳🇬' },
    { name: 'South Africa', region: 'AF', riskScore: 58, paradigmStatus: 'SHIFTING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.8σ', strategicStatus: 'Transitioning', color: 'from-yellow-500 to-orange-600', icon: '🇿🇦' },
    { name: 'Egypt', region: 'ME', riskScore: 62, paradigmStatus: 'SHIFTING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 3.0σ', strategicStatus: 'Transitioning', color: 'from-red-600 to-black', icon: '🇪🇬' },
    { name: 'Kenya', region: 'AF', riskScore: 52, paradigmStatus: 'EMERGING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.4σ', strategicStatus: 'Growing', color: 'from-red-600 to-green-600', icon: '🇰🇪' },

    // Middle East
    { name: 'Saudi Arabia', region: 'ME', riskScore: 52, paradigmStatus: 'SHIFTING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.6σ', strategicStatus: 'Transitioning', color: 'from-green-500 to-white', icon: '🇸🇦' },
    { name: 'Iran', region: 'ME', riskScore: 72, paradigmStatus: 'CRISIS', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 3.8σ', strategicStatus: 'Isolated', color: 'from-green-600 to-red-600', icon: '🇮🇷' },
    { name: 'Turkey', region: 'ME', riskScore: 58, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 3.0σ', strategicStatus: 'Transitioning', color: 'from-red-600 to-red-700', icon: '🇹🇷' },
    { name: 'Israel', region: 'ME', riskScore: 68, paradigmStatus: 'CRISIS', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 3.5σ', strategicStatus: 'In Crisis', color: 'from-blue-600 to-white', icon: '🇮🇱' },

    // Latin America
    { name: 'Brazil', region: 'LA', riskScore: 52, paradigmStatus: 'SHIFTING', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.3σ', strategicStatus: 'Transitioning', color: 'from-green-500 to-yellow-500', icon: '🇧🇷' },
    { name: 'Argentina', region: 'LA', riskScore: 62, paradigmStatus: 'CRISIS', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 3.5σ', strategicStatus: 'Unstable', color: 'from-blue-500 to-blue-600', icon: '🇦🇷' },
    { name: 'Colombia', region: 'LA', riskScore: 48, paradigmStatus: 'STABLE', systemicType: 'Resource Sovereignty', volatility: 'Trending Up 2.0σ', strategicStatus: 'Stable', color: 'from-yellow-500 to-blue-500', icon: '🇨🇴' },
    { name: 'Chile', region: 'LA', riskScore: 42, paradigmStatus: 'STABLE', systemicType: 'Resource Sovereignty', volatility: 'Trending Down 1.5σ', strategicStatus: 'Stable', color: 'from-red-500 to-blue-500', icon: '🇨🇱' }
  ]

  const countryProfiles: CountryProfile[] = [
    {
      name: 'United States',
      region: 'NA',
      flag: '🇺🇸',
      riskScore: 68,
      paradigmStatus: 'SHIFTING',
      systemicType: 'Monetary Sovereignty',
      volatility: 'Trending Up 3.2σ',
      strategicStatus: 'Deteriorating',
      gdp: 28.5,
      population: 332,
      militarySpending: 916,
      nuclearCapability: true,
      alliances: ['NATO', 'QUAD', 'G7', 'Five Eyes'],
      majorIndustries: ['Technology', 'Finance', 'Defense', 'Entertainment', 'Agriculture'],
      keyChallenges: ['Domestic political polarization', 'Infrastructure decay', 'Debt levels', 'Global leadership competition'],
      strengths: ['Military superiority', 'Financial dominance', 'Innovation leadership', 'Global alliances'],
      recentDevelopments: ['Tech war with China', 'NATO expansion efforts', 'Energy independence push', 'Supply chain reshoring']
    },
    {
      name: 'China',
      region: 'AS',
      flag: '🇨🇳',
      riskScore: 72,
      paradigmStatus: 'SHIFTING',
      systemicType: 'Strategic Autonomy',
      volatility: 'Trending Up 3.8σ',
      strategicStatus: 'Coordinated',
      gdp: 18.5,
      population: 1425,
      militarySpending: 292,
      nuclearCapability: true,
      alliances: ['SCO', 'BRICS+', 'Belt and Road Initiative'],
      majorIndustries: ['Manufacturing', 'Technology', 'Construction', 'Energy', 'Mining'],
      keyChallenges: ['Economic slowdown', 'Population aging', 'US strategic competition', 'Sea access disputes'],
      strengths: ['Manufacturing dominance', 'BRI influence', 'Technology advancement', 'Resource access'],
      recentDevelopments: ['Taiwan tensions', 'South China Sea militarization', 'Dedollarization efforts', 'Belt and Road expansion']
    },
    {
      name: 'Russia',
      region: 'EU',
      flag: '🇷🇺',
      riskScore: 78,
      paradigmStatus: 'CRISIS',
      systemicType: 'Resource Sovereignty',
      volatility: 'Trending Up 4.5σ',
      strategicStatus: 'Isolated',
      gdp: 2.2,
      population: 144,
      militarySpending: 86,
      nuclearCapability: true,
      alliances: ['SCO', 'CSTO'],
      majorIndustries: ['Energy', 'Mining', 'Defense', 'Agriculture'],
      keyChallenges: ['Sanctions pressure', 'Demographic decline', 'Economic isolation', 'Ukraine war costs'],
      strengths: ['Energy dominance', 'Nuclear arsenal', 'Resource independence', 'Cyber capabilities'],
      recentDevelopments: ['Ukraine war', 'Pivot to Asia', 'Sanctions resistance', 'Nuclear posturing']
    },
    {
      name: 'Germany',
      region: 'EU',
      flag: '🇩🇪',
      riskScore: 42,
      paradigmStatus: 'STABLE',
      systemicType: 'Monetary Sovereignty',
      volatility: 'Trending Down 1.8σ',
      strategicStatus: 'Improving',
      gdp: 4.4,
      population: 83,
      militarySpending: 67,
      nuclearCapability: false,
      alliances: ['EU', 'NATO'],
      majorIndustries: ['Manufacturing', 'Automotive', 'Technology', 'Chemicals'],
      keyChallenges: ['Energy transition costs', 'Industrial competitiveness', 'Immigration pressure'],
      strengths: ['Economic powerhouse', 'EU leadership', 'Technology innovation', 'Green energy transition'],
      recentDevelopments: ['Energy diversification', 'Defense spending increase', 'Industrial policy reform']
    },
    {
      name: 'Japan',
      region: 'AS',
      flag: '🇯🇵',
      riskScore: 38,
      paradigmStatus: 'STABLE',
      systemicType: 'Monetary Sovereignty',
      volatility: 'Trending Down 1.2σ',
      strategicStatus: 'Stable',
      gdp: 4.2,
      population: 125,
      militarySpending: 55,
      nuclearCapability: false,
      alliances: ['QUAD', 'G7'],
      majorIndustries: ['Technology', 'Automotive', 'Robotics', 'Finance'],
      keyChallenges: ['Population aging', 'Economic stagnation', 'North Korea threat'],
      strengths: ['Technology leadership', 'Strong alliances', 'High savings rate', 'Quality manufacturing'],
      recentDevelopments: ['Defense spending growth', 'Strategic partnership diversification', 'Demographic reforms']
    },
    {
      name: 'India',
      region: 'SA',
      flag: '🇮🇳',
      riskScore: 55,
      paradigmStatus: 'EMERGING',
      systemicType: 'Strategic Autonomy',
      volatility: 'Trending Up 2.5σ',
      strategicStatus: 'Growing',
      gdp: 3.7,
      population: 1428,
      militarySpending: 83,
      nuclearCapability: true,
      alliances: ['QUAD', 'SCO', 'BRICS+'],
      majorIndustries: ['Technology', 'Pharmaceuticals', 'Agriculture', 'Textiles'],
      keyChallenges: ['Pakistan tensions', 'China border disputes', 'Poverty reduction', 'Infrastructure gaps'],
      strengths: ['Demographic dividend', 'Technology hub', 'Geopolitical balance', 'Strategic location'],
      recentDevelopments: ['Multi-alignment strategy', 'Defense modernization', 'Digital economy push', 'Infrastructure investment']
    },
    {
      name: 'Brazil',
      region: 'LA',
      flag: '🇧🇷',
      riskScore: 52,
      paradigmStatus: 'SHIFTING',
      systemicType: 'Resource Sovereignty',
      volatility: 'Trending Up 2.3σ',
      strategicStatus: 'Transitioning',
      gdp: 2.1,
      population: 215,
      militarySpending: 22,
      nuclearCapability: false,
      alliances: ['BRICS+', 'UNASUR'],
      majorIndustries: ['Agriculture', 'Mining', 'Energy', 'Aerospace'],
      keyChallenges: ['Political instability', 'Economic inequality', 'Deforestation pressure'],
      strengths: ['Resource abundance', 'Agricultural power', 'Regional influence', 'Green energy potential'],
      recentDevelopments: ['BRICS+ leadership', 'Amazon protection policies', 'Lithium development', 'South-South cooperation']
    },
    {
      name: 'Ukraine',
      region: 'EU',
      flag: '🇺🇦',
      riskScore: 85,
      paradigmStatus: 'WAR',
      systemicType: 'Resource Sovereignty',
      volatility: 'Trending Up 5.2σ',
      strategicStatus: 'In Crisis',
      gdp: 0.2,
      population: 41,
      militarySpending: 44,
      nuclearCapability: false,
      alliances: ['NATO'],
      majorIndustries: ['Agriculture', 'IT', 'Metallurgy'],
      keyChallenges: ['Russian invasion', 'Infrastructure destruction', 'Economic collapse', 'Refugee crisis'],
      strengths: ['Democratic resilience', 'International support', 'Tech sector growth', 'Strategic importance'],
      recentDevelopments: ['War with Russia', 'EU accession process', 'Defense buildup', 'Reconstruction planning']
    },
    {
      name: 'Iran',
      region: 'ME',
      flag: '🇮🇷',
      riskScore: 72,
      paradigmStatus: 'CRISIS',
      systemicType: 'Resource Sovereignty',
      volatility: 'Trending Up 3.8σ',
      strategicStatus: 'Isolated',
      gdp: 0.4,
      population: 88,
      militarySpending: 25,
      nuclearCapability: false,
      alliances: ['SCO', 'Resistance Axis'],
      majorIndustries: ['Energy', 'Defense', 'Mining', 'Automotive'],
      keyChallenges: ['Sanctions regime', 'Economic isolation', 'Protest movements', 'Regional tensions'],
      strengths: ['Energy resources', 'Strategic location', 'Proxy network power', 'Missile development'],
      recentDevelopments: ['Nuclear program advances', 'Regional proxy operations', 'Sanctions resistance', 'China partnership']
    },
    {
      name: 'South Africa',
      region: 'AF',
      flag: '🇿🇦',
      riskScore: 58,
      paradigmStatus: 'SHIFTING',
      systemicType: 'Resource Sovereignty',
      volatility: 'Trending Up 2.8σ',
      strategicStatus: 'Transitioning',
      gdp: 0.4,
      population: 60,
      militarySpending: 4,
      nuclearCapability: false,
      alliances: ['BRICS+', 'AU'],
      majorIndustries: ['Mining', 'Agriculture', 'Finance', 'Energy'],
      keyChallenges: ['Energy crisis', 'Infrastructure deficits', 'Crime rates', 'Inequality'],
      strengths: ['Resource wealth', 'Financial hub', 'Constitutional democracy', 'Regional influence'],
      recentDevelopments: ['Energy transition', 'BRICS+ participation', 'Mining expansion', 'Infrastructure investment']
    }
  ]

  const alerts: AlertData[] = [
    {
      title: 'US-China Strategic Competition',
      severity: 'critical',
      description: 'Systemic Opposition between major powers affecting global governance',
      location: 'Global',
      threat: 'Systemic',
      impact: 'High'
    },
    {
      title: 'BRICS+ Strategic Autonomy',
      severity: 'warning',
      description: 'Accelerating efforts to reduce USD dependence and build alternative financial infrastructure',
      impact: 'Moderate-High'
    },
    {
      title: 'BRICS+ Coordination',
      severity: 'critical',
      description: 'Coordinated effort to reduce USD dependence with systemic implications',
      location: 'Brazil',
      threat: 'High',
      impact: 'Systemic'
    },
    {
      title: 'India Pragmatic Alignment',
      severity: 'warning',
      description: 'Deepening engagement with both China and US showing strategic flexibility',
      location: 'India',
      impact: 'Moderate'
    }
  ]

  const organizations = [
    {
      name: 'United Nations',
      icon: <Globe2 className="w-5 h-5" />,
      status: 'Active',
      members: 193,
      effectiveness: 68,
      founded: 1945,
      focus: ['Peacekeeping', 'Humanitarian', 'Development'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'European Union',
      icon: <Flag className="w-5 h-5" />,
      status: 'Active',
      members: 27,
      effectiveness: 78,
      founded: 1993,
      focus: ['Economic', 'Political', 'Social'],
      color: 'from-yellow-500 to-amber-500'
    },
    {
      name: 'NATO',
      icon: <Shield className="w-5 h-5" />,
      status: 'Active',
      members: 32,
      effectiveness: 85,
      founded: 1949,
      focus: ['Defense', 'Security', 'Collective'],
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'BRICS+',
      icon: <Rocket className="w-5 h-5" />,
      status: 'Emerging',
      members: 9,
      effectiveness: 65,
      founded: 2009,
      focus: ['Economic', 'Development', 'Cooperation'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'G20',
      icon: <Landmark className="w-5 h-5" />,
      status: 'Active',
      members: 20,
      effectiveness: 72,
      founded: 1999,
      focus: ['Economic', 'Financial', 'Governance'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'WTO',
      icon: <Scale className="w-5 h-5" />,
      status: 'Active',
      members: 164,
      effectiveness: 58,
      founded: 1995,
      focus: ['Trade', 'Commerce', 'Regulation'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const alliances = [
    {
      name: 'AUKUS',
      partners: ['🇦🇺 Australia', '🇬🇧 United Kingdom', '🇺🇸 United States'],
      type: 'Security',
      strength: 82,
      founded: 2021,
      focus: 'Defense technology & Indo-Pacific security',
      status: 'Strengthening',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'QUAD',
      partners: ['🇺🇸 United States', '🇯🇵 Japan', '🇮🇳 India', '🇦🇺 Australia'],
      type: 'Strategic',
      strength: 75,
      founded: 2007,
      focus: 'Indo-Pacific cooperation & maritime security',
      status: 'Active',
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      name: 'Shanghai Cooperation',
      partners: ['🇨🇳 China', '🇷🇺 Russia', '🇮🇳 India', '🇵🇰 Pakistan'],
      type: 'Political-Economic',
      strength: 68,
      founded: 2001,
      focus: 'Regional security & economic cooperation',
      status: 'Stable',
      color: 'from-red-600 to-red-800'
    },
    {
      name: 'ASEAN',
      partners: ['🇮🇩 Indonesia', '🇹🇭 Thailand', '🇻🇳 Vietnam', '9 others'],
      type: 'Regional',
      strength: 72,
      founded: 1967,
      focus: 'Southeast Asian economic & political integration',
      status: 'Strengthening',
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'NATO',
      partners: ['🇺🇸 United States', '🇩🇪 Germany', '🇫🇷 France', '29 others'],
      type: 'Military',
      strength: 88,
      founded: 1949,
      focus: 'Collective defense & Euro-Atlantic security',
      status: 'Expanding',
      color: 'from-cyan-600 to-cyan-800'
    }
  ]

  const economicData = {
    globalGDP: { value: 105.4, growth: 3.2, trend: 'up' },
    tradeVolume: { value: 25.8, growth: 2.8, trend: 'up' },
    foreignInvestment: { value: 1.8, growth: -5.2, trend: 'down' },
    debtLevels: { value: 300, growth: 2.1, trend: 'up' },
    inflation: { avg: 4.2, trend: 'down' },
    miningActivity: {
      totalValue: 1.2,
      growth: 8.5,
      topResources: [
        { resource: 'Lithium', value: 0.35, majorProducers: ['Australia', 'Chile', 'China'], growth: 25 },
        { resource: 'Rare Earth Elements', value: 0.18, majorProducers: ['China', 'USA', 'Australia'], growth: 12 },
        { resource: 'Cobalt', value: 0.12, majorProducers: ['DRC', 'Australia', 'Russia'], growth: 15 },
        { resource: 'Copper', value: 0.32, majorProducers: ['Chile', 'Peru', 'China'], growth: 8 },
        { resource: 'Nickel', value: 0.15, majorProducers: ['Indonesia', 'Philippines', 'Russia'], growth: 10 },
        { resource: 'Gold', value: 0.08, majorProducers: ['China', 'Australia', 'Russia'], growth: 5 }
      ],
      geopoliticalImpact: {
        high: ['Lithium', 'Cobalt', 'Rare Earth Elements'],
        medium: ['Copper', 'Nickel', 'Uranium'],
        low: ['Gold', 'Silver', 'Platinum']
      }
    },
    regions: [
      { name: 'North America', gdp: 28.5, growth: 2.1, share: 27 },
      { name: 'Europe', gdp: 23.3, growth: 0.8, share: 22 },
      { name: 'East Asia', gdp: 25.2, growth: 4.5, share: 24 },
      { name: 'South Asia', gdp: 4.2, growth: 6.2, share: 4 },
      { name: 'Latin America', gdp: 5.8, growth: 2.3, share: 5.5 },
      { name: 'Africa', gdp: 2.9, growth: 3.8, share: 2.7 },
      { name: 'Middle East', gdp: 3.7, growth: 2.5, share: 3.5 },
      { name: 'Oceania', gdp: 2.1, growth: 1.9, share: 2 }
    ]
  }

  const worldWars = {
    wwi: {
      name: 'World War I',
      period: '1914-1918',
      duration: '4 years, 3 months',
      countries: 32,
      casualties: { military: 9700000, civilian: 7000000, total: 16700000 },
      majorPowers: ['British Empire', 'France', 'Russia', 'Italy', 'United States', 'Germany', 'Austria-Hungary', 'Ottoman Empire'],
      causes: ['Assassination of Archduke Franz Ferdinand', 'Complex alliance systems', 'Imperial competition', 'Militarization', 'Nationalism'],
      outcomes: ['Fall of empires (German, Austro-Hungarian, Ottoman, Russian)', 'Treaty of Versailles', 'Redrawing of national borders', 'League of Nations formation'],
      economicImpact: 'Total war cost: $208 billion (1919 USD)',
      lessons: ['Dangers of alliance entanglements', 'Economic interdependence as peace factor', 'Need for conflict resolution mechanisms'],
      militaryFactors: {
        troopNumbers: {
          totalMobilized: '70 million',
          peakCasualties: '237,000 per day (Battle of the Somme)',
          trenchWarfareDuration: '4 years of static lines',
          artillaryShellsUsed: '1.5 billion shells'
        },
        strategies: {
          westernFront: 'Trench warfare with minimal territorial gain',
          easternFront: 'Mobile warfare with fluid frontlines',
          navalBlockade: 'British naval blockade of Central Powers',
          airWarfare: 'Limited reconnaissance, strategic bombing in late war',
          uBoatWarfare: 'Unrestricted submarine warfare by Germany'
        },
        technologies: {
          weapons: ['Rifles', 'Machine guns', 'Artillery', 'Tanks (late war)', 'Poison gas', 'Aircraft', 'Submarines', 'Flamethrowers'],
          innovations: ['Tank warfare (British Mark I-V)', 'Air reconnaissance', 'Wireless communications', 'Chemical weapons', 'Naval convoy systems'],
          medicalAdvances: ['Blood transfusions', 'Antiseptic surgery', 'Field hospitals', 'Shell shock treatment'],
          communication: ['Telegraph', 'Telephone', 'Signal flags', 'Carrier pigeons']
        },
        technologyGap: {
          alliesAdvantage: ['Superior naval power', 'More industrial capacity', 'Better logistics', 'US entry late war'],
          centralPowersAdvantage: ['Internal lines of communication', 'Better defensive positions', 'Superior artillery initially', 'Chemical weapons first use']
        }
      },
      technologicalFactors: {
        industrialRevolutionImpact: {
          massProduction: 'Rifles, artillery, ammunition',
          chemicalIndustry: 'Explosives, poison gas production',
          logistics: 'Railway mobilization, steam ships'
        },
        technologicalInnovations: {
          year1914: 'Traditional warfare: cavalry, bolt-action rifles',
          year1916: 'Static warfare: machine guns, barbed wire, trenches',
          year1917: 'Mobile warfare breakthrough: tanks, aircraft bombing',
          year1918: 'Combined arms: tank-infantry coordination'
        },
        warfareEvolution: {
          cavalryToInfantry: 'Cavalry becomes obsolete',
          openToTrench: 'Transition from mobile to static warfare',
          chemicalWarfare: 'First large-scale use of poison gas',
          airCombat: 'Birth of aerial combat and strategic bombing'
        }
      }
    },
    wwii: {
      name: 'World War II',
      period: '1939-1945',
      duration: '6 years',
      countries: 70,
      casualties: { military: 25000000, civilian: 45000000, total: 70000000 },
      majorPowers: ['United States', 'Soviet Union', 'United Kingdom', 'China', 'France', 'Germany', 'Japan', 'Italy'],
      causes: ['Treaty of Versailles resentment', 'Rise of fascism', 'German expansionism', 'Japanese imperialism', 'Failure of League of Nations'],
      outcomes: ['UN formation', 'Cold War emergence', 'Decolonization wave', 'Nuclear weapons development', 'International law establishment'],
      economicImpact: 'Total war cost: $1.1 trillion (1945 USD)',
      lessons: ['Importance of collective security', 'Dangers of appeasement', 'Economic sanctions effectiveness', 'Need for strong international institutions'],
      militaryFactors: {
        troopNumbers: {
          peakMobilized: '100 million personnel',
          largestBattle: 'Battle of Stalingrad: 2.2 million casualties',
          frontLineLength: '4,000 miles across multiple theaters',
          armoredVehicles: '100,000+ tanks deployed'
        },
        strategies: {
          blitzkrieg: 'German combined arms, rapid advance tactics',
          islandHopping: 'US Pacific campaign strategy',
          deepOperations: 'Soviet encirclement and breakthrough tactics',
          strategicBombing: 'Allied aerial bombing of civilian and industrial targets',
          navalWarfare: 'Aircraft carrier warfare in Pacific, submarine warfare in Atlantic'
        },
        technologies: {
          weapons: ['Tanks (Panzers, T-34, Sherman)', 'Aircraft fighters', 'Bombers', 'V-2 rockets', 'Atomic bombs', 'Radar', 'Sonar', 'Jet aircraft'],
          innovations: ['Radar detection', 'Code breaking (Enigma, Purple)', 'Jet propulsion', 'Nuclear weapons', 'Amphious landing craft', 'Self-propelled artillery'],
          medicalAdvances: ['Penicillin mass production', 'Blood plasma', 'Plastic surgery', 'D-DAY medical evacuation'],
          communication: ['Radio encryption', 'RADAR networks', 'Teletype communications', 'Early warning systems']
        },
        technologyGap: {
          earlyWarAdvantage: ['German Blitzkrieg tactics', 'Japanese Zero fighter superiority', 'German U-boat success'],
          midWarAdvantage: ['Allied radar advantage', 'Soviet T-34 tank quality', 'US industrial production capacity'],
          lateWarAdvantage: ['Allied numerical superiority', 'Atomic bomb monopoly', 'Jet aircraft development']
        }
      },
      technologicalFactors: {
        industrialTotalWar: {
          warEconomy: 'Complete civilian mobilization for war production',
          massProduction: 'Standardized vehicles, weapons, aircraft manufacturing',
          synthetics: ['Rubber', 'Fuel', 'Explosives - synthetic alternatives to natural resources'],
          nuclearDevelopment: 'Manhattan Project and German nuclear research'
        },
        technologicalInnovations: {
          year1939: 'Early war: Blitzkrieg, early aircraft',
          year1941: 'Technology war: Radar, Enigma codebreaking, sonar',
          year1943: 'Air superiority: Long-range bombers, jet engines',
          year1944: 'Endgame: V-2 rockets, guided missiles, atomic bomb development',
          year1945: 'Nuclear age: Atomic bombs dropped on Hiroshima and Nagasaki'
        },
        warfareRevolution: {
          mechanizedWarfare: 'Tank warfare replaces cavalry',
          airPower: 'Strategic bombing and air superiority',
          electronicWarfare: 'Radar, sonar, code breaking',
          nuclearEra: 'End of conventional warfare dominance'
        },
        scientificRace: {
          radarDevelopment: 'British Chain Home vs German Freya',
          codeBreaking: 'Ultra vs Enigma, US code breaking vs Japanese Purple',
          nuclearRace: 'Manhattan Project vs German nuclear program',
          rocketTechnology: 'V-2 rockets vs Allied air defenses'
        }
      }
    }
  }

  const repositoryData = {
    overview: {
      totalCommits: 12487,
      totalBranches: 23,
      openPRs: 14,
      closedPRs: 892,
      openIssues: 27,
      closedIssues: 456,
      contributors: 47,
      stars: 2894
    },
    recentCommits: [
      { id: 'a1b2c3d', author: 'John Doe', message: 'feat: Add new dashboard components', branch: 'main', time: '2 hours ago' },
      { id: 'e4f5g6h', author: 'Jane Smith', message: 'fix: Resolve routing issue', branch: 'main', time: '4 hours ago' },
      { id: 'i7j8k9l', author: 'Alex Johnson', message: 'refactor: Optimize API calls', branch: 'feature/performance', time: '6 hours ago' },
      { id: 'm0n1o2p', author: 'Sarah Wilson', message: 'docs: Update README', branch: 'main', time: '8 hours ago' },
      { id: 'q3r4s5t', author: 'Mike Brown', message: 'feat: Add user authentication', branch: 'feature/auth', time: '12 hours ago' },
      { id: 'u6v7w8x', author: 'Emma Davis', message: 'style: Improve UI responsiveness', branch: 'main', time: '1 day ago' },
      { id: 'y9z0a1b', author: 'Chris Lee', message: 'test: Add unit tests for dashboard', branch: 'develop', time: '1 day ago' },
      { id: 'c2d3e4f', author: 'Nina Taylor', message: 'chore: Update dependencies', branch: 'main', time: '2 days ago' }
    ],
    branches: [
      { name: 'main', status: 'protected', commits: 12487, lastUpdated: '2 hours ago', author: 'John Doe' },
      { name: 'develop', status: 'active', commits: 12431, lastUpdated: '1 day ago', author: 'Chris Lee' },
      { name: 'feature/performance', status: 'active', commits: 156, lastUpdated: '6 hours ago', author: 'Alex Johnson' },
      { name: 'feature/auth', status: 'active', commits: 89, lastUpdated: '12 hours ago', author: 'Mike Brown' },
      { name: 'feature/ui-redesign', status: 'stale', commits: 234, lastUpdated: '3 days ago', author: 'Emma Davis' },
      { name: 'bugfix/api-fixes', status: 'active', commits: 45, lastUpdated: '2 days ago', author: 'Jane Smith' }
    ],
    pullRequests: [
      { id: 147, title: 'Add new dashboard analytics', author: 'John Doe', status: 'open', branch: 'feature/analytics', reviewers: 2, comments: 5, created: '1 day ago' },
      { id: 146, title: 'Fix authentication middleware', author: 'Mike Brown', status: 'review', branch: 'feature/auth', reviewers: 3, comments: 8, created: '2 days ago' },
      { id: 145, title: 'Optimize database queries', author: 'Alex Johnson', status: 'approved', branch: 'feature/performance', reviewers: 2, comments: 3, created: '3 days ago' },
      { id: 144, title: 'Update UI components', author: 'Emma Davis', status: 'merged', branch: 'feature/ui-redesign', reviewers: 1, comments: 12, created: '4 days ago' },
      { id: 143, title: 'Add unit test coverage', author: 'Chris Lee', status: 'merged', branch: 'feature/testing', reviewers: 2, comments: 6, created: '5 days ago' }
    ],
    issues: [
      { id: 234, title: 'Dashboard loading slow on mobile', author: 'User123', priority: 'high', status: 'open', labels: ['bug', 'performance'], created: '2 days ago' },
      { id: 233, title: 'Add dark mode support', author: 'User456', priority: 'medium', status: 'open', labels: ['enhancement', 'ui'], created: '3 days ago' },
      { id: 232, title: 'API rate limiting error', author: 'User789', priority: 'critical', status: 'in-progress', labels: ['bug', 'api'], created: '1 day ago' },
      { id: 231, title: 'Documentation improvements', author: 'User101', priority: 'low', status: 'open', labels: ['documentation'], created: '4 days ago' }
    ],
    contributors: [
      { name: 'John Doe', commits: 2456, prs: 45, issues: 23, avatar: 'JD', color: 'from-blue-500 to-blue-600' },
      { name: 'Jane Smith', commits: 1892, prs: 38, issues: 17, avatar: 'JS', color: 'from-purple-500 to-purple-600' },
      { name: 'Alex Johnson', commits: 1654, prs: 32, issues: 19, avatar: 'AJ', color: 'from-emerald-500 to-emerald-600' },
      { name: 'Sarah Wilson', commits: 1345, prs: 28, issues: 14, avatar: 'SW', color: 'from-amber-500 to-amber-600' },
      { name: 'Mike Brown', commits: 1123, prs: 25, issues: 11, avatar: 'MB', color: 'from-red-500 to-red-600' }
    ],
    languages: [
      { name: 'TypeScript', percentage: 62, color: '#3178c6' },
      { name: 'React', percentage: 18, color: '#61dafb' },
      { name: 'CSS', percentage: 12, color: '#264de4' },
      { name: 'Other', percentage: 8, color: '#8b5cf6' }
    ]
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Activity className="w-16 h-16 animate-pulse mx-auto text-primary" />
          <p className="text-lg text-muted-foreground">Loading geopolitical intelligence...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">International Politics Dashboard</h1>
                <p className="text-sm text-muted-foreground">Real-time geopolitical intelligence & analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                System Operational
              </Badge>
              <Badge variant="outline" className="gap-2">
                <Activity className="w-4 h-4 text-blue-600" />
                Live Monitoring
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        {alerts.some(a => a.severity === 'critical') && (
          <div className="mb-4 space-y-3">
            {alerts.filter(a => a.severity === 'critical').map((alert, idx) => (
              <Alert key={idx} variant="destructive" className="border-red-500 bg-red-50 dark:bg-red-950/20">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle className="flex items-center justify-between">
                  {alert.title}
                  <Badge variant="destructive">CRITICAL</Badge>
                </AlertTitle>
                <AlertDescription className="mt-2">
                  {alert.description}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {alert.location && (
                      <Badge variant="outline" className="gap-1">
                        <MapPin className="w-3 h-3" />
                        {alert.location}
                      </Badge>
                    )}
                    {alert.threat && (
                      <Badge variant="outline" className="gap-1">
                        <Target className="w-3 h-3" />
                        Threat: {alert.threat}
                      </Badge>
                    )}
                    {alert.impact && (
                      <Badge variant="outline">Impact: {alert.impact}</Badge>
                    )}
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
            <TabsTrigger value="overview" className="gap-2">
              <PieChart className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="organizations" className="gap-2">
              <Building2 className="w-4 h-4" />
              Organizations
            </TabsTrigger>
            <TabsTrigger value="alliances" className="gap-2">
              <Shield className="w-4 h-4" />
              Alliances
            </TabsTrigger>
            <TabsTrigger value="economic" className="gap-2">
              <DollarSign className="w-4 h-4" />
              Economic
            </TabsTrigger>
            <TabsTrigger value="repository" className="gap-2">
              <GitBranch className="w-4 h-4" />
              Repository
            </TabsTrigger>
            <TabsTrigger value="analysis" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Analysis
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-4">
            {/* Executive Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-100">Global Stability Index</p>
                      <p className="text-3xl font-bold mt-2">75.6</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <TrendingDown className="w-4 h-4" />
                        <span>-2.3% this quarter</span>
                      </div>
                    </div>
                    <Globe className="w-12 h-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-emerald-100">Active Conflicts</p>
                      <p className="text-3xl font-bold mt-2">18</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <Activity className="w-4 h-4" />
                        <span>3 new this month</span>
                      </div>
                    </div>
                    <AlertTriangle className="w-12 h-12 text-emerald-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-100">Diplomatic Events</p>
                      <p className="text-3xl font-bold mt-2">247</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>+15% vs last month</span>
                      </div>
                    </div>
                    <Users className="w-12 h-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-amber-100">Economic Shifts</p>
                      <p className="text-3xl font-bold mt-2">32</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Significant movements</span>
                      </div>
                    </div>
                    <DollarSign className="w-12 h-12 text-amber-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Geopolitical Developments */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="lg:col-span-2 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500" />
                    Hot Topics This Week
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                      <Badge className="bg-red-600 mt-1">CRITICAL</Badge>
                      <div>
                        <h4 className="font-semibold text-sm">US-China Tensions Escalate</h4>
                        <p className="text-xs text-muted-foreground mt-1">Trade restrictions and technology disputes intensify</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <Badge className="bg-amber-600 mt-1">WARNING</Badge>
                      <div>
                        <h4 className="font-semibold text-sm">BRICS+ Expansion Progress</h4>
                        <p className="text-xs text-muted-foreground mt-1">New members preparing for formal integration in 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                      <Badge className="bg-emerald-600 mt-1">POSITIVE</Badge>
                      <div>
                        <h4 className="font-semibold text-sm">Regional Cooperation Initiatives</h4>
                        <p className="text-xs text-muted-foreground mt-1">ASEAN and African Union strengthen ties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <Badge className="bg-blue-600 mt-1">DEVELOPING</Badge>
                      <div>
                        <h4 className="font-semibold text-sm">Climate Agreement Advances</h4>
                        <p className="text-xs text-muted-foreground mt-1">Major powers reach consensus on new emissions targets</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Eye className="w-4 h-4" />
                    Watch List
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Taiwan Strait</span>
                      <Badge variant="destructive" className="text-xs">HIGH</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Ukraine Conflict</span>
                      <Badge variant="destructive" className="text-xs">HIGH</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Middle East</span>
                      <Badge className="bg-amber-500" variant="secondary">MEDIUM</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">South China Sea</span>
                      <Badge className="bg-amber-500" variant="secondary">MEDIUM</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Global Supply Chains</span>
                      <Badge variant="outline" className="text-xs">WATCH</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regional Overview Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Regional Stability Overview
                </CardTitle>
                <CardDescription>Current stability scores by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">78</div>
                    <div className="text-sm text-muted-foreground">North America</div>
                    <Progress value={78} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">82</div>
                    <div className="text-sm text-muted-foreground">Europe</div>
                    <Progress value={82} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">65</div>
                    <div className="text-sm text-muted-foreground">Asia-Pacific</div>
                    <Progress value={65} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">52</div>
                    <div className="text-sm text-muted-foreground">Middle East</div>
                    <Progress value={52} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">58</div>
                    <div className="text-sm text-muted-foreground">Africa</div>
                    <Progress value={58} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">68</div>
                    <div className="text-sm text-muted-foreground">Latin America</div>
                    <Progress value={68} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">85</div>
                    <div className="text-sm text-muted-foreground">Oceania</div>
                    <Progress value={85} className="mt-2 h-2" />
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">62</div>
                    <div className="text-sm text-muted-foreground">South Asia</div>
                    <Progress value={62} className="mt-2 h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* World Wars Historical Context */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-600" />
                  World Wars Historical Context
                </CardTitle>
                <CardDescription>Historical lessons and geopolitical impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* World War I */}
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base text-red-700">{worldWars.wwi.name}</CardTitle>
                        <Badge variant="destructive" className="text-xs">{worldWars.wwi.period}</Badge>
                      </div>
                      <CardDescription>{worldWars.wwi.duration} • {worldWars.wwi.countries} countries</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-white/50 dark:bg-slate-900/50 rounded">
                          <div className="text-xs text-muted-foreground">Military</div>
                          <div className="text-lg font-bold text-red-600">{(worldWars.wwi.casualties.military / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 dark:bg-slate-900/50 rounded">
                          <div className="text-xs text-muted-foreground">Civilian</div>
                          <div className="text-lg font-bold text-amber-600">{(worldWars.wwi.casualties.civilian / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 dark:bg-slate-900/50 rounded">
                          <div className="text-xs text-muted-foreground">Total</div>
                          <div className="text-lg font-bold text-red-700">{(worldWars.wwi.casualties.total / 1000000).toFixed(1)}M</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Economic Impact</div>
                        <div className="text-sm font-medium">{worldWars.wwi.economicImpact}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Key Causes</div>
                        <div className="flex flex-wrap gap-1">
                          {worldWars.wwi.causes.slice(0, 3).map((cause, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {cause}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Key Outcomes</div>
                        <div className="flex flex-wrap gap-1">
                          {worldWars.wwi.outcomes.slice(0, 2).map((outcome, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-emerald-50 dark:bg-emerald-950/20">
                              {outcome}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="text-xs text-blue-700 font-semibold mb-1">Key Lessons</div>
                        <div className="text-xs text-muted-foreground">{worldWars.wwi.lessons[0]}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* World War II */}
                  <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{worldWars.wwii.name}</CardTitle>
                        <Badge variant="destructive" className="text-xs">{worldWars.wwii.period}</Badge>
                      </div>
                      <CardDescription className="text-gray-300">{worldWars.wwii.duration} • {worldWars.wwii.countries} countries</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-white/10 rounded">
                          <div className="text-xs text-gray-300">Military</div>
                          <div className="text-lg font-bold text-red-300">{(worldWars.wwii.casualties.military / 1000000).toFixed(0)}M</div>
                        </div>
                        <div className="text-center p-2 bg-white/10 rounded">
                          <div className="text-xs text-gray-300">Civilian</div>
                          <div className="text-lg font-bold text-amber-300">{(worldWars.wwii.casualties.civilian / 1000000).toFixed(0)}M</div>
                        </div>
                        <div className="text-center p-2 bg-white/10 rounded">
                          <div className="text-xs text-gray-300">Total</div>
                          <div className="text-lg font-bold text-red-200">{(worldWars.wwii.casualties.total / 1000000).toFixed(0)}M</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 mb-1">Economic Impact</div>
                        <div className="text-sm font-medium">{worldWars.wwii.economicImpact}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 mb-1">Key Causes</div>
                        <div className="flex flex-wrap gap-1">
                          {worldWars.wwii.causes.slice(0, 3).map((cause, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-white/10 border-white/30">
                              {cause}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 mb-1">Key Outcomes</div>
                        <div className="flex flex-wrap gap-1">
                          {worldWars.wwii.outcomes.slice(0, 2).map((outcome, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-emerald-500/20 border-emerald-500/50">
                              {outcome}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <div className="text-xs text-blue-300 font-semibold mb-1">Key Lessons</div>
                        <div className="text-xs text-gray-300">{worldWars.wwii.lessons[0]}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Historical Insights */}
                <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-lg border border-amber-200">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-amber-800">
                    <Target className="w-4 h-4" />
                    Historical Parallels & Modern Implications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                      <div className="font-semibold text-amber-700 mb-1">Alliance Entanglements</div>
                      <div className="text-xs text-muted-foreground">WWI showed how complex alliances can escalate conflicts. Today's NATO vs SCO vs BRICS+ presents similar risks.</div>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                      <div className="font-semibold text-amber-700 mb-1">Economic Interdependence</div>
                      <div className="text-xs text-muted-foreground">Global trade now creates stronger peace incentives than in 1914, but supply chain vulnerabilities create new risks.</div>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                      <div className="font-semibold text-amber-700 mb-1">Institutional Failures</div>
                      <div className="text-xs text-muted-foreground">League of Nations failures led to WWII. UN's effectiveness is critical for preventing global conflicts today.</div>
                    </div>
                    <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
                      <div className="font-semibold text-amber-700 mb-1">Appeasement vs. Deterrence</div>
                      <div className="text-xs text-muted-foreground">WWII showed costs of delayed response. Modern Ukraine conflict tests this principle daily.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ORGANIZATIONS TAB */}
          <TabsContent value="organizations" className="space-y-4">
            {/* Organization Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-xs text-muted-foreground">Major Organizations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-emerald-500" />
                    <div>
                      <div className="text-2xl font-bold">193</div>
                      <div className="text-xs text-muted-foreground">UN Member States</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-purple-500" />
                    <div>
                      <div className="text-2xl font-bold">71%</div>
                      <div className="text-xs text-muted-foreground">Avg. Effectiveness</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Activity className="w-8 h-8 text-amber-500" />
                    <div>
                      <div className="text-2xl font-bold">28</div>
                      <div className="text-xs text-muted-foreground">Active Initiatives</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Organizations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {organizations.map((org, idx) => (
                <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${org.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-2 rounded-lg">
                          {org.icon}
                        </div>
                        <CardTitle className="text-base">{org.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {org.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-muted-foreground">Members</div>
                        <div className="font-semibold text-lg">{org.members}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Founded</div>
                        <div className="font-semibold text-lg">{org.founded}</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs text-muted-foreground">Effectiveness Score</div>
                        <div className="text-xs font-semibold">{org.effectiveness}%</div>
                      </div>
                      <Progress value={org.effectiveness} className="h-2" />
                    </div>
                    <Separator />
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Key Focus Areas</div>
                      <div className="flex flex-wrap gap-1">
                        {org.focus.map((f, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ALLIANCES TAB */}
          <TabsContent value="alliances" className="space-y-4">
            {/* Alliances Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-red-100">Military Alliances</div>
                  <div className="text-2xl font-bold mt-1">4</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-blue-100">Strategic Partnerships</div>
                  <div className="text-2xl font-bold mt-1">8</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-emerald-100">Regional Blocs</div>
                  <div className="text-2xl font-bold mt-1">12</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-purple-100">Avg. Strength</div>
                  <div className="text-2xl font-bold mt-1">77%</div>
                </CardContent>
              </Card>
            </div>

            {/* Alliances Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {alliances.map((alliance, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${alliance.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        <CardTitle className="text-base">{alliance.name}</CardTitle>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {alliance.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Member Nations</div>
                      <div className="flex flex-wrap gap-2">
                        {alliance.partners.map((partner, i) => (
                          <span key={i} className="text-sm font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground">Type</div>
                        <div className="font-semibold">{alliance.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Founded</div>
                        <div className="font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {alliance.founded}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs text-muted-foreground">Alliance Strength</div>
                        <div className="text-xs font-semibold">{alliance.strength}%</div>
                      </div>
                      <Progress value={alliance.strength} className="h-2" />
                    </div>

                    <div className="text-sm text-muted-foreground italic">
                      <Link2 className="w-3 h-3 inline mr-1" />
                      {alliance.focus}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ECONOMIC TAB */}
          <TabsContent value="economic" className="space-y-4">
            {/* Global Economic Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">Global GDP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">${economicData.globalGDP.value}T</div>
                    <div className="flex items-center gap-1 text-emerald-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {economicData.globalGDP.growth}%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">Trade Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">${economicData.tradeVolume.value}T</div>
                    <div className="flex items-center gap-1 text-emerald-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      {economicData.tradeVolume.growth}%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">Foreign Investment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">${economicData.foreignInvestment.value}T</div>
                    <div className="flex items-center gap-1 text-red-600 text-sm">
                      <TrendingDownIcon className="w-4 h-4" />
                      {economicData.foreignInvestment.growth}%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">Global Inflation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{economicData.inflation.avg}%</div>
                    <div className="flex items-center gap-1 text-emerald-600 text-sm">
                      <TrendingDownIcon className="w-4 h-4" />
                      Decreasing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* GDP by Region */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe2 className="w-5 h-5" />
                    GDP by Region
                  </CardTitle>
                  <CardDescription>Economic output and growth rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-3">
                      {economicData.regions.map((region, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-slate-400" />
                              <span className="font-semibold text-sm">{region.name}</span>
                            </div>
                            <Badge variant={region.growth > 3 ? 'default' : 'secondary'}>
                              {region.growth > 0 ? '+' : ''}{region.growth}%
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-muted-foreground">GDP: </span>
                              <span className="font-medium">${region.gdp}T</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Share: </span>
                              <span className="font-medium">{region.share}%</span>
                            </div>
                          </div>
                          <Progress value={region.share} className="mt-2 h-1.5" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Economic Trends Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    Economic Trends (5 Years)
                  </CardTitle>
                  <CardDescription>Key economic indicators over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={[
                      { year: '2020', gdp: 84.5, trade: 21.2, fdi: 1.5 },
                      { year: '2021', gdp: 96.5, trade: 23.8, fdi: 1.7 },
                      { year: '2022', gdp: 100.1, trade: 24.5, fdi: 2.1 },
                      { year: '2023', gdp: 104.2, trade: 25.1, fdi: 1.9 },
                      { year: '2024', gdp: 105.4, trade: 25.8, fdi: 1.8 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `$${value}T`} />
                      <Tooltip formatter={(value: any) => [`$${value}T`, '']} />
                      <Legend />
                      <Area type="monotone" dataKey="gdp" name="GDP" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="trade" name="Trade" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="fdi" name="FDI" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Economic Alerts */}
            <Card className="border-l-4 border-l-amber-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="w-5 h-5" />
                  Economic Risk Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-red-600 text-xs">HIGH</Badge>
                      <span className="text-sm font-semibold">Global Debt</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Debt-to-GDP ratio approaching 285% globally</p>
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-amber-600 text-xs">MEDIUM</Badge>
                      <span className="text-sm font-semibold">Supply Chain</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Disruptions affecting 45% of global trade routes</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-blue-600 text-xs">WATCH</Badge>
                      <span className="text-sm font-semibold">Currency Wars</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Competitive devaluations emerging in 6 regions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mining Activity */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-purple-600" />
                  Global Mining Activity
                </CardTitle>
                <CardDescription>Critical resources and geopolitical impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Total Market Value</div>
                    <div className="text-2xl font-bold text-purple-600">${economicData.miningActivity.totalValue}T</div>
                    <div className="flex items-center gap-1 mt-2 text-emerald-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      +{economicData.miningActivity.growth}% YoY
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">High Impact Resources</div>
                    <div className="text-2xl font-bold text-red-600">{economicData.miningActivity.geopoliticalImpact.high.length}</div>
                    <div className="text-xs text-muted-foreground mt-2">Critical for defense & tech</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Medium Impact Resources</div>
                    <div className="text-2xl font-bold text-amber-600">{economicData.miningActivity.geopoliticalImpact.medium.length}</div>
                    <div className="text-xs text-muted-foreground mt-2">Significant strategic value</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Low Impact Resources</div>
                    <div className="text-2xl font-bold text-blue-600">{economicData.miningActivity.geopoliticalImpact.low.length}</div>
                    <div className="text-xs text-muted-foreground mt-2">Commercial importance</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-purple-600" />
                      Top Resources by Value
                    </h4>
                    <div className="space-y-3">
                      {economicData.miningActivity.topResources.map((resource, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-sm">{resource.resource}</span>
                            <Badge variant={idx < 3 ? 'destructive' : idx < 4 ? 'outline' : 'secondary'} className="text-xs">
                              {idx < 3 ? 'HIGH IMPACT' : idx < 4 ? 'MEDIUM' : 'LOW'}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="text-muted-foreground">Market Value: ${resource.value}T</span>
                            <span className={`font-medium ${resource.growth > 15 ? 'text-emerald-600' : resource.growth > 10 ? 'text-amber-600' : 'text-blue-600'}`}>
                              +{resource.growth}%
                            </span>
                          </div>
                          <Progress value={resource.growth} className="h-1.5 mb-2" />
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs text-muted-foreground">Producers:</span>
                            {resource.majorProducers.map((producer, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {producer}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/30 dark:to-slate-900/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="w-4 h-4 text-red-600" />
                        Geopolitical Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-red-600 text-xs">HIGH</Badge>
                          <span className="text-sm font-medium">Critical Resources</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {economicData.miningActivity.geopoliticalImpact.high.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="bg-red-50 dark:bg-red-950/20 border-red-300 text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-600 text-xs">MEDIUM</Badge>
                          <span className="text-sm font-medium">Strategic Resources</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {economicData.miningActivity.geopoliticalImpact.medium.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">LOW</Badge>
                          <span className="text-sm font-medium">Commercial Resources</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {economicData.miningActivity.geopoliticalImpact.low.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* REPOSITORY TAB */}
          <TabsContent value="repository" className="space-y-4">
            {/* Repository Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-100">Total Commits</p>
                      <p className="text-3xl font-bold mt-2">{repositoryData.overview.totalCommits.toLocaleString()}</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        <span>+127 this week</span>
                      </div>
                    </div>
                    <GitCommit className="w-12 h-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-100">Open PRs</p>
                      <p className="text-3xl font-bold mt-2">{repositoryData.overview.openPRs}</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <Activity className="w-4 h-4" />
                        <span>{repositoryData.overview.closedPRs} merged</span>
                      </div>
                    </div>
                    <GitPullRequest className="w-12 h-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-emerald-100">Issues</p>
                      <p className="text-3xl font-bold mt-2">{repositoryData.overview.openIssues}</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{repositoryData.overview.closedIssues} resolved</span>
                      </div>
                    </div>
                    <AlertTriangle className="w-12 h-12 text-emerald-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-amber-100">Stars</p>
                      <p className="text-3xl font-bold mt-2">{repositoryData.overview.stars.toLocaleString()}</p>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <Star className="w-4 h-4" />
                        <span>+42 this month</span>
                      </div>
                    </div>
                    <Star className="w-12 h-12 text-amber-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Recent Commits */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitCommit className="w-5 h-5" />
                    Recent Commits
                  </CardTitle>
                  <CardDescription>Latest changes to the codebase</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-3">
                      {repositoryData.recentCommits.map((commit, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold">
                              {commit.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">{commit.author}</span>
                                <Badge variant="outline" className="text-xs">
                                  <GitBranch className="w-3 h-3 mr-1" />
                                  {commit.branch}
                                </Badge>
                              </div>
                              <p className="text-sm font-medium truncate">{commit.message}</p>
                              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                <code className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">{commit.id}</code>
                                <span>{commit.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Repository Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Repository Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Branches</span>
                      <GitBranch className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{repositoryData.overview.totalBranches}</div>
                    <div className="text-xs text-muted-foreground mt-1">1 protected, {repositoryData.overview.totalBranches - 1} active</div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Contributors</span>
                      <Users className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">{repositoryData.overview.contributors}</div>
                    <div className="text-xs text-muted-foreground mt-1">Active developers</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-3">Languages</div>
                    <div className="space-y-2">
                      {repositoryData.languages.map((lang, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">{lang.name}</span>
                            <span className="text-xs text-muted-foreground">{lang.percentage}%</span>
                          </div>
                          <Progress value={lang.percentage} className="h-1.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pull Requests & Issues */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Pull Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitPullRequest className="w-5 h-5" />
                    Pull Requests
                  </CardTitle>
                  <CardDescription>Active and recent pull requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {repositoryData.pullRequests.map((pr, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">#{pr.id}</span>
                            <Badge variant={
                              pr.status === 'open' ? 'default' :
                              pr.status === 'merged' ? 'secondary' :
                              pr.status === 'approved' ? 'outline' : 'destructive'
                            } className="text-xs capitalize">
                              {pr.status}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{pr.created}</span>
                        </div>
                        <p className="text-sm font-medium mb-2">{pr.title}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>👤 {pr.author}</span>
                          <span>🔍 {pr.reviewers} reviewers</span>
                          <span>💬 {pr.comments} comments</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Issues */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Issues
                  </CardTitle>
                  <CardDescription>Active issues and bug reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {repositoryData.issues.map((issue, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">#{issue.id}</span>
                            <Badge variant={
                              issue.priority === 'critical' ? 'destructive' :
                              issue.priority === 'high' ? 'outline' : 'secondary'
                            } className="text-xs capitalize">
                              {issue.priority}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{issue.created}</span>
                        </div>
                        <p className="text-sm font-medium mb-2">{issue.title}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">👤 {issue.author}</span>
                          <div className="flex gap-1">
                            {issue.labels.map((label, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {label}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Branches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Branches
                </CardTitle>
                <CardDescription>Active repository branches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {repositoryData.branches.map((branch, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border-2 hover:shadow-lg transition-all ${
                      branch.status === 'protected' ? 'border-red-500 bg-red-50 dark:bg-red-950/20' :
                      branch.status === 'active' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20' :
                      'border-amber-500 bg-amber-50 dark:bg-amber-950/20'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <GitBranch className="w-4 h-4" />
                          <span className="font-semibold">{branch.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {branch.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div>📦 {branch.commits.toLocaleString()} commits</div>
                        <div>👤 {branch.author}</div>
                        <div>⏱️ {branch.lastUpdated}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Top Contributors
                </CardTitle>
                <CardDescription>Most active developers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {repositoryData.contributors.map((contributor, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:shadow-lg transition-shadow">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${contributor.color} text-white text-lg font-bold mb-3`}>
                        {contributor.avatar}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-sm mb-2">{contributor.name}</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Commits</span>
                            <span className="font-medium">{contributor.commits.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">PRs</span>
                            <span className="font-medium">{contributor.prs}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Issues</span>
                            <span className="font-medium">{contributor.issues}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ANALYSIS TAB */}
          <TabsContent value="analysis" className="space-y-3">
          {/* Compact Executive Summary */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-purple-200">
            <CardContent className="p-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg border-purple-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-purple-600">Stability</span>
                      <Activity className="w-4 h-4 text-purple-500" />
                    </div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">85%</div>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg border-blue-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-blue-600">Crisis Mgmt</span>
                      <Zap className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">78%</div>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg border-green-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-green-600">Compliance</span>
                      <FileText className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">92%</div>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-900/80 p-2 rounded-lg border-orange-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-orange-600">Trust</span>
                      <Network className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">72%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compact Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <Card className="border-gray-700 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm text-white">
                    <AlertTriangle className="w-4 h-4" />
                    Risk Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={[
                      { region: 'NA', risk: 68, vol: 72, con: 45 },
                      { region: 'EU', risk: 42, vol: 38, con: 25 },
                      { region: 'AS', risk: 78, vol: 85, con: 65 },
                      { region: 'SA', risk: 58, vol: 62, con: 70 },
                      { region: 'ME', risk: 85, vol: 88, con: 95 },
                      { region: 'AF', risk: 72, vol: 75, con: 80 },
                      { region: 'LA', risk: 45, vol: 52, con: 40 },
                      { region: 'OC', risk: 35, vol: 42, con: 20 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                      <XAxis dataKey="region" tick={{fontSize: 10}} stroke="#9ca3af" />
                      <YAxis label={{ value: 'Risk', angle: -90, position: 'insideLeft', fontSize: 10 }} stroke="#9ca3af" />
                      <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} itemStyle={{ color: '#e5e7eb' }} labelStyle={{ color: '#9ca3af' }} />
                      <Legend />
                      <Bar dataKey="risk" name="Risk" fill="#ef4444" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="vol" name="Volatility" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="con" name="Conflict" fill="#00BFFF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm text-cyan-700">
                    <Activity className="w-4 h-4" />
                    Strategic Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <RechartsLineChart data={[
                      { year: '20', us: 92, cn: 82, eu: 78, ru: 70, in: 58 },
                      { year: '21', us: 90, cn: 85, eu: 76, ru: 68, in: 62 },
                      { year: '22', us: 88, cn: 87, eu: 74, ru: 72, in: 65 },
                      { year: '23', us: 86, cn: 88, eu: 73, ru: 70, in: 67 },
                      { year: '24', us: 85, cn: 90, eu: 72, ru: 68, in: 70 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" tick={{fontSize: 10}} />
                      <YAxis label={{ value: 'Power', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="us" stroke="#3b82f6" strokeWidth={2} name="US" />
                      <Line type="monotone" dataKey="cn" stroke="#ef4444" strokeWidth={2} name="China" />
                      <Line type="monotone" dataKey="eu" stroke="#22c55e" strokeWidth={2} name="EU" />
                      <Line type="monotone" dataKey="ru" stroke="#f59e0b" strokeWidth={2} name="Russia" />
                      <Line type="monotone" dataKey="in" stroke="#8b5cf6" strokeWidth={2} name="India" />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Compact Powers & Map Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <Card className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950/30 dark:to-indigo-950/30 border-indigo-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm text-indigo-700">
                    <Target className="w-4 h-4" />
                    Major Powers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {majorPowers.map((country, idx) => {
                        const profile = countryProfiles.find(p => p.name === country.name)
                        return (
                          <div
                            key={idx}
                            onClick={() => profile && setSelectedCountry(profile)}
                            className={`cursor-pointer p-4 rounded-lg bg-gradient-to-r ${country.color} text-white hover:shadow-xl transition-all hover:scale-105 ${selectedCountry?.name === country.name ? 'ring-4 ring-white ring-opacity-50' : ''}`}
                          >
                            <span className="text-3xl mb-2">{country.icon}</span>
                            <div className="space-y-1">
                              <div className="text-sm font-semibold">{country.name}</div>
                              <div className="flex items-center gap-2 text-xs">
                                <span className="opacity-90">{country.region}</span>
                              </div>
                              <Badge className="bg-white/20 text-white border border-white/30 text-xs">
                                Risk: {country.riskScore}
                              </Badge>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Country Profile Modal */}
              {selectedCountry && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCountry(null)}>
                  <div className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <Card className="border-2">
                      <CardHeader className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white ${selectedCountry.flag === '🇷🇺' ? 'from-red-600 to-red-700' : ''}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-4xl">{selectedCountry.flag}</span>
                            <div>
                              <CardTitle className="text-white text-xl">{selectedCountry.name}</CardTitle>
                              <CardDescription className="text-white/80">{selectedCountry.region} • {selectedCountry.paradigmStatus}</CardDescription>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => setSelectedCountry(null)}>
                            <div className="text-white text-2xl">×</div>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6 pt-6">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">GDP</div>
                            <div className="text-2xl font-bold text-blue-600">${selectedCountry.gdp}T</div>
                          </div>
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">Population</div>
                            <div className="text-2xl font-bold text-emerald-600">{(selectedCountry.population / 1000).toFixed(0)}M</div>
                          </div>
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">Military Spending</div>
                            <div className="text-2xl font-bold text-red-600">${selectedCountry.militarySpending}B</div>
                          </div>
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-1">Risk Score</div>
                            <div className="text-2xl font-bold text-amber-600">{selectedCountry.riskScore}</div>
                          </div>
                        </div>

                        <Separator />

                        {/* Strategic Status */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-purple-600" />
                            Strategic Position
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                              <div className="text-xs text-muted-foreground">Status</div>
                              <div className="font-semibold">{selectedCountry.strategicStatus}</div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                              <div className="text-xs text-muted-foreground">Systemic Type</div>
                              <div className="font-semibold">{selectedCountry.systemicType}</div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                              <div className="text-xs text-muted-foreground">Volatility</div>
                              <div className="font-semibold text-xs">{selectedCountry.volatility}</div>
                            </div>
                            <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                              <div className="text-xs text-muted-foreground">Nuclear</div>
                              <Badge variant={selectedCountry.nuclearCapability ? 'destructive' : 'secondary'} className="text-xs">
                                {selectedCountry.nuclearCapability ? 'Yes' : 'No'}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Alliances */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-600" />
                            Alliances & Partnerships
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedCountry.alliances.map((alliance, idx) => (
                              <Badge key={idx} variant="outline" className="text-sm px-3 py-1">
                                {alliance}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Major Industries */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-emerald-600" />
                            Major Industries
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {selectedCountry.majorIndustries.map((industry, idx) => (
                              <div key={idx} className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200">
                                <span className="text-sm font-medium">{industry}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Strengths */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            Strategic Strengths
                          </h4>
                          <div className="space-y-2">
                            {selectedCountry.strengths.map((strength, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                                <span className="text-sm">{strength}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Key Challenges */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            Key Challenges
                          </h4>
                          <div className="space-y-2">
                            {selectedCountry.keyChallenges.map((challenge, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                                <span className="text-sm">{challenge}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        {/* Recent Developments */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-purple-600" />
                            Recent Developments
                          </h4>
                          <div className="space-y-2">
                            {selectedCountry.recentDevelopments.map((dev, idx) => (
                              <div key={idx} className="flex items-start gap-2 p-2 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                                <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5" />
                                <span className="text-sm">{dev}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div className="flex justify-between items-center">
                          <Button variant="outline" onClick={() => setSelectedCountry(null)}>
                            Close Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              <Card className="bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/30 dark:to-pink-950/30 border-violet-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm text-violet-700">
                    <BarChart3 className="w-4 h-4" />
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg text-white">
                    <h5 className="font-bold mb-1 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Governance Health
                    </h5>
                    <p className="text-xs text-white/90">85% stability • 92% compliance • 78% crisis mgmt</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg text-white">
                    <h5 className="font-bold mb-1 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Emerging Challenges
                    </h5>
                    <p className="text-xs text-white/90">US-China competition • BRICS+ autonomy • Regional shifts</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-lg text-white">
                    <h5 className="font-bold mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Positive Trends
                    </h5>
                    <p className="text-xs text-white/90">12 emerging blocs • 156 relations • Climate progress</p>
                  </div>
                  <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-3 rounded-lg text-white">
                    <h5 className="font-bold mb-1 flex items-center gap-2">
                      <Network className="w-4 h-4" />
                      Network Analysis
                    </h5>
                    <p className="text-xs text-white/90">85% alliance density • 72% integration index</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-card/50 backdrop-blur mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Core Index: 75.63</span>
              <Separator orientation="vertical" className="h-4" />
              <span>System Status: <span className="text-green-600 font-semibold">Operational</span></span>
              <Separator orientation="vertical" className="h-4" />
              <span>Stability: 85%</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
