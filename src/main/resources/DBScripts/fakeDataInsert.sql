INSERT INTO public.products VALUES ('d2720e91-3ded-49e1-b684-273b0af50fda', 'Apple iPhone 8', '699', '10');
INSERT INTO public.products VALUES ('6be1377b-b144-4219-90ae-5431b96e7ca6', 'Apple iPhone 8 Plus', '799', '15');
INSERT INTO public.products VALUES ('8915ea51-4650-497f-b7ae-3a08231933eb', 'Apple iPhone X', '999', '5');
INSERT INTO public.products VALUES ('26ba4317-3751-4863-a760-3d22828554f5', 'Samsung Galaxy S8', '424.99', '25');
INSERT INTO public.products VALUES ('79e75010-88f6-427c-8259-899d37b209b2', 'Samsung Galaxy Note8', '929.99', '5');

SELECT * FROM public.products;

INSERT INTO public.buyers VALUES ('9c9111b4-c033-4c5b-a7bc-c4e85487d63a', 'Timothy', 'Acton', 'July 19, 1963', '1787 Hickory Heights Drive', 'Baltimore', 'MD', 'USA', '443-984-9923', 'TimothyActon@dayrep.com');
INSERT INTO public.buyers VALUES ('636d9787-d97d-450e-9de1-09c5014e8d69', 'Jennifer', 'Santana', 'May 9, 1998', '3240 Bobcat Drive', 'Miami', 'FL', 'USA', '240-784-4495', 'JenniferSantana@jourrapide.com');
INSERT INTO public.buyers VALUES ('c56ffae2-b7d9-441d-80de-da6f57aa3ca7', 'Serge', 'Tremblay', 'December 29, 1968', '51, place Stanislas', 'Paris', '', 'France', '03.64.89.58.81', 'SergeTremblay@teleworm.us');
INSERT INTO public.buyers VALUES ('d59ee651-8d47-44c2-b8cd-ef9fcb27e9f1', 'Rachel', 'Rasp', 'September 6, 1993', '20 Feather Street', 'Sidney', 'NSW', 'Australia', '(07) 5327 3384', 'RachelRasp@teleworm.us');
INSERT INTO public.buyers VALUES ('e326962a-a874-4800-a97f-b89b2a2d55ac', 'Georgina', 'Fry', 'May 17, 1982', '98 Redcliffe Way', 'London', '', 'UK', '070 6399 7886', 'GeorginaFry@teleworm.us');

SELECT * FROM public.buyers;

INSERT INTO public.sellers VALUES ('fd80830a-6626-4867-a3a1-6d86bd7326e1', 'Ebay', 'Pierre', 'sales manager', '2025 Hamilton Avenue', 'San Jose', 'CA', 'USA', '(408) 376-7400');
INSERT INTO public.sellers VALUES ('6ad0f79d-807b-4760-a6bb-abd0473a374f', 'Amazon', 'Jeff', 'sales manager', '410 Terry Ave', 'Seattle', 'Washington', 'USA', '(206) 266-1000');

SELECT * FROM public.sellers;

INSERT INTO public.orders VALUES ('3f02e422-f763-4495-ab0a-4b5d5b80385d', '9c9111b4-c033-4c5b-a7bc-c4e85487d63a', 'fd80830a-6626-4867-a3a1-6d86bd7326e1', '2017-09-17 20:05:09');
INSERT INTO public.orders VALUES ('56ebc4c1-fb30-4c91-8c2f-86e33d4a719b', '636d9787-d97d-450e-9de1-09c5014e8d69', '6ad0f79d-807b-4760-a6bb-abd0473a374f', '2017-09-15 10:27:59');
INSERT INTO public.orders VALUES ('ab0f0a6b-d9ab-4b5c-8828-cc8b07539c35', 'c56ffae2-b7d9-441d-80de-da6f57aa3ca7', '6ad0f79d-807b-4760-a6bb-abd0473a374f', '2017-09-12 02:50:44');
INSERT INTO public.orders VALUES ('3877732d-b315-4a45-b616-a7a09d5e7896', 'd59ee651-8d47-44c2-b8cd-ef9fcb27e9f1', 'fd80830a-6626-4867-a3a1-6d86bd7326e1', '2017-09-21 14:23:18');
INSERT INTO public.orders VALUES ('0cd126c5-b41b-41e7-abd9-6cfa4887479a', 'e326962a-a874-4800-a97f-b89b2a2d55ac', 'fd80830a-6626-4867-a3a1-6d86bd7326e1', '2017-09-25 18:34:21');

SELECT * FROM public.orders;

INSERT INTO public.order_details VALUES ('d2720e91-3ded-49e1-b684-273b0af50fda', '3f02e422-f763-4495-ab0a-4b5d5b80385d', 1, 0);
INSERT INTO public.order_details VALUES ('8915ea51-4650-497f-b7ae-3a08231933eb', '3f02e422-f763-4495-ab0a-4b5d5b80385d', 1, 0);
INSERT INTO public.order_details VALUES ('6be1377b-b144-4219-90ae-5431b96e7ca6', '56ebc4c1-fb30-4c91-8c2f-86e33d4a719b', 3, 5);
INSERT INTO public.order_details VALUES ('79e75010-88f6-427c-8259-899d37b209b2', 'ab0f0a6b-d9ab-4b5c-8828-cc8b07539c35', 1, 0);
INSERT INTO public.order_details VALUES ('d2720e91-3ded-49e1-b684-273b0af50fda', 'ab0f0a6b-d9ab-4b5c-8828-cc8b07539c35', 1, 0);
INSERT INTO public.order_details VALUES ('26ba4317-3751-4863-a760-3d22828554f5', '3877732d-b315-4a45-b616-a7a09d5e7896', 5, 7);
INSERT INTO public.order_details VALUES ('8915ea51-4650-497f-b7ae-3a08231933eb', '0cd126c5-b41b-41e7-abd9-6cfa4887479a', 10, 10);

SELECT * FROM public.order_details;





INSERT INTO public.sellers VALUES ('fd80830a-6626-4867-a3a1-6d86bd7326e1', 'Apple Inc.', 'Steve', 'sales manager', '1 Infinite Loop', 'Cupertino', 'CA', 'USA', '1-800-275-2273');
INSERT INTO public.sellers VALUES ('6ad0f79d-807b-4760-a6bb-abd0473a374f', 'Samsung', 'Lee', 'sales manager', 'Building, 11, Seocho-daero 74-gil', 'Seoul', 'Seocho District', 'South Korea', '1-800-726-7864');