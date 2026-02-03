import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const alerts = await db.alert.findMany({
      where: {
        isResolved: false
      },
      include: {
        country: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    })

    // Transform alerts to match frontend interface
    const transformedAlerts = alerts.map(alert => ({
      id: alert.id,
      type: alert.type,
      severity: alert.severity,
      title: alert.title,
      description: alert.description,
      country: alert.country.name,
      metrics: [
        ...(alert.currentValue !== null ? [{ label: 'Current Value', value: alert.currentValue.toString() }] : []),
        ...(alert.thresholdValue !== null ? [{ label: 'Threshold', value: alert.thresholdValue.toString() }] : []),
        ...(alert.deviation !== null ? [{ label: 'Deviation', value: `${alert.deviation.toFixed(1)}%` }] : [])
      ],
      time: getTimeAgo(alert.createdAt)
    }))

    return NextResponse.json(transformedAlerts)
  } catch (error) {
    console.error('Error fetching alerts:', error)
    // Return empty array on error, frontend will use demo data
    return NextResponse.json([])
  }
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
  const diffInDays = Math.floor(diffInHours / 24)

  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  return date.toLocaleDateString()
}
