export declare class AudioController {
    uploadAudio(file: Express.Multer.File): {
        message: string;
        filename: string;
        size: number;
    };
}
