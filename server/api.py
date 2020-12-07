from flask import Flask, jsonify, json, request
from language import text_analysis

app = Flask(__name__)


@app.route('/textAnalysis', methods=['POST'])
def emotionInLanguage():
    if request.method == 'POST':
        text = request.form['text']
        textList = [text]
        analysis = text_analysis(textList)
        return jsonify(analysis)


if __name__ == '__main__':
    app.run()
