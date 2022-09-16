package com.walace.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.walace.dspesquisa.entities.Record;

@Repository
public interface GenreRepository extends JpaRepository<Record, Long> {

}