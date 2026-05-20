import React from 'react';

export default function LiveMonitoring({ stats = { players: 12480, slots: 327, violations: 41 } }) {
  return (
    <div>
      <div className="metric-row stacked">
        <div><strong>{stats.players}</strong><span>Live players</span></div>
        <div><strong>{stats.slots}</strong><span>Slots active</span></div>
        <div><strong>{stats.violations}</strong><span>Violations logged</span></div>
      </div>
    </div>
  );
}
