/**
 * Paradigm Shift Detection System
 * Based on Nalumina Framework: Triangulation, Resonance, and Civilizational Gradients
 */

export interface EconomicDataPoint {
  period: string
  year: number
  half: number
  gdp?: number
  gdpGrowth?: number
  inflation?: number
  unemployment?: number
  exchangeRate?: number
  currencyVolatility?: number
  triangulationScore?: number
  resonanceLevel?: number
  memeDensity?: number
}

export interface ParadigmSignal {
  type: string
  severity: 'CRITICAL' | 'HIGH' | 'WARNING' | 'INFO'
  description: string
  confidence: number
  memeType?: string
  phaseState?: string
}

export interface DetectionResult {
  paradigmStatus: 'STABLE' | 'EMERGING' | 'SHIFTING' | 'COLLAPSING'
  confidence: number
  signals: ParadigmSignal[]
  triangulationAnalysis: {
    score: number
    memeTypes: string[]
    patterns: string[]
  }
  resonanceAnalysis: {
    level: number
    phase: string
    civilizationalAlignment: number
  }
  projections: {
    year: number
    gdp?: number
    confidence: number
    riskFactors: string[]
  }[]
}

/**
 * Meme Types from Nalumina Framework
 * These are universal forms emerging from limiting conditions
 */
const MEME_TYPES = {
  PENETRATION: 'PENETRATION', //突破 - forces breaking through barriers
  WAVE: 'WAVE', //波浪 - patterns spreading through systems
  RESONANCE: 'RESONANCE', //共鸣 - phase alignment creating amplification
  FLOW: 'FLOW', //流动 - natural movement along gradient paths
  BOUNDARY: 'BOUNDARY', //边界 - limiting conditions becoming visible
  TRANSFORMATION: 'TRANSFORMATION', //转化 - being-space transitions
  SPIRAL: 'SPIRAL', //螺旋 - recursive pattern emergence
  TRIANGULATION: 'TRIANGULATION' //三角化 - three-way relationship patterns
}

/**
 * Phase States based on seasonal paradigm model
 */
const PHASE_STATES = {
  EMERGENCE: 'EMERGENCE', // New patterns emerging
  GROWTH: 'GROWTH', // Patterns amplifying
  PEAK: 'PEAK', // Maximum intensity
  DECLINE: 'DECLINE', // Patterns waning
  COLLAPSING: 'COLLAPSING', // Old paradigm breaking down
  TRANSITION: 'TRANSITION' // Between paradigms
}

/**
 * Main Detection Function
 * Analyzes economic data to detect paradigm shifts
 */
export function detectParadigmShift(
  data: EconomicDataPoint[],
  countryId: string,
  horizonYears: number = 20
): DetectionResult {
  if (data.length < 3) {
    throw new Error('Insufficient data for paradigm shift detection')
  }

  const signals: ParadigmSignal[] = []
  let paradigmStatus: 'STABLE' | 'EMERGING' | 'SHIFTING' | 'COLLAPSING' = 'STABLE'
  let totalConfidence = 0

  // 1. Currency Volatility Analysis
  const currencyAnalysis = analyzeCurrencyVolatility(data)
  signals.push(...currencyAnalysis.signals)
  totalConfidence += currencyAnalysis.confidence * 0.25

  // 2. Triangulation Analysis
  const triangulationAnalysis = performTriangulation(data)
  totalConfidence += triangulationAnalysis.score * 0.3

  // 3. Resonance Analysis
  const resonanceAnalysis = analyzeResonance(data)
  signals.push(...resonanceAnalysis.signals)
  totalConfidence += resonanceAnalysis.level * 0.25

  // 4. Economic Structure Analysis
  const economicAnalysis = analyzeEconomicStructure(data)
  signals.push(...economicAnalysis.signals)
  totalConfidence += economicAnalysis.confidence * 0.2

  // Determine paradigm status
  paradigmStatus = determineParadigmStatus(signals, triangulationAnalysis, resonanceAnalysis)

  // Generate projections
  const projections = generateProjections(
    data,
    paradigmStatus,
    totalConfidence,
    horizonYears
  )

  return {
    paradigmStatus,
    confidence: Math.min(totalConfidence, 95),
    signals: signals.sort((a, b) => b.confidence - a.confidence),
    triangulationAnalysis,
    resonanceAnalysis,
    projections
  }
}

