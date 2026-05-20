import React from 'react';
import Panel from '../../components/Panel';
import LiveMonitoring from '../../components/LiveMonitoring';
import MasterUpload from '../../components/MasterUpload';
import QueueTable from '../../components/QueueTable';
import ReviewDetail from '../../components/ReviewDetail';

export default function AdminPage() {
  return (
    <div className="screen">
      <div className="screen-heading">
        <p className="eyebrow">Operations, quality, and compliance</p>
        <h2>Admin Control Center</h2>
      </div>

      <div className="grid three">
        <Panel title="Approval Queue">
          <QueueTable />
          <div style={{ marginTop: 8 }}>
            <ReviewDetail />
          </div>
        </Panel>

        <Panel title="Live Monitoring">
          <LiveMonitoring />
        </Panel>

        <Panel title="Master Upload">
          <MasterUpload />
        </Panel>
      </div>
    </div>
  );
}
