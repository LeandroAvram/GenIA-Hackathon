import { Controller, Post, Body } from '@nestjs/common';

@Controller('api')
export class ChatController {
  @Post('chat')
  async chat(@Body() body: { message: string }) {
    const { message } = body;
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const responses = [
      `Recibí tu mensaje: "${message}". ¡Hola desde NestJS!`,
      `Procesando tu consulta sobre: "${message}". NestJS funcionando correctamente.`,
      `Tu mensaje "${message}" fue recibido. Conexión exitosa con NestJS.`
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return { 
      response: randomResponse,
      timestamp: new Date().toISOString()
    };
  }
}