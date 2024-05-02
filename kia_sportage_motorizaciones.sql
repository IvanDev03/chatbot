create table kia_sportage_motorizaciones
(
    id_motorizacion int auto_increment
        primary key,
    id_model        int         not null,
    tipo_motor      varchar(40) not null,
    cilindrada      int         not null,
    potencia        int         not null,
    torque          int         not null,
    combustible     varchar(50) null,
    constraint kia_sportage_motorizaciones___fk
        foreign key (id_model) references kia_sportage_models (id_model)
);

INSERT INTO chatbot_cars.kia_sportage_motorizaciones (id_motorizacion, id_model, tipo_motor, cilindrada, potencia, torque, combustible) VALUES (1, 1, 'Hibrido', 2, 154, 192, 'Gasolina');
