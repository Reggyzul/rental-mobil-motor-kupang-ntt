export interface Car {
  id: string;
  name: string;
  category: string;
  pricePerDay: number; // in IDR
  priceDisplay?: string; // custom price text
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
  includeList: string[];
  description: string;
  rating: number;
  reviewsCount: number;
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface BookingDetails {
  carId: string;
  startDate: string;
  endDate: string;
  startTime: string;
  days: number;
  rentalType: 'with_driver' | 'without_driver';
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  carModel: string;
  date: string;
}
