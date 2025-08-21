export declare class ChatController {
    chat(body: {
        message: string;
    }): Promise<{
        response: string;
        timestamp: string;
    }>;
}
