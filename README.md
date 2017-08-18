# JSLink
# Agenda
- Introduction to CSR
- Advantages and Disadvantages of Client-Side Rendering
- How to use JSLink
- Examples and Demos
- SharePoint List Accordion (Custom Solution) using JSLink
- Debugging and Tips
# Introduction to CSR
- Client Site Rendering is simply a term for when the data is transformed using the client rather than the server. 
- This means using client-side technologies, such as HTML and JavaScript. 
- It allows us to style SharePoint elements using JavaScript, rather than having to write XSLT. 
- You can use it to style complete List Views, Fields, Search Results and more. 
- This makes it a lot simpler and more intuitive, especially for web developers who haven’t used SharePoint before.
- When talking about Client Side Rendering in SharePoint, there’s really 2 mechanisms; search Display Templates, and JSLink. From MSDN (http://msdn.microsoft.com/en-us/library/jj945138.aspx):
- Display templates in SharePoint Server 2013 are templates used in Web Parts that use search technology.
- Display templates allow us to completely transform the way search results look, which gives an endless possibility of what they can be used for.
- A common example would be in the use of Blog rollup. Because the results are based off of search, it allows us roll up results from multiple site collections, and even from other farms, or non-SharePoint sources.
- JSLink on the other hand is a property available on many SharePoint objects, including Fields, Lists, Views, and Content Types. 
- In its simplest form, the JSLink property simply adds a JavaScript file to the page. Depending on the JavaScript, this could then do anything – either related to the object of which it was attached, or something completely irrelevant if desired.
# Advantages of Client-Side Rendering
 There are a few advantages of using Client Side Rendering VS XSL.
- Performance – Because the rendering is done Client Side, the burden is taken away from the server. This means that the pages can load faster when using CSR.
- Ease of Development – Let’s face it: nobody really likes XSL – especially in SharePoint. All web developers should be familiar with JavaScript, which makes Client Side Rendering a lot easier to pick up. This should mean reduced development time, and less bugs.
- Flexibility – You can chose to overwrite just a particular field, the header, footer, or the entire view. You can also extend it; you’re not limited to using just SharePoint JavaScript to process the list, you can use the whole power of JavaScript, as well as any plugins such as jQuery.

# How to use the files
-  First Create your list based on the List.PNG image file. Then use the javascript files in the JSLinkDemo file for JSLink property of the webpart. 
- If you have any question you can reach out to me at tesfaye.gari@gmail.com or tgari@mtmconsultinggroup.com for any question 
# How to Deploy SharePoint AccoridonList
- Download the COB.SharePoint.AccordionList.wsp in the SharePoint.AccordionList 
- Go to your site setting -> Under Web Designer Galleries -> Solutions. Upload and Activate the solution.
- Once activated you will see Accordion List created in the site and you will also have List Template (Accordion List). 
- To use it in the subsites, go to your site settings -> Manage Site Feature -> Activate Accordion List feature 
-For any question you can contact me at tesfaye.gari@gmail.com or tgari@mtmconsultinggroup.com
