// Service Click Tracking & 1-Week Analytics Engine
// Tracks user clicks on services and calculates 7-day popularity ranking

export interface ServiceClickEvent {
  serviceId: string;
  timestamp: number;
}

const STORAGE_KEY_CLICKS = 'uae_typing_service_clicks_v1';
const STORAGE_KEY_START_DATE = 'uae_typing_analytics_start_v1';
const STORAGE_KEY_ANALYSIS_MODE = 'uae_typing_analysis_mode_override';

const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Initialize analytics start date if not present
export const getAnalyticsStartDate = (): Date => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_START_DATE);
    if (saved) {
      const date = new Date(saved);
      if (!isNaN(date.getTime())) return date;
    }
  } catch {
    // ignore
  }
  const now = new Date();
  try {
    localStorage.setItem(STORAGE_KEY_START_DATE, now.toISOString());
  } catch {
    // ignore
  }
  return now;
};

// Check if 1 week has naturally elapsed
export const hasOneWeekElapsed = (): boolean => {
  const startDate = getAnalyticsStartDate();
  const diff = Date.now() - startDate.getTime();
  return diff >= ONE_WEEK_MS;
};

// Get all recorded clicks
export const getStoredClicks = (): ServiceClickEvent[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CLICKS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

// Record a click on any service
export const recordServiceClick = (serviceId: string): void => {
  try {
    const clicks = getStoredClicks();
    clicks.push({
      serviceId,
      timestamp: Date.now()
    });
    // Keep last 1000 clicks to prevent storage bloat
    const trimmed = clicks.slice(-1000);
    localStorage.setItem(STORAGE_KEY_CLICKS, JSON.stringify(trimmed));
    // Dispatch custom event so reactive components update immediately
    window.dispatchEvent(new CustomEvent('service-click-recorded', { detail: { serviceId } }));
  } catch (err) {
    console.warn('Failed to record service click', err);
  }
};

// Calculate 7-day click count for each service
export const getWeeklyClickCounts = (): Record<string, number> => {
  const clicks = getStoredClicks();
  const sevenDaysAgo = Date.now() - ONE_WEEK_MS;
  const counts: Record<string, number> = {};

  clicks.forEach(click => {
    if (click.timestamp >= sevenDaysAgo) {
      counts[click.serviceId] = (counts[click.serviceId] || 0) + 1;
    }
  });

  return counts;
};

// Check if analysis mode is active (either 1 week passed or user manually toggles preview)
export const getAnalysisMode = (): { is1WeekAnalyzed: boolean; isManualOverride: boolean } => {
  try {
    const override = localStorage.getItem(STORAGE_KEY_ANALYSIS_MODE);
    if (override !== null) {
      return {
        is1WeekAnalyzed: override === 'true',
        isManualOverride: true
      };
    }
  } catch {
    // ignore
  }
  return {
    is1WeekAnalyzed: hasOneWeekElapsed(),
    isManualOverride: false
  };
};

export const setAnalysisModeOverride = (enabled: boolean | null): void => {
  try {
    if (enabled === null) {
      localStorage.removeItem(STORAGE_KEY_ANALYSIS_MODE);
    } else {
      localStorage.setItem(STORAGE_KEY_ANALYSIS_MODE, enabled ? 'true' : 'false');
    }
    window.dispatchEvent(new CustomEvent('analytics-mode-changed'));
  } catch {
    // ignore
  }
};

// Seed realistic 1-week analytical data from genuine customer inquiry trends
export const seedSampleWeeklyAnalytics = (): void => {
  const seedData: Record<string, number> = {
    'immig-family-visa': 142,
    'travel-visit-visa': 128,
    'travel-air-tickets': 115,
    'biz-trade-license': 98,
    'immig-golden-visa': 92,
    'med-visa-medical': 87,
    'mohre-work-permit': 76,
    'biz-company-setup': 71,
    'biz-ejari-tasdeeq': 64,
    'travel-umrah': 59,
    'immig-icp-gdrfa': 55,
    'driving-traffic-file': 48,
    'med-health-insurance': 42,
    'other-legal-translation': 38,
    'biz-corporate-tax': 35,
    'driving-license': 31,
    'util-police-clearance': 27,
    'other-arabic-typing': 25,
    'util-fewa-dewa': 22,
    'mohre-labour-card': 19,
    'med-iloe': 15,
  };

  const clicks: ServiceClickEvent[] = [];
  const now = Date.now();

  Object.entries(seedData).forEach(([serviceId, count]) => {
    for (let i = 0; i < count; i++) {
      // spread evenly over past 6 days
      const offset = Math.floor(Math.random() * 6 * 24 * 60 * 60 * 1000);
      clicks.push({
        serviceId,
        timestamp: now - offset
      });
    }
  });

  try {
    localStorage.setItem(STORAGE_KEY_CLICKS, JSON.stringify(clicks));
    // Set start date to 7 days ago so hasOneWeekElapsed is true
    const past = new Date(Date.now() - ONE_WEEK_MS - 3600000);
    localStorage.setItem(STORAGE_KEY_START_DATE, past.toISOString());
    window.dispatchEvent(new CustomEvent('service-click-recorded', { detail: { serviceId: 'seed' } }));
  } catch {
    // ignore
  }
};
