package com.chatbot.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "kia_sportage_models")
@Table(name = "kia_sportage_models")
public class Modelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_model")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "year")
    private String year;
}