/**
 * Analyze Currency Volatility for Paradigm Signals
 */
function analyzeCurrencyVolatility(data: EconomicDataPoint[]): {
  signals: ParadigmSignal[]
  confidence: number
} {
  const signals: ParadigmSignal[] = []
  const recentData = data.slice(0, 5)

  let totalVolatility = 0
  let volatilityCount = 0

  for (const point of recentData) {
    if (point.currencyVolatility !== undefined) {
      totalVolatility += point.currencyVolatility
      volatilityCount++
    }
  }

  const avgVolatility = volatilityCount > 0 ? totalVolatility / volatilityCount : 0
  let confidence = 0

  // Check for extreme volatility
  if (avgVolatility > 4) {
    signals.push({
      type: 'CURRENCY_THREAT',
      severity: 'CRITICAL',
      description: 'Currency volatility exceeds 4-sigma threshold indicating systemic instability',
      confidence: 85,
      memeType: MEME_TYPES.PENETRATION,
      phaseState: PHASE_STATES.COLLAPSING
    })
    confidence = 85
  } else if (avgVolatility > 3) {
    signals.push({
      type: 'CURRENCY_THREAT',
      severity: 'HIGH',
      description: 'Currency volatility exceeds 3-sigma threshold indicating potential paradigm shift',
      confidence: 75,
      memeType: MEME_TYPES.WAVE,
      phaseState: PHASE_STATES.PEAK
    })
    confidence = 75
  } else if (avgVolatility > 2) {
    signals.push({
      type: 'CURRENCY_THREAT',
      severity: 'WARNING',
      description: 'Elevated currency volatility detected',
      confidence: 60,
      memeType: MEME_TYPES.WAVE,
      phaseState: PHASE_STATES.GROWTH
    })
    confidence = 60
  }

  return { signals, confidence }
}

/**
 * Perform Triangulation Analysis
 * Examines three-way patterns in economic indicators
 */
function performTriangulation(data: EconomicDataPoint[]): {
  score: number
  memeTypes: string[]
  patterns: string[]
} {
  const memeTypes: string[] = []
  const patterns: string[] = []
  let score = 0

  // Triangulate: GDP Growth + Inflation + Exchange Rate
  const recent = data.slice(0, 3)

  if (recent.length >= 3) {
    const gdpTrend = calculateTrend(recent.map(d => d.gdpGrowth || 0))
    const inflationTrend = calculateTrend(recent.map(d => d.inflation || 0))
    const exchangeTrend = recent[0].exchangeRate && recent[2].exchangeRate
      ? recent[0].exchangeRate - recent[2].exchangeRate
      : 0

    // Detect triangulation patterns
    if (Math.abs(gdpTrend) > 5 && Math.abs(inflationTrend) > 5) {
      patterns.push('GDP-Inflation divergence indicating structural imbalance')
      score += 20
      memeTypes.push(MEME_TYPES.TRIANGULATION)
    }

    if (Math.abs(exchangeTrend) > 10 && Math.abs(gdpTrend) > 3) {
      patterns.push('Exchange-GDP decoupling detected')
      score += 15
      memeTypes.push(MEME_TYPES.PENETRATION)
    }

    // Check for triangulation scores in data
    const triangulationScores = recent
      .filter(d => d.triangulationScore !== undefined)
      .map(d => d.triangulationScore!)

    if (triangulationScores.length > 0) {
      const avgTriangulation = triangulationScores.reduce((a, b) => a + b, 0) / triangulationScores.length
      score += avgTriangulation * 40

      if (avgTriangulation > 0.7) {
        patterns.push('High triangulation convergence detected')
        memeTypes.push(MEME_TYPES.RESONANCE)
      }
    }
  }

  return {
    score: Math.min(score, 100),
    memeTypes: [...new Set(memeTypes)],
    patterns
  }
}

/**
 * Analyze Resonance (Phase Alignment)
 * Checks for synchronized patterns across indicators
 */
