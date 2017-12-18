
function operation(user_chat_input)
	{
	//buddha text_line;
	//console.log(line.length);

	var WORDS = Object.keys(wordVecs);
	var set_of_search_words = "";
	
	//buddha user_message;
	var user_message = user_chat_input.toLowerCase();
	var user_message_remove_stopwords = user_message.removeStopWords().replace(/[^a-zA-Z 0-9]+/g,'');
	//console.log(user_message_remove_stopwords);
	
	
	var response_candidate ="";
	var NUM_TO_SHOW = 0;
	var user_words = user_message_remove_stopwords.split(" ");
	//add userwords to search words
	for (e=0; e< user_words.length; e++)
		{
	    set_of_search_words = set_of_search_words + user_words[e] +",";
	    } 
	    
	//control loop of search!
	for  (p = 0; p< 10; p++)
		{
		if ( response_candidate.length > 5){ break;}
		knowledge_search();
		NUM_TO_SHOW = NUM_TO_SHOW+2;
		}
		
	//console.log("response_candidate.length : " + response_candidate.length);
	//console.log("NUM_TO_SHOW : " + NUM_TO_SHOW);
	
//////////"BEGIN KNOWLEDGE_SEARCH"	
	function knowledge_search()
	{
		//split words
		for (var i = 0; i < user_words.length; i++) 
			{
    			var word = user_words[i]; 
				var simWords = Word2VecUtils.findSimilarWords(NUM_TO_SHOW, word);
				//console.log(simWords);
				for (z = 0; z < simWords.length; z++)
				{	
					//console.log("simWords : " + simWords);
					if (simWords[z][0] != null){
						if (simWords[z][0].length > 1){
						set_of_search_words = set_of_search_words + simWords[z][0] + ",";
						}
					}
				}
    	
		}
		//console.log("set_of_search_words ^^^ : " + set_of_search_words);
		//finish all set_of_search_words
		
	
		if (set_of_search_words.includes(","))
			{
			set_of_search_words = set_of_search_words.substring(0, set_of_search_words.length - 1);
			set_of_search_words = set_of_search_words.split(",");
			}
	
		//console.log("set_of_search_words : " + set_of_search_words);
	
		//search all lines
	
	
		for (a = 0; a < line.length; a++)
			{
			var input_sentence = line[a];
			//find frequency
			var total_count = 0;
		
    		for (y=0; y<set_of_search_words.length; y++)
    			{
    		
    			var search_result = input_sentence.includes(set_of_search_words[y]);
    				//console.log("||||||||| y:" + y +  "||||||||| search_result:" + search_result + " ||||||||| set_of_search_words : "+ set_of_search_words[y] +  " ||||||||| input_sentence : " + input_sentence);
    		
    			if (search_result == true)
    				{    			
    				y = set_of_search_words.length;
    				response_candidate = response_candidate+ a+",";
    				}
    			}
			}
			//console.log("END KNOWLEDGE_SEARCH");
		}
		
		//console.log("-----");
		//console.log(maximum_match);
		//console.log(maximum_line);
		//console.log(maximum_line_second);
		
		response_candidate = response_candidate.substring(0, response_candidate.length-1).split(",");
		//console.log(response_candidate);
		var random_response = Math.floor(Math.random() * (response_candidate.length));
		var final_response_num = response_candidate[random_response];
		var final_respone = line[final_response_num];
		//console.log(random_response);
		//console.log(final_response_num);
		//console.log(final_respone);
		
		//get first word
		//final_respone = checkFirstWord(final_respone);
		
		
		
		
		return final_respone;
		
	}



function countOcurrences(str, value){
   
return str.match(regExp) ? str.match(regExp).length : 0;  
}
