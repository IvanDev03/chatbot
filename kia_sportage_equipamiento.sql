create table kia_sportage_equipamiento
(
    id_equipamiento     int auto_increment
        primary key,
    nombre_equipamiento varchar(255) not null,
    descripcion         longtext     not null
);

INSERT INTO chatbot_cars.kia_sportage_equipamiento (id_equipamiento, nombre_equipamiento, descripcion) VALUES (1, 'Seguridad', '["Frenos ABS con EBD","6 Airbags","Control de estabilidad (ESC)","Asistente de arranque en pendiente (HAC)","Control de descenso en pendiente (DBC)","Sensores de estacionamiento traseros","Cámara de reversa"]');
INSERT INTO chatbot_cars.kia_sportage_equipamiento (id_equipamiento, nombre_equipamiento, descripcion) VALUES (2, 'Confort', '["Aire acondicionado automático","Asientos delanteros con calefacción","Techo corredizo panorámico","Volante multifuncional","Sistema de sonido con 6 parlantes","Pantalla táctil de 8 pulgadas","Volante y palanca en cuero","Tapicería en tela","Vidrios de privacidad"]');
INSERT INTO chatbot_cars.kia_sportage_equipamiento (id_equipamiento, nombre_equipamiento, descripcion) VALUES (3, 'Tecnologia', '["Selector de modos de manejo (Eco, Normal, Sport y Smart)","Apple CarPlay y Android Auto","Cargador inalámbrico para celular","Sistema de navegación","Luces LED delanteras y traseras","Frenado automático de emergencia (AEB)","Aviso de punto ciego (BCW)","Alerta de tráfico cruzado trasero (RCTA)","Control de audio y llamadas en el volante","Auto Light","Bluetooth con Voice Recognition"]');
