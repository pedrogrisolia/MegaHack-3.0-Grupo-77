from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
from utils import fetch_reply

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/sms", methods=['POST'])
def sms_reply():
    # Responde a mensagem recebida"
    # Pega o conteúdo da mensagem e o numero de quem enviou
    msg = request.form.get('Body')
    phone_no = request.form.get('From')
    reply = fetch_reply(msg,phone_no)
    # Cria resposta
    resp = MessagingResponse()
    resp.message(reply)

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)
    