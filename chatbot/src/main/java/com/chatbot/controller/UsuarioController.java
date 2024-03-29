package com.chatbot.controller;

import com.chatbot.dto.UsuarioDTO;
import com.chatbot.entities.Usuario;
import com.chatbot.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    public UsuarioRepository usuarioRepository;

    @PostMapping("/crearusuario")
    public ResponseEntity<UsuarioDTO> crearUsuario(@RequestBody UsuarioDTO usuarioDTO) {

        Usuario usuario = usuarioRepository.save(new Usuario(usuarioDTO));

        return ResponseEntity.ok(new UsuarioDTO(usuario.getId(), usuario.getNombre()));
    }

    @GetMapping("/getusuarios")
    public ResponseEntity<List<UsuarioDTO>>getUsuario(){
        List<UsuarioDTO> usuarios = new ArrayList<>();
        usuarioRepository.findAll().forEach(usuario -> {
            usuarios.add(new UsuarioDTO(usuario.getId(), usuario.getNombre()));
        });
        return ResponseEntity.ok(usuarios);
    }
    @GetMapping("/getusuariobyid/{id}")
    public ResponseEntity<UsuarioDTO> getUsuarioById(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findById(id).get();
        return ResponseEntity.ok(new UsuarioDTO(usuario.getId(), usuario.getNombre()));
    }
}
