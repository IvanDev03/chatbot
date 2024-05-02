create table kia_sportage_models
(
    id_model int auto_increment
        primary key,
    name     varchar(45) not null,
    year     int         not null
);

INSERT INTO chatbot_cars.kia_sportage_models (id_model, name, year) VALUES (1, 'SPORTAGE DESIRE AT 4X2', 2024);
INSERT INTO chatbot_cars.kia_sportage_models (id_model, name, year) VALUES (2, 'SPORTAGE DESIRE AT 4X4', 2024);
