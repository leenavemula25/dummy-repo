import React from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-4">
      <Card
        title={`Good ${new Date().getHours() < 12 ? 'morning' : 'day'}, ${
          user?.name || ''
        }`}
        subtitle="Here is a quick snapshot of your learning journey."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Role
            </p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {user?.role}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Next
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Check your courses and schedule.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Quick tips
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Complete your quizzes on time for better performance tracking.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
