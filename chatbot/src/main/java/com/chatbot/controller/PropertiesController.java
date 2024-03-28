package com.chatbot.controller;

import com.chatbot.dto.EquipamientoDTO;
import com.chatbot.entities.Equipamiento;
import com.chatbot.repositories.EquipamientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/properties")
public class PropertiesController {

    @Autowired
    private EquipamientoRepository equipamientoRepository;

    @GetMapping("/getproperties")
    public ResponseEntity<List<EquipamientoDTO>> getQuestions() {
        List<EquipamientoDTO> questions = new ArrayList<>();
        equipamientoRepository.findAll().forEach(equipamiento -> {
            questions.add(new EquipamientoDTO(
                    equipamiento.getId(),
                    equipamiento.getIdModelo(),
                    equipamiento.getNombreEquipamiento(),
                    equipamiento.getDescripcion()));
        });
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @GetMapping("/getpropertiesbyid/{id}")
    public ResponseEntity<Equipamiento> findByid(@PathVariable Long id) {

        return equipamientoRepository.findById(id).isPresent() ? new ResponseEntity<>(equipamientoRepository
                .findById(id)
                .get(), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}



