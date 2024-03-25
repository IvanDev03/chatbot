package com.chatbot.controller;

import com.chatbot.dto.DatosRespuestaEquipamiento;
import com.chatbot.repositories.EquipamientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private EquipamientoRepository equipamientoRepository;

    @GetMapping("/getquestions")
    public ResponseEntity<List<DatosRespuestaEquipamiento>> getQuestions() {
        List<DatosRespuestaEquipamiento> questions = new ArrayList<>();
        equipamientoRepository.findAll().forEach(equipamiento -> {
            questions.add(new DatosRespuestaEquipamiento(equipamiento.getId(), equipamiento.getIdModelo(), equipamiento.getNombreEquipamiento(), equipamiento.getDescripcion()));
        });
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

}



