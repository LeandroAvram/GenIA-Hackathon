# AWS Bedrock Service (Python)

Servicio para integración con AWS Bedrock y modelos de IA.

## 🚀 Setup Rápido

### 1. Instalar dependencias
```bash
cd infrastructure/bedrock
pip install -r requirements.txt
```

### 2. Configurar variables de entorno
```bash
# Copiar archivo de ejemplo
copy .env.example .env

# Editar .env con tus credenciales AWS
```

### 3. Probar conexión
```bash
python test-bedrock.py
```

## 📁 Archivos

- `bedrock_service.py` - Servicio principal
- `test-bedrock.py` - Script de pruebas
- `.env.example` - Plantilla de configuración
- `requirements.txt` - Dependencias Python

## 🔧 Uso

```python
from bedrock_service import generate_response

response = generate_response("Tu pregunta aquí")
print(response)
```

## ⚠️ Importante

1. Nunca subas el archivo `.env` a Git
2. Asegúrate de tener los modelos habilitados en AWS Bedrock Console
3. Verifica que tus credenciales AWS tengan permisos para Bedrock