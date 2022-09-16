package com.walace.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walace.dspesquisa.entities.Game;

@Repository
public interface RecordRepository extends JpaRepository<Game, Long> {

}