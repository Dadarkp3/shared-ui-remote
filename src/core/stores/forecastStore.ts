import { create } from "zustand";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: HourForecast[];
}

interface HourForecast {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

interface ForecastStore {
  forecast: ForecastDay[];
  setForecast: (days: ForecastDay[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
}

export const useForecastStore = create<ForecastStore>((set) => ({
  forecast: [],
  loading: false,
  error: false,
  setForecast: (days) => set({ forecast: days }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
