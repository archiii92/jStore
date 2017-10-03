DROP TABLE IF EXISTS public.order_details;
DROP TABLE IF EXISTS public.orders CASCADE;
DROP TABLE IF EXISTS public.products CASCADE;
DROP TABLE IF EXISTS public.buyers CASCADE;
DROP TABLE IF EXISTS public.sellers CASCADE;
DROP TABLE IF EXISTS public.personal_buyer_discounts;
DROP TABLE IF EXISTS public.product_quantity_discounts;
DROP TABLE IF EXISTS public.time_discounts;
DROP TABLE IF EXISTS public.discounts;

CREATE TABLE public.products(
	id uuid PRIMARY KEY,
    name text CHECK (name != '') UNIQUE NOT NULL,
    unit_price numeric(10,2) CHECK (unit_price >= 0) DEFAULT 0,
    units_in_stock integer CHECK (units_in_stock >= 0) DEFAULT 0
);

CREATE TABLE public.buyers(
	id uuid PRIMARY KEY,
    first_name text CHECK (first_name != ''),
    last_name text CHECK (last_name != ''),
    birth_date date,
    address text CHECK (address != ''),
    city text CHECK (city != ''),
    region text,
    country text CHECK (country != ''),
    home_phone text,
    email text
);

CREATE TABLE public.sellers(
	id uuid PRIMARY KEY,
    company_name text CHECK (company_name != ''),
    contact_name text CHECK (contact_name != ''),
    contact_title text CHECK (contact_title != ''),
    address text CHECK (address != ''),
    city text CHECK (city != ''),
    region text,
    country text CHECK (country != ''),
    phone text
);

CREATE TABLE public.orders(
	id uuid PRIMARY KEY,
    buyer_id uuid REFERENCES public.buyers(id) ON DELETE CASCADE,
    seller_id uuid REFERENCES public.sellers(id) ON DELETE CASCADE,
    order_date timestamp
);

CREATE TABLE public.order_details(
	product_id uuid REFERENCES public.products(id) ON DELETE CASCADE,
    order_id uuid REFERENCES public.orders(id) ON DELETE CASCADE,
    quantity integer CHECK (quantity > 0),
    PRIMARY KEY (product_id, order_id)
);

CREATE TABLE public.discounts(
	id uuid PRIMARY KEY,
    discount integer CHECK (discount > 0)
);

CREATE TABLE public.personal_buyer_discounts(
	buyer_id uuid REFERENCES public.buyers(id) ON DELETE CASCADE
) INHERITS (public.discounts);

CREATE TABLE public.product_quantity_discounts(
	product_id uuid REFERENCES public.products(id) ON DELETE CASCADE,
	minimum_quantity integer CHECK (minimum_quantity > 0)
) INHERITS (public.discounts);

CREATE TABLE public.time_discounts(
	valid_from date,
	valid_to date CHECK (valid_to > valid_from)
) INHERITS (public.discounts);