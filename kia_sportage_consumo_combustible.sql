create table kia_sportage_consumo_combustible
(
    id_consumo        int auto_increment
        primary key,
    id_model          int         not null,
    tipo_combustible  varchar(25) not null,
    consumo_urbano    float       not null,
    consumo_carretera float       not null,
    consumo_mixto     float       not null,
    constraint nombre_equipamiento___fk
        foreign key (id_model) references kia_sportage_models (id_model)
);

