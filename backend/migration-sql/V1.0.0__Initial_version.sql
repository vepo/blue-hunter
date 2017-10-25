CREATE TABLE bh_user (
    id        BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    gender    VARCHAR(64) NOT NULL,
    email     VARCHAR(128) NOT NULL,
    phone     VARCHAR(32) NOT NULL,
    username  VARCHAR(32) NOT NULL,
    date_born DATE NOT NULL
);
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Nina Ellis','female',      NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','nEllis@example.com','(443) 545-8479','nEllis');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Nathan Cobb','male',       NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','nCobb@example.com','(368) 849-8721','nCobb');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Nell Payne','female',      NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','nPayne@example.com','(754) 297-3282','nPayne');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Juan Douglas','male',      NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','jDouglas@example.com','(950) 933-8532','jDouglas');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Manuel Parker','male',     NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','mParker@example.com','(754) 381-4273','mParker');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Benjamin Day','male',      NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','bDay@example.com','(360) 935-7443','bDay');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Patrick Maldonado','male', NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','pMaldonado@example.com','(204) 601-5789','pMaldonado');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Katherine Love','female',  NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','kLove@example.com','(679) 945-7785','kLove');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Travis Bowen','male',      NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','tBowen@example.com','(528) 531-1611','tBowen');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Samuel Hampton','male',    NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','sHampton@example.com','(913) 298-8410','sHampton');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Nicholas Ellis','male',    NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','nEllis@example.com','(813) 229-1864','nEllis');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Louise Lucas','female',    NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','lLucas@example.com','(546) 345-1371','lLucas');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Frances Perkins','female', NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','fPerkins@example.com','(214) 885-5742','fPerkins');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Esther Castillo','female', NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','eCastillo@example.com','(541) 725-8912','eCastillo');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Martha Gibson','female',   NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','mGibson@example.com','(739) 705-4110','mGibson');
INSERT INTO bh_user (full_name, gender, date_born, email, phone, username) VALUES ('Ruby Harrington','female', NOW() - (random() * (NOW()+'50 years' - NOW())) + '30 days','rHarrington@example.com','(883) 524-1126','rHarrington');