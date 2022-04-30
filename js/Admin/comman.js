
 function textboxMultilineMaxNumber(txt,maxLen)
 {
    try
    {
        if(txt.value.length > (maxLen-1))return false;
    }
    catch(e)
    {
    }
}

        function ShowPrivateDiv()
        {
                
            $('#DivForPrivate').show();
        }


        function HidePrivateDiv()
        {
            $('#ctl00_ContentPlaceHolder1_chkAssociate').attr('checked',false);
            $('#ctl00_ContentPlaceHolder1_chkRestaurant').attr('checked',false);
            $('#ctl00_ContentPlaceHolder1_chkHotel').attr('checked',false);
            $('#ctl00_ContentPlaceHolder1_chkAffiliate').attr('checked',false);
            $('#DivForPrivate').hide();
        }
        
        
        function HideCodeBehindePrivateDiv()
        {
            $('#DivForPrivate').hide();
        }