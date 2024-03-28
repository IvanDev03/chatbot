package com.chatbot.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "kia_sportage_equipamiento")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Equipamiento {
    @Id
    @Column(name = "id_equipamiento")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "id_model")
    private String idModelo;
    @Column(name = "nombre_equipamiento")
    private String nombreEquipamiento;
    @Column(name = "descripcion")
    private String descripcion;


}