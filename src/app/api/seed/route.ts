import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
    // Create countries
    const countries = [
      { code: 'USA', name: 'United States', region: 'North America', currencyCode: 'USD', currencyName: 'US Dollar', gdp: 26.9, population: 331000000, riskScore: 68, paradigmStatus: 'SHIFTING' },
      { code: 'CHN', name: 'China', region: 'Asia', currencyCode: 'CNY', currencyName: 'Chinese Yuan', gdp: 18.5, population: 1400000000, riskScore: 72, paradigmStatus: 'SHIFTING' },
      { code: 'RUS', name: 'Russia', region: 'Europe', currencyCode: 'RUB', currencyName: 'Russian Ruble', gdp: 2.2, population: 144000000, riskScore: 85, paradigmStatus: 'COLLAPSING' },
      { code: 'IND', name: 'India', region: 'Asia', currencyCode: 'INR', currencyName: 'Indian Rupee', gdp: 3.4, population: 1380000000, riskScore: 55, paradigmStatus: 'EMERGING' },
      { code: 'BRA', name: 'Brazil', region: 'South America', currencyCode: 'BRL', currencyName: 'Brazilian Real', gdp: 2.1, population: 213000000, riskScore: 48, paradigmStatus: 'STABLE' },
      { code: 'DEU', name: 'Germany', region: 'Europe', currencyCode: 'EUR', currencyName: 'Euro', gdp: 4.1, population: 83000000, riskScore: 42, paradigmStatus: 'STABLE' },
      { code: 'JPN', name: 'Japan', region: 'Asia', currencyCode: 'JPY', currencyName: 'Japanese Yen', gdp: 4.9, population: 126000000, riskScore: 38, paradigmStatus: 'STABLE' },
      { code: 'SAU', name: 'Saudi Arabia', region: 'Middle East', currencyCode: 'SAR', currencyName: 'Saudi Riyal', gdp: 1.1, population: 35000000, riskScore: 62, paradigmStatus: 'EMERGING' }
    ]

    for (const country of countries) {
      await db.country.upsert({
        where: { code: country.code },
        update: {},
        create: country
      })
    }

    // Create economic data for each country
    for (const country of countries) {
      const countryRecord = await db.country.findUnique({
        where: { code: country.code }
      })

      if (!countryRecord) continue

      // Generate data for the last 5 years (10 6-month intervals)
      for (let i = 0; i < 10; i++) {
        const year = 2020 + Math.floor(i / 2)
        const half = (i % 2) + 1
        const period = `${year}-${half === 1 ? '06' : '12'}`

        // Generate realistic economic data
        const gdpGrowth = (Math.random() * 8 - 2).toFixed(2)
        const inflation = (Math.random() * 10 - 2).toFixed(2)
        const unemployment = (Math.random() * 10 + 3).toFixed(2)
        const currencyVolatility = (Math.random() * 5).toFixed(2)
        const triangulationScore = Math.random().toFixed(2)
        const resonanceLevel = Math.random().toFixed(2)

        await db.economicData.create({
          data: {
            countryId: countryRecord.id,
            period,
            year,
            half,
            gdp: country.gdp * (1 + parseFloat(gdpGrowth) / 100),
            gdpGrowth: parseFloat(gdpGrowth),
            inflation: parseFloat(inflation),
            unemployment: parseFloat(unemployment),
            currencyVolatility: parseFloat(currencyVolatility),
            triangulationScore: parseFloat(triangulationScore),
            resonanceLevel: parseFloat(resonanceLevel)
          }
        })
      }
    }

    // Create alerts
    const alerts = [
      {
        countryCode: 'USA',
        type: 'CURRENCY_THREAT',
        severity: 'CRITICAL',
        title: 'USD/RMB Exchange Rate Divergence',
        description: 'Currency volatility exceeds 3-sigma threshold indicating potential paradigm shift in US-China monetary relations',
        memeType: 'WAVE',
        phaseState: 'PEAK'
      },
      {
        countryCode: 'BRA',
        type: 'STRATEGIC_LEVERAGE',
        severity: 'HIGH',
        title: 'BRICS Currency Reserve Accumulation',
        description: 'Accelerated accumulation of non-USD reserves detected. Pattern matches historical pre-devaluation phases',
        memeType: 'PENETRATION',
        phaseState: 'EMERGING'
      },
      {
        countryCode: 'RUS',
        type: 'PARADIGM_SHIFT',
        severity: 'WARNING',
        title: 'De-dollarization Pattern Emerging',
        description: 'Cross-border trade settlement patterns showing accelerated shift from USD-denominated transactions',
        memeType: 'RESONANCE',
        phaseState: 'GROWTH'
      },
      {
        countryCode: 'CHN',
        type: 'CURRENCY_THREAT',
        severity: 'HIGH',
        title: 'Digital Currency Expansion',
        description: 'Digital Yuan adoption patterns indicate rapid shift in monetary transaction paradigms',
        memeType: 'PENETRATION',
        phaseState: 'GROWTH'
      },
      {
        countryCode: 'IND',
        type: 'STRATEGIC_LEVERAGE',
        severity: 'WARNING',
        title: 'Rupee Settlement Agreements',
        description: 'Increasing number of bilateral trade agreements settling in local currencies',
        memeType: 'WAVE',
        phaseState: 'EMERGING'
      }
    ]

    for (const alertData of alerts) {
      const country = await db.country.findUnique({
        where: { code: alertData.countryCode }
      })

      if (!country) continue

      await db.alert.create({
        data: {
          countryId: country.id,
          type: alertData.type,
          severity: alertData.severity,
          title: alertData.title,
          description: alertData.description,
          memeType: alertData.memeType,
          phaseState: alertData.phaseState,
          currentValue: Math.random() * 100,
          previousValue: Math.random() * 100,
          thresholdValue: 50,
          deviation: Math.random() * 10
        }
      })
    }

    // Create forecasts
    for (const country of countries) {
      const countryRecord = await db.country.findUnique({
        where: { code: country.code }
      })

      if (!countryRecord) continue

      for (let year = 2025; year <= 2045; year += 5) {
        const paradigms = ['Current', 'Emerging', 'New', 'Transformed']
        const paradigmType = paradigms[Math.floor(Math.random() * paradigms.length)]
        const confidence = 50 + Math.random() * 45

        await db.forecast.create({
          data: {
            countryId: countryRecord.id,
            forecastYear: year,
            forecastPeriod: `${year}-01`,
            predictedGdp: country.gdp * (1 + (Math.random() * 0.5 - 0.1) * (year - 2025) / 20),
            predictedInflation: Math.random() * 8,
            paradigmType,
            confidence,
            year5: country.gdp * (1 + Math.random() * 0.2),
            year10: country.gdp * (1 + Math.random() * 0.4),
            year15: country.gdp * (1 + Math.random() * 0.6),
            year20: country.gdp * (1 + Math.random() * 0.8)
          }
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully'
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json({
      error: 'Failed to seed database',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
