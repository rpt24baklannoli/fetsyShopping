DROP DATABASE IF EXISTS fetsy;

CREATE DATABASE fetsy;

\c fetsy;

CREATE TABLE IF NOT EXISTS items (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(150),
  best_seller BOOLEAN,
  price numeric(2),
  price_reduction numeric(2),
  in_stock BOOLEAN,
  us_free_shipping BOOLEAN,
  carts_item_is_in INT
);

-- INSERT INTO items (item_id, item_name, best_seller, price, price_reduction, in_stock, us_free_shipping, carts_item_is_in)
--   VALUES (1, 'Wine RANDOM Face Mask with clear and red rhinestones', true, 10.99, null, true, true, 20),
--   (2, 'washable Face Mask covering with glitter rose gold glitter Custom made, Designer FaceMask, with NO pocket for filter, mask holder lanyard', true, 4.10, null, true, true, 20),
--   (3, 'Hanging with my Gnomies face mask made of clear, green and red rhinestones', false, 10.99, null, true, false, 0),
--   (4, 'FaceMask mask holder lanyard, washable Face Mask covering with glitter rose gold glitter Custom made, Designer with NO pocket for filter', false, 4.10, null, true, true, 3),
--   (5, 'Nose Wire Cotton Filter Pocket 4 Layers Face Mask | Reusable and Washable | Protective Dust Mask | Free Shipping Bewell Bewellgroup', false, 4.97, null, true, true, 20),
--   (6, 'Face Shield with Flippable Face Shield - PPE - Comfortable Elastic Head Band - Full Cover Safety Cover', false, 4.99, null, true, true, 20),
--   (7, 'Halloween Collection, Holiday, Covid PPE, Fall, Thanksgiving, Scrub cap, surgical cap, nurse, doctor, dentist, men, women, buttons', true, 20, 5, true, true, 6),
--   (8, 'Star Wars Collection, Mandalorian, Covid PPE, Yoda, The Child, Scrub cap, surgical cap, nurse, doctor, dentist, men, women, buttons,', true, 17.6, 4.4, true, true, 20),
--   (9, 'FTP Face Mask Covering Reusable | Hype Beast Hip-Hop Rap Street Wear SuicideBoys Travis Scott Cactus Jack COVID PPE Designer Brand', false, 11.99, null, true, false, 0),
--   (10, 'Dry-Fit Moisture-Wicking Adult Face Masks', false, 8, null, true, true, 10)
