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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const majorPowers: Country[] = [
    { name: 'United States', region: 'NA', riskScore: 68, paradigmStatus: 'SHIFTING', systemicType: 'Monetary Sovereignty', volatility: 'Trending Up 3.2σ', strategicStatus: 'Deteriorating', color: 'from-blue-500 to-blue-600', icon: '🇺🇸' },
    { name: 'Germany', region: 'EU', riskScore: 42, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.8σ', strategicStatus: 'Improving', color: 'from-yellow-500 to-yellow-600', icon: '🇩🇪' },
    { name: 'China', region: 'AS', riskScore: 72, paradigmStatus: 'SHIFTING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 3.8σ', strategicStatus: 'Coordinated', color: 'from-red-500 to-red-600', icon: '🇨🇳' },
    { name: 'India', region: 'SA', riskScore: 55, paradigmStatus: 'EMERGING', systemicType: 'Strategic Autonomy', volatility: 'Trending Up 2.5σ', strategicStatus: 'Growing', color: 'from-orange-500 to-orange-600', icon: '🇮🇳' },
    { name: 'Australia', region: 'OC', riskScore: 48, paradigmStatus: 'STABLE', systemicType: 'Monetary Sovereignty', volatility: 'Trending Down 1.8σ', strategicStatus: 'Improving', color: 'from-teal-500 to-teal-600', icon: '🇦🇺' }
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
                  <div className="space-y-2">
                    {majorPowers.map((country, idx) => (
                      <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r ${country.color} text-white`}>
                        <span className="text-2xl">{country.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold truncate">{country.name}</div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="opacity-80">{country.region}</span>
                            <Badge className="bg-white/20 text-white border border-white/30 text-xs">
                              {country.riskScore >= 70 ? '⚠️ HIGH' : '⚡ MOD'}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{country.riskScore}</div>
                          <div className="text-xs opacity-80">Risk</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

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
