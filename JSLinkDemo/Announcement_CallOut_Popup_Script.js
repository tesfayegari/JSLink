// anonymous self-executing function to setup JSLink templates on page load..
(function () {
   
	var itemCtx = {};
	itemCtx.Templates = {};
	
        itemCtx.Templates.Header = "<div><b>Announcements</b></div><table>";
        itemCtx.Templates.Item = ItemOverrideFun;
        itemCtx.Templates.Footer = "</table>";

	itemCtx.BaseViewID = 1;
	itemCtx.ListTemplateType = 104;
	
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemCtx);

})();

// function to process an announcement item..
function ItemOverrideFun(ctx) {
  
var _announcementTitle = ctx.CurrentItem.Title;

 //This regex expression use to delete html tags from the Body field 
var regex = /(<([^>]+)>)/ig; 
bodyValue = ctx.CurrentItem.Body.replace(regex, ""); 
//Get the first 20 words using regx
var _announcementDesc = bodyValue.replace(/(([^\s]+\s\s*){20})(.*)/,"$1…");;

var _announcementID = ctx.CurrentItem.ID;


return "<tr><td><p><b>" + _announcementTitle + "</b></p>" + "<span title=\"" + bodyValue + "\">" +  _announcementDesc + "</span>" + "<a href='/demo/Lists/MyAnnouncements/DispForm.aspx?ID="+ _announcementID +"'> Read More...</a></td></tr>";

}
