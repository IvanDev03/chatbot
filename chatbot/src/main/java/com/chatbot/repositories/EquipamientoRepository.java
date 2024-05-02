package com.chatbot.repositories;

import com.chatbot.entities.Equipamiento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipamientoRepository extends JpaRepository<Equipamiento, Long> {
}
