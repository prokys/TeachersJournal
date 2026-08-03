package com.prokys.teachers_journal.repository;

import com.prokys.teachers_journal.entity.SubTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubTaskRepository extends JpaRepository<SubTask, Long> {
}
