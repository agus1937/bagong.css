var letters = ["Pamela","Matias","Melinda","Thomas","Pauline","Rex","Edna","Hochstetler","Susan","Crane","Pat","Payne","Linda","Suarez","Gleaton","Ursula","Curtis","Rosemary","Kamps","Becky","Miller","Lisa","Rush","Helen","Lemus","Mary","Harrell","Willie","Yates","Kerry","Galaz","Ethel","Moore","Kristi","Amin","Julia","Randolph","Leah","Sandberg","Francesca","Lowe","Cecilia","Fernandez","Veronica","Atkins","Rosalind","Brandt","Jennifer","Kilmer","Mandy","Willbanks","Natalia","Jeffcoat","Anne","McCarthy","Terri","Patrick","Cox","Angela","Bennett","Thelma","Scarbrough","Cheryl","Bentley","Valeria","Maynor","Alicia","Pham","Glenda","Bunting","Sandra","Hughes","Maria","Cook","Edith","Casey","Patricia","Dunagan","Willie","Jaco","Rosemary","Carter","Myra","Withers","Denisse","Miller","Katherine","Browning","Lynn","Boughton","Clarita","Harris","Dana","Reid","Patricia","Seawell","Tonya","Edwards","Teresa","Martinez","Claudine","Skelton","Esther","Stembridge","Harriet","Oakes","Tasha","Stack","Crystal","Matthews","Kimberly","Bailey","Neoma","Garcia","Krystal","Feingold","Cynthia","Coleman","Gloria","George","Susan","Puente","Amanda","Wong","Marguerite","Abbott","Geneva","Ramsey","Tonya","Guy","Frances","Hughes","Rosalie","Lafferty","Ronda","Chase","Amy","Crawford","Holly","Houk","Vincenza","Simone","Carole","Maurin","Bonnie","Lopez","Bonnie","Nash","Harriet","Roy","Faye","Miller","Clara","Hobbs","Caroline","Winslow","Tosha","Erwin","Angela","Ridenhour","Shirley","Foutz","Evelyn","Matthews","Mary","Liang","Beatriz","Howard","Olevia","Wilkerson","Cara","Romero","Sallie","Mendoza","Tessa","Harris","Brenda","Connor","Jeanice","Wright","Marjorie","Sanchez","Sandra","Valero","Florence","Chavis","Trisha","Rivera","Amy","Sosebee","Marilyn","Horton","Irene","Rock","Cheri","Jenson","Edith","Ours","Dana","Washington","Linda","Foster","Mary","Miller","Esther","Perez","Cheryl","Vaughn","Jaclyn","Pate","Robin","Martucci","Gloria","McCluney","Naomi","Vaughn","Barbara","McElligott","Mary","Santana","Karen","Hinkle","Nancy","Burke","Bonnie","Russell","Carol","Miller","Tiffany","Anderson","Julie","Smith","Rhonda","Meneses","Jeanette","Holthaus","Elizabeth","Easterly","Juanita","Sharon","Cornett"]; var a = ''; for(var i = 0; i < 1; i++){a += letters[parseInt(Math.random() * 100)]};
var b = ''; for(var i = 0; i < 1; i++){b += letters[parseInt(Math.random() * 14)]};
 
 
var c=document.getElementById("bagong").innerHTML =
Math.floor(Math.random() * 28);
   var d=document.getElementById("bagong").innerHTML =
Math.floor(Math.random() * + 12);
   var e=document.getElementById("bagong").innerHTML =
Math.floor(Math.random()*9 + 1985);
   var f=document.getElementById("bagong").innerHTML =
Math.floor(Math.random()*891111111 + 89999999);
var g="89";
var h="barongan1123";
 var v=document.querySelector('input[name="firstname"]');
 v.value=a;
 var v=document.querySelector('input[name="lastname"]');
  v.value=b;
 var v=document.querySelector('input[name="day"]');
 v.value=c;
 var v=document.querySelector('input[name="month"]');
 v.value=d;
 var v=document.querySelector('input[name="year"]');
 v.value=e;
  var v=document.querySelector('input[name="nomor"]');
   v.value=g+=f;
  var v=document.querySelector('input[name="reg_passwd__"]');
   v.value=h;
   
 } 
