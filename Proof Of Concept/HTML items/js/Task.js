
class Task{


	constructor()
	{
		var WFTask;
		var EntityTypeCode
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

	setEntityTypeCode(EntityTypeCode)
	{
		this.EntityTypeCode = EntityTypeCode;
	}

	getEntityTypeCode()
	{
		return this.EntityTypeCode;
	}

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
}
