from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential






def text_analysis(text):
	
	ta_credential = AzureKeyCredential("1413e89274b54804b15cd330c0d6a28a")
	client = TextAnalyticsClient(
        endpoint="https://hackcamp2020.cognitiveservices.azure.com/", 
        credential=ta_credential)
	
	response = client.analyze_sentiment(documents=text, show_opinion_mining=True)[0]
	returnList = [response.sentiment]
	sentences = response.sentences
	sentenceLength = len(sentences)
	
	for i in range(sentenceLength):
		if len(sentences[i].mined_opinions) > 0:
			retTuple = (sentences[i].mined_opinions[0].aspect.text, sentences[i].mined_opinions[0].opinions[0].sentiment)
			returnList.append(retTuple)
			retTuple = (sentences[i].mined_opinions[0].opinions[0].text, sentences[i].mined_opinions[0].aspect.sentiment)
			returnList.append(retTuple)


		
	return returnList
	
		
		

print(text_analysis(["The restaurant had bad food and our waiter was friendly"]))

print(text_analysis(["hello"]))
print(text_analysis(["hello its me Ive been wondering"]))
print(text_analysis(["The food and service were unacceptable, but the concierge were nice"]))
print(text_analysis(["The ball was so crazy but it was a very sad day"]))
print(text_analysis(["The school was very good but the teachers were very bad."]))
