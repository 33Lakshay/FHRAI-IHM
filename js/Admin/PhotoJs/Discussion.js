
function CallSendMailToAllAdmin(_senderblock,text)
{
    
    if  (document.getElementById("txtSubject").value == "")
    {
        alert("Please fill subject title");
        document.getElementById("txtSubject").focus();
        return false;
    }  
    
    var uploadDocs = document.getElementById('<%= uploadDocs.ClientID %>');      
    alert(uploadDocs);                      
    var myfile = uploadDocs.value;  
    if(myfile.indexOf("jpg")>0 || myfile.indexOf("gif")>0 || myfile.indexOf("JPG")>0 || myfile.indexOf("jpeg")>0 || myfile.indexOf("JPEG")>0 || myfile.indexOf("PNG")>0 || myfile.indexOf("png")>0 || myfile.indexOf("GIF")>0 || myfile.indexOf("BMP")>0 || myfile.indexOf("bmp")>0)
    {
     return true;
    }
    else
    {
     alert('Please select Image.');
     return false;
    }     
}

function returnSendEmail(value)
{
    if(value=="Yes")
    { 
        alert("Email Sent Successfully !!!");
        return false;
    }
    else
    {
        alert("Error Occure While sent mail !!!");
        return false;
    }
}


//function loadDisscionForumId(id)
//{
//    //alert(id);
//    var xmlHttp;
//    try
//    {
//        // Firefox, Opera 8.0+, Safari
//        xmlHttp=new XMLHttpRequest();
//    }
//    catch (e)
//    {
//        // Internet Explorer
//        try
//        {
//            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
//        }
//        catch (e)
//        {
//            try
//            {
//                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
//            }
//            catch (e)
//            {
//                alert("Your browser does not support AJAX!");
//                return false;
//            }
//        }
//    }
//  xmlHttp.onreadystatechange=function()
//    {
//    if(xmlHttp.readyState==4)
//      {
//          //alert(xmlHttp.responseText); 
//          document.getElementById("discussFId").value=xmlHttp.responseText; 
//      }
//    }
//  xmlHttp.open("GET","D_GETDiscussionForumId.aspx?DFID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000),true);
//  xmlHttp.send(null);
//  }
  
// function loadDisscionForumId(id)
//{  
//    var url;
//    url="D_GETDiscussionForumId.aspx?DFID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
//    SendUrl(url,returnPostCommentreport)
//}

//function returnPostCommentreport(postcomment)
//{    if (postcomment==0)
//     {       
//        alert(1);
//        document.getElementById("divSaveData2").style.display='Block';
//        document.getElementById("divSaveData1").style.display='none';    
//     }
//     else
//     {
//        document.getElementById("discussFId").value=postcomment;
//        document.getElementById("divSaveData1").style.display='Block';
//        document.getElementById("divSaveData2").style.display='none';    
//     }
//}

function loadReplyStatus(_id)
{
    var url;
    url="D_GETDiscussionForumId.aspx?REPLYSTATUSID=" + _id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostReplyStatus) 
    //LblCommentId.Value
}

function returnPostReplyStatus(Replystatus)
{    if (Replystatus==0)
     { 
        document.getElementById("DivReplyComment").style.display='Block';
        document.getElementById("divSaveData2").style.display='Block';
        document.getElementById("divSaveData1").style.display='none';    
     }
     else
     {       
        document.getElementById("btnPostReply").value="Reply";      
        document.getElementById("hiddenReplyId").value="";
        document.getElementById("LblCommentId").value=Replystatus;
        document.getElementById("DivReplyComment").style.display='Block';
        document.getElementById("divSaveData1").style.display='Block';
        document.getElementById("divSaveData2").style.display='none';    
     }
}

 function loadDisscionForumDesc(id)
{  
    var url;
    url="../D_GETDiscussionForumId.aspx?DESCID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostDesc)
}


function returnPostDesc(description)
{    
    //document.getElementById("lblDescription").value=description;
    document.getElementById("lblDescription").innerHTML=description; 
}

function loadComments(id)
{    
    var url;
    document.getElementById("hiddenCommentId").value=id;
    url="D_GETDiscussionForumId.aspx?COMENTID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostcommentDesc)
}
function returnPostcommentDesc(description)
{    
    //document.getElementById("lblDescription").value=description;
    document.getElementById("txtContentbyUser1").innerHTML=description; 
    document.getElementById("BtnPostComment1").value="Update Comment";
}
function loadReplies(id)
{
    var url;     
    document.getElementById("hiddenReplyId").value=id;
    url="D_GETDiscussionForumId.aspx?REPLYID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostReplyDesc)
}
function returnPostReplyDesc(description)
{    
    //document.getElementById("lblDescription").value=description;
    document.getElementById("txtReplyforComment").innerHTML=description; 
    document.getElementById("btnPostReply").value="Update Reply";
    document.getElementById("DivReplyComment").style.display='Block';
    document.getElementById("divSaveData1").style.display='Block';
    document.getElementById("divSaveData2").style.display='none'; 
}

