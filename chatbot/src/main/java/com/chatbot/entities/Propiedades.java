package com.chatbot.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@NoArgsConstructor
@Data
@Table(name = "kia_sportage_propiedades")
public class Propiedades {
    @Id
    @Column(name = "id_dimensiones")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    @Column(name = "id_modelo")
    private Long idModelo;
    @NonNull
    @Column(name = "longitud")
    private String longitud;
    @NonNull
    @Column(name = "ancho")
    private String ancho;
    @NonNull
    @Column(name = "altura")
    private String altura;
    @NonNull
    @Column(name = "colores")
    private String color;
    @NonNull
    @Column(name = "peso_bruto")
    private String pesoBruto;
    @NonNull
    @Column(name = "traccion")
    private String traccion;
}
