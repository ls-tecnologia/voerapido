export interface TripDetails {
  type: 'round-trip' | 'one-way';
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  transport: 'plane' | 'bus';
  extras: {
    hotel: boolean;
    transfer: boolean;
    insurance: boolean;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}