function analyzeResonance(data: EconomicDataPoint[]): {
  level: number
  phase: string
  signals: ParadigmSignal[]
} {
  const signals: ParadigmSignal[] = []
  const recentData = data.slice(0, 4)

  let resonanceLevel = 0
  let phase = PHASE_STATES.EMERGENCE

  // Check resonance levels in data
  const resonanceScores = recentData
    .filter(d => d.resonanceLevel !== undefined)
    .map(d => d.resonanceLevel!)

  if (resonanceScores.length > 0) {
    resonanceLevel = resonanceScores.reduce((a, b) => a + b, 0) / resonanceScores.length
  }

  // Detect phase alignment
  const gdpAlignment = checkAlignment(recentData.map(d => d.gdpGrowth || 0))
  const inflationAlignment = checkAlignment(recentData.map(d => d.inflation || 0))

  if (gdpAlignment > 0.8 && inflationAlignment > 0.8) {
    resonanceLevel += 20
    signals.push({
      type: 'PARADIGM_SHIFT',
      severity: 'HIGH',
      description: 'Multiple economic indicators showing synchronous shifts',
      confidence: 70,
      memeType: MEME_TYPES.RESONANCE,
      phaseState: PHASE_STATES.PEAK
    })
  }

  // Determine phase
  if (resonanceLevel > 0.8) phase = PHASE_STATES.PEAK
  else if (resonanceLevel > 0.6) phase = PHASE_STATES.GROWTH
  else if (resonanceLevel > 0.4) phase = PHASE_STATES.EMERGENCE
  else if (resonanceLevel > 0.2) phase = PHASE_STATES.DECLINE
  else phase = PHASE_STATES.COLLAPSING

  return {
    level: Math.min(resonanceLevel * 100, 100),
    phase,
    signals
  }
}

/**
 * Analyze Economic Structure for Paradigm Changes
 */
function analyzeEconomicStructure(data: EconomicDataPoint[]): {
  signals: ParadigmSignal[]
  confidence: number
} {
  const signals: ParadigmSignal[] = []
  let confidence = 0

  const recent = data.slice(0, 2)

  if (recent.length >= 2) {
    const current = recent[0]
    const previous = recent[1]

    // Check GDP growth anomalies
    if (current.gdpGrowth && Math.abs(current.gdpGrowth) > 6) {
      signals.push({
        type: 'STRATEGIC_LEVERAGE',
        severity: 'WARNING',
        description: `GDP growth rate of ${current.gdpGrowth.toFixed(1)}% indicates structural change`,
        confidence: 65,
        memeType: MEME_TYPES.TRANSFORMATION,
        phaseState: PHASE_STATES.EMERGENCE
      })
      confidence += 15
    }

    // Check inflation extremes
    if (current.inflation !== undefined) {
      if (current.inflation > 15) {
        signals.push({
          type: 'CURRENCY_THREAT',
          severity: 'CRITICAL',
          description: `Hyperinflation risk with inflation at ${current.inflation.toFixed(1)}%`,
          confidence: 90,
          memeType: MEME_TYPES.COLLAPSING,
          phaseState: PHASE_STATES.COLLAPSING
        })
        confidence += 30
      } else if (current.inflation > 10) {
        signals.push({
          type: 'CURRENCY_THREAT',
          severity: 'HIGH',
          description: `High inflation at ${current.inflation.toFixed(1)}% signaling paradigm stress`,
          confidence: 75,
          memeType: MEME_TYPES.PENETRATION,
          phaseState: PHASE_STATES.GROWTH
        })
        confidence += 20
      } else if (current.inflation < -5) {
        signals.push({
          type: 'PARADIGM_SHIFT',
          severity: 'WARNING',
          description: `Deflationary pressure with inflation at ${current.inflation.toFixed(1)}%`,
          confidence: 70,
          memeType: MEME_TYPES.DECLINE,
          phaseState: PHASE_STATES.DECLINE
        })
        confidence += 20
      }
    }

    // Check unemployment patterns
    if (current.unemployment !== undefined && previous.unemployment !== undefined) {
      const unemploymentChange = current.unemployment - previous.unemployment
      if (unemploymentChange > 2) {
        signals.push({
          type: 'STRATEGIC_LEVERAGE',
          severity: 'WARNING',
          description: `Rapid unemployment increase of ${unemploymentChange.toFixed(1)} percentage points`,
          confidence: 60,
          memeType: MEME_TYPES.BOUNDARY,
          phaseState: PHASE_STATES.EMERGENCE
        })
        confidence += 15
      }
    }
  }

  return { signals, confidence }
}