function loadToicofDissForum(id)
{
    var url;
    document.getElementById("TopicId").value=id;   
    url="../D_GETDiscussionForumId.aspx?TOPICID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostTopic)
}

function returnPostTopic(topictitle)
{     
    document.getElementById("TxtTopicTitle").value=topictitle; 
}

function loadDocIDfromAbuse(id)
{
    document.getElementById("lblDocIdForAbuse").value=id;     
}
function loadCOMMENTIDfromAbuse(id)
{
    document.getElementById("lblDocIdForAbuse").value=id;     
}
function loadCOMMENTIDfromAbuse1(id)
{
    document.getElementById("lblDocIdForAbuse1").value=id;     
}

function loadUsersDetails(id)
{
    var url;
    url="../D_GETDiscussionForumId.aspx?USERID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostUSerDetails)
}

function returnPostUSerDetails(details)
{
    document.getElementById("lblDisplayData").innerHTML=details; 
}

function loadNewsDetails(id)
{
    var url;
    url="../D_GETDiscussionForumId.aspx?NEWSID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostNewsDetails)
}
function returnPostNewsDetails(details)
{
    document.getElementById("lblDisplayData").innerHTML=details; 
}

function loadAdvertisementDetails(id)
{
    var url;
    url="../D_GETDiscussionForumId.aspx?ADVID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostAdvDetails)
}
function returnPostAdvDetails(details)
{
    document.getElementById("lblDisplayData").innerHTML=details; 
}

function loadEventDetails(id)
{
    var url;
    url="../D_GETDiscussionForumId.aspx?EVENTID=" + id + "&NUMBER=" + Math.floor(Math.random()*10000);
    SendUrl(url,returnPostEventDetails)
}
function returnPostEventDetails(details)
{
    document.getElementById("lblDisplayData").innerHTML=details; 
}
function loadCommentId(_id)
{
    
}

function SendUrl(url,returnFunction)
{ 
    var xmlHttp;
    try
      {
      // Firefox, Opera 8.0+, Safari
      xmlHttp=new XMLHttpRequest();
      }
    catch (e)
      {
      // Internet Explorer
      try
        {
        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
      catch (e)
        {
        try
          {
          xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        catch (e)
          {
          alert("Your browser does not support AJAX!");
          return false;
          }
        }
      }
      xmlHttp.onreadystatechange=function()
        {
        if(xmlHttp.readyState==4)
          {                     
          
            var returnValue=xmlHttp.responseText;             
            returnFunction(returnValue);
          }
        }
      xmlHttp.open("GET",url,true);
      xmlHttp.send(null);
}
  
  
  function loadAllComments(id)
{
    //alert(id);
    var xmlHttp;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
  xmlHttp.onreadystatechange=function()
    {
    if(xmlHttp.readyState==4)
      {
//          alert(xmlHttp.responseText); 
          document.getElementById("lblCommentDetail").innerHTML=xmlHttp.responseText; 
      }
    }
  xmlHttp.open("GET","D_GETDiscussionForumId.aspx?DFIDForComments=" + id + "&NUMBER=" + Math.floor(Math.random()*10000),true);
  xmlHttp.send(null);
  }
  
 function ViewDivCommentList(id)
{
    //alert(id);
    var xmlHttp;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
  xmlHttp.onreadystatechange=function()
    {
    if(xmlHttp.readyState==4)
      {
//          alert(xmlHttp.responseText); 
          document.getElementById("lblReplyDetail").innerHTML=xmlHttp.responseText; 
          document.getElementById("dviReplyDetail").style.display="block";
      }
    }
  xmlHttp.open("GET","D_GETDiscussionForumId.aspx?CIDForReplyList=" + id + "&NUMBER=" + Math.floor(Math.random()*10000),true);
  xmlHttp.send(null);
  }
 
 function ViewDivCommentReply(id)
{
   
    var xmlHttp;
    try
    {
        // Firefox, Opera 8.0+, Safari
        xmlHttp=new XMLHttpRequest();
    }
    catch (e)
    {
        // Internet Explorer
        try
        {
            xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e)
            {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }
  xmlHttp.onreadystatechange=function()
    {
    if(xmlHttp.readyState==4)
      {
//          alert(xmlHttp.responseText); 
          document.getElementById("lbldocid1").value=xmlHttp.responseText; 
          document.getElementById("DivReplyComment").style.display="block";
      }
    }
  xmlHttp.open("GET","D_GETDiscussionForumId.aspx?CIDForReply=" + id + "&NUMBER=" + Math.floor(Math.random()*10000),true);
  xmlHttp.send(null);
  }
  
    function openwindowforsentemail(mydiv1,mydiv2,mydropdown)
    {
        document.getElementById(mydropdown).value="All";
        document.getElementById(mydiv1).style.display ="block"; 
        document.getElementById(mydiv2).style.display ="none"; 
        return false;
    }