DROP SCHEMA IF EXISTS WorkflowModel;
CREATE SCHEMA WorkflowModel;
USE WorkflowModel;

CREATE TABLE task (
  taskIdentity int(5) NOT NULL,
  taskType VARCHAR(45) NOT NULL,
  taskName VARCHAR(45) NOT NULL,
  PRIMARY KEY  (taskIdentity)
);

CREATE TABLE link (
	linkIdentity int(5) NOT NULL,
	linkType VARCHAR(45) NOT NULL,
    originTaskID int(5) NOT NULL,
    targetTaskID int(5) NOT NULL,
    PRIMARY KEY (linkIdentity),
    FOREIGN KEY (originTaskID) REFERENCES task (taskIdentity),
    FOREIGN KEY (targetTaskID) REFERENCES task (taskIdentity)
);

--inserts test values into test and link tables
SET AUTOCOMMIT = 0;
INSERT INTO task VALUES (00001, "PPO SELECTION CHANGE", "Primary Selection Change"),
(00002, "REPAIR QUEUE", "Can Repair?"),
(00003, "MEDICAL BILL REVIEW ENGINE", "Medical Review 1"),
(00004, "MEDICAL BILL REVIEW ENGINE", "Medical Review 2"),
(00005, "UR DECISION MANAGER", "UR Decision"),
(00006, "PPO SELECTION CHANGE", "Secondary Selection Change");
COMMIT;

INSERT INTO link VALUES (00001, "SUCCESS", 00001, 00002),
(00002, "FAILURE", 00001, 00003),
(00003, "SUCCESS", 00002, 00005),
(00004, "SUCCESS", 00003, 00005),
(00005, "FAILURE", 00005, 00004),
(00006, "SUCCESS", 00005, 00006),
(00007, "SUCCESS", 00004, 00006);
COMMIT;