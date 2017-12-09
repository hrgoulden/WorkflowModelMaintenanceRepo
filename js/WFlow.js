
class WFlow{

	/*
		Parameters
			desc 			//string var describing the workflow
			
	*/

	
	constructor(desc )
	{
		var WFlowSeq = 	//primary key
		var Description = desc;
		var RecordStatus = 'V';
		//var EntityTypeCode = 
		//var CreateUserID =
		var CreateDate = getDate();
		//var ModUserID = 
		var ModDate = getDate();
		//var InitialTaskSeq = 

		var taskArr = [];
		var linkArr = [];
	}

	
	//adds task/link obj. parameter to end of array
	addTask(taskObj)
	{
		this.taskArr.push(taskObj);
	}
	addLink(linkObj)
	{
		this.linkArr.push(linkObj);
	}
	
	getTaskArr()
	{
		return this.taskArr;
	}
	getLinkArr()
	{
		return this.linkArr;
	}

	//splice(starting index, number of elements to remove from the starting index)
	removeTask(index)
	{
		if (index > -1) {
    		taskArr.splice(index, 1);
		}
	}
	removeLink(index)
	{
		if (index > -1) {
    		linkArr.splice(index, 1);
		}
	}

	getTask(index)
	{
		return taskArr[index];
	}
	getLink(index)
	{
		return linkArr[index];
	}



	/*
	dbInsert()
	{
		//commit new link to db
	}
	dbSelect()
	{
		//populate link object with WFTaskLink db object
	}
	dbUpdate()
	{
		//update the fields of an existing link record
	}
	dbDelete()
	{
		//remove link record from db
	}
	*/
}//end class WFlow
