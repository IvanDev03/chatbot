package com.chatbot.entities;

import com.chatbot.dto.UsuarioDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@Table(name = "usuarios")
@NoArgsConstructor

public class Usuario {

    @Id
    @Column(name = "id_usuario")
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    @Column(name = "nombre")
    private String nombre;

    public Usuario(UsuarioDTO usuarioDTO) {
        this.id = usuarioDTO.id();
        this.nombre = usuarioDTO.nombre();
    }
}
