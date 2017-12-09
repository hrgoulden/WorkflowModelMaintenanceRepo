
class Task{

	/*
		parameters
			var name 					//string var of the task name, different from type
			var taskType 				//distinction between the various types of tasks
			var xPosition, yPosition 	//x and y offsets for task element
	*/


	constructor(PK, name, taskType, xPosition, yPosition)
	{
		var WFTaskSeq, WFTask, EntityTypeCode, xPos, yPos;
		this.setWFTaskSeq(PK); //primary key
		this.setTaskName(name);
		this.setEntityTypeCode(taskType);
		this.setTaskPosition(xPosition, yPosition);
	}
	
	setWFTaskSeq(PK)
	{
		this.WFTaskSeq = PK;
	}
	getWFTaskSeq()
	{
		return this.WFTaskSeq;
	}

	//name = string var
	setTaskName(name)
	{
		this.WFTask = name;
	}
	getTaskName()
	{
		return this.WFTask;
	}

	setEntityTypeCode(EntityTypeCode)
	{
		this.EntityTypeCode = EntityTypeCode;
	}
	getEntityTypeCode()
	{
		return this.EntityTypeCode;
	}


	/*
		Parameters
			x //the x offset within the parent element the task element is anchored to (should be the Workflow div)
			y //y offset
		call function on a stop method for the draggable()
	*/
	setTaskPosition(x, y)
	{
		this.xPos = x;
		this.yPos = y;
	}
	getTaskPositionX()
	{
		return this.xPos;
	}
	getTaskPositionY()
	{
		return this.yPos;
	}


	/*constructor(name, )
	{
		var WFTaskSeq //primary key
		var LowSeq =  		
		var WFTaskRegistrySeq = 
		var Name = name;
		var Parameter1 = 
		var RecordStatus = 'V'; //default value
		var NodeLeft = 
		var NodeTop = 
		var CreateUserID = 
		var CreateDate = getDate();
		var ModUserID = 
		var ModDate = getDate();
		var NoPrior = 'N'; //default value
		var NoRestart = 'N'; //default value
		var ParameterX = 
		var DefaultPendGroup = 
	}*/


}//end class Task

