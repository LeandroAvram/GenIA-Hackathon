"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let AudioController = class AudioController {
    uploadAudio(file) {
        if (!file) {
            throw new common_1.BadRequestException('No se recibió archivo de audio');
        }
        console.log('Audio recibido:', file.filename);
        console.log('Tamaño:', file.size, 'bytes');
        return {
            message: 'Audio guardado exitosamente',
            filename: file.filename,
            size: file.size
        };
    }
};
exports.AudioController = AudioController;
__decorate([
    (0, common_1.Post)('audio'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('audio', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const timestamp = Date.now();
                cb(null, `audio_${timestamp}.wav`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AudioController.prototype, "uploadAudio", null);
exports.AudioController = AudioController = __decorate([
    (0, common_1.Controller)('api')
], AudioController);
//# sourceMappingURL=audio.controller.js.map