package io.agileintelligence.ppmtool.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class ProjectTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column(updatable = false, unique = true)
    private String projectSequence;
    @NotBlank(message = "Please include a project summary")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    private Integer priority;
    private Date dueDate;
    private Date create_at;
    private Date updates_at;
    //ManyToOne with Backlog
    @Column(updatable = false)
    private String projectIdentifier;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "backlog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Backlog backlog;

    @PrePersist
    protected void onCreate(){
        this.create_at = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updates_at = new Date();
    }

}
