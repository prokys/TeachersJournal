package com.prokys.teachers_journal.repository;

import com.prokys.teachers_journal.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
