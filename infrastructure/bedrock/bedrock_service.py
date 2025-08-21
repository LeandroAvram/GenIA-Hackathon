import boto3
import json
import os
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

# Configurar cliente Bedrock
client = boto3.client(
    'bedrock-runtime',
    region_name=os.getenv('AWS_REGION', 'us-east-1'),
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)

def generate_response(user_message, context=''):
    """Generar respuesta usando AWS Bedrock"""
    try:
        prompt = f"Contexto: {context}\n\nUsuario: {user_message}\nAsistente:" if context else user_message
        
        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 500,
            "temperature": 0.7,
            "messages": [{
                "role": "user",
                "content": prompt
            }]
        })
        
        response = client.invoke_model(
            modelId=os.getenv('BEDROCK_MODEL_ID'),
            contentType='application/json',
            accept='application/json',
            body=body
        )
        
        response_body = json.loads(response['body'].read())
        return response_body['content'][0]['text']
        
    except Exception as e:
        print(f'Error calling Bedrock: {e}')
        raise Exception(f'Bedrock API Error: {str(e)}')

def test_connection():
    """Probar conexión con Bedrock"""
    try:
        response = generate_response("Hola, responde solo 'Conexión exitosa'")
        return {'success': True, 'response': response}
    except Exception as e:
        return {'success': False, 'error': str(e)}