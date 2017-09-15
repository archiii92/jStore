DROP TABLE IF EXISTS public.products, public.buyers, public.sellers, public.orders, public.order_details;

CREATE TABLE public.products(
	product_id uuid PRIMARY KEY,
    product_name text CHECK (product_name != '') UNIQUE,
    unit_price numeric(10,2) CHECK (unit_price > 0),
    units_in_stock integer CHECK (units_in_stock >= 0)
);

CREATE TABLE public.buyers(
	buyer_id uuid PRIMARY KEY,
    first_name text CHECK (first_name != ''),
    last_name text CHECK (last_name != ''),
    birth_date date,
    address text CHECK (address != ''),
    city text CHECK (city != ''),
    region text,
    country text CHECK (country != ''),
    home_phone text
);

CREATE TABLE public.sellers(
	seller_id uuid PRIMARY KEY,
    first_name text CHECK (first_name != ''),
    last_name text CHECK (last_name != ''),
    address text CHECK (address != ''),
    city text CHECK (city != ''),
    region text,
    country text CHECK (country != ''),
    phone text
);

CREATE TABLE public.orders(
	order_id uuid PRIMARY KEY,
    buyer_id uuid REFERENCES public.buyers ON DELETE CASCADE,
    seller_id uuid REFERENCES public.sellers ON DELETE CASCADE,
    order_date time
);

CREATE TABLE public.order_details(
	product_id uuid REFERENCES public.products ON DELETE CASCADE,
    order_id uuid REFERENCES public.orders ON DELETE CASCADE,
    quantity integer CHECK (quantity > 0),
    discount integer CHECK (discount >= 0 AND discount <= 100),
    PRIMARY KEY (product_id, order_id)
);