-- show all existing tasks
SELECT taskName, taskType FROM task;

-- show tasks linked to first task, and the type of link
SELECT t.taskName, l.linkType FROM (task as t JOIN link as l on t.taskIdentity = l.targetTaskID) 
	WHERE l.originTaskID = 00001;
    
-- show all links, their types, and their origin/target tasks
SELECT tOrigin.taskName, l.linkType, tTarget.taskName FROM 
	((link as l INNER JOIN task as tOrigin on l.originTaskID = tOrigin.taskIdentity)
	INNER JOIN task as tTarget on l.targetTaskID = tTarget.taskIdentity)