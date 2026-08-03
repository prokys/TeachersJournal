package com.prokys.teachers_journal.service;

import com.prokys.teachers_journal.entity.ClassName;
import com.prokys.teachers_journal.repository.ClassNameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassNameService {

    private final ClassNameRepository classNameRepository;

    public ClassNameService(ClassNameRepository classNameRepository) {
        this.classNameRepository = classNameRepository;
    }

    public List<ClassName> getAllUsers() {
        return classNameRepository.findAll();
    }
}
