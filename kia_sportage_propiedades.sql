create table kia_sportage_propiedades
(
    id_dimensiones int auto_increment
        primary key,
    id_modelo      int         not null,
    longitud       varchar(20) not null,
    ancho          varchar(20) not null,
    altura         varchar(20) not null,
    colores        text        not null,
    peso_bruto     varchar(20) null,
    traccion       varchar(5)  not null,
    constraint kia_sportage_dimensiones___fk
        foreign key (id_modelo) references kia_sportage_models (id_model)
);

INSERT INTO chatbot_cars.kia_sportage_propiedades (id_dimensiones, id_modelo, longitud, ancho, altura, colores, peso_bruto, traccion) VALUES (1, 1, '4515 mm', '1865 mm', '1650 mm', 'Blanco, Negro, Gris Oliva, Gris Oscuro', '1450 kg', '4x2');
INSERT INTO chatbot_cars.kia_sportage_propiedades (id_dimensiones, id_modelo, longitud, ancho, altura, colores, peso_bruto, traccion) VALUES (2, 2, '4515 mm', '1865 mm', '1650 mm', 'Blanco, Negro, Gris Oliva, Gris Oscuro', '1514 kg', '4x4');
