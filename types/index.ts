export type Tag = {
  id: string;
  name: string;
  type: 'peer' | 'manager';
};

export type Contact = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  tags: Tag[];
};