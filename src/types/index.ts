export type MenuItem = { id: number; name: string; price: number };

export type OrderItem = MenuItem & {
  quantity: number;
};
export type MenuItems = { id: number; name: string; price: number };
