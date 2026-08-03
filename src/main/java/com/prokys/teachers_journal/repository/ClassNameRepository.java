package com.prokys.teachers_journal.repository;

import com.prokys.teachers_journal.entity.ClassName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassNameRepository extends JpaRepository<ClassName, Long> {
}
