from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential






def text_analysis(text):
	
	ta_credential = AzureKeyCredential("1413e89274b54804b15cd330c0d6a28a")
	client = TextAnalyticsClient(
        endpoint="https://hackcamp2020.cognitiveservices.azure.com/", 
        credential=ta_credential)
	
	response = client.analyze_sentiment(documents=text)[0]
	#print(response)
	#let index 0 = happy, index 1 = neutral, index 2 = sad
	return response.sentiment
		
		
print(text_analysis(["C'mon cuh, where are you going!"]))
