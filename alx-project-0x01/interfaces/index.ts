export interface ButtonProps {
  title: string;
  styles: string;
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Geolocation {
  lat: number;
  lng: number;
}

interface Address extends Geolocation {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps extends Address {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}
