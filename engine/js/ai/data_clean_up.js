var line;
var remove_words = ["And", "But", "Or", "Thus"];

jQuery.get('../engine/data/buddha.txt', function(data) {
    var text = data
   // console.log(text);
   
   line = text.split('.');
   for (x = 0; x< line.length; x++)
   		{
   			//line[x] = line[x].replace(/[^a-zA-Z 0-9]+/g,' ');
   	
   			//remove the beginner 
   			
   			line[x] = line[x].split(' ');
   			for(y = 0; y < line[x].length ; y++ )
   				///////////////////////////////////////////
   				{
   					if (/^[a-zA-Z]+$/.test(line[x][y]))
   						{
   				
   						line[x] = line[x].slice(y, line[x].length);
   						for (z= 0; z< remove_words.length; z++)
   							{
   								if (line[x][0] == remove_words[z])
   								{
   								line[x] = line[x].slice(1, line[x].length);
   								} 
   							}
   						
   						line[x] = line[x].join(" ");
   						line[x] = line[x].capitalize();
   						//console.log(line[x]);
   						//console.log(y);
   						break; 
   						}
   				
   				}
   				
   				///////////////////////////////////////////

   		}
   
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

