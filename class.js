function nextPage(){
	var opened = window.open("");
	opened.document.write("<html><head><title>My title</title></head><body>test</body></html>");
	var i1 = document.createElement("iframe");
			var i2 = document.createElement("iframe");
			var x = document.getElementById("input");
			i1.src = "https://www.jcrew.com/search2/index.jsp?N=0&Nloc=&Ntrm=" + x.value + "&Npge=1&Nsrt=0";
			//i1.width = "45%";
			asdfasdfasdf
			i1.height = 500;
			document.getElementById("d1").appendChild(i1);
			i2.src = "https://www.theory.com/search/?q=" + x.value +"&lang=default";
			i2.width = "45%";
			i2.height = "100%";
			document.getElementById("d2").appendChild(i2);
	}

