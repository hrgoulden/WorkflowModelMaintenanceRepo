
class Task{

	/*
		parameters
			var name 					//string var of the task name, different from type
			var taskType 				//distinction between the various types of tasks
			var xPosition, yPosition 	//x and y offsets for task element
	*/


	constructor(name, taskType, xPosition, yPosition)
	{
		var WFTask = name;
		var EntityTypeCode = taskType;		
		var xPos = xPosition;
		var yPos = yPosition;
	}
	
	setEntityTypeCode(EntityTypeCode)
	{
		this.EntityTypeCode = EntityTypeCode;
	}
	getEntityTypeCode()
	{
		return this.EntityTypeCode;
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
		return xPos;
	}
	getTaskPositionY()
	{
		return yPos;
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

