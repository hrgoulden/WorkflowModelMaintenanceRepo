
class Link{

	constructor(from, to, condition)
	{
		var FromTaskSeq = from; //primary key1
		var LinkWhen = condition;
		var ToTaskSeq = to;	//primary key2
	}


	setFromTask(taskSeq)
	{
		this.FromTaskSeq = taskSeq;
	}
	getFromTask()
	{
		return FromTaskSeq;
	}
	
	setToTask(taskSeq)
	{
		this.ToTaskSeq = taskSeq;
	}
	getToTask()
	{
		return ToTaskSeq;
	}
	
	setLinkWhen(condition)
	{
		this.LinkWhen = condition;
	}
	getLinkWhen()
	{
		return LinkWhen;
	}




	/*
	dbInsert()
	{
		//commit new link to db
	}
	dbSelect()
	{
		//populate link object with WFTaskLink db object

		//include method parameters (from the db retrieval)
		this.setLinkWhen();
		this.setToTask();
		this.setFromTask();
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

}
