define(config.substructure_paths("input"), function() {
	//Attach substructures to module here
	var input = config.attach(arguments);
	//Declare module namespace
	input.module_name = "input";
	
	return input; //Return module
});