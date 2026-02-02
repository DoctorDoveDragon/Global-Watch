'use client'

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
          International Intelligence System
        </h1>
        <p style={{ fontSize: '16px', marginBottom: '8px' }}>
          Global Power Dynamics and International Political Analysis
        </p>

        <div className="flex items-center justify-between mb-6">
          <span>System Operational</span>
          <button style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Refresh
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {/* Global Governance Actors */}
          <div style={{ padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Global Governance Actors</h3>
            <div style={{ fontSize: '14px' }}>8 major international organizations</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e2938' }}>8 Active</div>
          </div>

          {/* Active Security Alliances */}
          <div style={{ padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Active Security Alliances</h3>
            <div style={{ fontSize: '14px' }}>8 strategic alliances</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e2938' }}>8 Active</div>
          </div>

          {/* Active Treaties */}
          <div style={{ padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Active Treaties</h3>
            <div style={{ fontSize: '14px' }}>11 major treaties</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e2938' }}>11 Active</div>
          </div>

          {/* Diplomatic Relations */}
          <div style={{ padding: '24px', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: 'fontSize: '20px', marginBottom: '8px' }}>Diplomatic Relations</h3>
            <div style={{ fontSize: '14px' }}>156 relations tracked</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e2938' }}>156 Relations</div>
          </div>
        </div>

        {/* Organizations List */}
        <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>International Organizations</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '16px' }}>
            {[
              {
                name: 'United Nations',
                type: 'Global Governance',
                members: 193,
                influenceScore: 85,
                keyActivities: ['Peacekeeping', 'Humanitarian', 'Climate Action', 'Human Rights', 'International Law Enforcement']
              },
              {
                name: 'World Bank',
                type: 'Financial Institution',
                members: 189,
                influenceScore: 82,
                keyActivities: ['Development Lending', 'Policy Advice', 'Technical Assistance', 'Poverty Reduction', 'Climate Finance', 'Economic Research']
              },
              {
                name: 'International Monetary Fund',
                type: 'Financial Institution',
                members: 190,
                influenceScore: 88,
                keyActivities: ['Monetary Surveillance', 'Financial Stability Programs', 'Crisis Lending', 'Special Drawing Rights', 'Policy Coordination']
              },
              {
                name: 'World Trade Organization',
                type: 'Trade Governance',
                members: 166,
                influenceScore:  75,
                keyActivities: ['Trade Rule Enforcement', 'Dispute Settlement', 'Trade Policy Review', 'Technical Assistance', 'Development Programs', 'Trade Facilitation']
              },
              {
                name: 'Nuclear Non-Proliferation Treaty',
                type: 'Arms Control',
                members: 191,
                influenceScore: 72,
                keyActivities: ['Non-Proliferation Compliance', 'Safeguard Agreements', 'Verification Protocols', 'Export Controls', 'Peaceful Use Programs']
              },
              {
                name: 'Paris Agreement',
                type: 'Climate Framework',
                members: 195,
                influenceScore: 78,
                keyActivities: ['Emission Reduction Targets', 'Climate Finance', 'Adaptation Measures', 'Technology Transfer', 'Transparency Mechanisms', 'Global Stocktake']
              }
            ].map((org, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>{org.name}</h4>
                    <span style={{ fontSize: '12px', background: '#f3f4f6', color: '#1e293b' }}>
                      {org.type}
                    </span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>
                    {org.members} members
                  </span>
                </div>
                </div>

                <div style={{
                  width: '100px',
                  marginBottom: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    height: '8px',
                    backgroundColor: org.influenceScore > 80 ? '#dc2626' :
                               org.influenceScore > 60 ? '#2563eb' :
                               org.influenceScore > 40 ? '#16a34a' : '#059669',
                    borderRadius: '4px'
                  }} style={{ width: `${org.influenceScore}%` }} />
                </div>
                <p style={{ fontSize: '11px', marginTop: '4px', color: '#64748b' }}>
                  {org.influenceScore > 80 ? 'Very High Influence' : org.influenceScore > 60 ? 'High Influence' : 'Moderate Influence'}
                </p>
              </div>

                <div className="mt-3">
                  <h5 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                    Key Strategic Activities
                  </h5>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '8px'
                  }}>
                    {org.keyActivities.map((activity, aIdx) => (
                      <div
                        key={aIdx}
                        style={{
                          background: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alliances */}
        <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Strategic Alliances</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
            {[
              { name: 'NATO', type: 'Military Alliance', members: 32, strength: 92, formationYear: 1949, scope: 'North Atlantic Collective Defense', keyObjectives: ['Collective Defense', 'Deterrence', 'Crisis Management'] },
              { name: 'BRICS+', type: 'Economic-Political Bloc', members: 11, strength: 78, formationYear: 2009, scope: 'Multipolar Economic Coordination', keyObjectives: ['Reducing Dollar Dependence', 'Alternative Payment Systems', 'South-South Cooperation', 'Infrastructure Development'] },
              { name: 'SCO', type: 'Regional Security Organization', members: 9, strength: 65, formationYear: 2001, scope: 'Eurasian Security Cooperation', keyObjectives: ['Counter-Terrorism', 'Energy Security', 'Trade Facilitation', 'Central Asian Stability'] },
              { name: 'G20', type: 'Economic Coordination', members: 20, strength: 88, formationYear: 1999, scope: 'Global Economic Governance', keyObjectives: ['Financial Stability', 'Trade Coordination', 'Development Financing', 'Monetary Policy Coordination'] },
              { name: 'ASEAN', type: 'Regional Association', members: 10, strength: 58, formationYear: 1967, scope: 'Southeast Asian Integration', keyObjectives: ['Economic Community', 'Free Trade Area', 'Political Cooperation', 'Cultural Exchange'] },
              { name: 'EU', type: 'Regional Union', members: 27, strength: 85, formationYear: 1993, scope: 'European Integration', keyObjectives: ['Single Market', 'Common Foreign Policy', 'Eurozone Coordination', 'European Defense Integration'] },
              { name: 'Quad Alliance', type: 'Informal Security Partnership', members: 4, strength: 52, formationYear: 2007, scope: 'Indo-Pacific Strategic Partnership', keyObjectives: ['Maritime Security', 'Counter-Terrorism', 'Technology Sharing', 'Regional Stability'] },
              { name: 'AUKUS', type: 'Security Partnership', members: 3, strength: 48, formationYear: 2021, scope: 'Indo-Pacific Security Cooperation', keyObjectives: ['Maritime Awareness', 'Joint Exercises', 'Technology Sharing', 'Regional Stability'] }
            ].map((alliance, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                marginBottom: '24px'
              }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>{alliance.name}</h4>
                    <Badge style={{
                      padding: '4px 8px',
                      background: alliance.strength > 80 ? '#dc2626' : alliance.strength > 60 ? '#2563eb' : alliance.strength > 40 ? '#16a34a' : '#059669',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: '500',
                      border: '1px solid #e2e8f0'
                    }}>
                      {alliance.strength}/100 strength
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <div style={{
                      width: '100px',
                      height: '8px',
                      backgroundColor: alliance.strength > 80 ? '#dc2626' : alliance.strength > 60 ? '#2563eb' : alliance.strength > 40 ? '#16a34a' : '#059669',
                      borderRadius: '4px'
                    }} style={{ width: `${alliance.strength}%` }} />
                  </div>
                </div>
              </div>

              <div className="mt-3 p-3" style={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div className="text-sm font-medium mb-2">Strategic Scope</div>
                <p className="text-xs text-slate-600">{alliance.scope}</p>
                <div className="mt-3">
                  <h5 className="text-sm font-semibold mb-2">Key Strategic Objectives</h5>
                  <div className="grid grid grid-cols-1 md:grid-cols-2 gap-3">
                    {alliance.keyObjectives.slice(0, 4).map((obj) => (
                      <span
                        style={{
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          border: '1px solid #e2e8f0',
                          background: '#ffffff'
                        }}
                      >
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
