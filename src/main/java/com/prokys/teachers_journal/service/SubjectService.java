package com.prokys.teachers_journal.service;

import com.prokys.teachers_journal.entity.Subject;
import com.prokys.teachers_journal.repository.SubjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    public List<Subject> getAllUsers() {
        return subjectRepository.findAll();
    }
}
