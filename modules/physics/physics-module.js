define(config.substructure_paths("physics"), function() {
	//Attach substructures to module here
	var physics = config.attach(arguments);
	//Declare module namespace
	physics.module_name = "physics";

	return physics; //Return module
});