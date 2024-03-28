create table kia_sportage_transmisiones
(
    id_transmision   int auto_increment
        primary key,
    id_model         int          null,
    tipo_transmision varchar(255) not null,
    numero_marchas   int          null,
    constraint kia_sportage_transmisiones_ibfk_1
        foreign key (id_model) references kia_sportage_models (id_model)
);

create index id_model
    on kia_sportage_transmisiones (id_model);

INSERT INTO chatbot_cars.kia_sportage_transmisiones (id_transmision, id_model, tipo_transmision, numero_marchas) VALUES (1, 1, 'Automatica', 6);
