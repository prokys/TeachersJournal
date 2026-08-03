package com.prokys.teachers_journal.service;

import com.prokys.teachers_journal.entity.Note;
import com.prokys.teachers_journal.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllUsers() {
        return noteRepository.findAll();
    }
}
