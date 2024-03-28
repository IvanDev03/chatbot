package com.chatbot.controller;

import com.chatbot.dto.PropiedadesDTO;
import com.chatbot.entities.Equipamiento;
import com.chatbot.entities.Propiedades;
import com.chatbot.repositories.PropiedadesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/propiedades")
public class PropiedadesController {

    @Autowired
    public PropiedadesRepository propiedadesRepository;

    @GetMapping("/getpropiedades")
    public ResponseEntity<List<PropiedadesDTO>> getProperties() {
        List<PropiedadesDTO> properties = new ArrayList<>();
        propiedadesRepository.findAll().forEach(propiedades -> {
            properties.add(new PropiedadesDTO(
                    propiedades.getId(),
                    propiedades.getIdModelo(),
                    propiedades.getLongitud(),
                    propiedades.getAncho(),
                    propiedades.getAltura(),
                    propiedades.getColor(),
                    propiedades.getPesoBruto(),
                    propiedades.getTraccion()));
        });
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @GetMapping("/getpropiedadesbyid/{id}")
    public ResponseEntity<Propiedades> findByid(@PathVariable Long id) {

        return propiedadesRepository.findById(id).isPresent() ? new ResponseEntity<>(propiedadesRepository
                .findById(id).get(), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