/**
 * Determine Overall Paradigm Status
 */
function determineParadigmStatus(
  signals: ParadigmSignal[],
  triangulation: ReturnType<typeof performTriangulation>,
  resonance: ReturnType<typeof analyzeResonance>
): 'STABLE' | 'EMERGING' | 'SHIFTING' | 'COLLAPSING' {
  const criticalCount = signals.filter(s => s.severity === 'CRITICAL').length
  const highCount = signals.filter(s => s.severity === 'HIGH').length

  if (criticalCount >= 2 || resonance.level > 85) {
    return 'COLLAPSING'
  }

  if (criticalCount >= 1 || highCount >= 3 || triangulation.score > 70) {
    return 'SHIFTING'
  }

  if (highCount >= 1 || resonance.level > 50 || triangulation.score > 40) {
    return 'EMERGING'
  }

  return 'STABLE'
}

/**
 * Generate 20-Year Projections
 */
function generateProjections(
  data: EconomicDataPoint[],
  paradigmStatus: string,
  baseConfidence: number,
  horizonYears: number
) {
  const projections = []
  const latestData = data[0]

  for (let year = 2025; year <= 2025 + horizonYears; year += 5) {
    const yearFactor = (year - 2025) / horizonYears
    const confidence = Math.max(baseConfidence - yearFactor * 35, 40)

    let gdpProjection = latestData.gdp
    if (gdpProjection && latestData.gdpGrowth) {
      // Adjust growth based on paradigm status
      const growthMultiplier =
        paradigmStatus === 'COLLAPSING' ? -0.5 :
        paradigmStatus === 'SHIFTING' ? 0.5 :
        paradigmStatus === 'EMERGING' ? 1.0 : 0.8

      gdpProjection = latestData.gdp * (1 + (latestData.gdpGrowth * growthMultiplier / 100) * 5 * yearFactor)
    }

    const riskFactors: string[] = []
    if (paradigmStatus === 'SHIFTING' || paradigmStatus === 'COLLAPSING') {
      riskFactors.push('Currency devaluation risk')
      riskFactors.push('Trade disruption potential')
    }
    if (yearFactor > 0.5) {
      riskFactors.push('Long-term structural changes')
      riskFactors.push('Geopolitical realignment')
    }

    projections.push({
      year,
      gdp: gdpProjection,
      confidence,
      riskFactors
    })
  }

  return projections
}

/**
 * Helper Functions
 */

function calculateTrend(values: number[]): number {
  if (values.length < 2) return 0
  return values[0] - values[values.length - 1]
}

function checkAlignment(values: number[]): number {
  if (values.length < 3) return 0

  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length
  const stdDev = Math.sqrt(variance)

  // High alignment = low coefficient of variation
  const cv = stdDev / Math.abs(mean || 1)
  return Math.max(0, 1 - cv)
}

/**
 * Generate Alert from Detection Result
 */
export function generateAlert(
  countryId: string,
  countryName: string,
  result: DetectionResult
): {
  type: string
  severity: string
  title: string
  description: string
  memeType?: string
  phaseState?: string
  currentValue?: number
  previousValue?: number
  thresholdValue?: number
  deviation?: number
} {
  const primarySignal = result.signals[0]

  return {
    type: primarySignal.type,
    severity: primarySignal.severity,
    title: `${countryName}: ${primarySignal.type.replace(/_/g, ' ')}`,
    description: primarySignal.description,
    memeType: primarySignal.memeType,
    phaseState: primarySignal.phaseState,
    currentValue: result.resonanceAnalysis.level,
    thresholdValue: result.paradigmStatus === 'STABLE' ? 40 : 60,
    deviation: result.confidence - 50
  }
}
