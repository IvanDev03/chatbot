package com.chatbot.controller;

import com.chatbot.dto.ModeloDTO;
import com.chatbot.dto.ModeloByIdAndNameDTO;
import com.chatbot.repositories.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/modelos")
@CrossOrigin(origins = "http://localhost:5173")
public class ModeloController {
    @Autowired
    private ModeloRepository modeloRepository;

    @GetMapping("/getmodelos")
    public ResponseEntity<List<ModeloDTO>> getModelos() {

        List<ModeloDTO> modelos = new ArrayList<>();
        modeloRepository.findAll().forEach(modelo -> {
            modelos.add(new ModeloDTO(modelo.getId(), modelo.getName(), modelo.getYear()));
        });
        return new ResponseEntity<>(modelos, HttpStatus.OK);
    }

    @GetMapping("/getmodelosnames")
    public ResponseEntity<List<ModeloByIdAndNameDTO>> getModelosNames() {
        List<ModeloByIdAndNameDTO> modelosNames = new ArrayList<>();
        modeloRepository.findAll().forEach(modelo -> {
            modelosNames.add(new ModeloByIdAndNameDTO(modelo.getId(), modelo.getName()));
        });
        return new ResponseEntity<>(modelosNames, HttpStatus.OK);
    }
}
