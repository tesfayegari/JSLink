(function () {
    /*
     * Initialize the variable that store the overrides objects.
     */
	var overrideCtx = {};
	overrideCtx.Templates = {};
	
//	Assign functions or plain html strings to the templateset objects:
//	header, footer and item.
	overrideCtx.Templates.Header = "<B><#=ctx.ListTitle#></B><hr><ul>";
	overrideCtx.Templates.Footer = "</ul>";

// 	This template is assigned to the CustomItem function.
	overrideCtx.Templates.Item = CustomItem;
	overrideCtx.BaseViewID = 1;
	overrideCtx.ListTemplateType = 100;
	
//   	 Register the template overrides.

	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);

})();

/*
 * This function builds the output for the item template.
 * Uses the Context object to access announcement data.
 */
function CustomItem(ctx) {
    // Build a listitem entry for every announcement in the list.
	var ret = "<li>This is a " + ctx.CurrentItem.MoreText + "</li>";
	return ret;
}