import webview
import paho.mqtt.client as mqtt
from mqtt_subs import MQ_subs
import time
#from speak_light import say


#say("lights have been turned off ")
host = "127.0.0.1"
#html =  "/home/jatin/Downloads/HA/index.html"
html = "./IoT/HA/Dashboard/index.html"

client = mqtt.Client("P1")  # create new instance
client.connect(host)

# function to  publish at mqtt topic Mqtt_publish(topic,message)


# function to  publish at MQTT topic MQTT_publish(topic,message)
def MQTT_publish(topic, message):
    client.connect(host)
    client.publish(topic, message)
    client.disconnect()


mbsensor = MQ_subs(topic="mbsensor")
drsensor = MQ_subs(topic="drsensor")
jrsensor = MQ_subs(topic="jrsensor")
mrsensor = MQ_subs(topic="mrsensor")



class Api:

	def __init__(self):
		self.cancel_heavy_stuff_flag = False

	def lock(self, params):
		print(str(params))
		# function to  publish at MQTT topic MQTT_publish(topic,message)
		MQTT_publish("lock", params)

	def mb(self, params):
		print(str(params))
		# function to  publish at MQTT topic MQTT_publish(topic,message)
		MQTT_publish("mb", params)

	def mbsensor(self):
		response = {
            'message': '{0}'.format(mbsensor.message)
        }
		return response

	def drsensor(self):
		response = {
            'message': '{0}'.format(drsensor.message)
        }
		return response

	def jrsensor(self):
		response = {
            'message': '{0}'.format(jrsensor.message)
        }
		return response

	def mrsensor(self):
		response = {
            'message': '{0}'.format(mrsensor.message)
        }
		return response

	def dr(self, params):
		print(str(params))
		# function to  publish at MQTT topic MQTT_publish(topic,message)
		MQTT_publish("dr", params)

	def jr(self, params):
		print(str(params))
		# function to  publish at MQTT topic MQTT_publish(topic,message)
		MQTT_publish("jr", params)

	def mr(self, params):
		print(str(params))
		# function to  publish at mqtt topic Mqtt_publish(topic,message)
		MQTT_publish("mr", params)


api = Api()
window = webview.create_window(
    'API example', html, fullscreen=True, js_api=api)
webview.start(debug=True)
