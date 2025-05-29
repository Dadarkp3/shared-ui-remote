import { create } from "zustand";

export interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    feelslike_c: number;
    wind_kph: number;
    humidity: number;
    uv: number;
    vis_km: number;
    pressure_mb: number;
  };
  raw: any;
}

interface WeatherStore {
  data: WeatherData | null;
  denied: boolean;
  loading: boolean;
  error: boolean;
  setWeather: (data: WeatherData | null) => void;
  setDenied: (denied: boolean) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  data: null,
  denied: false,
  loading: false,
  error: false,
  setWeather: (data) => set({ data, loading: false, error: false }),
  setDenied: (denied) => set({ denied, loading: false }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error, loading: false }),
}));
