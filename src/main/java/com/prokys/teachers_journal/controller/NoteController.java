package com.prokys.teachers_journal.controller;

import com.prokys.teachers_journal.entity.Note;
import com.prokys.teachers_journal.service.NoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getUsers() {
        return noteService.getAllUsers();
    }
}
