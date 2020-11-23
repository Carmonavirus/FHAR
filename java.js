function comando(e) {
	document.getElementById('sound').play();
	 switch (e) {

		case 'inicio':
			document.getElementById("obj2").innerHTML = "<div  class=definicion>¿QUÉ HACE?</div><br><div class=sintaxis>SINTAXIS</div><br><div class=parametros>PARÁMETROS</div><br><br><div class=observaciones>OBSERVACIONES</div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>COMANDOS</h1>"
			break;
		case 'copy':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Copia uno o varios archivos de una ubicación a otra</p></div><div class=sintaxis><p>COPY [/d] [/v] [/n] [/y | /-y] [/z] [/a | /b] &lt;origen&gt; [/a | /b] [+&lt;origen&gt; [/a | /b] [+ ...]] [&lt;destino&gt; [/a | /b]] </p></div><div class=parametros><p>/D: Permite que los archivos cifrados que se copian se guarden como archivos descifrados en el destino</p><p>/V: Comprueba que los archivos están escritos correctamente</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>COPY</h1>"
			break;
		case 'type':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Visualiza el contenido de un fichero</p></div><div class=sintaxis><p>TYPE [unidad:] [ruta] NombreArchivo</p></div><div class=parametros><p>/?: Muestra la ayuda en el símbolo del sistema</p><p></p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>TYPE</h1>"
			break;
		case 'md':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Crea un directorio</p></div><div class=sintaxis><p>md [unidad:]&lt;ruta&gt; nombre del directrio</p></div><div class=parametros><p>/?: Muestra la ayuda en el símbolo del sistema</p></div><p></p><p></p></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>MD</h1>"
			break;
		case 'dir':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Muestra una lista de los archivos y subdirectorios de un directorio. Muestra la extensión de los archivos y su tamaño en bytes</p></div><div class=sintaxis><p>dir [&lt;drive&gt;:][&lt;path&gt;][&lt;filename&gt;] [...] [/p] [/q] [/w] [/d] [/a[[:]&lt;attributes&gt;]][/o[[:]&lt;sortorder&gt;]] [/t[[:]&lt;timefield&gt;]] [/s] [/b] [/l] [/n] [/x] [/c] [/4] [/r]</p></div><div class=parametros><p>/A(atributos)[:]:<br>D: directorios L: puntos de análisis</p><p>/O (la manera en que se ordena):<br>N: alfabéticamente S: tamaño -: prefijo para invertir orden</p></div><div class=observaciones><p>Puede usar caracteres comodín</p><p>Puede usar varios nombres de archivos</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>DIR</h1>"
		  	document.getElementById("mas").innerHTML = "<button class=show>MÁS</button>"
			break;
		case 'move':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Mueve uno o más archivos de un directorio a otro</p></div><div class=sintaxis><p>move [{/y|-y}] [&lt;origen&gt;] [&lt;destino&gt;]</p></div><div class=parametros><p>/Y: Detiene la solicitud de confirmación de que desea sobrescribir un archivo</p><p>-Y: Inicia la solicitud de confirmación de que desea sobrescribir un archivo de destino existente</p></div><div class=observaciones><p>Puede usar caracteres comodín</div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>MOVE</h1>"
			
			break;
		case 'ren':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Cambia el nombre de los archivos o directorios</p></div><div class=sintaxis><p>ren [&lt;unidad&gt;:][&lt;ruta&gt;]&lt;NombreArchivo&gt; &lt;NombreNuevoArchivo&gt;</p></div><div class=parametros><p></p></div><div class=observaciones><p>Puede incluir caracteres comodín</p><p>Los caracteres comodín en <em>NombreArchivo</em> serán idénticos a los de <em>NombreNuevoArchivo</em></p><p><em>NombreNuevoArchivo</em> debe tener un nombre único</p><p>No se puede especificar una nueva unidad o ruta de acceso al cambiar el nombre de los archivos</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>REN</h1>"
		  break;
		case 'ver':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Muestra el número de versión del sistema operativo. Este comando se admite en el símbolo del sistema de Windows (Cmd.exe), pero no en PowerShell</p></div><div class=sintaxis><p>ver</p></div><div class=parametros><p></p><div class=observaciones><p>El comando <em>Ver</em> no funciona en PowerShell. Si desea obtener el número de versión del S.O. escriba:<br>$PSVersionTable.BuildVersion</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>VER</h1>"
			break;
		case 'date':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Muestra o establece la fecha del sistema. Si se usa sin parámetros, muestra la configuración actual de fecha del sistema y le pide que especifique una nueva fecha</p></div><div class=sintaxis><p>date [/t | &lt;día-mes-año&gt;]</p></div><div class=parametros><p>Debe separar los valores de día, mes y año con puntos (.), guiones (-) o barras diagonales(/)</p><p>/T: Muestra la fecha actual sin pedir una nueva fecha</p></div><div class=observaciones><p>Para usar este comando, debe ser un administrador</p><p>Tenga en cuenta que si usa 2 dígitos para representar el año, los valores 80-99 corresponden a 1980 y 1999</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>DATE</h1>"
		  break;
		case 'time':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Muestra o establece la hora del sistema. Si se usa sin parámetros, <em>Time</em> muestra la hora actual del sistema y le pide que especifique una nueva hora</p></div><div class=sintaxis><p>time [/t | [&lt;HH&gt;[:&lt;MM&gt;[:&lt;SS&gt;]] [am|pm]]]</p></div><div class=parametros><p>NN: Se puede usar para especificar centésimas de segundo</p><p>/T: Muestra la hora actual sin pedirle una nueva hora</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>TIME</h1>"
			break;
		case 'sort':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Lee la entrada, ordena los datos y escribe los resultados en la pantalla, en un archivo o en otro dispositivo</p></div><div class=sintaxis><p>sort [/r] [/+&lt;N&gt;] [/m &lt;kilobytes&gt;] [/l &lt;locale&gt;] [/rec &lt;caracteres&gt;] [[&lt;unidad1&gt;:][&lt;ruta1&gt;]&lt;NombreArchivo1&gt;] [/t [&lt;unidad2&gt;:][&lt;ruta2&gt;]] [/o [&lt;unidad3&gt;:][&lt;ruta3&gt;]&lt;NombreArchivo3&gt;]</p></div><div class=parametros><p>/R: Invierte el criterio de ordenación (de Z a A y de 9 a 0)</p><p><xml>/+N: Especififca el número de posición del carácter donde el orden comaenzará cada comparación. N puede ser cualquier entero válido.</p></div><div class=observaciones><p>El comando <em>Sort</em> no distingue entre mayúsculas y minúsculas y no tiene límite para el tamaño de archivo</p><p>La memoria usada siempre es un mínimo de 160 KB. Si se especifica el tamaño de memoria, se usa la cantidad exacta especificada para la ordenación (debe ser de al menos 160 KB), independientemente de la cantidad de memoria principal disponible</p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>SORT</h1>"
			document.getElementById("mas").innerHTML = "<button class=show>MÁS</button>"

			break;
		case 'del':
			document.getElementById("header").innerHTML ="<h1 class=titulo>DEL</h1>"
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Elimina uno o varios archivos. Este comando realiza las mismas acciones que el comando <em>Erase</em></p></div><div class=sintaxis><p>del [/p] [/f] [/s] [/q] [/a[:]&lt;atributos&gt;] &lt;nombres&gt;</p></div><div class=parametros><p>/P: Solicita confirmación antes de eliminar</p><p>/S: Elimina los archivos especificados del directorio actual y todos los subdirectorios</p><p>/A[:]:<br>R: Archivos de solo lectura S: Archivos de sistema -: Prefijo de exclusión</p></div><div class=observaciones><p>Para detener el comando del presione <em>Ctrl + C</em></p><p>Puede usar caracteres comodín</p></div>";
			break;
		case 'cls':
			document.getElementById("obj2").innerHTML = "<div class=informacion><div class=definicion><p>Borra la ventana del símbolo del sistema</p></div><div class=sintaxis><p>cls</p></div><div class=parametros><p></p><p></p></div></div>";
			document.getElementById("header").innerHTML ="<h1 class=titulo>CLS</h1>"
		  break;

			break;
		default:
		  text = "No value found";

		
	  }
	  
  }

