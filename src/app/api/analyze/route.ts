import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { countryId, horizonYears = 20 } = body

    // Fetch economic data for the country
    const economicData = await db.economicData.findMany({
      where: { countryId },
      orderBy: { period: 'desc' },
      take: 10
    })

    if (economicData.length < 3) {
      return NextResponse.json({
        error: 'Insufficient data for analysis'
      }, { status: 400 })
    }

    // Calculate trends
    const latestData = economicData[0]
    const prevData = economicData[1]

    const gdpGrowth = latestData.gdpGrowth || 0
    const inflation = latestData.inflation || 0
    const currencyVolatility = latestData.currencyVolatility || 0

    // Detect paradigm shift based on multiple factors
    let paradigmStatus = 'STABLE'
    let confidence = 50
    const signals = []

    // Check for currency volatility
    if (currencyVolatility > 3) {
      signals.push('Currency volatility exceeds 3-sigma')
      paradigmStatus = 'SHIFTING'
      confidence += 20
    }

    // Check for extreme inflation
    if (inflation > 10 || inflation < -5) {
      signals.push('Inflation outside normal range')
      paradigmStatus = 'EMERGING'
      confidence += 15
    }

    // Check for GDP anomalies
    if (Math.abs(gdpGrowth) > 5) {
      signals.push('GDP growth rate anomaly detected')
      confidence += 10
    }

    // Triangulation score
    if (latestData.triangulationScore && latestData.triangulationScore > 0.7) {
      signals.push('High triangulation score indicating pattern convergence')
      confidence += 15
      if (paradigmStatus === 'STABLE') paradigmStatus = 'EMERGING'
    }

    // Generate 20-year forecast
    const forecast = {
      paradigmStatus,
      confidence: Math.min(confidence, 95),
      signals,
      projections: []
    }

    for (let year = 2025; year <= 2025 + horizonYears; year += 5) {
      const yearFactor = (year - 2025) / horizonYears
      const projectedValue = latestData.gdp ? latestData.gdp * (1 + (gdpGrowth / 100) * 5 * yearFactor) : 0

      forecast.projections.push({
        year,
        gdp: Math.round(projectedValue * 100) / 100,
        confidence: Math.max(confidence - yearFactor * 30, 50),
        riskFactors: calculateRiskFactors(paradigmStatus, yearFactor)
      })
    }

    return NextResponse.json(forecast)
  } catch (error) {
    console.error('Error in analysis:', error)
    return NextResponse.json({
      error: 'Analysis failed'
    }, { status: 500 })
  }
}

function calculateRiskFactors(status: string, yearFactor: number): string[] {
  const factors = []
  if (status === 'SHIFTING' || status === 'COLLAPSING') {
    factors.push('Currency devaluation risk')
    factors.push('Trade disruption potential')
  }
  if (yearFactor > 0.5) {
    factors.push('Long-term structural changes')
    factors.push('Geopolitical realignment')
  }
  return factors
}
