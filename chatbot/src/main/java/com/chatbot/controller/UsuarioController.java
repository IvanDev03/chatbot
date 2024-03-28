package com.chatbot.controller;

import com.chatbot.dto.UsuarioDTO;
import com.chatbot.entities.Usuario;
import com.chatbot.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    public UsuarioRepository usuarioRepository;

    @PostMapping("/crearusuario")
    public ResponseEntity<UsuarioDTO> crearUsuario(@RequestBody UsuarioDTO usuarioDTO) {

        Usuario usuario = usuarioRepository.save(new Usuario(usuarioDTO));

        return ResponseEntity.ok(new UsuarioDTO(usuario.getId(), usuario.getNombre()));
    }

}
