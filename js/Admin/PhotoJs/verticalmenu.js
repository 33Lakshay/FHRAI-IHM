// JavaScript Document
function VerticalMenu()
{
var	sublink='';
sublink="<div id='smoothmenu2' class='ddsmoothmenu-v'>";
sublink+="<ul>";
sublink+="<li><a href='Index.htm' class='selected' id='Chhome'><span class='spanline'>|</span>Home</a></li>";

sublink+="<li><a href='CH_About_Us.htm' class='selected' id='Chabtus'><span class='spanline'>|</span>About Us</a>";
sublink+="<ul><li><a href='CH_AboutUs_History.htm'>History</a></li>";
sublink+="<li><a href='ch_aboutus_today.htm'>Creative Handicrafts Today</a></li>";
sublink+="<li><a href='ch_aboutus_ogram.htm'>Organogram</a></li>";
sublink+="<li><a href='ch_aboutus_trustees.htm'>Board of Trustees</a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Projects.htm' class='selected' id='Chprojct'><span class='spanline'>|</span>Our Projects</a>";
sublink+="<ul><li><a href='CH_projects_Economic.htm'>Economic Development</a></li>";
sublink+="<li><a href='ch_projects_capacity.htm'>Capacity building</a></li>";
sublink+="<li><a href='ch_projects_community.htm'>Community Development</a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Products.htm' class='selected' id='Chproduct'><span class='spanline'>|</span>Our Products</a></li>";
sublink+="<li><a href='CH_Partners.htm' class='selected' id='Chpartner'><span class='spanline'>|</span>Partners</a></li>";
sublink+="<li><a href='CH_Collaborate.htm' class='selected' id='Chcolla'><span class='spanline'>|</span>Collaborate</a></li>";
sublink+="<li><a href='CH_Testimonials.htm' class='selected' id='Chtesti'><span class='spanline'>|</span>Testimonies</a></li>";
sublink+="<li><a href='CH_Archives.htm' class='selected' id='Charchie'><span class='spanline'>|</span>Archives</a></li>";

sublink+="<li><a href='ch_gallery.htm' class='selected' id='Chevent'><span class='spanline'>|</span>Events</a>";
sublink+="<ul><li><a href='CH_Gallery.htm'>Children Day</a></li>";
sublink+="<li><a href='ch_gallerychildcompitation.htm'>Children Competition</a></li>";
sublink+="<li><a href='ch_galleryfirststone.htm'>First Stone</a></li>";
sublink+="<li><a href='ch_galleryesperanzavisit.htm'>Madrid Visit</a></li>";
sublink+="<li><a href='CH_GalleryConference.htm'>Conference</a></li>";
sublink+="<li><a href='CH_GalleryInaguration_Cultural.htm'>Inauguration & Cultural Programme</a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Contact_Us.htm' class='selected' id='ChContact'><span class='spanline'>|</span>Contact Us</a></li>";
sublink+="</ul>";
sublink+="<br style='clear: left' />";
sublink+="</div>";
document.getElementById("Vertical_ID").innerHTML=sublink;
}


function VerticalMenuFrench()
{
var	sublink='';
sublink="<div id='smoothmenu2' class='ddsmoothmenu-v'>";
sublink+="<ul>";
sublink+="<li><a href='Index_French.aspx' class='selected' id='Chhome'><span class='spanline'>|</span>Accueil</a></li>";

sublink+="<li><a href='CH_About_Us_French.aspx' class='selected' id='Chabtus1'><span class='spanline'>|</span>A propos <br/>de Nous </a>";
sublink+="<ul><li><a href='CH_AboutUs_History_French.aspx'>Histoire</a></li>";
sublink+="<li><a href='CH_AboutUs_Today_French.aspx'>Creative Handicrafts<br/> aujourd&rsquo;hui </a></li>";
//sublink+="<li><a href='ch_aboutus_ogram.htm'>Organogram</a></li>";
//sublink+="<li><a href='ch_aboutus_trustees.htm'>Board of Trustees</a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Projects_French.aspx' class='selected' id='Chprojct'><span class='spanline'>|</span>Nos projets </a>";
sublink+="<ul><li><a href='CH_Projects_Economic_French.aspx'>D&eacute;veloppement &eacute;conomique  </a></li>";
sublink+="<li><a href='CH_Projects_Capacity_French.aspx'>Renforcement de capacit&eacute;s</a></li>";
sublink+="<li><a href='CH_Projects_Community_French.aspx'>D&eacute;veloppement<br/> communautaire </a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Products_French.aspx' class='selected' id='Chproduct'><span class='spanline'>|</span>Nos produits </a></li>";
sublink+="<li><a href='CH_Partners_French.aspx' class='selected' id='Chpartner'><span class='spanline'>|</span>Nos partenaires </a></li>";
sublink+="<li><a href='CH_Collaborate_French.aspx' class='selected' id='Chcolla'><span class='spanline'>|</span>Nous soutenir </a></li>";
sublink+="<li><a href='CH_Testimonials_French.aspx' class='selected' id='Chtesti'><span class='spanline'>|</span>T&eacute;moignages </a></li>";
sublink+="<li><a href='#' class='selected' id='Charchie'><span class='spanline'>|</span>Archives</a></li>";

sublink+="<li><a href='CH_GalleryFrench.htm' class='selected' id='Chevent'><span class='spanline'>|</span>Ev&eacute;nements</a>";
sublink+="<ul><li><a href='CH_GalleryFrench.htm'>Le jour des enfants</a></li>";
sublink+="<li><a href='CH_GalleryChildCom.htm'>Les comp&eacute;titions des enfants</a></li>";
sublink+="<li><a href='CH_GalleryStone.htm'>Premi&egrave;re pierre du nouveau b&acirc;timent</a></li>";
sublink+="<li><a href='CH_GalleryEsperanza.htm'>Visite d&rsquo;Esperanza Aguirre</a></li>";
sublink+="<li><a href='CH_GalleryConf.htm'>Conf&eacute;rence</a></li>";
sublink+="<li><a href='CH_GalleryInaguration.htm'>Inauguration et programme culturel</a></li>";
sublink+="</ul></li>";

sublink+="<li><a href='CH_Contact_Us_French.aspx' class='selected' id='ChContact'><span class='spanline'>|</span>Contactez-nous </a></li>";
sublink+="</ul>";
sublink+="<br style='clear: left' />";
sublink+="</div>";
document.getElementById("Vertical_ID").innerHTML=sublink;
}