package com.prokys.teachers_journal.repository;

import com.prokys.teachers_journal.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
