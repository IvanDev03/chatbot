create table usuarios
(
    id_usuario int auto_increment
        primary key,
    nombre     varchar(25) not null
);

INSERT INTO chatbot_cars.usuarios (id_usuario, nombre) VALUES (1, 'Ivan');
INSERT INTO chatbot_cars.usuarios (id_usuario, nombre) VALUES (2, 'Juan Torres');
